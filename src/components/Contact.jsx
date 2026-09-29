import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { profile } from "../data/portfolio.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // No backend configured: the form opens the visitor's email client.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <div className="container contact-grid">
        <div className="reveal">
          <h2>Let's Build Something</h2>
          <p className="lead">
            I'm open to backend development opportunities, internships, freelance projects, and collaborations.
          </p>
          <ul className="contact-list">
            <li><Mail size={18} aria-hidden="true" /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><MapPin size={18} aria-hidden="true" /><span>{profile.location}</span></li>
          </ul>
          <div className="social-row">
            <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={20} /></a>
            {profile.linkedin && (
              <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={20} /></a>
            )}
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Send an email"><Mail size={20} /></a>
          </div>
        </div>

        <form className="card form reveal" onSubmit={onSubmit}>
          <label>Name
            <input required value={form.name} onChange={set("name")} autoComplete="name" />
          </label>
          <label>Email
            <input required type="email" value={form.email} onChange={set("email")} autoComplete="email" />
          </label>
          <label>Message
            <textarea required rows={5} value={form.message} onChange={set("message")} />
          </label>
          <button type="submit" className="btn btn-primary"><Send size={16} /> Send Message</button>
          <p className="hint">This opens your email app with the message ready to send.</p>
        </form>
      </div>
    </section>
  );
}
