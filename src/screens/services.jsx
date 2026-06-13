import { useEffect, useRef, useState } from "react";
import { FaMobileAlt, FaDesktop, FaWaveSquare, FaCogs, FaImage, FaBug } from "react-icons/fa";

const services = [
  {
    title: "Mobile App Development",
    description: "Cross-platform iOS & Android apps built with React Native and Expo. From booking systems to management tools — smooth, fast, and production-ready.",
    tags: ["React Native", "Expo", "NativeWind"],
    icon: <FaMobileAlt size={36} />,
  },
  {
    title: "Web App Development",
    description: "Responsive, modern web applications and business websites with clean UI. From landing pages to full management systems with dashboards and data flows.",
    tags: ["React", "Vite", "Tailwind CSS"],
    icon: <FaDesktop size={36} />,
  },
  {
    title: "Backend & API Development",
    description: "Scalable REST APIs with authentication, role-based access, and secure database integration. Built to power both web and mobile frontends reliably.",
    tags: ["Node.js", "Express", "MySQL"],
    icon: <FaWaveSquare size={36} />,
  },
  {
    title: "Management Systems",
    description: "End-to-end custom systems for hospitals, pharmacies, venues, and businesses — with admin panels, reporting, user roles, and real-time data management.",
    tags: ["Full Stack", "Admin Panels", "Role Auth"],
    icon: <FaCogs size={36} />,
  },
  {
    title: "UI/UX Design & Prototyping",
    description: "Pixel-perfect interfaces with strong attention to aesthetics, layout, and usability. Mockup-first workflow before any code is written — no surprises.",
    tags: ["Figma", "Component Design", "Dark UI"],
    icon: <FaImage size={36} />,
  },
  {
    title: "Bug Fixing & Optimization",
    description: "Diagnosing and resolving bugs in existing codebases — deduplication issues, broken queries, security flaws, or performance bottlenecks in live production apps.",
    tags: ["Debugging", "SQL Tuning", "Code Review"],
    icon: <FaBug size={36} />,
  },
];

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

function ServiceCard({ service, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const col = index % 2;
  const delay = Math.floor(index / 2) * 0.1 + col * 0.08;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity:   inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(36px) scale(0.97)",
        transition: `opacity 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}s,
                     transform 0.65s cubic-bezier(.22,.68,0,1.2) ${delay}s,
                     box-shadow 0.3s ease, border-color 0.3s ease`,
        background: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? "rgba(192,82,42,0.4)" : "rgba(255,255,255,0.07)"}`,
        boxShadow: hovered ? "0 0 28px rgba(127,17,17,0.25)" : "none",
        borderRadius: 16,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0,
        width: 40, height: 40,
        borderTop: `2px solid rgba(192,82,42,${hovered ? 0.7 : 0})`,
        borderLeft: `2px solid rgba(192,82,42,${hovered ? 0.7 : 0})`,
        borderRadius: "16px 0 0 0",
        transition: "border-color 0.3s ease",
      }} />

      <div>
        <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 12, fontFamily: "monospace" }}>
          {service.title}
        </h3>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.75, marginBottom: 20, fontFamily: "monospace" }}>
          {service.description}
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {service.tags.map((tag, j) => (
            <span key={j} style={{
              fontSize: 11, padding: "4px 12px", borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.7)",
              fontFamily: "monospace",
              transition: "border-color 0.3s, color 0.3s",
              ...(hovered ? { borderColor: "rgba(192,82,42,0.5)", color: "rgba(255,180,150,0.9)" } : {}),
            }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{
          marginLeft: 16, flexShrink: 0,
          color: "#7f1111",
          opacity: hovered ? 0.9 : 0.5,
          transform: hovered ? "scale(1.15) rotate(-6deg)" : "scale(1) rotate(0deg)",
          transition: "opacity 0.3s, transform 0.35s cubic-bezier(.22,.68,0,1.2)",
        }}>
          {service.icon}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [sectionRef, inView] = useInView(0.1);

  const entrance = (direction, delay) => ({
    opacity:   inView ? 1 : 0,
    transform: inView ? "translate(0,0)"
      : direction === "up"   ? "translateY(28px)"
      : direction === "down" ? "translateY(-28px)"
      : "translateY(0)",
    transition: `opacity 0.7s cubic-bezier(.22,.68,0,1.2) ${delay}s,
                 transform 0.7s cubic-bezier(.22,.68,0,1.2) ${delay}s`,
  });

  return (
    <>
      <style>{`
        @keyframes dividerGrow {
          from { width: 0; }
          to   { width: 48px; }
        }
        @keyframes ctaShimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .cta-btn {
          transition: opacity 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .cta-btn:hover {
          opacity: 1 !important;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 0 24px rgba(127,17,17,0.5);
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration:.01ms !important; transition-duration:.01ms !important; }
        }
      `}</style>

      <section
        id="Services"
        ref={sectionRef}
        className="min-h-screen w-full py-16 px-6 font-mono"
        style={{ background: "radial-gradient(ellipse at top right, #7f1111 0%, #1a0000 40%, #000000 70%)" }}
      >
        <div style={{ ...entrance("down", 0.05), textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: "#c0522a", fontSize: 13, letterSpacing: "0.08em", marginBottom: 8 }}>
            What I offer
          </p>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 16 }}>
            My Services
          </h2>
          <div style={{
            margin: "0 auto",
            height: 2,
            background: "#c0522a",
            borderRadius: 2,
            width: inView ? 48 : 0,
            transition: "width 0.7s cubic-bezier(.22,.68,0,1.2) 0.3s",
          }} />
        </div>

        <div
          className="max-w-6xl mx-auto mb-12"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))", gap: 20 }}
        >
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} inView={inView} />
          ))}
        </div>
        <div
          className="max-w-6xl mx-auto"
          style={{
            ...entrance("up", 0.5),
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: 16,
            padding: "48px 32px",
            textAlign: "center",
          }}
        >
          <h3 style={{ color: "#fff", fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
            Have a project in mind?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: "0.05em", marginBottom: 32 }}>
            Let's build something great together.
          </p>
          <button
            className="cta-btn"
            onClick={() => { const s = document.getElementById("contact"); if (s) s.scrollIntoView({ behavior: "smooth", block: "start" }); }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 28px", borderRadius: 8,
              background: "#7f1111", color: "#fff",
              fontWeight: 600, fontSize: 13, letterSpacing: "0.05em",
              border: "none", cursor: "pointer",
            }}
          >
            Get In Touch <span style={{ fontSize: 16 }}>↗</span>
          </button>
        </div>
      </section>
    </>
  );
}