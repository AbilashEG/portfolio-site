import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const SERVICE_ID  = "service_u9rf0om";
const TEMPLATE_ID = "template_js65gcv";
const PUBLIC_KEY  = "mjwrLTppWMG32EGZu";

type SendState = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [message, setMessage] = useState("");
  const [state,   setState]   = useState<SendState>("idle");
  const [errName,  setErrName]  = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMsg,   setErrMsg]   = useState(false);
  const [ms, setMs] = useState(0);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
    tl.fromTo(".contact-proverb",  { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".contact-heading",  { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
      .fromTo(".contact-sub",      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.3")
      .fromTo(".contact-ide-card", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.2");
    return () => { tl.kill(); };
  }, []);

  const handleSend = async () => {
    const n = name.trim();
    const e = email.trim();
    const m = message.trim();
    const hasErrN = !n;
    const hasErrE = !e || !e.includes("@");
    const hasErrM = !m;
    setErrName(hasErrN);
    setErrEmail(hasErrE);
    setErrMsg(hasErrM);
    if (hasErrN || hasErrE || hasErrM) return;

    setState("loading");
    const start = Date.now();
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { name: n, email: e, message: m, title: `Portfolio Contact from ${n}`, time: new Date().toLocaleString() },
        PUBLIC_KEY
      );
      setMs(Date.now() - start);
      setState("success");
    } catch {
      setState("error");
    }
  };

  const resetForm = () => {
    setName(""); setEmail(""); setMessage("");
    setErrName(false); setErrEmail(false); setErrMsg(false);
    setState("idle");
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">

        {/* ── Proverb ── */}
        <p className="contact-proverb">
          <span>Building </span>
          <span className="contact-proverb-accent">better</span>
          <span> every</span>
          <br />
          <span>line at a </span>
          <span className="contact-proverb-accent">time.</span>
        </p>

        {/* ── Heading ── */}
        <h2 className="contact-heading">Let's Build Something.</h2>
        <p className="contact-sub">Open to opportunities in AI &amp; Cloud Engineering.</p>

        {/* ── IDE Contact Card ── */}
        <div className="contact-ide-card" ref={cardRef}>

          {/* Title bar */}
          <div className="contact-ide-titlebar">
            <div className="contact-ide-lights">
              <span className="ci-red"   />
              <span className="ci-yellow"/>
              <span className="ci-green" />
            </div>
            <span className="contact-ide-tab">message.ts</span>
            <span className="contact-ide-method">POST /api/contact</span>
          </div>

          {/* Editor body */}
          <div className="contact-ide-body">
            {state === "success" ? (
              <div className="contact-ide-result contact-ide-success">
                <span>{"// ✓ Message transmitted successfully"}</span>
                <span>{`// Response time: ${ms}ms`}</span>
                <span>{"// Abilash will respond within 24h"}</span>
                <button className="contact-ide-reset" onClick={resetForm}>
                  {"// → Send another message"}
                </button>
              </div>
            ) : state === "error" ? (
              <div className="contact-ide-result contact-ide-error">
                <span>{"// ✗ Transmission failed"}</span>
                <span>{"// Check your inputs and retry"}</span>
                <button className="contact-ide-reset" onClick={resetForm}>
                  {"// → Try again"}
                </button>
              </div>
            ) : (
              <div className="ci-form-body">
                {/* Line 1 */}
                <div className="ci-row">
                  <span className="ci-ln">1</span>
                  <span className="ci-cmt">{"// Send me a message"}</span>
                </div>

                {/* Line 2 — empty */}
                <div className="ci-row"><span className="ci-ln">2</span><span>&nbsp;</span></div>

                {/* Line 3 — Name */}
                <div className="ci-row">
                  <span className="ci-ln">3</span>
                  <span className="ci-prop ci-field-label">Name</span>
                </div>
                <div className="ci-field-row">
                  <span className="ci-ln">4</span>
                  <input
                    className={`ci-field-input${errName ? " ci-field-err" : ""}`}
                    type="text"
                    placeholder="Abilash EG"
                    value={name}
                    onChange={e => { setName(e.target.value); setErrName(false); }}
                  />
                </div>

                {/* Line 5 — empty */}
                <div className="ci-row"><span className="ci-ln">5</span><span>&nbsp;</span></div>

                {/* Line 6 — Email */}
                <div className="ci-row">
                  <span className="ci-ln">6</span>
                  <span className="ci-prop ci-field-label">Email</span>
                </div>
                <div className="ci-field-row">
                  <span className="ci-ln">7</span>
                  <input
                    className={`ci-field-input${errEmail ? " ci-field-err" : ""}`}
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={e => { setEmail(e.target.value); setErrEmail(false); }}
                  />
                </div>

                {/* Line 8 — empty */}
                <div className="ci-row"><span className="ci-ln">8</span><span>&nbsp;</span></div>

                {/* Line 9 — Message */}
                <div className="ci-row">
                  <span className="ci-ln">9</span>
                  <span className="ci-prop ci-field-label">Message</span>
                </div>
                <div className="ci-field-row ci-field-row--textarea">
                  <span className="ci-ln">10</span>
                  <textarea
                    className={`ci-field-textarea${errMsg ? " ci-field-err" : ""}`}
                    placeholder="// what's on your mind?"
                    value={message}
                    onChange={e => { setMessage(e.target.value); setErrMsg(false); }}
                  />
                </div>

                {/* Line 11 — empty */}
                <div className="ci-row"><span className="ci-ln">11</span><span>&nbsp;</span></div>

                {/* Line 12 — transmit hint */}
                <div className="ci-row">
                  <span className="ci-ln">12</span>
                  <span className="ci-cmt">{"// Click RUN to transmit →"}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── RUN button ── */}
        {state !== "success" && state !== "error" && (
          <button
            className="contact-run-btn"
            onClick={handleSend}
            disabled={state === "loading"}
          >
            {state === "loading" ? "▶  Transmitting..." : "▶  RUN message.send()"}
          </button>
        )}

        {/* ── Footer ── */}
        <div className="contact-footer">
          <span className="contact-copy">
            <MdCopyright /> 2025 {config.developer.fullName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
