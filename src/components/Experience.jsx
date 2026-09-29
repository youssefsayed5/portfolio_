import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <section id="experience" className="alt">
      <div className="container">
        <div className="section-head reveal"><h2>Experience</h2></div>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.org} className="t-item reveal">
              <div className="card">
                <div className="t-top">
                  <div>
                    <h3>{e.title}</h3>
                    <p className="org">{e.org}</p>
                  </div>
                  <span className="period">{e.period}</span>
                </div>
                <ul className="bullets">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
