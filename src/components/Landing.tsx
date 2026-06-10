import { useEffect, useRef } from "react";
import "./styles/Landing.css";
import gsap from "gsap";

const WORDS = ["Agentic.", "Scalable.", "Autonomous."];

const Landing = () => {
  const line1Ref  = useRef<HTMLParagraphElement>(null);
  const line2Ref  = useRef<HTMLParagraphElement>(null);
  const line3Ref  = useRef<HTMLParagraphElement>(null);
  const wordRef   = useRef<HTMLDivElement>(null);
  const line5Ref  = useRef<HTMLParagraphElement>(null);
  const indexRef  = useRef(0);

  useEffect(() => {
    const wordEl = wordRef.current;
    if (!wordEl) return;

    // Line 1
    gsap.fromTo(line1Ref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.2 }
    );

    // Line 2
    gsap.fromTo(line2Ref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.4 }
    );

    // Line 3
    gsap.fromTo(line3Ref.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.6 }
    );

    // Cycling word — entrance
    wordEl.textContent = WORDS[0];
    gsap.fromTo(wordEl,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.8 }
    );

    // Line 5
    gsap.fromTo(line5Ref.current,
      { opacity: 0, y: 20 },
      { opacity: 0.7, y: 0, duration: 0.7, ease: "power2.out", delay: 1.2 }
    );

    // Cycling loop
    let timeout: ReturnType<typeof setTimeout>;

    const cycle = () => {
      const next = (indexRef.current + 1) % WORDS.length;

      gsap.to(wordEl, {
        y: "-110%",
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          indexRef.current = next;
          wordEl.textContent = WORDS[next];
          gsap.fromTo(wordEl,
            { y: "110%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 0.45,
              ease: "power2.out",
              onComplete: () => { timeout = setTimeout(cycle, 2000); },
            }
          );
        },
      });
    };

    timeout = setTimeout(cycle, 2000);

    return () => {
      clearTimeout(timeout);
      gsap.killTweensOf(wordEl);
    };
  }, []);

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">

        <div className="landing-stack">
          {/* Line 1 */}
          <p className="landing-line1" ref={line1Ref}>
            Hi, I'm Abilash EG
          </p>

          {/* Line 2 */}
          <p className="landing-line2" ref={line2Ref}>
            A Data &amp; AI Engineer
          </p>

          {/* Line 3 */}
          <p className="landing-line3" ref={line3Ref}>
            Building Intelligent, Cloud-Powered Solutions
          </p>

          {/* Line 4 — cycling word */}
          <div className="landing-word-wrap">
            <div className="landing-cycling-word" ref={wordRef}>
              {WORDS[0]}
            </div>
          </div>

          {/* Line 5 */}
          <p className="landing-line5" ref={line5Ref}>
            Using AWS Bedrock · LangGraph · AgentCore
          </p>
        </div>

      </div>
    </div>
  );
};

export default Landing;
