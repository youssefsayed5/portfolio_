import { stats } from "../data/portfolio.js";

export default function About() {
  return (
    <section id="about" className="alt">
      <div className="container">
        <div className="section-head reveal"><h2>About Me</h2></div>
        <div className="about-grid reveal">
          <div className="prose">
            <p>
              I'm a Computer Science and Artificial Intelligence student at Benha University and a Backend Developer focused on building secure, scalable, and maintainable applications.
            </p>
            <p>
              I specialize in Node.js and Express.js and have hands-on experience with RESTful APIs, authentication, databases, Redis, MVC architecture, validation, and backend application design.
            </p>
            <p>
              I'm currently expanding my backend expertise with NestJS and developing my knowledge in AI/LLM integration and backend AI engineering.
            </p>
          </div>
          <dl className="stats">
            {stats.map((s) => (
              <div key={s.label} className="card stat">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
