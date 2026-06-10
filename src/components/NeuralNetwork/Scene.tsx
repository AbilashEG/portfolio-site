import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  buildNodes,
  buildConnections,
  flattenNodes,
  LAYER_SIZES,
  type NodeMesh,
} from "./neuralUtils";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { setNeuralTimeline, setAllTimeline } from "../utils/GsapScroll";
import "./NeuralNetwork.css";

gsap.registerPlugin(ScrollTrigger);

const NeuralNetworkScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const { setLoading } = useLoading();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── Renderer ────────────────────────────────────────────────────────────
    const rect = container.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    container.appendChild(renderer.domElement);

    // ── Scene & Camera ───────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 14);

    // ── Post-processing: Bloom ───────────────────────────────────────────────
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(W, H),
      0.8,   // strength
      0.4,   // radius
      0.1    // threshold
    );
    composer.addPass(bloomPass);
    composer.addPass(new OutputPass());

    // ── Build neural network ─────────────────────────────────────────────────
    const { nodes: nestedNodes, group: nodeGroup } = buildNodes(LAYER_SIZES);
    const allNodes: NodeMesh[] = flattenNodes(nestedNodes);
    const { lines, group: lineGroup } = buildConnections(allNodes);

    const networkGroup = new THREE.Group();
    networkGroup.add(lineGroup);
    networkGroup.add(nodeGroup);
    // Slight initial Y-axis tilt so it looks 3D from the start
    networkGroup.rotation.y = 0.3;
    scene.add(networkGroup);

    // ── Fade-in nodes layer by layer ─────────────────────────────────────────
    const progress = setProgress((v) => setLoading(v));

    const fadeInNetwork = () => {
      // Fade in connections first (subtle)
      lines.forEach((line) => {
        const mat = line.material as THREE.LineBasicMaterial;
        gsap.to(mat, {
          opacity: 0.08,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
        });
      });

      // Fade in each layer staggered
      LAYER_SIZES.forEach((_, layerIdx) => {
        const layerNodes = allNodes.filter(
          (n) => n.userData.layerIndex === layerIdx
        );
        layerNodes.forEach((node) => {
          const mat = node.material as THREE.MeshStandardMaterial;
          gsap.to(mat, {
            opacity: 1,
            emissiveIntensity: 0.4,
            duration: 0.6,
            delay: 0.3 + layerIdx * 0.18,
            ease: "power3.out",
          });
        });
      });

      // Set up all GSAP scroll timelines (sections + neural network scroll)
      setNeuralTimeline();
      setAllTimeline();
    };

    progress.loaded().then(() => {
      setTimeout(fadeInNetwork, 2500);
    });

    // ── Mouse / touch tracking ───────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const target = { x: 0.3, y: 0 }; // start slightly rotated

    const isMobile = window.innerWidth <= 768;

    const onMouseMove = (e: MouseEvent) => {
      if (window.scrollY > 200) return;
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (window.scrollY > 200) return;
      mouse.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
    };

    if (!isMobile) {
      document.addEventListener("mousemove", onMouseMove);
    } else {
      document.addEventListener("touchmove", onTouchMove, { passive: true });
    }

    // ── Resize ───────────────────────────────────────────────────────────────
    const onResize = () => {
      if (!container) return;
      const r = container.getBoundingClientRect();
      camera.aspect = r.width / r.height;
      camera.updateProjectionMatrix();
      renderer.setSize(r.width, r.height);
      composer.setSize(r.width, r.height);
    };
    window.addEventListener("resize", onResize);

    // ── Animation clock ──────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let mobileAutoAngle = 0;

    const MAX_ROT_Y = (25 * Math.PI) / 180;
    const MAX_ROT_X = (15 * Math.PI) / 180;
    const LERP = 0.04;

    const animate = () => {
      rafRef.current = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // ── Mobile auto-rotate ──────────────────────────────────────────────
      if (isMobile) {
        mobileAutoAngle += 0.004;
        target.x = Math.sin(mobileAutoAngle) * 0.4;
        target.y = Math.sin(mobileAutoAngle * 0.6) * 0.15;
      } else {
        target.x = mouse.x * MAX_ROT_Y;
        target.y = mouse.y * MAX_ROT_X;
      }

      // Lerp network rotation toward target
      networkGroup.rotation.y +=
        (0.3 + target.x - networkGroup.rotation.y) * LERP;
      networkGroup.rotation.x +=
        (target.y - networkGroup.rotation.x) * LERP;

      // ── Pulse nodes (random firing) ─────────────────────────────────────
      allNodes.forEach((node) => {
        const mat = node.material as THREE.MeshStandardMaterial;
        if (mat.opacity < 0.5) return; // skip if not yet visible

        const base = node.userData.baseEmissiveIntensity as number;
        const phase = node.userData.pulsePhase as number;
        // Each node oscillates at slightly different frequency
        const layerFreq = 0.4 + node.userData.layerIndex * 0.15;
        const pulse =
          0.5 +
          0.5 *
            Math.sin(t * layerFreq * 1.8 + phase) *
            Math.sin(t * 0.7 + phase * 0.5);
        mat.emissiveIntensity = base + pulse * 1.4;
      });

      // ── Pulse connection lines in waves left → right ─────────────────────
      lines.forEach((line) => {
        const mat = line.material as THREE.LineBasicMaterial;
        if (mat.opacity < 0.04) return; // skip during fade-in

        const { fromLayer, pulseOffset, pulseSpeed } = line.userData;
        // Wave travels from layer 0 → last layer
        const layerPhase = fromLayer * 0.55;
        const wave =
          0.5 +
          0.5 *
            Math.sin(t * pulseSpeed + layerPhase + pulseOffset);
        // opacity range: 0.05 → 0.55
        mat.opacity = 0.05 + wave * 0.5;
      });

      composer.render();
    };

    animate();

    // ── Cleanup ──────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      scene.clear();
      composer.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="neural-network-model" ref={containerRef} />
  );
};

export default NeuralNetworkScene;
