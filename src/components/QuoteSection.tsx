import { useEffect, useRef } from "react";
import "./styles/QuoteSection.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// "Building better every line at a time."
// Last word "time." gets the rainbow gradient treatment
const QUOTE_LABEL = "MY APPROACH";
const QUOTE_PLAIN = "Building better every line at a";
const QUOTE_GRADIENT_WORD = "time.";

const QuoteSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef   = useRef<HTMLParagraphElement>(null);
  const quoteRef   = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      labelRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    ).fromTo(
      quoteRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      "-=0.3"
    );

    return () => { tl.kill(); };
  }, []);

  return (
    <section className="quote-section" ref={sectionRef}>
      <p className="quote-label" ref={labelRef}>{QUOTE_LABEL}</p>
      <h2 className="quote-text" ref={quoteRef}>
        {QUOTE_PLAIN}&nbsp;
        <span className="quote-gradient">{QUOTE_GRADIENT_WORD}</span>
      </h2>
    </section>
  );
};

export default QuoteSection;
