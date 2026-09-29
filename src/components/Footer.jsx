import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>{profile.name}</strong>
          <p>Backend Developer • Node.js</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          <a href={`mailto:${profile.email}`}>Email</a>
        </nav>
        <p className="copy">© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}
