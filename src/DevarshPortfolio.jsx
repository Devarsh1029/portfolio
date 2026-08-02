import React, { useState } from "react";
import { Mail, Phone, ArrowRight, ArrowUpRight } from "lucide-react";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

.dv-root {
  --bg: #EEF4FB;
  --panel: #D9E6F2;
  --ink: #10233F;
  --muted: #4A6180;
  --line: #CBDCEB;
  --accent: #123974;
  --accent-soft: #D4E2F2;
  background: var(--bg);
  color: var(--ink);
  font-family: 'Inter', sans-serif;
}

.dv-serif { font-family: 'Fraunces', serif; }
.dv-mono { font-family: 'JetBrains Mono', monospace; }

.dv-section {
  max-width: 1040px;
  margin: 0 auto;
  padding: 60px 8vw;
}
.dv-section + .dv-section { border-top: 1px solid var(--line); }

.dv-eyebrow {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 20px;
  display: inline-block;
}

.dv-btn {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 15px 28px;
  border: 1px solid var(--ink);
  color: var(--ink);
  background: transparent;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 999px;
  transition: background 0.2s, color 0.2s;
}
.dv-btn:hover { background: var(--ink); color: var(--bg); }
.dv-btn.solid { background: var(--accent); color: #fff; border-color: var(--accent); }
.dv-btn.solid:hover { background: #0c2751; }

.dv-tag {
  font-size: 12px;
  letter-spacing: 0.02em;
  color: var(--accent);
  background: var(--accent-soft);
  padding: 5px 11px;
  border-radius: 3px;
  font-family: 'JetBrains Mono', monospace;
}

.dv-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 34px;
}

.dv-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--line);
  color: var(--ink);
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  padding: 12px 2px;
  outline: none;
  transition: border-color 0.2s;
}
.dv-input:focus { border-color: var(--accent); }
.dv-input::placeholder { color: var(--muted); }

.dv-hr { border: none; border-top: 1px solid var(--line); margin: 40px 0; }

