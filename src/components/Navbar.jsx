import { useEffect, useState } from "react";
import { Github, Linkedin, Download, Menu, X } from "lucide-react";
import { navItems, profile } from "../data/portfolio.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`nav ${scrolled || open ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" aria-label="Youssef Sayed Ahmed, home">YS</a>

        <nav id="primary-nav" className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a href={profile.cv} download className="nav-cv-mobile" onClick={() => setOpen(false)}>
            Download CV
          </a>
        </nav>

        <div className="nav-actions">
          <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <Github size={20} />
          </a>
          {profile.linkedin && (
            <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={20} />
            </a>
          )}
          <a className="btn btn-primary btn-sm nav-cv" href={profile.cv} download>
            <Download size={16} /> Download CV
          </a>
          <button
            className="icon-btn menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
