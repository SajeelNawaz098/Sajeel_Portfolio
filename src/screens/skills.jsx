// import React, { useState, useEffect } from "react";

// const skillsData = {
//   Frontend: [
//     { name: "HTML/CSS", level: 98 },
//     { name: "REACT", level: 89 },
//     { name: "REACT NATIVE", level: 80 },
//     { name: "TAILWIND CSS", level: 99 },
//     { name: "EXPO", level: 89 },
//     { name: "NATIVE WIND", level: 79 },
//   ],
//   Backend: [
//     { name: "NODE.JS", level: 85 },
//     { name: "EXPRESS.JS", level: 88 },
//     { name: "REST API", level: 90 },
//     { name: "JWT AUTH", level: 80 },
//     { name: "Middleware", level: 60 },

//   ],
//   Database: [
//     { name: "MYSQL", level: 85 },
//     { name: "SQL Queries", level: 70 },
//     { name: "Schema Design", level: 75 },
//       { name: "Joins & Views", level: 69 },
//   ],
//   "Tools & Dev": [
//     { name: "GIT & GITHUB", level: 90 },
//     { name: "VS CODE", level: 95 },
//     { name: "POSTMAN", level: 85 },
//     { name: "FIGMA", level: 70 },
//   ],
// };

// const languages = ["JavaScript", "TypeScript", "Python", "SQL"];

