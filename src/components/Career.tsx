import { useState } from "react";
import "./styles/Career.css";
import { config } from "../config";

const DEFAULT_VISIBLE = 5;

const Career = () => {
  const exp = config.experiences[0];
  const [expanded, setExpanded] = useState(false);

  const visible = expanded
    ? exp.responsibilities
    : exp.responsibilities.slice(0, DEFAULT_VISIBLE);

  const hasMore = exp.responsibilities.length > DEFAULT_VISIBLE;

  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2 className="career-heading">Experience</h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>{exp.position}</h4>
                <h5>{exp.company}</h5>
              </div>
              <div className="career-meta">
                <span className="career-period">{exp.period}</span>
                <span className="career-location">{exp.location}</span>
              </div>
            </div>

            <ul className="career-bullets">
              {visible.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>

            {hasMore && (
              <button
                className="career-toggle"
                onClick={() => setExpanded((e) => !e)}
              >
                {expanded
                  ? "Show Less ↑"
                  : `Show More (${exp.responsibilities.length - DEFAULT_VISIBLE} more) ↓`}
              </button>
            )}

            <div className="career-tags">
              {exp.technologies.map((t, i) => (
                <span key={i} className="career-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