.dv-gradient-text {
  background: linear-gradient(90deg, #6E93C4, #123974, #6E93C4);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: dv-gradient-move 6s ease-in-out infinite alternate;
}

@keyframes dv-gradient-move {
  0%   { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

.dv-top-link {
  color: var(--accent);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.dv-top-link:hover { text-decoration: underline; }

@media (max-width: 720px) {
  .dv-section { padding: 40px 6vw; }
  .dv-grid2 { grid-template-columns: 1fr !important; }
}
`;

export default function DevarshPortfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = `mailto:devarshah48@gmail.com?subject=${encodeURIComponent(
    "Portfolio inquiry from " + (form.name || "a visitor")
  )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;

  return (
    <div className="dv-root" id="top">
      <style>{styles}</style>

      {/* HERO */}
      <section className="dv-section" style={{ paddingTop: 56, paddingBottom: 44 }}>
        <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(30px, 4.4vw, 48px)", fontWeight: 800, letterSpacing: "0.01em", margin: "0 0 8px", color: "var(--ink)" }}>
          DEVARSH SHAH
        </h1>
        <p className="dv-mono" style={{ fontSize: 13, color: "var(--accent)", letterSpacing: "0.18em", marginBottom: 28 }}>
          THE BACKEND BUILDER
        </p>

        <h2 className="dv-gradient-text" style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(34px, 4.6vw, 58px)", fontWeight: 800, lineHeight: 1.08, margin: "0 0 20px", maxWidth: 700 }}>
          CODE IN PRODUCTION
        </h2>

        <p className="dv-mono" style={{ fontSize: 14, color: "var(--ink)", letterSpacing: "0.04em", marginBottom: 20 }}>
          JAVA &nbsp;·&nbsp; SPRING BOOT &nbsp;·&nbsp; REST APIS &nbsp;·&nbsp; CLOUD
        </p>
        <p style={{ fontSize: 17, fontStyle: "italic", color: "var(--accent)", marginBottom: 20 }}>
          Yes, that Production. No, not the "it works on my machine" kind.
        </p>
        <p style={{ fontSize: 18, color: "var(--muted)", maxWidth: 560, lineHeight: 1.65, marginBottom: 36 }}>
          I turn business requirements into scalable systems. Tabs full of Postman collections,
          SQL queries, and AWS consoles. I don't just write code — <span style={{ fontStyle: "italic", color: "var(--accent)" }}>I architect it to last.</span>
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a className="dv-btn solid" href="#about">My Story <ArrowRight size={15} /></a>
          <a className="dv-btn" href="/Devarsh's_Resume.pdf" download>Download Resume <ArrowUpRight size={15} /></a>
        </div>

        <hr className="dv-hr" style={{ margin: "32px 0 20px" }} />

        <p className="dv-serif" style={{ fontSize: 20, fontWeight: 500, marginBottom: 16 }}>
          3 Years · 1 Backend Brain
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
          {["Java", "Spring Boot", "REST APIs", "Hibernate", "React", "AWS", "SQL Server", "Microservices", "Authentication Systems"].map((t) => (
            <span className="dv-tag" key={t}>{t}</span>
          ))}
        </div>
        <p style={{ fontSize: 14, color: "var(--muted)", fontStyle: "italic" }}>Yes, I build the whole stack when needed.</p>
      </section>

      {/* ABOUT */}
      <section className="dv-section" id="about">
        <span className="dv-eyebrow">A Note from the Backend</span>
        <h2 className="dv-serif" style={{ fontSize: 30, fontWeight: 500, margin: "0 0 24px" }}>
          Hi, I'm Devarsh
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }} className="dv-grid2">
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)" }}>
              Here's the short version: I build systems that don't fall over when real users
              show up.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)", marginTop: 18 }}>
              I started as an intern at Amnex Infotechnologies, where I got my hands dirty
              with Spring Boot microservices, JWT/OAuth2 authentication, and Angular —
              learning early that good backend work is invisible when it's done right. That
              internship turned into a full role at SoluSoft Technologies, where I now design
              and ship client-specific features using Java, Spring Boot, and JavaScript,
              build RESTful APIs that actually hold up under load, and manage everything from
              AWS S3 storage to role-based security.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)" }}>
              I don't just write endpoints — I've built full systems end to end. CHCS, an
              insurance management platform, taught me how to wire third-party integrations
              and secure data across SQL Server and AWS. My CRM system pushed me further into
              full-stack territory — lead pipelines, OTP-based logins, real-time revenue
              dashboards — all built on Spring Boot and React.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--muted)", marginTop: 18 }}>
              Backend, frontend, cloud, or security — I care less about the title and more
              about whether the system works when it matters.
            </p>
            <p className="dv-mono" style={{ fontSize: 13.5, color: "var(--accent)", marginTop: 22, letterSpacing: "0.02em" }}>
              Nobody remembers the frontend if the backend crashes.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="dv-section" id="experience">
        <span className="dv-eyebrow">Experience</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
          {[
            {
              range: "Oct 2023 — Present",
              site: "SoluSoft Technologies Pvt. Ltd",
              role: "Software Engineer",
              bullets: [
                "Designed and shipped client-specific features using Java, Spring Boot, and JavaScript",
                "Built and optimized RESTful APIs with Spring Boot and Hibernate, tested via Postman and SoapUI",
                "Integrated third-party services; managed data across SQL Server and AWS S3",
                "Implemented role-based authentication and validation for security and compliance",
              ],
            },
            {
              range: "Jan 2023 — Jul 2023",
              site: "Amnex Infotechnologies Pvt. Ltd",
              role: "Software Engineer Intern",
              bullets: [
                "Built a Spring Boot microservices application with JWT and OAuth2 authentication",
                "Developed Angular UI components, improving frontend performance",
              ],
            },
          ].map((e, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 32 }} className="dv-grid2">
              <div className="dv-mono" style={{ fontSize: 13, color: "var(--muted)", paddingTop: 4 }}>{e.range}</div>
              <div style={{ borderLeft: "2px solid var(--line)", paddingLeft: 28 }}>
                <h3 className="dv-serif" style={{ fontSize: 21, fontWeight: 500, margin: "0 0 2px" }}>{e.role}</h3>
                <div style={{ fontSize: 14, color: "var(--accent)", marginBottom: 14, fontWeight: 500 }}>{e.site}</div>
                <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.75, fontSize: 15.5 }}>
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="dv-section" id="projects">
        <span className="dv-eyebrow">Projects</span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="dv-grid2">
          {[
            {
              name: "CHCS",
              sub: "Insurance Management System",
              bullets: [
                "Built and enhanced client-specific modules with robust logic and smooth UX",
                "Optimized RESTful APIs with Spring Boot and Hibernate, integrated with third-party services",
                "Managed data across SQL Server and AWS S3 with role-based authentication",
              ],
              tags: ["Java", "Spring Boot", "Hibernate", "JavaScript", "MySQL", "AWS S3"],
            },
            {
              name: "CRM System",
              sub: "Leads · Quotations · Invoices · Workflows",
              bullets: [
                "Full-featured CRM for managing leads, quotations, invoices, and workflows",
                "Lead pipeline tracking with OTP-based login and license generation",
                "Real-time dashboards for revenue and lead analytics",
              ],
              tags: ["Java", "Spring Boot", "Hibernate", "SQL Server", "React", "Material UI"],
            },
          ].map((p) => (
            <div className="dv-card" key={p.name}>
              <h3 className="dv-serif" style={{ fontSize: 23, fontWeight: 500, margin: 0 }}>{p.name}</h3>
              <div style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 4, marginBottom: 18 }}>{p.sub}</div>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7, fontSize: 15 }}>
                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
                {p.tags.map((t) => <span key={t} className="dv-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="dv-section" id="contact" style={{ textAlign: "center" }}>
        <span className="dv-eyebrow">Contact</span>
        <h2 className="dv-serif" style={{ fontSize: "clamp(22px, 3.2vw, 40px)", fontWeight: 500, margin: "0 auto 14px", maxWidth: 900, whiteSpace: "nowrap" }}>
          The next system I build could be yours.
        </h2>
        <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 620, margin: "0 auto 40px" }}>
          Hiring? Looking for a Software Engineer? Or just want to connect?
          <br />
          Those are my favorite. The form below works.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 640, margin: "0 auto", textAlign: "left" }} className="dv-grid2">
          <input className="dv-input" placeholder="Who are you?" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input className="dv-input" placeholder="Where do I reply?" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea
            className="dv-input"
            placeholder="What's the story?"
            rows={4}
            style={{ gridColumn: "1 / -1", resize: "vertical" }}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <div style={{ textAlign: "left", maxWidth: 640, margin: "0 auto" }}>
          <a className="dv-btn solid" href={mailtoHref} style={{ marginTop: 24 }}>Send It <ArrowRight size={15} /></a>
        </div>

        <hr className="dv-hr" />

<div style={{ marginBottom: 20 }}>
          <a href="#top" className="dv-top-link">Back to the cover ↑</a>
        </div>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: 16, fontSize: 14, color: "var(--muted)" }}>
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap", justifyContent: "center" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Mail size={14} /> devarshah48@gmail.com</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Phone size={14} /> 7984322552</span>
            <a href="https://devarsh1029.github.io" style={{ color: "inherit", display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}><Mail size={14} /> devarsh1029.github.io</a>
            <a href="https://linkedin.com/in/devarsh-shah" style={{ color: "inherit", display: "flex", alignItems: "center", gap: 6, textDecoration: "none" }}><Mail size={14} /> LinkedIn</a>
          </div>
          <span>Devarsh Shah · Backend · Cloud · Systems &nbsp;|&nbsp; © 2026 Devarsh Shah. All rights reserved.</span>
        </div>

        
      </section>
    </div>
  );
}