// // Floating particle component
// function Particles() {
//   const particles = Array.from({ length: 18 }, (_, i) => i);
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {particles.map((i) => (
//         <div
//           key={i}
//           className="absolute rounded-full bg-red-500/20 animate-pulse"
//           style={{
//             width: `${Math.random() * 6 + 2}px`,
//             height: `${Math.random() * 6 + 2}px`,
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             animationDelay: `${Math.random() * 3}s`,
//             animationDuration: `${Math.random() * 3 + 2}s`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// function SkillBar({ name, level, index }) {
//   const [width, setWidth] = useState(0);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     // reset on skill change
//     setWidth(0);
//     setVisible(false);
//     const showTimer = setTimeout(() => setVisible(true), index * 80);
//     const barTimer = setTimeout(() => setWidth(level), index * 80 + 100);
//     return () => {
//       clearTimeout(showTimer);
//       clearTimeout(barTimer);
//     };
//   }, [level, index, name]);

//   return (
//     <div
    
//       className="transition-all duration-300"
//       style={{
//         opacity: visible ? 1 : 0,
//         transform: visible ? "translateX(0)" : "translateX(-20px)",
//       }}
//     >
//       <div className="flex justify-between items-center mb-2">
//         <span className="font-mono text-sm text-white tracking-widest">{name}</span>
//         <span
//           className="font-mono text-sm font-bold text-white transition-all duration-700"
//           style={{ opacity: width > 0 ? 1 : 0 }}
//         >
//           {level}%
//         </span>
//       </div>

//       {/* Track */}
//       <div className="w-full h-[4px] bg-gradient-to-r from-black via-black to-[#750B03] rounded-full overflow-hidden relative">
//         {/* Glow trail */}
//         <div
//           className="absolute top-0 left-0 h-full rounded-full blur-sm bg-red-400/40 transition-all"
//           style={{ width: `${width}%`, transitionDuration: "900ms", transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
//         />
//         {/* Main bar */}
//         <div
//           className="absolute top-0 left-0 h-full rounded-full bg-white transition-all"
//           style={{ width: `${width}%`, transitionDuration: "900ms", transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)" }}
//         />
//         {/* Shine dot at tip */}
//         <div
//           className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.8)] transition-all"
//           style={{
//             left: `calc(${width}% - 4px)`,
//             transitionDuration: "900ms",
//             transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
//             opacity: width > 0 ? 1 : 0,
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default function Skills() {
//   const [active, setActive] = useState("Frontend");
//   const [headerVisible, setHeaderVisible] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setHeaderVisible(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <section 
//      id="skills"
//     className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-black via-black to-[#750B03] to-100% px-10 py-16">

//       {/* Animated red radial background */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#7a000099_0%,_transparent_65%)] pointer-events-none animate-pulse" style={{ animationDuration: "4s" }} />

//       {/* Floating particles */}
//       <Particles />

//       {/* Grid overlay */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.04]"
//         style={{
//           backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-12">

//         {/* Header */}
//         <div
//           className="flex flex-col items-center gap-2 transition-all duration-700"
//           style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? "translateY(0)" : "translateY(-24px)" }}
//         >
//           <span className="font-mono text-sm text-orange-400 tracking-wide">What I Bring</span>
//           <h2 className="font-mono text-5xl font-bold text-white">My Skills</h2>
//           <div className="w-16 h-[2px] bg-orange-500 rounded mt-1" />
//         </div>

//         {/* Main Content */}
//         <div className="w-full flex flex-col md:flex-row gap-6">

//           {/* LEFT: Category Buttons */}
//           <div className="flex flex-col gap-3 w-full md:w-[280px] flex-shrink-0 bg-white/10 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
//             {Object.keys(skillsData).map((cat, i) => (
//               <button
//                 key={cat}
//                 onClick={() => setActive(cat)}
//                 className={`w-full py-4 rounded-lg font-mono font-bold text-white text-base transition-all duration-300
//                   ${active === cat
//                     ? "bg-gradient-to-r from-black/50 to-[#750B03] shadow-[0_0_18px_#7a000099] scale-[1.0]"
//                     : "bg-white/10 hover:bg-white/20 hover:scale-[1.01] hover:shadow-[0_0_12px_#7a000044]"
//                   }`}
//                 style={{
//                   transitionDelay: `${i * 40}ms`,
//                 }}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* RIGHT: Skill Bars */}
//           <div className="flex-1 bg-gradient-to-br from-red-950/80 to-red-900/50 border border-white/10 rounded-xl p-8 flex flex-col gap-7 backdrop-blur-sm relative overflow-hidden">
//             {/* inner shimmer */}
//             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-xl" />

//             {skillsData[active].map((skill, i) => (
//               <SkillBar key={`${active}-${skill.name}`} name={skill.name} level={skill.level} index={i} />
//             ))}
//           </div>

//         </div>

//         {/* Language Tags */}
//         <div className="flex flex-col items-center gap-4">
//           <span className="font-mono text-orange-400 text-base tracking-wide">Language</span>
//           <div className="flex flex-wrap gap-3 justify-center">
//             {languages.map((lang, i) => (
//               <span
//                 key={lang}
//                 className="px-5 py-2 rounded-full border border-white/30 text-white font-mono text-sm hover:border-orange-400 hover:text-orange-300 hover:shadow-[0_0_12px_#f973164d] transition-all duration-300 cursor-default"
//                 style={{
//                   animationDelay: `${i * 100}ms`,
//                 }}
//               >
//                 {lang}
//               </span>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect, useRef } from "react";

const skillsData = {
  Frontend: [
    { name: "HTML/CSS", level: 98 },
    { name: "REACT", level: 89 },
    { name: "REACT NATIVE", level: 80 },
    { name: "TAILWIND CSS", level: 99 },
    { name: "EXPO", level: 89 },
    { name: "NATIVE WIND", level: 79 },
  ],
  Backend: [
    { name: "NODE.JS", level: 85 },
    { name: "EXPRESS.JS", level: 88 },
    { name: "REST API", level: 90 },
    { name: "JWT AUTH", level: 80 },
    { name: "Middleware", level: 60 },
  ],
  Database: [
    { name: "MYSQL", level: 85 },
    { name: "SQL Queries", level: 70 },
    { name: "Schema Design", level: 75 },
    { name: "Joins & Views", level: 69 },
  ],
  "Tools & Dev": [
    { name: "GIT & GITHUB", level: 90 },
    { name: "VS CODE", level: 95 },
    { name: "POSTMAN", level: 85 },
    { name: "FIGMA", level: 70 },
  ],
};

const languages = ["JavaScript", "TypeScript", "Python", "SQL"];

// ── Intersection observer hook ─────────────────────────────────────────────
function useInView(threshold = 0.2) {
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

// ── Stable particles (computed once, not on every render) ──────────────────
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size:  Math.random() * 5 + 2,
  top:   Math.random() * 100,
  left:  Math.random() * 100,
  delay: Math.random() * 4,
  dur:   Math.random() * 3 + 2,
}));

function Particles({ visible }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-red-500/20"
          style={{
            width: p.size, height: p.size,
            top: `${p.top}%`, left: `${p.left}%`,
            opacity: visible ? 1 : 0,
            animation: visible ? `particlePulse ${p.dur}s ease-in-out ${p.delay}s infinite` : "none",
            transition: `opacity 0.6s ease ${p.delay * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}

// ── Skill bar ──────────────────────────────────────────────────────────────
function SkillBar({ name, level, index, sectionVisible }) {
  const [width, setWidth] = useState(0);
  const [itemVisible, setItemVisible] = useState(false);

  useEffect(() => {
    setWidth(0);
    setItemVisible(false);
    if (!sectionVisible) return;
    const t1 = setTimeout(() => setItemVisible(true), index * 90);
    const t2 = setTimeout(() => setWidth(level),      index * 90 + 120);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [level, index, name, sectionVisible]);

  return (
    <div
      style={{
        opacity:   itemVisible ? 1 : 0,
        transform: itemVisible ? "translateX(0)" : "translateX(-28px)",
        transition: "opacity 0.55s cubic-bezier(.22,.68,0,1.2), transform 0.55s cubic-bezier(.22,.68,0,1.2)",
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-sm text-white tracking-widest">{name}</span>
        <span
          className="font-mono text-sm font-bold text-white"
          style={{ opacity: width > 0 ? 1 : 0, transition: "opacity 0.4s ease 0.5s" }}
        >
          {level}%
        </span>
      </div>

      {/* Track */}
      <div className="w-full h-[4px] bg-gradient-to-r from-black via-black to-[#750B03] rounded-full overflow-visible relative">
        {/* Glow trail */}
        <div
          className="absolute top-0 left-0 h-full rounded-full blur-sm bg-red-400/40"
          style={{ width: `${width}%`, transition: "width 950ms cubic-bezier(0.4,0,0.2,1)" }}
        />
        {/* Main bar */}
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-white"
          style={{ width: `${width}%`, transition: "width 950ms cubic-bezier(0.4,0,0.2,1)" }}
        />
        {/* Shine dot */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_3px_rgba(255,255,255,0.7)]"
          style={{
            left: `calc(${width}% - 4px)`,
            opacity: width > 0 ? 1 : 0,
            transition: "left 950ms cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function Skills() {
  const [active, setActive]   = useState("Frontend");
  const [sectionRef, inView]  = useInView(0.15);

  // Staggered entrance helper
  const entrance = (direction, delay) => ({
    opacity:   inView ? 1 : 0,
    transform: inView
      ? "translate(0,0)"
      : direction === "up"    ? "translateY(32px)"
      : direction === "down"  ? "translateY(-32px)"
      : direction === "left"  ? "translateX(-32px)"
      : "translateX(32px)",
    transition: `opacity 0.7s cubic-bezier(.22,.68,0,1.2) ${delay}s,
                 transform 0.7s cubic-bezier(.22,.68,0,1.2) ${delay}s`,
  });

  return (
    <>
      <style>{`
        @keyframes particlePulse {
          0%,100% { opacity:.15; transform:scale(1);   }
          50%      { opacity:.5;  transform:scale(1.6); }
        }
        @keyframes shimmerMove {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(400%);  }
        }
        @keyframes glowPulse {
          0%,100% { opacity:.5; }
          50%      { opacity:1;  }
        }
        @keyframes langFloat {
          0%,100% { transform: translateY(0);    }
          50%      { transform: translateY(-4px); }
        }
        @keyframes categoryPop {
          0%   { transform: scale(1);    }
          40%  { transform: scale(1.04); }
          100% { transform: scale(1);    }
        }

        .category-btn {
          transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
        }
        .category-btn:hover:not(.cat-active) {
          background: rgba(255,255,255,0.15);
          box-shadow: 0 0 14px rgba(122,0,0,0.3);
          transform: translateX(4px);
        }
        .cat-active {
          animation: categoryPop 0.35s cubic-bezier(.22,.68,0,1.2) forwards;
        }

        .lang-tag {
          transition: border-color 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s;
        }
        .lang-tag:hover {
          border-color: #fb923c;
          color: #fdba74;
          box-shadow: 0 0 14px rgba(249,115,22,0.35);
          transform: translateY(-3px) scale(1.05);
        }

        .skills-panel {
          position: relative;
          overflow: hidden;
        }
        .skills-panel::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
          animation: shimmerMove 4s ease-in-out infinite;
          pointer-events: none;
        }

        .section-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #f97316, transparent);
          border-radius: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration:.01ms !important; transition-duration:.01ms !important; }
        }
      `}</style>

      <section
        id="skills"
        ref={sectionRef}
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-r from-black via-black to-[#750B03] px-10 py-16"
      >
        {/* Radial pulse */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, #7a000099 0%, transparent 65%)",
            opacity: inView ? 1 : 0,
            animation: inView ? "glowPulse 4s ease-in-out infinite" : "none",
            transition: "opacity 1s ease",
          }}
        />

        {/* Particles */}
        <Particles visible={inView} />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: inView ? 0.035 : 0,
            transition: "opacity 1.2s ease 0.3s",
          }}
        />

        <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-12">

          {/* ── Header ── */}
          <div style={entrance("down", 0.05)} className="flex flex-col items-center gap-2">
            <span className="font-mono text-sm text-orange-400 tracking-wide">What I Bring</span>
            <h2 className="font-mono text-5xl font-bold text-white">My Skills</h2>
            <div
              className="section-divider mt-1"
              style={{
                width: inView ? 64 : 0,
                transition: "width 0.7s cubic-bezier(.22,.68,0,1.2) 0.35s",
              }}
            />
          </div>

          {/* ── Main Content ── */}
          <div className="w-full flex flex-col md:flex-row gap-6">

            {/* LEFT: Category buttons */}
            <div
              style={entrance("left", 0.15)}
              className="flex flex-col gap-3 w-full md:w-[280px] flex-shrink-0 bg-white/10 border border-white/10 rounded-xl p-6 backdrop-blur-sm"
            >
              {Object.keys(skillsData).map((cat, i) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`category-btn w-full py-4 rounded-lg font-mono font-bold text-white text-base
                      ${isActive ? "cat-active bg-gradient-to-r from-black/50 to-[#750B03] shadow-[0_0_18px_#7a000099]" : "bg-white/10"}`}
                    style={{
                      // staggered entrance inside the panel
                      opacity:   inView ? 1 : 0,
                      transform: inView ? "translateX(0)" : "translateX(-16px)",
                      transition: `opacity 0.5s ease ${0.2 + i * 0.07}s, transform 0.5s ease ${0.2 + i * 0.07}s, background 0.3s, box-shadow 0.3s`,
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* RIGHT: Skill bars panel */}
            <div
              style={entrance("right", 0.2)}
              className="skills-panel flex-1 bg-gradient-to-br from-red-950/80 to-red-900/50 border border-white/10 rounded-xl p-8 flex flex-col gap-7 backdrop-blur-sm"
            >
              {/* inner top shimmer */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-xl" />

              {skillsData[active].map((skill, i) => (
                <SkillBar
                  key={`${active}-${skill.name}`}
                  name={skill.name}
                  level={skill.level}
                  index={i}
                  sectionVisible={inView}
                />
              ))}
            </div>
          </div>

          {/* ── Language Tags ── */}
          <div style={entrance("up", 0.35)} className="flex flex-col items-center gap-4">
            <span className="font-mono text-orange-400 text-base tracking-wide">Languages</span>
            <div className="flex flex-wrap gap-3 justify-center">
              {languages.map((lang, i) => (
                <span
                  key={lang}
                  className="lang-tag px-5 py-2 rounded-full border border-white/30 text-white font-mono text-sm cursor-default"
                  style={{
                    opacity:   inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.5s ease ${0.45 + i * 0.08}s, transform 0.5s ease ${0.45 + i * 0.08}s`,
                    animation:  inView ? `langFloat ${2.5 + i * 0.3}s ease-in-out ${i * 0.2}s infinite` : "none",
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}