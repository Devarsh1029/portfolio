import React, { useEffect, useRef, useState, useCallback } from "react";
import Lenis from "lenis";
import {
  Mail, Phone, ExternalLink, ArrowDown,
  FileDown, Star, Send, MapPin, ArrowUpRight, Menu, X,
} from "lucide-react";

/* lucide-react dropped brand/logo icons (Github, Linkedin, ...) from recent
   versions, so these are plain inline SVGs instead of a lucide import. */
// function Github({ size = 16, style, className }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} className={className} aria-hidden="true">
//       <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
//     </svg>
//   );
// }
function Linkedin({ size = 16, style, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45C23.2 24 24 23.22 24 22.25V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/* Content                                                                  */
/* ---------------------------------------------------------------------- */

export const CONTACT = {
  name: "Devarsh Shah",
  email: "devarshah48@gmail.com",
  phone: "7984322552",
  github: "https://devarsh1029.github.io",
  linkedin: "https://linkedin.com/in/devarsh-shah",
  resume: "/Devarsh-Shah-Resume.pdf",
};

const HERO = {
  tagline: "THE BACKEND BUILDER",
  headline: "CODE IN PRODUCTION",
  stackLine: "JAVA · SPRING BOOT · REST APIS · CLOUD",
  subhead: "Yes, that Production. No, not the “it works on my machine” kind.",
  strip: "3 Years · 1 Backend Brain",
  tags: ["Java", "Spring Boot", "REST APIs", "Hibernate", "React", "AWS", "SQL Server", "Microservices", "Authentication Systems"],
  footnote: "Yes, I build the whole stack when needed.",
};

const ABOUT = {
  heading: "Hi, I'm Devarsh",
  col1: [
    "Here's the short version: I build systems that don't fall over when real users show up.",
    "I started as an intern at Amnex Infotechnologies, where I got my hands dirty with Spring Boot microservices, JWT/OAuth2 authentication, and Angular — learning early that good backend work is invisible when it's done right. That internship turned into a full role at SoluSoft Technologies, where I now design and ship client-specific features using Java, Spring Boot, and JavaScript, build RESTful APIs that actually hold up under load, and manage everything from AWS S3 storage to role-based security.",
  ],
  col2: [
    "I don't just write endpoints — I've built full systems end to end. CHCS, an insurance management platform, taught me how to wire third-party integrations and secure data across SQL Server and AWS. My CRM system pushed me further into full-stack territory — lead pipelines, OTP-based logins, real-time revenue dashboards — all built on Spring Boot and React.",
    "Backend, frontend, cloud, or security — I care less about the title and more about whether the system works when it matters.",
  ],
  callout: "Nobody remembers the frontend if the backend crashes.",
};

const EXPERIENCE = [
  {
    range: "Oct 2023 — Present",
    company: "SoluSoft Technologies Pvt. Ltd",
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
    company: "Amnex Infotechnologies Pvt. Ltd",
    role: "Software Engineer Intern",
    bullets: [
      "Built a Spring Boot microservices application with JWT and OAuth2 authentication",
      "Developed Angular UI components, improving frontend performance",
    ],
  },
];

const PROJECTS = [
  {
    name: "CHCS",
    tagline: "Insurance Management System",
    description: "An insurance management platform I built and enhanced with robust logic and a smooth user experience. It taught me how to wire third-party integrations and secure data end to end.",
    bullets: [
      "Built and enhanced client-specific modules with robust logic and smooth UX",
      "Optimized RESTful APIs with Spring Boot and Hibernate, integrated with third-party services",
      "Managed data across SQL Server and AWS S3 with role-based authentication",
    ],
    stack: ["Java", "Spring Boot", "Hibernate", "JavaScript", "MySQL", "AWS S3"],
    demo: "#", repo: "#", featured: true,
  },
  {
    name: "CRM System",
    tagline: "Leads · Quotations · Invoices · Workflows",
    description: "A full-featured CRM for managing leads, quotations, invoices, and workflows — my deep dive into full-stack territory.",
    bullets: [
      "Full-featured CRM for managing leads, quotations, invoices, and workflows",
      "Lead pipeline tracking with OTP-based login and license generation",
      "Real-time dashboards for revenue and lead analytics",
    ],
    stack: ["Java", "Spring Boot", "Hibernate", "SQL Server", "React", "Material UI"],
    demo: "#", repo: "#", featured: false,
  },
];

/* Skills are grouped by category only — no percentages. A made-up mastery
   score reads as false precision (skill can't really be "88% Spring Boot"),
   so this is just an honest, scannable list. */
const SKILLS = [
  { title: "Backend", items: ["Java", "Spring Boot", "RESTful APIs", "Hibernate / JPA", "Microservices"] },
  { title: "Frontend", items: ["React", "Angular", "JavaScript", "Material UI", "Responsive Design"] },
  { title: "Cloud & Security", items: ["AWS (S3, Console)", "SQL Server / MySQL", "JWT / OAuth2", "Role-Based Access", "Postman / SoapUI"] },
];

export const ARTICLES = [
  { slug: "backend-invisible", title: "Why good backend work is invisible", date: "2026-06-12", readTime: "6 min read", tags: ["Backend", "Spring Boot"], excerpt: "Nobody notices the backend when it works — and everyone notices when it crashes. Notes on designing APIs that stay quiet and reliable in production." },
  { slug: "jwt-oauth2-lessons", title: "JWT and OAuth2: lessons from a microservices internship", date: "2026-04-28", readTime: "8 min read", tags: ["Security", "Microservices"], excerpt: "Authentication done early is authentication done right. What building a Spring Boot microservice with JWT/OAuth2 taught me about tokens, sessions, and trust boundaries." },
  { slug: "otp-login-fullstack", title: "OTP-based logins without the headaches", date: "2026-03-05", readTime: "7 min read", tags: ["Full-Stack", "React"], excerpt: "Building password-free login for a CRM pipeline meant solving expiry windows, delivery failures, and mobile UX. The pattern that survived real users." },
  { slug: "aws-s3-data-flow", title: "Managing data across SQL Server and AWS S3", date: "2026-01-19", readTime: "9 min read", tags: ["AWS", "Database"], excerpt: "Structured data in SQL Server, files in S3, permissions in IAM. How I kept an insurance platform's data layer consistent without adding a middleman." },
];

/* Open Source (old section 05) removed — Writing and Contact shift up to
   05 / 06 so the numbering stays sequential everywhere it's shown. */
const NAV = [
  { href: "#about", label: "About", num: "01" },
  { href: "#experience", label: "Experience", num: "02" },
  { href: "#projects", label: "Projects", num: "03" },
  { href: "#skills", label: "Skills", num: "04" },
  { href: "#writing", label: "Writing", num: "05" },
  { href: "#contact", label: "Contact", num: "06" },
];

const NAV_IDS = NAV.map((n) => n.href.slice(1));

/* Offset used by the smooth-scroll handler so a section never lands
   underneath the fixed header. Matches --header-offset in the CSS. */
const HEADER_OFFSET = 88;

/* ---------------------------------------------------------------------- */
/* Styles — plain CSS (no Tailwind JIT available in this environment)     */
/* ---------------------------------------------------------------------- */

export const styles = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

/* Native smooth scrolling for anything that isn't routed through the JS
   handler (hash on first load, browser find-on-page, keyboard paging). */
html { scroll-behavior: auto; scroll-padding-top: 88px; }

.mc-root {
  --bg: #0A0A0B;
  --bg-raised: #111216;
  --bg-chip: #0D0E11;
  --bg-footer: #080809;
  --line: #1B1E24;
  --border: #24272E;
  --border-input: #2C303A;
  --green: #00FF94;
  --white: #FFFFFF;
  --s200: #E2E8F0;
  --s300: #CBD5E1;
  --s400: #94A3B8;
  --s500: #64748B;
  --s600: #475569;
  --s700: #334155;

  /* Motion tokens. --ease is a critically damped settle (no overshoot) and is
     the default for everything. --spring adds a small overshoot and is only
     used where something "arrives" — chips popping in, the menu opening. */
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --spring: cubic-bezier(0.34, 1.35, 0.44, 1);
  --header-offset: 88px;

  background: var(--bg);
  color: var(--s300);
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
}
.mc-display { font-family: 'Space Grotesk', 'Inter', sans-serif; }
.mc-mono { font-family: 'JetBrains Mono', monospace; }

.mc-eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px; font-weight: 500; letter-spacing: 0.18em;
  text-transform: uppercase; color: var(--green);
}
.mc-link {
  color: var(--green); text-decoration: none;
  background-image: linear-gradient(var(--green), var(--green));
  background-size: 0% 1.5px; background-repeat: no-repeat; background-position: 0 100%;
  transition: background-size 200ms var(--ease);
}
.mc-link:hover { background-size: 100% 1.5px; }

/* Visible keyboard focus everywhere, since a lot of the hover feedback
   below is pointer-only. */
.mc-root a:focus-visible,
.mc-root button:focus-visible,
.mc-root input:focus-visible,
.mc-root textarea:focus-visible {
  outline: 2px solid var(--green);
  outline-offset: 3px;
  border-radius: 2px;
}

/* ---- reveal on scroll ---- */
.mc-reveal { opacity: 0; transform: translateY(16px); will-change: opacity, transform; }
.mc-reveal.mc-visible {
  opacity: 1; transform: none;
  transition: opacity 620ms var(--ease), transform 720ms var(--ease);
  will-change: auto;
}

/* Stagger helper: children animate in one after another once the parent is
   revealed. Uses an animation rather than a transition so the entrance never
   fights with hover transitions on the same element. */
.mc-stagger > * { opacity: 0; }
.mc-visible .mc-stagger > *,
.mc-lit .mc-stagger > * {
  animation: mc-pop 540ms var(--ease) both;
  animation-delay: calc(var(--i, 0) * 45ms);
}
@keyframes mc-pop {
  from { opacity: 0; transform: translateY(10px) scale(0.96); }
  to   { opacity: 1; transform: none; }
}

/* Hero entrance: one orchestrated sequence on load. */
.mc-rise { opacity: 0; }
.mc-lit .mc-rise {
  animation: mc-rise-in 760ms var(--ease) both;
  animation-delay: calc(var(--i, 0) * 90ms);
}
@keyframes mc-rise-in {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: none; }
}

