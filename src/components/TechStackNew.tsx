import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
}

const cdn = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

const ROW1: TechItem[] = [
  { name: "Python",      icon: cdn("python/python-original.svg") },
  { name: "TypeScript",  icon: cdn("typescript/typescript-original.svg") },
  { name: "JavaScript",  icon: cdn("javascript/javascript-original.svg") },
  { name: "React",       icon: cdn("react/react-original.svg") },
  { name: "Next.js",     icon: cdn("nextjs/nextjs-original.svg") },
  { name: "HTML",        icon: cdn("html5/html5-original.svg") },
  { name: "CSS",         icon: cdn("css3/css3-original.svg") },
  { name: "Bash",        icon: cdn("bash/bash-original.svg") },
  { name: "Flask",       icon: cdn("flask/flask-original.svg") },
  { name: "Node.js",     icon: cdn("nodejs/nodejs-original.svg") },
  { name: "FastAPI",     icon: cdn("fastapi/fastapi-original.svg") },
  { name: "Tailwind",    icon: cdn("tailwindcss/tailwindcss-original.svg") },
];

const ROW2: TechItem[] = [
  { name: "AWS Bedrock",    icon: cdn("amazonwebservices/amazonwebservices-original-wordmark.svg") },
  { name: "Lambda",         icon: cdn("amazonwebservices/amazonwebservices-original-wordmark.svg") },
  { name: "DynamoDB",       icon: cdn("amazonwebservices/amazonwebservices-original-wordmark.svg") },
  { name: "S3",             icon: cdn("amazonwebservices/amazonwebservices-original-wordmark.svg") },
  { name: "EC2",            icon: cdn("amazonwebservices/amazonwebservices-original-wordmark.svg") },
  { name: "SageMaker",      icon: cdn("amazonwebservices/amazonwebservices-original-wordmark.svg") },
  { name: "Docker",         icon: cdn("docker/docker-original.svg") },
  { name: "GitHub Actions", icon: cdn("github/github-original.svg") },
  { name: "Git",            icon: cdn("git/git-original.svg") },
  { name: "Pandas",         icon: cdn("pandas/pandas-original.svg") },
  { name: "NumPy",          icon: cdn("numpy/numpy-original.svg") },
  { name: "Vercel",         icon: cdn("vercel/vercel-original.svg") },
];

const TechStackNew = () => {
  return (
    <div className="techstack-new" id="skills">

      {/* ── Content ── */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>

        {/* Row 1 — scrolls left */}
        <div className="ts-marquee-row">
          <div className="ts-track ts-left">
            {[...ROW1, ...ROW1].map((t, i) => (
              <div className="techstack-item" key={i} title={t.name}>
                <img src={t.icon} alt={t.name} />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="ts-marquee-row">
          <div className="ts-track ts-right">
            {[...ROW2, ...ROW2].map((t, i) => (
              <div className="techstack-item" key={i} title={t.name}>
                <img src={t.icon} alt={t.name} />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
