import React, { useState, useEffect, useRef } from "react";

const experiences = [
  {
    year: "2025 — Now",
    role: "Full Stack Developer",
    company: "Leo Tech Solutions",
    companyLink: "https://leotechsolutions.org/",
    type: "Full-time",
    desc: "Leading UI and backend development for internal tools and client-facing web apps. Responsible for both frontend architecture and backend API design.",
    achievements: [
      "Built and deployed 3 full-stack web applications",
      "Designed REST APIs consumed by mobile and web clients",
      "Improved page load performance by 35%",
    ],
    stack: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
  },
  {
    year: "2024 — 2025",
    role: "Frontend Developer",
    company: "Leo Tech Solutions",
    companyLink: "https://leotechsolutions.org/",
    type: "Internship → Full-time",
    desc: "Started as an intern and transitioned to a full-time role. Worked on React and React Native projects, contributing to both web dashboards and mobile app interfaces.",
    achievements: [
      "Promoted from intern to full-time within 3 months",
      "Built responsive dashboards used by 500+ daily users",
      "Integrated REST APIs across 2 mobile apps",
    ],
    stack: ["React", "React Native", "Expo", "NativeWind", "JavaScript"],
  },
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size:  Math.random() * 6 + 2,
  top:   Math.random() * 100,
  left:  Math.random() * 100,
  delay: Math.random() * 3,
  dur:   Math.random() * 3 + 2,
}));