.mc-caret::after { content: "█"; margin-left: 2px; color: var(--green); animation: mc-blink 1s step-end infinite; }
.mc-blink::after { content: "█"; margin-left: 2px; color: var(--green); animation: mc-blink 1s step-end infinite; }
@keyframes mc-blink { 50% { opacity: 0; } }
@keyframes mc-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }

/* ---- scroll progress ---- */
.mc-progress {
  position: fixed; top: 0; left: 0; right: 0; height: 2px; z-index: 60;
  transform-origin: 0 50%;
  background: linear-gradient(90deg, rgba(0,255,148,0.15), var(--green));
  pointer-events: none;
}

/* ---- header ---- */
.mc-header {
  position: fixed; inset: 0 0 auto 0; z-index: 50;
  padding: 0; pointer-events: none;
  transition: padding 380ms var(--ease);
}
.mc-header.mc-scrolled { padding: 14px 16px 0; }
.mc-header-inner {
  position: relative; pointer-events: auto;
  max-width: 1152px; margin: 0 auto; height: 64px;
  display: flex; align-items: center; justify-content: space-between; padding: 0 20px;
  border-radius: 0px; border: 1px solid transparent; background: transparent;
  transition: height 380ms var(--ease), border-radius 380ms var(--ease),
              background 380ms var(--ease), border-color 380ms var(--ease),
              box-shadow 380ms var(--ease), padding 380ms var(--ease);
}
/* Floating pill state: inset from the edges, rounded, glassy, lifted with a
   shadow. Padding is symmetric (20px both sides) so the logo and the icon
   button line up with the section content below instead of drifting right. */
.mc-header.mc-scrolled .mc-header-inner {
  height: 58px;
  border-radius: 20px;
  background: rgba(17,18,23,0.72);
  backdrop-filter: blur(20px) saturate(160%); -webkit-backdrop-filter: blur(20px) saturate(160%);
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 16px 40px -14px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,255,148,0.04);
  padding: 0 20px;
}
/* Header slides away on the way down, comes back on the way up — so the page
   gets the full viewport while reading, and navigation is one flick away. */
.mc-header { transform: translateY(0); transition: transform 420ms var(--ease), padding 380ms var(--ease); }
.mc-header.mc-hidden { transform: translateY(-140%); }

.mc-mono-brand { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 22px; color: var(--white); display: inline-flex; align-items: baseline; }
.mc-mono-brand span { color: var(--green); }
.mc-brand-slash { display: inline-block; transition: transform 420ms var(--spring); }
.mc-mono-brand:hover .mc-brand-slash { transform: rotate(180deg) scale(1.1); }
.mc-brand-name { display: none; border-left: 1px solid var(--border); padding-left: 12px; font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.16em; color: var(--s500); }
.mc-nav-links { display: none; align-items: center; gap: 26px; }
.mc-nav-link {
  position: relative;
  font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase;
  letter-spacing: 0.14em; color: var(--s400); text-decoration: none;
  display: inline-flex; align-items: baseline; gap: 6px;
  padding-bottom: 4px;
  transition: color 220ms var(--ease);
}
.mc-nav-link::after {
  content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 1px;
  background: var(--green); transform: scaleX(0); transform-origin: right;
  transition: transform 320ms var(--ease);
}
.mc-nav-link:hover::after, .mc-nav-link.is-active::after { transform: scaleX(1); transform-origin: left; }
.mc-nav-link:hover, .mc-nav-link.is-active { color: var(--green); }
.mc-nav-link span.num { color: rgba(0,255,148,0.5); transition: color 220ms; }
.mc-nav-link.is-active span.num { color: var(--green); }

