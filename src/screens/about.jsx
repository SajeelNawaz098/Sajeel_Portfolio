import React, { useEffect, useRef, useState } from "react";
import profileImage from "../assets/aboutimg.png";

function useInView(threshold = 0.25) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.3);

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(target);
    const duration = 1400;
    const steps = 40;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutMe() {
  const [sectionRef, inView] = useInView(0.15);

  const slide = (direction, delay) => ({
    opacity:   inView ? 1 : 0,
    transform: inView
      ? "translate(0,0)"
      : direction === "left"  ? "translateX(-48px)"
      : direction === "right" ? "translateX(48px)"
      : direction === "up"    ? "translateY(36px)"
      : "translateY(-36px)",
    transition: `opacity 0.75s cubic-bezier(.22,.68,0,1.2) ${delay}s,
                 transform 0.75s cubic-bezier(.22,.68,0,1.2) ${delay}s`,
  });

  return (
    <>
      <style>{`
        @keyframes imagePulse {
          0%,100% { box-shadow: 0 0 0px 0px rgba(234,88,12,0); }
          50%      { box-shadow: 0 0 40px 8px rgba(234,88,12,0.18); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 36px; }
        }
        @keyframes floatImg {
          0%,100% { transform: translateY(0px);  }
          50%      { transform: translateY(-8px); }
        }
        @keyframes scanline {
          0%   { top: 0%; }
          100% { top: 100%; }
        }
        @keyframes statUnderline {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }

        .about-image-wrap {
          position: relative;
          animation: floatImg 5s ease-in-out infinite;
        }
        .about-image-wrap::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 4px;
          background: linear-gradient(135deg, rgba(234,88,12,0.5), transparent 60%);
          z-index: -1;
          transition: opacity 0.4s;
          opacity: 0;
        }
        .about-image-wrap:hover::before { opacity: 1; }
        .about-image-wrap:hover { animation-play-state: paused; }

        .scanline {
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(234,88,12,0.4), transparent);
          animation: scanline 3s linear infinite;
          pointer-events: none;
        }

        .label-line {
          height: 2px;
          background: #f97316;
          border-radius: 2px;
          width: 0;
        }
        .label-line.visible {
          animation: lineGrow 0.6s cubic-bezier(.22,.68,0,1.2) 0.3s forwards;
        }

        .stat-item {
          position: relative;
          cursor: default;
        }
        .stat-item::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          height: 1px;
          width: 100%;
          background: rgba(249,115,22,0.5);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .stat-item:hover::after { transform: scaleX(1); }
        .stat-item:hover .stat-num { color: #fb923c; transition: color 0.3s; }

        .bio-text {
          position: relative;
        }
        .bio-text::before {
          content: '';
          position: absolute;
          left: -16px; top: 6px;
          width: 3px; height: 0;
          background: rgba(234,88,12,0.5);
          border-radius: 2px;
          transition: height 0.6s ease;
        }
        .bio-text.visible::before { height: calc(100% - 12px); }

        .about-section-bg {
          background: linear-gradient(to right, #000 0%, #000 50%, #750B03 100%);
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration:.01ms !important; transition-duration:.01ms !important; }
        }
      `}</style>

      <section
        id="about"
        ref={sectionRef}
        className="about-section-bg relative min-h-screen flex items-center justify-center overflow-hidden font-mono"
      >
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(117,11,3,0.35) 0%, transparent 70%)",
            opacity: inView ? 1 : 0,
            transition: "opacity 1.2s ease 0.2s",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: inView ? 1 : 0,
            transition: "opacity 1.5s ease 0.4s",
          }}
        />

        <div className="relative z-10 w-full max-w-8xl mx-auto px-10 py-16 flex flex-col md:flex-row items-center gap-40">

          <div style={slide("left", 0.05)}>
            <div className="about-image-wrap w-[500px] h-[500px]">
              <div className="scanline" />

              <img
                src={profileImage}
                alt="Sajeel Nawaz"
                className="w-full h-full object-cover object-top"
                style={{ display: "block" }}
              />

           
            </div>
          </div>

          <div className="flex flex-col gap-5 flex-1">
            <div style={slide("right", 0.1)} className="flex items-center gap-3">
              <div className={`label-line${inView ? " visible" : ""}`} />
              <span className="text-orange-400 text-sm tracking-wide font-medium">About Me</span>
            </div>
            <h1 style={slide("right", 0.2)} className="font-mono text-4xl md:text-5xl font-bold text-white tracking-widest leading-tight">
              WHO I AM ?
            </h1>
            <div style={slide("right", 0.3)}>
              <p className={`bio-text${inView ? " visible" : ""} font-mono text-sm max-w-[900px] text-white/80 leading-7 pl-4`}>
                I'm Sajeel Nawaz — a passionate Full Stack Developer focused on building modern,
                scalable, and user-friendly web applications. I specialize in both frontend and
                backend development, creating seamless digital experiences from concept to deployment.
                <br />
                With a strong foundation in technologies like JavaScript, React, Node.js, and
                MySQL, I enjoy turning complex problems into simple, efficient solutions. I pay
                close attention to performance, clean code, and intuitive UI/UX design.
              </p>
            </div>
            <div style={slide("right", 0.4)}>
              <p className={`bio-text${inView ? " visible" : ""} font-mono text-sm text-white/80 max-w-[900px] leading-7 pl-4`}>
                I'm constantly learning and improving my skills, aiming to deliver high-quality
                products that create real impact. Whether it's developing responsive interfaces
                or robust backend systems, I bring ideas to life through code.
              </p>
            </div>
            <div style={slide("up", 0.5)} className="flex gap-60 mt-2">

              <div className="stat-item">
                <p className="stat-num text-4xl font-bold text-white">
                  <Counter target="10" suffix="+" />
                </p>
                <p className="text-white/55 text-sm mt-1">Projects</p>
              </div>

              <div className="stat-item">
                <p className="stat-num text-4xl font-bold text-white">
                  <Counter target="1" suffix="+" />
                </p>
                <p className="text-white/55 text-sm mt-1">Experience</p>
              </div>

              <div className="stat-item">
                <p className="stat-num text-4xl font-bold text-white">
                  <Counter target="98" suffix="%" />
                </p>
                <p className="text-white/55 text-sm mt-1">Accuracy Rate</p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}