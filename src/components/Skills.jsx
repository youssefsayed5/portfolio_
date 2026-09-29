import { Code2, Server, Database, ShieldCheck, Wrench, LayoutTemplate } from "lucide-react";
import { skillGroups } from "../data/portfolio.js";

const icons = { code: Code2, server: Server, db: Database, shield: ShieldCheck, tool: Wrench, layout: LayoutTemplate };

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head reveal">
          <h2>Technical Skills</h2>
          <p>Backend is the primary focus; frontend is part of my background.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((g) => {
            const Icon = icons[g.icon];
            return (
              <article key={g.title} className={`card skill-card reveal ${g.primary ? "is-primary" : ""} ${g.minor ? "is-minor" : ""}`}>
                <h3><Icon size={18} aria-hidden="true" /> {g.title}</h3>
                <ul className="tags">
                  {g.items.map((i) => <li key={i} className="tag">{i}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