.mc-icon-btn { display: inline-flex; align-items: center; justify-content: center; width: 38px; height: 38px; border-radius: 999px; border: 1px solid var(--border); color: var(--s300); transition: border-color 200ms, color 200ms, transform 260ms var(--spring); flex-shrink: 0; }
.mc-icon-btn:hover { border-color: var(--green); color: var(--green); transform: translateY(-2px); }
.mc-icon-btn:active { transform: scale(0.92); transition-duration: 90ms; }
.mc-menu-toggle { display: inline-flex; background: transparent; border: none; color: var(--s300); cursor: pointer; transition: transform 120ms ease-out, color 200ms; }
.mc-menu-toggle:active { transform: scale(0.88); }

.mc-mobile-nav {
  position: absolute; top: calc(100% + 10px); left: 0; right: 0;
  background: rgba(15,16,20,0.92); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08); border-radius: 20px;
  box-shadow: 0 16px 40px -14px rgba(0,0,0,0.55);
  display: flex; flex-direction: column; padding: 8px 20px 12px;
  transform-origin: top center;
  opacity: 0; visibility: hidden; transform: translateY(-10px) scale(0.98);
  transition: opacity 220ms var(--ease), transform 340ms var(--spring), visibility 0s linear 340ms;
}
.mc-mobile-nav.mc-open {
  opacity: 1; visibility: visible; transform: none;
  transition: opacity 220ms var(--ease), transform 340ms var(--spring), visibility 0s;
}
.mc-mobile-nav a {
  padding: 12px 2px; border-bottom: 1px solid var(--line); color: var(--s200); text-decoration: none;
  font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.08em;
  opacity: 0; transform: translateY(-8px);
  transition: opacity 260ms var(--ease), transform 300ms var(--ease), color 200ms;
}
.mc-mobile-nav.mc-open a {
  opacity: 1; transform: none;
  transition-delay: calc(70ms + var(--i, 0) * 45ms);
}
.mc-mobile-nav a:active { color: var(--green); }
.mc-mobile-nav a:last-child { border-bottom: none; }
.mc-header.mc-scrolled .mc-mobile-nav { left: 16px; right: 16px; }
.mc-header:not(.mc-scrolled) .mc-mobile-nav { border-radius: 0; top: 64px; }

@media (min-width: 640px) { .mc-brand-name { display: inline; } }
@media (min-width: 1280px) { .mc-nav-links { display: flex; } .mc-menu-toggle { display: none; } }

/* ---- buttons ---- */
.mc-btn-ghost, .mc-btn-primary {
  position: relative; overflow: hidden;
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid var(--border-input); padding: 13px 24px;
  font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 500;
  text-transform: uppercase; letter-spacing: 0.1em; text-decoration: none;
  cursor: pointer; background: transparent;
  transition: border-color 200ms var(--ease), color 200ms var(--ease);
}
/* A green wash wipes in from the left on hover, behind the label. */
.mc-btn-ghost::before, .mc-btn-primary::before {
  content: ""; position: absolute; inset: 0; z-index: 0;
  background: rgba(0,255,148,0.10);
  transform: scaleX(0); transform-origin: left;
  transition: transform 420ms var(--ease);
}
.mc-btn-ghost:hover::before, .mc-btn-primary:hover::before { transform: scaleX(1); }
.mc-btn-ghost > *, .mc-btn-primary > * { position: relative; z-index: 1; }
.mc-btn-ghost { color: var(--s200); }
.mc-btn-ghost:hover { border-color: var(--green); color: var(--green); }
.mc-btn-primary { color: var(--green); }
.mc-btn-primary:hover { border-color: var(--green); }
.mc-btn-ghost:active, .mc-btn-primary:active { filter: brightness(0.92); }
.mc-btn-ghost .mc-btn-icon, .mc-btn-primary .mc-btn-icon { transition: transform 320ms var(--spring); }
.mc-btn-ghost:hover .mc-btn-icon-down, .mc-btn-primary:hover .mc-btn-icon-down { transform: translateY(3px); }
.mc-btn-ghost:hover .mc-btn-icon-send, .mc-btn-primary:hover .mc-btn-icon-send { transform: translateX(3px); }

/* Wrapper that the magnetic hover writes its transform onto, so the entrance
   animation on the parent and the pointer tracking never collide. */
.mc-magnet { display: inline-flex; will-change: transform; }

/* ---- layout / sections ---- */
.mc-container { max-width: 1152px; margin: 0 auto; padding: 0 20px; }
.mc-section { border-top: 1px solid var(--line); scroll-margin-top: var(--header-offset); }
.mc-section-inner { max-width: 1152px; margin: 0 auto; padding: 80px 20px; }
.mc-section-head { display: flex; align-items: center; gap: 16px; margin-bottom: 48px; }
.mc-section-head .rule { height: 1px; flex: 1; background: var(--line); transform: scaleX(0); transform-origin: left; }
.mc-section-head.mc-visible .rule { transform: scaleX(1); transition: transform 1100ms var(--ease) 120ms; }
.mc-h2 { font-family: 'Space Grotesk', sans-serif; font-weight: 600; letter-spacing: -0.01em; color: var(--white); font-size: clamp(28px, 4vw, 44px); line-height: 1.1; margin: 0; }
.mc-h2 .dim { color: var(--s500); }

@media (min-width: 640px) { .mc-section-inner { padding: 96px 32px; } }

/* ---- hero ---- */
.mc-hero { position: relative; overflow: hidden; border-bottom: 1px solid var(--line); scroll-margin-top: 0;
  background-image: radial-gradient(ellipse 80% 60% at 72% 20%, rgba(0,255,148,0.08), transparent 60%); }
.mc-hero-grid { position: absolute; inset: -10% 0 -10% auto; width: 46%; opacity: 0.35; pointer-events: none; display: none;
  background-image: linear-gradient(rgba(93,101,118,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(93,101,118,0.35) 1px, transparent 1px);
  background-size: 48px 48px;
  will-change: transform;
  -webkit-mask-image: linear-gradient(to left, black, transparent 90%);
  mask-image: linear-gradient(to left, black, transparent 90%); }
@media (min-width: 1024px) { .mc-hero-grid { display: block; } }
.mc-hero-inner { position: relative; max-width: 1152px; margin: 0 auto; padding: 148px 20px 88px; }
@media (min-width: 640px) { .mc-hero-inner { padding: 168px 32px 108px; } }
.mc-hero h1 { font-family: 'Space Grotesk', sans-serif; font-weight: 600; letter-spacing: -0.02em; color: var(--white);
  font-size: clamp(38px, 6.5vw, 78px); line-height: 1.03; margin: 20px 0 0; }
/* The headline is the one place the page spends its boldness: each word
   unmasks upward, one after the next. */
.mc-word { display: inline-block; overflow: hidden; vertical-align: bottom; }
.mc-word > span { display: inline-block; transform: translateY(105%); }
.mc-lit .mc-word > span {
  transform: none;
  transition: transform 900ms var(--ease);
  transition-delay: calc(240ms + var(--i, 0) * 110ms);
}
.mc-scroll-cue { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); color: var(--s600); animation: mc-bounce 1.8s ease-in-out infinite; display: none; transition: opacity 400ms var(--ease); }
.mc-scroll-cue.mc-faded { opacity: 0; pointer-events: none; }
@media (min-width: 1024px) { .mc-scroll-cue { display: flex; } }

