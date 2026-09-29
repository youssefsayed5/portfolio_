import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio.js";

function Links({ p }) {
  if (!p.github && !p.demo) return null;
  return (
    <div className="cta-row">
      {p.github && (
        <a className="btn btn-ghost btn-sm" href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on GitHub`}>
          <Github size={16} /> GitHub
        </a>
      )}
      {p.demo && (
        <a className="btn btn-primary btn-sm" href={p.demo} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} live demo`}>
          <ExternalLink size={16} /> Live Demo
        </a>
      )}
    </div>
  );
}

function Info({ p }) {
  return (
    <>
      <p className="subtitle">{p.subtitle}</p>
      <h3>{p.name}</h3>
      <p className="desc">{p.description}</p>
      <ul className="bullets cols">
        {p.features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <ul className="tags">
        {p.tech.map((t) => <li key={t} className="tag tag-accent">{t}</li>)}
      </ul>
      <Links p={p} />
    </>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head reveal">
          <h2>Projects</h2>
          <p>Featured backend projects, followed by team and university work.</p>
        </div>

        <div className="featured-list">
          {featured.map((p) => (
            <article key={p.name} className="card project featured reveal">
              <div className="p-info"><Info p={p} /></div>
              <div className="p-visual" role="img" aria-label={`Illustrative code snippet for ${p.name}`}>
                <div className="code-head"><i /><i /><i /><span>{p.visual.file}</span></div>
                <pre>
                  {p.visual.lines.map((l, i) => (
                    <span key={i} className={`ln ${l.startsWith("//") ? "cm" : ""}`}>{l || " "}</span>
                  ))}
                </pre>
              </div>
            </article>
          ))}
        </div>

        <div className="project-grid">
          {others.map((p) => (
            <article key={p.name} className="card project reveal">
              <Info p={p} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
