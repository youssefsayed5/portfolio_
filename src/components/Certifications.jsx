import { Award } from "lucide-react";
import { certifications, volunteer } from "../data/portfolio.js";

export default function Certifications() {
  return (
    <>
      <h2 className="sub-h reveal">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((c) => (
          <article key={c.title} className="card cert reveal">
            <Award size={20} aria-hidden="true" />
            <h3>{c.title}</h3>
            <p>{c.issuer}</p>
            <span className="period">{c.date}</span>
          </article>
        ))}
      </div>

      <h2 className="sub-h reveal">Volunteer Experience</h2>
      <article className="card reveal">
        <div className="t-top">
          <div>
            <h3>{volunteer.title}</h3>
            <p className="org">{volunteer.org}</p>
          </div>
          <span className="period">{volunteer.period}</span>
        </div>
        <ul className="bullets">
          {volunteer.points.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </article>
    </>
  );
}