/* ---- tags/chips ---- */
.mc-chip { border: 1px solid var(--border); background: var(--bg-raised); padding: 6px 12px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--s300); transition: border-color 220ms var(--ease), color 220ms var(--ease), background 220ms var(--ease); }
.mc-chip:hover { border-color: rgba(0,255,148,0.6); color: var(--green); background: rgba(0,255,148,0.05); }
.mc-stack-chip { border: 1px solid var(--border); background: var(--bg-chip); padding: 4px 10px; font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--s400); transition: border-color 220ms, color 220ms; }
.mc-stack-chip:hover { border-color: rgba(0,255,148,0.45); color: var(--s200); }

/* ---- about / experience ---- */
.mc-callout { margin-top: 24px; border-left: 2px solid var(--green); padding-left: 16px; font-family: 'JetBrains Mono', monospace; font-size: 13px; font-style: italic; letter-spacing: 0.02em; color: var(--green); }
.mc-exp-row { display: grid; gap: 16px; grid-template-columns: 1fr; }
@media (min-width: 640px) { .mc-exp-row { grid-template-columns: 180px 1fr; gap: 32px; } }
.mc-exp-body { position: relative; border-left: none; padding-left: 28px; }
/* The rule beside each role draws itself downward as the row arrives. */
.mc-exp-body::before {
  content: ""; position: absolute; left: 0; top: 0; width: 2px; height: 100%;
  background: var(--line); transform: scaleY(0); transform-origin: top;
  transition: transform 820ms var(--ease) 140ms, background 320ms var(--ease);
}
.mc-exp-row.mc-visible .mc-exp-body::before { transform: scaleY(1); }
.mc-exp-row:hover .mc-exp-body::before { background: rgba(0,255,148,0.55); }
.mc-exp-row .mc-exp-body h3 { transition: color 220ms var(--ease); }
.mc-exp-row:hover .mc-exp-body h3 { color: var(--green); }

/* ---- project cards ---- */
.mc-card {
  position: relative; border: 1px solid var(--border); background: var(--bg-raised); padding: 28px;
  transform-style: preserve-3d;
  transition: border-color 300ms var(--ease), box-shadow 320ms var(--ease);
}
.mc-card.mc-visible {
  transition: opacity 620ms var(--ease), transform 300ms var(--ease),
              border-color 300ms var(--ease), box-shadow 320ms var(--ease);
}
.mc-card:hover { border-color: rgba(0,255,148,0.4); box-shadow: 0 24px 60px -30px rgba(0,255,148,0.35); }
.mc-card::before { content: ""; position: absolute; inset: 0 0 auto 0; height: 1px; background: var(--green); transform: scaleX(0); transform-origin: left; transition: transform 520ms var(--ease); }
.mc-card:hover::before { transform: scaleX(1); }
/* A soft light follows the cursor across the card. */
.mc-card::after {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  opacity: var(--glow, 0); transition: opacity 320ms var(--ease);
  background: radial-gradient(460px circle at var(--mx, 50%) var(--my, 50%), rgba(0,255,148,0.10), transparent 62%);
}
/* auto-fit instead of a fixed 2-column split: with only one card left after
   the featured project, it now stretches to fill the row instead of leaving
   an empty, lopsided gap next to it. */
.mc-project-grid { display: grid; gap: 20px; grid-template-columns: 1fr; }
@media (min-width: 768px) { .mc-project-grid { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); } }

/* ---- skills ---- */
.mc-skill-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  perspective: 1200px;
}

