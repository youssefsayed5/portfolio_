import { GraduationCap } from "lucide-react";
import { education } from "../data/portfolio.js";
import Certifications from "./Certifications.jsx";

export default function Education() {
  return (
    <section id="education" className="alt">
      <div className="container">
        <div className="section-head reveal"><h2>Education</h2></div>
        <article className="card edu reveal">
          <div className="edu-icon"><GraduationCap size={26} aria-hidden="true" /></div>
          <div>
            <h3>{education.school}</h3>
            <p className="org">{education.degree}</p>
            <p className="period-line">{education.period} · GPA: {education.gpa}</p>
            <p className="mini-title">Relevant Coursework</p>
            <ul className="tags">
              {education.courses.map((c) => <li key={c} className="tag">{c}</li>)}
            </ul>
          </div>
        </article>
        <Certifications />
      </div>
    </section>
  );
}
