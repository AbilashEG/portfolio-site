import { useEffect, useRef } from "react";
import "./styles/About.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Syntax colour tokens ────────────────────────────────────────────────────
const K  = (t: string) => <span className="c-kw">{t}</span>;       // keyword  #569cd6
const S  = (t: string) => <span className="c-str">{t}</span>;      // string   #ce9178
const CM = (t: string) => <span className="c-cmt">{t}</span>;      // comment  #6a9955
const P  = (t: string) => <span className="c-prop">{t}</span>;     // property #9cdcfe
const PU = (t: string) => <span className="c-punc">{t}</span>;     // punct    #cccccc
const FN = (t: string) => <span className="c-fn">{t}</span>;       // fn name  #dcdcaa

// ── Code lines ──────────────────────────────────────────────────────────────
const LINES: React.ReactNode[] = [
  /* 1  */ null,
  /* 2  */ <>{CM("// Abilash EG — Data & AI Engineer")}</>,
  /* 3  */ null,
  /* 4  */ <>{K("const")} {FN("engineer")} {PU("= {")} </>,
  /* 5  */ <>&nbsp;&nbsp;{P("name")}{PU(":")} {S('"Abilash EG"')}{PU(",")}</>,
  /* 6  */ <>&nbsp;&nbsp;{P("role")}{PU(":")} {S('"Data & AI Engineer"')}{PU(",")}</>,
  /* 7  */ <>&nbsp;&nbsp;{P("location")}{PU(":")} {S('"Coimbatore, India"')}{PU(",")}</>,
  /* 8  */ null,
  /* 9  */ <>&nbsp;&nbsp;{P("focus")}{PU(": [")}</>,
  /* 10 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{S('"Agentic AI Systems"')}{PU(",")}</>,
  /* 11 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{S('"AWS Cloud Architecture"')}{PU(",")}</>,
  /* 12 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{S('"Cross-Account Infrastructure"')}{PU(",")}</>,
  /* 13 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{S('"LangGraph Pipelines"')}{PU(",")}</>,
  /* 14 */ <>&nbsp;&nbsp;{PU("],")}</>,
  /* 15 */ null,
  /* 16 */ <>&nbsp;&nbsp;{P("stack")}{PU(": {")}</>,
  /* 17 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{P("cloud")}{PU(": [")} {S('"Bedrock"')}{PU(",")} {S('"AgentCore"')}{PU(",")} {S('"Lambda"')}{PU(",")}</>,
  /* 18 */ <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{S('"DynamoDB"')}{PU(",")} {S('"STS"')}{PU(",")} {S('"EventBridge"')}{PU("],")} </>,
  /* 19 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{P("ai")}{PU(":    [")} {S('"Nova Pro"')}{PU(",")} {S('"LangGraph"')}{PU(",")} {S('"RAG"')}{PU("],")} </>,
  /* 20 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{P("code")}{PU(":  [")} {S('"Python"')}{PU(",")} {S('"FastAPI"')}{PU(",")} {S('"Next.js"')}{PU("],")} </>,
  /* 21 */ <>&nbsp;&nbsp;{PU("},")} </>,
  /* 22 */ null,
  /* 23 */ <>&nbsp;&nbsp;{P("credentials")}{PU(": {")}</>,
  /* 24 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{P("education")}{PU(": ")} {S('"B.Tech CSE — VIT Bhopal"')}{PU(",")}</>,
  /* 25 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{P("company")}{PU(":   ")} {S('"Quadrasystems (AWS SBU)"')}{PU(",")}</>,
  /* 26 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{P("certs")}{PU(":     [")} {S('"AWS Cloud Practitioner"')}{PU(",")}</>,
  /* 27 */ <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{S('"AWS Data Engineer"')}{PU("],")} </>,
  /* 28 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{P("award")}{PU(":     ")} {S('"AWS Migratapalooza 2025 Winner"')}{PU(",")}</>,
  /* 29 */ <>&nbsp;&nbsp;{PU("},")} </>,
  /* 30 */ null,
  /* 31 */ <>&nbsp;&nbsp;{P("impact")}{PU(": [")}</>,
  /* 32 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{S('"10+ AWS accounts automated"')}{PU(",")}</>,
  /* 33 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{S('"4 cities — AgentCore workshop"')}{PU(",")}</>,
  /* 34 */ <>&nbsp;&nbsp;&nbsp;&nbsp;{S('"Zero EC2 architecture mindset"')}{PU(",")}</>,
  /* 35 */ <>&nbsp;&nbsp;{PU("],")}</>,
  /* 36 */ null,
  /* 37 */ <>&nbsp;&nbsp;{P("philosophy")}{PU(": ")}{S('"Architecture decisions become')}</>,
  /* 38 */ <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{S('working systems, not slide decks."')}{PU(",")}</>,
  /* 39 */ <>{PU("}")}</>,
  /* 40 */ null,
  /* 41 */ <>{CM("// Currently building at Quadrasystems AWS SBU")}</>,
];

const STATS = [
  { value: "2",   label: "Flagship\nProjects"   },
  { value: "4",   label: "Workshop\nCities"     },
  { value: "3+",   label: "AWS\nCertification"   },
  { value: "30+", label: "AWS Accounts\nAutomated" },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const windowRef  = useRef<HTMLDivElement>(null);
  const linesRef   = useRef<HTMLDivElement>(null);
  const statsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // IDE window slides up
      gsap.fromTo(
        windowRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Code lines stagger in
      const lineEls = linesRef.current?.querySelectorAll(".ide-line");
      if (lineEls) {
        gsap.fromTo(
          lineEls,
          { opacity: 0, x: -8 },
          {
            opacity: 1, x: 0, duration: 0.3, stagger: 0.03,
            ease: "power2.out", delay: 0.4,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Stat cards stagger in
      const cardEls = statsRef.current?.querySelectorAll(".about-stat-card");
      if (cardEls) {
        gsap.fromTo(
          cardEls,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0, duration: 0.5, stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-section" id="about" ref={sectionRef}>

      {/* ── macOS IDE Window ── */}
      <div className="ide-window" ref={windowRef}>

        {/* Title bar */}
        <div className="ide-titlebar">
          <div className="ide-traffic-lights">
            <span className="tl-red"   />
            <span className="tl-yellow"/>
            <span className="tl-green" />
          </div>
          <div className="ide-tab">about.ts</div>
          <div className="ide-breadcrumb">abilash-eg &gt; src &gt; about.ts</div>
        </div>

        {/* Editor body */}
        <div className="ide-body" ref={linesRef}>
          {LINES.map((content, i) => (
            <div className="ide-line" key={i}>
              <span className="ide-ln">{i + 1}</span>
              <span className="ide-code">{content ?? <>&nbsp;</>}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats grid ── */}
      <div className="about-stats" ref={statsRef}>
        {STATS.map((s, i) => (
          <div className="about-stat-card" key={i}>
            <span className="about-stat-value">{s.value}</span>
            <span className="about-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default About;