@media (min-width: 768px) {
  .mc-skill-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.mc-skill-chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* Falling skill blocks */
.mc-skill-fall {
  border: 1px solid var(--border);
  background: var(--bg-raised);
  padding: 24px;

  opacity: 0;

  transform:
    translate3d(var(--fall-x, 0px), -180px, 0)
    rotate(var(--fall-rotate, 0deg))
    scale(0.94);

  transform-origin: center top;

  will-change: transform, opacity;

  transition:
    transform 900ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 320ms ease,
    border-color 300ms var(--ease);
}

/* Individual starting positions */
.mc-skill-fall:nth-child(1) {
  --fall-x: -55px;
  --fall-rotate: -5deg;
  transition-delay: 0ms;
}

.mc-skill-fall:nth-child(2) {
  --fall-x: 0px;
  --fall-rotate: 4deg;
  transition-delay: 90ms;
}

.mc-skill-fall:nth-child(3) {
  --fall-x: 55px;
  --fall-rotate: -4deg;
  transition-delay: 180ms;
}

/* Landing state */
.mc-skill-fall.mc-skill-landed {
  opacity: 1;

  transform:
    translate3d(0, 0, 0)
    rotate(0deg)
    scale(1);
}

/* Little landing lift/bounce */
.mc-skill-fall.mc-skill-landed:hover {
  transform:
    translate3d(0, -5px, 0)
    rotate(0deg)
    scale(1.01);
}

.mc-skill-fall:hover {
  border-color: rgba(0,255,148,0.35);
}

/* Skill chips wait for their card to land */
.mc-skill-fall .mc-chip {
  opacity: 0;
  transform: translateY(-12px) scale(0.94);
}

.mc-skill-fall.mc-skill-landed .mc-chip {
  animation: mc-skill-chip-land 520ms var(--spring) both;
  animation-delay: calc(380ms + var(--i, 0) * 55ms);
}

@keyframes mc-skill-chip-land {
  0% {
    opacity: 0;
    transform: translateY(-12px) scale(0.94);
  }

  70% {
    opacity: 1;
    transform: translateY(2px) scale(1.02);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ---- smaller screens ---- */
@media (max-width: 767px) {
  .mc-skill-fall {
    transform:
      translate3d(0, -120px, 0)
      rotate(var(--fall-rotate, 0deg))
      scale(0.96);
  }

  .mc-skill-fall:nth-child(1) {
    --fall-rotate: -3deg;
  }

  .mc-skill-fall:nth-child(2) {
    --fall-rotate: 3deg;
  }

  .mc-skill-fall:nth-child(3) {
    --fall-rotate: -2deg;
  }
}

/* ---- writing ---- */
.mc-article { position: relative; display: flex; flex-direction: column; gap: 12px; padding: 28px 0; border-bottom: 1px solid var(--line); text-decoration: none; }
.mc-article:first-child { border-top: 1px solid var(--line); }
@media (min-width: 640px) { .mc-article { flex-direction: row; align-items: baseline; gap: 32px; } }
/* A green line sweeps along the row's baseline on hover. */
.mc-article::after { content: ""; position: absolute; left: 0; right: 0; bottom: -1px; height: 1px; background: var(--green); transform: scaleX(0); transform-origin: left; transition: transform 520ms var(--ease); }
.mc-article:hover::after { transform: scaleX(1); }
.mc-article h3 { transition: color 220ms var(--ease); }
.mc-article:hover h3 { color: var(--green); }
.mc-article:hover time { color: var(--s400); }
.mc-article time { transition: color 220ms var(--ease); }
.mc-article:hover .mc-article-arrow { transform: translate(3px, -3px); color: var(--green); }
.mc-article-arrow { transition: transform 320ms var(--spring), color 220ms var(--ease); color: var(--s600); }

/* ---- contact ---- */
.mc-field { position: relative; }
.mc-input { width: 100%; border: none; border-bottom: 1px solid var(--border-input); background: transparent; color: var(--white); font-size: 15px; padding: 10px 2px; outline: none; transition: border-color 200ms var(--ease); font-family: 'Inter', sans-serif; }
.mc-input::placeholder { color: var(--s600); transition: opacity 220ms var(--ease), transform 220ms var(--ease); }
.mc-input:focus::placeholder { opacity: 0.4; }
.mc-field::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: var(--green); transform: scaleX(0); transform-origin: left; transition: transform 380ms var(--ease); }
.mc-field:focus-within::after { transform: scaleX(1); }
.mc-label { display: block; margin-bottom: 8px; font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: var(--s500); transition: color 220ms var(--ease); }
.mc-field:focus-within .mc-label { color: var(--green); }

/* ---- footer ---- */
.mc-footer { border-top: 1px solid var(--line); background: var(--bg-footer); }
.mc-footer-inner { max-width: 1152px; margin: 0 auto; padding: 56px 20px; }
.mc-footer-link { display: inline-flex; align-items: center; gap: 8px; color: var(--s400); text-decoration: none; font-family: 'JetBrains Mono', monospace; font-size: 12px; transition: color 200ms var(--ease), transform 260ms var(--ease); }
.mc-footer-link:hover { color: var(--green); transform: translateY(-1px); }
.mc-to-top { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--s500); text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: color 220ms var(--ease); }
.mc-to-top:hover { color: var(--green); }
.mc-to-top .mc-to-top-arrow { display: inline-block; transition: transform 360ms var(--spring); }
.mc-to-top:hover .mc-to-top-arrow { transform: translateY(-4px); }

/* Reduced motion: keep the feedback, drop the travel. Everything lands in
   place; only opacity and color still move. */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .mc-root * , .mc-root *::before, .mc-root *::after {
    animation-duration: 1ms !important;
    animation-delay: 0ms !important;
    transition-duration: 120ms !important;
    transition-delay: 0ms !important;
  }
  .mc-reveal, .mc-rise, .mc-stagger > * { opacity: 1 !important; transform: none !important; }
  .mc-word > span { transform: none !important; }
  .mc-header.mc-hidden { transform: none; }
  .mc-blink::after, .mc-caret::after, .mc-scroll-cue { animation: none; }
  .mc-section-head .rule, .mc-exp-body::before { transform: none !important; }
}
`;

/* ---------------------------------------------------------------------- */
/* Motion utilities                                                         */
/* ---------------------------------------------------------------------- */

const prefersReduced = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Smooth scroll, offset so a section never lands under the fixed header. */
// function scrollToHash(hash) {
//   if (typeof document === "undefined") return;
//   const el = document.querySelector(hash);
//   if (!el) return;
//   const offset = hash === "#top" ? 0 : HEADER_OFFSET;
//   const top = Math.max(el.getBoundingClientRect().top + window.scrollY - offset, 0);
//   window.scrollTo({ top, behavior: prefersReduced() ? "auto" : "smooth" });
// }

function useLenis() {
  useEffect(() => {
    if (prefersReduced()) return;

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      lerp: 0.08,
    });

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}

function smoothScrollTo(targetY, duration = 900) {
  // const startY = window.scrollY;
  // const distance = targetY - startY;
  const startTime = performance.now();

  // Framer-like ease-out curve
  // const ease = (t) => 1 - Math.pow(1 - t, 4);

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}

function scrollToHash(hash) {
  if (typeof document === "undefined") return;

  const el = document.querySelector(hash);
  if (!el) return;

  const offset = hash === "#top" ? 0 : HEADER_OFFSET;

  const top = Math.max(
    el.getBoundingClientRect().top + window.scrollY - offset,
    0
  );

  if (prefersReduced()) {
    window.scrollTo(0, top);
    return;
  }

  smoothScrollTo(top, 950);
}

/* One delegated listener handles every in-page anchor on the site — nav,
   hero buttons, the footer's "back to the cover" link. */
function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      const target = e.target;
      if (!target || typeof target.closest !== "function") return;
      const anchor = target.closest('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#" || !document.querySelector(hash)) return;
      e.preventDefault();
      scrollToHash(hash);
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", hash);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

/* rAF-throttled scroll state: progress bar, header pill, hide-on-scroll-down. */
function useScrollState() {
  const [state, setState] = useState({ progress: 0, scrolled: false, hidden: false, past: false });
  useEffect(() => {
    let frame = 0;
    let lastY = window.scrollY;
    const read = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const goingDown = y > lastY + 4;
      const goingUp = y < lastY - 4;
      setState((prev) => ({
        progress: max > 0 ? Math.min(Math.max(y / max, 0), 1) : 0,
        scrolled: y > 24,
        past: y > 80,
        hidden: goingDown && y > 320 ? true : goingUp ? false : prev.hidden,
      }));
      lastY = y;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(read); };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return state;
}

/* Scroll spy — the nav marks where you actually are on the page. */
function useActiveSection(ids) {
  const [active, setActive] = useState("");
  const key = ids.join(",");
  useEffect(() => {
    const els = key.split(",").map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
  return active;
}

/* Reveal-on-scroll. Elements in the same batch stagger; reduced motion shows
   everything immediately. */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = Array.from(root.querySelectorAll(".mc-reveal"));
    if (targets.length === 0) return;
    if (prefersReduced()) {
      targets.forEach((t) => t.classList.add("mc-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        const arriving = entries.filter((e) => e.isIntersecting);
        arriving.forEach((entry, i) => {
          entry.target.style.transitionDelay = `${Math.min(i * 80, 420)}ms`;
          entry.target.classList.add("mc-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

function useSkillFall() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll(".mc-skill-fall"));

    if (!cards.length) return;

    if (prefersReduced()) {
      cards.forEach((card) => {
        card.classList.add("mc-skill-landed");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mc-skill-landed");
          } else {
            entry.target.classList.remove("mc-skill-landed");
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return ref;
}

/* Types a string out one character at a time. */
function useTypewriter(text, { speed = 38, delay = 420 } = {}) {
  const [out, setOut] = useState(() => (prefersReduced() ? text : ""));
  const [done, setDone] = useState(() => prefersReduced());
  useEffect(() => {
    if (prefersReduced()) { setOut(text); setDone(true); return; }
    let i = 0;
    let timer = 0;
    const tick = () => {
      i += 1;
      setOut(text.slice(0, i));
      if (i < text.length) timer = setTimeout(tick, speed);
      else setDone(true);
    };
    timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [text, speed, delay]);
  return [out, done];
}

/* Sets .mc-lit on mount so the hero's entrance sequence can run. */
function useEntrance() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const id = requestAnimationFrame(() => el.classList.add("mc-lit"));
    return () => cancelAnimationFrame(id);
  }, []);
  return ref;
}

/* Magnetic hover: the element leans a few pixels toward the cursor and eases
   back when the pointer leaves. Pointer-only and off under reduced motion. */
function Magnetic({ children, strength = 9, className = "", style }) {
  const ref = useRef(null);
  const frame = useRef(0);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  const loop = useCallback(() => {
    frame.current = 0;
    const el = ref.current;
    if (!el) return;
    const p = pos.current;
    p.x += (p.tx - p.x) * 0.18;
    p.y += (p.ty - p.y) * 0.18;
    const settled = Math.abs(p.tx - p.x) < 0.08 && Math.abs(p.ty - p.y) < 0.08;
    if (settled) { p.x = p.tx; p.y = p.ty; }
    el.style.transform = `translate3d(${p.x.toFixed(2)}px, ${p.y.toFixed(2)}px, 0)`;
    if (!settled) frame.current = requestAnimationFrame(loop);
  }, []);

  const kick = useCallback(() => {
    if (!frame.current) frame.current = requestAnimationFrame(loop);
  }, [loop]);

  useEffect(() => () => { if (frame.current) cancelAnimationFrame(frame.current); }, []);

  const onPointerMove = (e) => {
    if (e.pointerType === "touch" || prefersReduced()) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    pos.current.tx = ((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * strength;
    pos.current.ty = ((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * strength;
    kick();
  };

  const reset = () => { pos.current.tx = 0; pos.current.ty = 0; kick(); };

  return (
    <span
      ref={ref}
      className={`mc-magnet ${className}`}
      style={style}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      onBlur={reset}
    >
      {children}
    </span>
  );
}

/* Card with a cursor-following light and a very slight tilt. */
function Card({ as: Tag = "article", className = "", children, tilt = 2.5, ...rest }) {
  const ref = useRef(null);

  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el || prefersReduced()) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
    el.style.setProperty("--glow", "1");
    if (e.pointerType !== "touch") {
      el.style.transform =
        `perspective(1000px) rotateX(${((0.5 - py) * tilt).toFixed(2)}deg) ` +
        `rotateY(${((px - 0.5) * tilt).toFixed(2)}deg) translateY(-3px)`;
    }
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--glow", "0");
    el.style.transform = "";
  };

  return (
    <Tag
      ref={ref}
      className={`mc-card ${className}`}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------------------- */
/* Shell                                                                    */
/* ---------------------------------------------------------------------- */

function Section({ id, index, label, children, refProp }) {
  return (
    <section id={id} className="mc-section" ref={refProp}>
      <div className="mc-section-inner">
        <div className="mc-section-head mc-reveal">
          <span className="mc-eyebrow">{index} / {label}</span>
          <span className="rule" />
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* Sections                                                                 */
/* ---------------------------------------------------------------------- */

export function SiteHeader({ onNavigate }) {
  const { scrolled, hidden, progress } = useScrollState();
  const active = useActiveSection(NAV_IDS);
  const [open, setOpen] = useState(false);

  // Collapse the mobile menu as soon as the page starts moving.
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", close); window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <>
      <div className="mc-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden />
      <header className={`mc-header${scrolled ? " mc-scrolled" : ""}${hidden && !open ? " mc-hidden" : ""}`}>
        <div className="mc-header-inner">
          <a href="#top" className="mc-mono-brand" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }} onClick={onNavigate}>
            DS<span className="mc-brand-slash">/</span>
            <span className="mc-brand-name">Devarsh Shah</span>
          </a>
          <nav className="mc-nav-links">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`mc-nav-link${active === item.href.slice(1) ? " is-active" : ""}`}
                onClick={onNavigate}
              >
                <span className="num">{item.num}</span>{item.label}
              </a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="mc-icon-btn">
              <Linkedin size={16} />
            </a>
            <button className="mc-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          <div className={`mc-mobile-nav${open ? " mc-open" : ""}`} aria-hidden={!open}>
            {NAV.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                style={{ "--i": i }}
                tabIndex={open ? 0 : -1}
                onClick={() => { setOpen(false); onNavigate && onNavigate(); }}
              >
                {item.num} / {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

function Hero() {
  const ref = useEntrance();
  const gridRef = useRef(null);
  const [cueFaded, setCueFaded] = useState(false);
  const [typed, typingDone] = useTypewriter(`$ whoami → ${HERO.tagline.toLowerCase()}`);
  const words = HERO.headline.split(" ");

  // Grid drifts slower than the page as you scroll — depth without a
  // full-viewport moving background.
  useEffect(() => {
    if (prefersReduced()) return;
    let frame = 0;
    const read = () => {
      frame = 0;
      const y = window.scrollY;
      if (gridRef.current) gridRef.current.style.transform = `translate3d(0, ${(y * 0.14).toFixed(1)}px, 0)`;
      setCueFaded(y > 90);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(read); };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return (
    <section id="top" className="mc-hero" ref={ref}>
      <div className="mc-hero-grid" ref={gridRef} aria-hidden />
      <div className="mc-hero-inner">
        <p className={`mc-mono ${typingDone ? "mc-blink" : "mc-caret"}`} style={{ fontSize: 13, letterSpacing: "0.2em", color: "var(--green)", marginBottom: 0, minHeight: 18 }}>
          {typed}
        </p>

        <h1 aria-label={HERO.headline}>
          {words.map((w, i) => (
            <span key={w + i} className="mc-word" style={{ "--i": i }} aria-hidden>
              <span>{w}</span>{i < words.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </h1>

        <p className="mc-rise mc-blink mc-mono" style={{ "--i": 4, marginTop: 24, fontSize: 13, letterSpacing: "0.14em", color: "var(--s400)" }}>
          {HERO.stackLine}
        </p>
        <p className="mc-rise" style={{ "--i": 5, marginTop: 12, maxWidth: 560, fontSize: 16, fontStyle: "italic", lineHeight: 1.6, color: "var(--s300)" }}>
          {HERO.subhead}
        </p>
        <p className="mc-rise" style={{ "--i": 6, marginTop: 24, maxWidth: 560, fontSize: 15, lineHeight: 1.7, color: "var(--s400)" }}>
          I turn business requirements into scalable systems. Tabs full of Postman collections, SQL queries, and AWS consoles. I don't just write code — <span style={{ fontStyle: "italic", color: "var(--s200)" }}>I architect it to last.</span>
        </p>

        <div className="mc-rise" style={{ "--i": 7, marginTop: 40, display: "flex", flexWrap: "wrap", gap: 16 }}>
          <Magnetic>
            <a href="#about" className="mc-btn-ghost"><span>My Story</span> <ArrowDown size={15} className="mc-btn-icon mc-btn-icon-down" /></a>
          </Magnetic>
          <Magnetic>
            <a href={CONTACT.resume} download className="mc-btn-ghost"><FileDown size={15} className="mc-btn-icon" /> <span>Download Resume</span></a>
          </Magnetic>
        </div>

        <div className="mc-rise mc-stagger" style={{ "--i": 8, marginTop: 56, display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px 12px" }}>
          <span className="mc-mono" style={{ "--i": 0, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--s600)", marginRight: 4 }}>stack //</span>
          {HERO.tags.map((t, i) => <span key={t} className="mc-chip" style={{ "--i": i + 1 }}>{t}</span>)}
        </div>

        <div className="mc-rise" style={{ "--i": 9, marginTop: 32, display: "flex", flexWrap: "wrap", gap: "6px 12px", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--s500)" }}>
          <span style={{ color: "var(--s600)" }}>{HERO.strip}</span>
          <span style={{ fontStyle: "italic", color: "var(--s600)" }}>· {HERO.footnote}</span>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to about" className={`mc-scroll-cue${cueFaded ? " mc-faded" : ""}`}>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}

function About() {
  const ref = useReveal();
  return (
    <Section id="about" index="01" label="About" refProp={ref}>
      <div className="mc-reveal" style={{ marginTop: -8, marginBottom: 48 }}>
        <h2 className="mc-h2">{ABOUT.heading}</h2>
      </div>
      <div style={{ display: "grid", gap: 40 }} className="mc-grid2">
        <style>{`@media (min-width:1024px){.mc-grid2{grid-template-columns:1fr 1fr;gap:64px;}}`}</style>
        <div className="mc-reveal">
          {ABOUT.col1.map((p, i) => (
            <p key={i} style={{ marginTop: i === 0 ? 0 : 20, fontSize: i === 0 ? 16 : 15, lineHeight: 1.75, color: i === 0 ? "var(--s300)" : "var(--s400)" }}>{p}</p>
          ))}
        </div>
        <div className="mc-reveal">
          {ABOUT.col2.map((p, i) => (
            <p key={i} style={{ marginTop: i === 0 ? 0 : 20, fontSize: 15, lineHeight: 1.75, color: "var(--s400)" }}>{p}</p>
          ))}
          <p className="mc-callout">{ABOUT.callout}</p>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  const ref = useReveal();
  return (
    <Section id="experience" index="02" label="Experience" refProp={ref}>
      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {EXPERIENCE.map((e) => (
          <div key={e.company} className="mc-reveal mc-exp-row">
            <div className="mc-mono" style={{ fontSize: 12, color: "var(--s500)" }}>{e.range}</div>
            <div className="mc-exp-body">
              <h3 className="mc-display" style={{ fontSize: 21, fontWeight: 600, color: "var(--white)", margin: 0 }}>{e.role}</h3>
              <p className="mc-mono" style={{ marginTop: 4, fontSize: 12, color: "var(--green)" }}>{e.company}</p>
              <ul style={{ marginTop: 16, paddingLeft: 20, fontSize: 14, lineHeight: 1.75, color: "var(--s400)" }}>
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  const ref = useReveal();
  const [featured, ...rest] = PROJECTS;
  return (
    <Section id="projects" index="03" label="Projects" refProp={ref}>
      <div className="mc-reveal" style={{ marginTop: -8, marginBottom: 16 }}>
        <h2 className="mc-h2">Selected <span className="dim">work.</span></h2>
      </div>
      <p className="mc-reveal" style={{ marginBottom: 40, maxWidth: 560, fontSize: 15, lineHeight: 1.7, color: "var(--s400)" }}>
        Systems I designed and shipped in production — client platforms and full-stack applications built with Java, Spring Boot, and React. Ask for the repo links on request.
      </p>

      <Card className="mc-reveal" style={{ marginBottom: 20 }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 16 }}>
          <div>
            <div className="mc-mono" style={{ marginBottom: 10, display: "flex", alignItems: "center", gap: 8, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--green)" }}>
              <Star size={12} /> Featured
            </div>
            <h3 className="mc-display" style={{ fontSize: 26, fontWeight: 600, color: "var(--white)", margin: 0 }}>{featured.name}</h3>
            <p className="mc-mono" style={{ marginTop: 4, fontSize: 12, color: "var(--s500)" }}>{featured.tagline}</p>
          </div>
          {/* <div style={{ display: "flex", gap: 16 }}>
            <a href={featured.demo} target="_blank" rel="noreferrer" className="mc-link mc-mono" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em" }}>
              <ExternalLink size={12} /> Live demo
            </a>
            <a href={featured.repo} target="_blank" rel="noreferrer" className="mc-link mc-mono" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em" }}>
              <Github size={12} /> Repo
            </a>
          </div> */}
        </div>
        <p style={{ marginTop: 20, maxWidth: 640, fontSize: 15, lineHeight: 1.7, color: "var(--s400)" }}>{featured.description}</p>
        <ul style={{ marginTop: 20, maxWidth: 640, paddingLeft: 20, fontSize: 14, lineHeight: 1.7, color: "var(--s400)" }}>
          {featured.bullets.map((b, j) => <li key={j}>{b}</li>)}
        </ul>
        <div className="mc-stagger" style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
          {featured.stack.map((t, i) => <span key={t} className="mc-stack-chip" style={{ "--i": i }}>{t}</span>)}
        </div>
      </Card>

      <div className="mc-project-grid">
        {rest.map((p) => (
          <Card key={p.name} className="mc-reveal">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
              <div>
                <h3 className="mc-display" style={{ fontSize: 18, fontWeight: 600, color: "var(--white)", margin: 0 }}>{p.name}</h3>
                <p className="mc-mono" style={{ marginTop: 2, fontSize: 11, color: "var(--s500)" }}>{p.tagline}</p>
              </div>
              {/* <div style={{ display: "flex", gap: 12, flexShrink: 0 }}>
                <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.name} live demo`} style={{ color: "var(--s500)" }}><ExternalLink size={14} /></a>
                <a href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.name} repository`} style={{ color: "var(--s500)" }}><Github size={14} /></a>
              </div> */}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--s400)" }}>{p.description}</p>
            <ul style={{ marginTop: 16, paddingLeft: 18, fontSize: 13.5, lineHeight: 1.65, color: "var(--s400)" }}>
              {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
            <div className="mc-stagger" style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.stack.map((t, i) => <span key={t} className="mc-stack-chip" style={{ "--i": i }}>{t}</span>)}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const ref = useSkillFall();

  return (
    <Section id="skills" index="04" label="Skills" refProp={ref}>
      <div className="mc-skill-grid">
        {SKILLS.map((cat) => (
          <div
            key={cat.title}
            className="mc-skill-fall"
          >
            <h3
              className="mc-mono"
              style={{
                marginBottom: 18,
                paddingBottom: 12,
                borderBottom: "1px solid var(--line)",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "var(--green)",
              }}
            >
              {cat.title}
            </h3>

            <div className="mc-skill-chip-list">
              {cat.items.map((s, i) => (
                <span
                  key={s}
                  className="mc-chip"
                  style={{ "--i": i }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        className="mc-reveal mc-mono"
        style={{
          marginTop: 36,
          display: "flex",
          flexWrap: "wrap",
          gap: "6px 24px",
          fontSize: 12,
          color: "var(--s500)",
        }}
      >
        <span style={{ color: "var(--s600)" }}>
          {"// also fluent in"}
        </span>

        <span>REST / GraphQL</span>
        <span style={{ color: "var(--s700)" }}>·</span>

        <span>CI/CD</span>
        <span style={{ color: "var(--s700)" }}>·</span>

        <span>System Design</span>
        <span style={{ color: "var(--s700)" }}>·</span>

        <span>Accessibility</span>
        <span style={{ color: "var(--s700)" }}>·</span>

        <span>Open-Source Collaboration</span>
      </div>
    </Section>
  );
}

function Writing() {
  const ref = useReveal();
  const formatDate = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  return (
    <Section id="writing" index="05" label="Writing" refProp={ref}>
      <div className="mc-reveal" style={{ marginTop: -8, marginBottom: 40, maxWidth: 560 }}>
        <h2 className="mc-h2">Notes from the <span className="dim">build log.</span></h2>
        <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6, color: "var(--s400)" }}>
          Short technical notes on what I build — the patterns that stuck, the trade-offs that didn't.
        </p>
      </div>
      <div>
        {ARTICLES.map((a) => (
          <a key={a.slug} href={`/blog/${a.slug}`} className="mc-reveal mc-article">
            <time className="mc-mono" style={{ width: 110, flexShrink: 0, fontSize: 11, letterSpacing: "0.06em", color: "var(--s600)" }}>{formatDate(a.date)}</time>
            <div style={{ minWidth: 0, flex: 1 }}>
              <h3 className="mc-display" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 18, fontWeight: 500, color: "var(--white)", margin: 0 }}>
                {a.title} <ArrowUpRight size={15} className="mc-article-arrow" />
              </h3>
              <p style={{ marginTop: 6, fontSize: 14, lineHeight: 1.65, color: "var(--s400)" }}>{a.excerpt}</p>
              <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
                <span className="mc-mono" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--s600)" }}>{a.readTime}</span>
                {a.tags.map((t) => <span key={t} style={{ border: "1px solid var(--border)", padding: "2px 8px", fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--s500)" }}>{t}</span>)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const mailtoHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`)}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;

  return (
    <section id="contact" className="mc-section" style={{ background: "var(--bg-footer)" }} ref={ref}>
      <div className="mc-section-inner">
        <div className="mc-section-head mc-reveal">
          <span className="mc-eyebrow">06 / Contact</span>
          <span className="rule" />
        </div>
        <div style={{ display: "grid", gap: 56 }} className="mc-contact-grid">
          <style>{`@media (min-width:1024px){.mc-contact-grid{grid-template-columns:1.3fr 1fr;gap:80px;}}`}</style>
          <div>
            <h2 className="mc-reveal mc-h2">The next system I build could be <span className="dim">yours.</span></h2>
            <p className="mc-reveal" style={{ marginTop: 16, maxWidth: 460, fontSize: 15, lineHeight: 1.7, color: "var(--s400)" }}>
              Hiring? Looking for a Software Engineer? Or just want to connect? Those are my favorite. The form below works — it opens your mail app with everything pre-filled.
            </p>
            <div className="mc-reveal" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr 1fr" }}>
                <div className="mc-field">
                  <label className="mc-label" htmlFor="mc-name">Who are you?</label>
                  <input id="mc-name" className="mc-input" placeholder="Jane Recruiter" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="mc-field">
                  <label className="mc-label" htmlFor="mc-email">Where do I reply?</label>
                  <input id="mc-email" className="mc-input" placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className="mc-field">
                <label className="mc-label" htmlFor="mc-message">What's the story?</label>
                <textarea id="mc-message" className="mc-input" rows={5} placeholder="Role, project, or just a hello — tell me what you have in mind." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ resize: "vertical" }} />
              </div>
              <Magnetic style={{ alignSelf: "flex-start" }}>
                <a href={mailtoHref} className="mc-btn-primary">
                  <Send size={14} className="mc-btn-icon mc-btn-icon-send" /> <span>Send It</span>
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="mc-reveal">
            <Card as="a" href={CONTACT.resume} download style={{ display: "block", textDecoration: "none" }}>
              <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span className="mc-mono" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--green)" }}>Download</span>
                <FileDown size={16} style={{ color: "var(--s500)" }} />
              </div>
              <h3 className="mc-display" style={{ fontSize: 20, fontWeight: 600, color: "var(--white)", margin: 0 }}>Devarsh Shah — Resume</h3>
              <p style={{ marginTop: 8, fontSize: 13, lineHeight: 1.6, color: "var(--s400)" }}>PDF · last updated 2026 · experience, projects, and certifications in one page.</p>
            </Card>
            <div className="mc-mono" style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 14, fontSize: 12, color: "var(--s400)" }}>
              <a href={`mailto:${CONTACT.email}`} className="mc-footer-link"><Mail size={13} style={{ color: "rgba(0,255,148,0.7)" }} /> {CONTACT.email}</a>
              <a href={`tel:${CONTACT.phone}`} className="mc-footer-link"><MapPin size={13} style={{ color: "rgba(0,255,148,0.7)" }} /> {CONTACT.phone}</a>
              <a href={CONTACT.github} target="_blank" rel="noreferrer" className="mc-footer-link"><ExternalLink size={13} style={{ color: "rgba(0,255,148,0.7)" }} /> devarsh1029.github.io</a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="mc-footer-link"><ExternalLink size={13} style={{ color: "rgba(0,255,148,0.7)" }} /> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter({ homeHref = '#top' }) {
  return (
    <footer className="mc-footer">
      <div className="mc-footer-inner">
        <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
          <span className="mc-mono-brand" style={{ fontSize: 20 }}>DS<span className="mc-brand-slash">/</span></span>
          <span className="mc-mono" style={{ borderLeft: "1px solid var(--border)", paddingLeft: 12, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--s500)" }}>Backend · Cloud · Systems</span>
        </div>
        <div style={{ display: "grid", gap: 24 }} className="mc-footer-row">
          <style>{`@media (min-width:768px){.mc-footer-row{grid-template-columns:1fr auto;align-items:center;}}`}</style>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 28px" }}>
            <a href={`mailto:${CONTACT.email}`} className="mc-footer-link"><Mail size={13} /> {CONTACT.email}</a>
            <a href={`tel:${CONTACT.phone}`} className="mc-footer-link"><Phone size={13} /> {CONTACT.phone}</a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" className="mc-footer-link"><ExternalLink size={13} /> devarsh1029.github.io</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="mc-footer-link"><Linkedin size={13} /> LinkedIn</a>
          </div>
          <a href={homeHref} className="mc-to-top">Back to the cover <span className="mc-to-top-arrow">↑</span></a>
        </div>
        <div className="mc-mono" style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--s700)" }}>
          Devarsh Shah · Backend · Cloud · Systems &nbsp;|&nbsp; © 2026 Devarsh Shah. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------------- */
/* Page                                                                     */
/* ---------------------------------------------------------------------- */

export default function DevarshPortfolioNeon() {
  useLenis();
  useSmoothAnchors();
  return (
    <div className="mc-root">
      <style>{styles}</style>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Writing />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
