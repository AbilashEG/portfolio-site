import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import {
  HiHome,
  HiUser,
  HiCode,
  HiBriefcase,
  HiMail,
  HiChevronDown,
  HiMenu,
  HiX,
} from "react-icons/hi";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const NAV_LINKS = [
  { label: "Home",    icon: HiHome,      href: "#landingDiv", dropdown: false },
  { label: "About",   icon: HiUser,      href: "#about",      dropdown: true  },
  { label: "Skills",  icon: HiCode,      href: "#skills",     dropdown: false },
  { label: "Work",    icon: HiBriefcase, href: "#work",       dropdown: false },
  { label: "Contact", icon: HiMail,      href: "#contact",    dropdown: false },
];

const Navbar = () => {
  const [active, setActive]       = useState("Home");
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    // ── Lenis smooth scroll ───────────────────────────────────────────────
    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    window.addEventListener("resize", () => lenis?.resize());
    return () => { lenis?.destroy(); };
  }, []);

  const scrollTo = (href: string, label: string) => {
    setActive(label);
    setMenuOpen(false);
    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { offset: 0, duration: 1.5 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Pill navbar ──────────────────────────────────────────────────── */}
      <nav className="navbar-pill" aria-label="Main navigation">
        <ul className="navbar-list">
          {NAV_LINKS.map(({ label, icon: Icon, href, dropdown }) => (
            <li key={label}>
              <button
                className={`navbar-link ${active === label ? "navbar-link--active" : ""}`}
                onClick={() => scrollTo(href, label)}
                aria-label={label}
              >
                <Icon className="navbar-icon" />
                <span>{label}</span>
                {dropdown && <HiChevronDown className="navbar-chevron" />}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Mobile hamburger ─────────────────────────────────────────────── */}
      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* ── Mobile drawer ────────────────────────────────────────────────── */}
      {menuOpen && (
        <div className="navbar-drawer">
          {NAV_LINKS.map(({ label, icon: Icon, href }) => (
            <button
              key={label}
              className={`navbar-drawer-link ${active === label ? "navbar-drawer-link--active" : ""}`}
              onClick={() => scrollTo(href, label)}
            >
              <Icon className="navbar-icon" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}

      {/* ── Ambient orbs + nav fade (owned by Navbar for historical reasons) */}
      <div className="landing-circle1" aria-hidden="true" />
      <div className="landing-circle2" aria-hidden="true" />
      <div className="nav-fade"        aria-hidden="true" />
    </>
  );
};

export default Navbar;
