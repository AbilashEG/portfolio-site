import gsap from "gsap";
import { lenis } from "../Navbar";

/**
 * Called once the loading screen completes.
 * Starts Lenis, fades in persistent UI, and triggers landing animations.
 * Landing text (name, hi, cycling word, tagline) is animated by Landing.tsx itself.
 */
export function initialFX() {
  document.body.style.overflowY = "auto";

  if (lenis) {
    lenis.start();
  }

  const mainEl = document.getElementsByTagName("main")[0];
  if (mainEl) {
    mainEl.classList.add("main-active");
  }

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 0.5,
  });

  // Fade in navbar, social icons, nav-fade overlay
  gsap.fromTo(
    [".navbar-pill", ".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
