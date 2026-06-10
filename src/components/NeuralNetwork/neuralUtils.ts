import * as THREE from "three";

// ─── Constants ───────────────────────────────────────────────────────────────
export const LAYER_SIZES = [4, 6, 8, 6, 8, 4];
export const NODE_COLOR = 0x00f5ff;    // cyan
export const NODE_EMISSIVE = 0x003a4a; // dark-cyan base emissive
export const LINE_COLOR = 0x00f5ff;
export const LAYER_SPACING = 1.8;      // horizontal gap between layers
export const NODE_SPACING = 1.1;       // vertical gap between nodes in a layer
export const NODE_RADIUS = 0.13;

// ─── Types ───────────────────────────────────────────────────────────────────
export interface NodeMesh extends THREE.Mesh {
  userData: {
    layerIndex: number;
    nodeIndex: number;
    baseEmissiveIntensity: number;
    pulsePhase: number;
  };
}

export interface ConnectionLine extends THREE.Line {
  userData: {
    fromLayer: number;
    pulseOffset: number;
    pulseSpeed: number;
  };
}

// ─── Build node geometry ─────────────────────────────────────────────────────
export function buildNodes(layerSizes: number[]): {
  nodes: NodeMesh[][];
  group: THREE.Group;
} {
  const group = new THREE.Group();
  const nodes: NodeMesh[][] = [];

  const totalWidth = (layerSizes.length - 1) * LAYER_SPACING;

  layerSizes.forEach((count, layerIdx) => {
    const layerNodes: NodeMesh[] = [];
    const totalHeight = (count - 1) * NODE_SPACING;
    const xPos = layerIdx * LAYER_SPACING - totalWidth / 2;

    for (let nodeIdx = 0; nodeIdx < count; nodeIdx++) {
      const yPos = nodeIdx * NODE_SPACING - totalHeight / 2;

      const geo = new THREE.SphereGeometry(NODE_RADIUS, 16, 16);
      const mat = new THREE.MeshStandardMaterial({
        color: NODE_COLOR,
        emissive: NODE_COLOR,
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.1,
        transparent: true,
        opacity: 0,   // starts invisible, fades in
      });

      const mesh = new THREE.Mesh(geo, mat) as NodeMesh;
      mesh.position.set(xPos, yPos, 0);
      mesh.userData = {
        layerIndex: layerIdx,
        nodeIndex: nodeIdx,
        baseEmissiveIntensity: 0.4,
        pulsePhase: Math.random() * Math.PI * 2,
      };

      layerNodes.push(mesh);
      group.add(mesh);
    }

    nodes.push(layerNodes);
  });

  return { nodes, group };
}

// ─── Build connection lines ───────────────────────────────────────────────────
export function buildConnections(nodes: NodeMesh[]): {
  lines: ConnectionLine[];
  group: THREE.Group;
} {
  const group = new THREE.Group();
  const lines: ConnectionLine[] = [];

  // We'll rebuild per-pair with a shared geometry per adjacent-layer pair
  for (let li = 0; li < LAYER_SIZES.length - 1; li++) {
    const fromLayer = nodes.filter((n) => n.userData.layerIndex === li);
    const toLayer = nodes.filter((n) => n.userData.layerIndex === li + 1);

    fromLayer.forEach((fromNode) => {
      toLayer.forEach((toNode) => {
        const points = [fromNode.position.clone(), toNode.position.clone()];
        const geo = new THREE.BufferGeometry().setFromPoints(points);
        const mat = new THREE.LineBasicMaterial({
          color: LINE_COLOR,
          transparent: true,
          opacity: 0.08,
        });

        const line = new THREE.Line(geo, mat) as ConnectionLine;
        line.userData = {
          fromLayer: li,
          pulseOffset: Math.random() * Math.PI * 2,
          pulseSpeed: 0.5 + Math.random() * 0.8,
        };

        lines.push(line);
        group.add(line);
      });
    });
  }

  return { lines, group };
}

// ─── Flat helper ─────────────────────────────────────────────────────────────
export function flattenNodes(nested: NodeMesh[][]): NodeMesh[] {
  return nested.flat();
}