function Particles({ visible }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <div key={p.id} className="absolute rounded-full bg-red-500/20"
          style={{
            width: p.size, height: p.size,
            top: `${p.top}%`, left: `${p.left}%`,
            opacity: visible ? 1 : 0,
            animation: visible ? `xpParticlePulse ${p.dur}s ease-in-out ${p.delay}s infinite` : "none",
            transition: `opacity 0.5s ease`,
          }}
        />
      ))}
    </div>
  );
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Experience() {
  const [active, setActive]       = useState(0);
  const [panelVisible, setPanelVisible] = useState(true);
  const [sectionRef, inView]      = useInView(0.15);

  const handleSelect = (i) => {
    if (i === active) return;
    setPanelVisible(false);
    setTimeout(() => { setActive(i); setPanelVisible(true); }, 220);
  };

  const exp = experiences[active];

  const entrance = (direction, delay) => ({
    opacity:   inView ? 1 : 0,
    transform: inView ? "translate(0,0)"
      : direction === "down"  ? "translateY(-28px)"
      : direction === "left"  ? "translateX(-28px)"
      : direction === "right" ? "translateX(28px)"
      : "translateY(28px)",
    transition: `opacity 0.7s cubic-bezier(.22,.68,0,1.2) ${delay}s,
                 transform 0.7s cubic-bezier(.22,.68,0,1.2) ${delay}s`,
  });

  return (
    <>
      <style>{`
        @keyframes xpParticlePulse {
          0%,100% { opacity:.15; transform:scale(1);   }
          50%      { opacity:.5;  transform:scale(1.6); }
        }
        @keyframes xpGlowPulse {
          0%,100% { opacity:.5; }
          50%      { opacity:1;  }
        }
        @keyframes checkPop {
          0%   { transform: scale(0) rotate(-10deg); opacity:0; }
          60%  { transform: scale(1.2) rotate(5deg);  opacity:1; }
          100% { transform: scale(1) rotate(0deg);   opacity:1; }
        }
        @keyframes stackTagSlide {
          from { opacity:0; transform:translateX(-10px); }
          to   { opacity:1; transform:translateX(0); }
        }

        .xp-sidebar-btn {
          transition: background 0.25s, border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .xp-sidebar-btn:hover:not(.xp-active) {
          background: rgba(255,255,255,0.06) !important;
          border-color: rgba(255,255,255,0.12) !important;
          transform: translateX(4px);
        }
        .xp-active {
          box-shadow: 0 0 20px rgba(122,0,0,0.3);
        }

        .xp-stack-tag {
          transition: border-color 0.25s, color 0.25s, box-shadow 0.25s, transform 0.2s;
        }
        .xp-stack-tag:hover {
          border-color: rgba(127,17,17,0.6) !important;
          color: rgba(255,255,255,0.85) !important;
          transform: translateY(-2px);
          box-shadow: 0 0 12px rgba(127,17,17,0.25);
        }

        .achievement-item {
          transition: transform 0.2s, color 0.2s;
        }
        .achievement-item:hover { transform: translateX(4px); }
        .achievement-item:hover span:last-child { color: rgba(255,255,255,0.85); }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration:.01ms !important; transition-duration:.01ms !important; }
        }
      `}</style>

      <section
        id="experience"
        ref={sectionRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-black via-black to-[#750B03] px-6 md:px-10 py-16"
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at center, #7a000099 0%, transparent 65%)",
          opacity: inView ? 1 : 0,
          animation: inView ? "xpGlowPulse 4s ease-in-out infinite" : "none",
          transition: "opacity 1s ease",
        }} />

        <Particles visible={inView} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: inView ? 0.04 : 0,
          transition: "opacity 1.2s ease 0.3s",
        }} />

        <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-12">

          <div style={entrance("down", 0.05)} className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <div style={{
                height: 1,
                background: "#dc2626",
                width: inView ? 32 : 0,
                transition: "width 0.6s ease 0.3s",
              }} />
              <span className="font-mono text-xs text-red-500 tracking-[4px] uppercase">Journey</span>
              <div style={{
                height: 1,
                background: "#dc2626",
                width: inView ? 32 : 0,
                transition: "width 0.6s ease 0.3s",
              }} />
            </div>
            <h2 className="font-mono text-5xl font-bold text-white">
              Work <span className="text-red-500">Experience</span>
            </h2>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6 items-stretch">
            <div className="flex flex-col gap-6 w-full md:w-[260px] mt-20 flex-shrink-0 justify-center">
              {experiences.map((e, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`xp-sidebar-btn${active === i ? " xp-active" : ""} text-left rounded-xl px-5 py-5 border`}
                  style={{
                    background: active === i ? "#3a0a00" : "transparent",
                    borderColor: active === i ? "rgba(153,27,27,0.6)" : "transparent",
                    opacity:   inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-24px)",
                    transition: `opacity 0.6s ease ${0.2 + i * 0.1}s,
                                 transform 0.6s cubic-bezier(.22,.68,0,1.2) ${0.2 + i * 0.1}s,
                                 background 0.25s, border-color 0.25s, box-shadow 0.25s`,
                  }}
                >
                  <p className={`font-mono text-xs mb-1 ${active === i ? "text-red-500" : "text-white/30"}`}>{e.year}</p>
                  <p className={`font-mono text-sm font-bold leading-snug ${active === i ? "text-white" : "text-white/60"}`}>{e.role}</p>
                  <p className={`font-mono text-xs mt-1 ${active === i ? "text-white/50" : "text-white/25"}`}>{e.company}</p>
                </button>
              ))}
            </div>
            <div
              style={{
                ...entrance("right", 0.25),
                ...(inView ? {
                  opacity:   panelVisible ? 1 : 0,
                  transform: panelVisible ? "translateY(0)" : "translateY(14px)",
                  transition: entrance("right", 0.25).transition + ", opacity 0.28s ease, transform 0.28s ease",
                } : {}),
                flex: 1,
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
                padding: 32,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{
                position: "absolute", top: 0, left: 32, right: 32, height: 1,
                background: "rgba(220,38,38,0.7)",
              }} />
              <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="font-mono text-2xl font-bold text-white">{exp.role}</h3>
                  <a href={exp.companyLink} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-sm text-blue-400 hover:text-blue-300 mt-1 inline-block"
                    style={{ transition: "color 0.2s" }}>
                    {exp.company}
                  </a>
                </div>
                <div className="flex gap-2 flex-shrink-0 mt-1">
                  <span className="font-mono text-xs bg-[#3a0a00] border border-red-800/60 text-red-400 px-4 py-1.5 rounded-full">{exp.year}</span>
                  <span className="font-mono text-xs bg-white/10 border border-white/15 text-white/50 px-4 py-1.5 rounded-full">{exp.type}</span>
                </div>
              </div>

              <p className="font-mono text-sm text-white/45 leading-relaxed mt-4 mb-6">{exp.desc}</p>
              <p className="font-mono text-xs text-red-600/80 tracking-[3px] uppercase mb-3">Key Achievements</p>
              <ul className="flex flex-col gap-2 mb-6">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="achievement-item flex items-start gap-3" style={{
                    opacity:   panelVisible ? 1 : 0,
                    transform: panelVisible ? "translateX(0)" : "translateX(-10px)",
                    transition: `opacity 0.4s ease ${0.1 + i * 0.08}s, transform 0.4s ease ${0.1 + i * 0.08}s`,
                  }}>
                    <span className="text-red-500 font-mono text-sm mt-0.5"
                      style={{ animation: panelVisible ? `checkPop 0.4s ease ${0.15 + i * 0.08}s both` : "none" }}>
                      ✓
                    </span>
                    <span className="font-mono text-sm text-white/60">{a}</span>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs text-red-600/80 tracking-[3px] uppercase mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((s, i) => (
                  <span key={s} className="xp-stack-tag font-mono text-xs text-white/50 border border-white/15 rounded-full px-4 py-1.5"
                    style={{
                      opacity:   panelVisible ? 1 : 0,
                      animation: panelVisible ? `stackTagSlide 0.35s ease ${0.25 + i * 0.06}s both` : "none",
                    }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}