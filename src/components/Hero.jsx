import { useEffect, useState } from "react";
import { Github, Linkedin } from "lucide-react";
import { profile } from "../data/portfolio.js";

const CODE = `const developer = {
  name: "Youssef Sayed Ahmed",
  role: "Backend Developer",
  stack: ["Node.js", "TypeScript", "MongoDB"],
  focus: "Backend + AI"
};`;

function highlight(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"[^"]*"/g, (m) => `<span class="tk-s">${m}</span>`)
    .replace(/\bconst\b/g, '<span class="tk-k">const</span>')
    .replace(/\b(name|role|stack|focus)(?=:)/g, '<span class="tk-p">$1</span>');
}

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(CODE.length);
      return;
    }
    const t = setInterval(() => setCount((c) => (c >= CODE.length ? c : c + 1)), 26);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="badge"><i className="dot" /> Backend Developer • Node.js</span>
          <h1>Building scalable backend systems and real-world applications.</h1>
          <p className="lead">
            I'm Youssef Sayed Ahmed, a Backend Developer specializing in Node.js, Express.js, TypeScript, MongoDB, Redis, and RESTful APIs.
          </p>
          <div className="cta-row">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
          <div className="social-row">
            <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Github size={20} />
            </a>
            {profile.linkedin && (
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <Linkedin size={20} />
              </a>
            )}
          </div>
        </div>

        <div className="code-card" aria-label="Developer profile as code">
          <div className="code-head">
            <i /><i /><i />
            <span>developer.js</span>
          </div>
          <pre>
            <code dangerouslySetInnerHTML={{ __html: highlight(CODE.slice(0, count)) }} />
            <span className="caret" aria-hidden="true" />
          </pre>
        </div>
      </div>
    </section>
  );
}
