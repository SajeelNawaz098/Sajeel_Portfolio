import React, { useEffect, useRef, useState } from "react";

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

const STACK = ["React", "Node.js", "MySQL", "React Native"];

export default function AboutMe() {
  const [sectionRef, inView] = useInView(0.15);

  const slide = (direction, delay) => ({
    opacity: inView ? 1 : 0,
    transform: inView
      ? "translate(0,0)"
      : direction === "left" ? "translateX(-40px)"
      : direction === "right" ? "translateX(40px)"
      : direction === "up" ? "translateY(30px)"
      : "translateY(-30px)",
    transition: `opacity 0.75s cubic-bezier(.22,.68,0,1.2) ${delay}s,
                 transform 0.75s cubic-bezier(.22,.68,0,1.2) ${delay}s`,
  });

  return (
    <>
      <style>{`
        @keyframes lineGrow { from { width: 0; } to { width: 36px; } }
        @keyframes floatCard { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes dotPing { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:.4; transform:scale(1.6); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes blinkCursor { 0%,49% { opacity:1; } 50%,100% { opacity:0; } }

        .about-section-bg { background:#0c0503; }

        .terminal-card {
          background:#150807;
          border:1px solid rgba(227,167,101,0.18);
          border-radius:1rem;
          box-shadow:0 25px 50px -12px rgba(0,0,0,0.6);
          animation:floatCard 6s ease-in-out infinite;
          transition:border-color .3s ease, box-shadow .3s ease, transform .3s ease;
        }
        .terminal-card:hover {
          border-color:rgba(227,167,101,0.5);
          box-shadow:0 25px 60px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(227,167,101,0.15);
          transform:translateY(-4px);
        }
        .terminal-dot { width:9px; height:9px; border-radius:50%; }
        .term-key { color:#e3a765; }
        .term-str { color:#b9dd9c; }
        .term-punc { color:rgba(245,237,226,0.4); }
        .cursor-blink { animation: blinkCursor 1s step-end infinite; color:#e3a765; }

        .label-line { height:2px; background:linear-gradient(90deg,#e3a765,transparent); border-radius:2px; width:0; }
        .label-line.visible { animation:lineGrow 0.6s cubic-bezier(.22,.68,0,1.2) 0.3s forwards; }

        .stat-card { position:relative; overflow:hidden; transition:transform .3s ease, border-color .3s ease; }
        .stat-card::after {
          content:''; position:absolute; inset:0;
          background:linear-gradient(105deg, transparent 40%, rgba(227,167,101,0.18) 50%, transparent 60%);
          background-size:200% 100%; opacity:0; transition:opacity 0.3s;
        }
        .stat-card:hover { transform:translateY(-4px); }
        .stat-card:hover::after { opacity:1; animation:shimmer 0.7s ease forwards; }

        .stack-chip {
          transition:border-color .25s ease, color .25s ease, transform .25s ease;
        }
        .stack-chip:hover { border-color:#e3a765; color:#f0d3a8; transform:translateY(-2px); }

        .bio-text { position:relative; }
        .bio-text::before {
          content:''; position:absolute; left:-16px; top:6px;
          width:2px; height:0;
          background:linear-gradient(180deg,#e3a765,rgba(227,167,101,0));
          border-radius:2px; transition:height 0.7s ease;
        }
        .bio-text.visible::before { height:calc(100% - 12px); }

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
            background:"radial-gradient(circle, rgba(227,167,101,0.10) 0%, transparent 70%)",
            opacity:inView ? 1 : 0,
            transition:"opacity 1.2s ease 0.2s",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:"linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize:"60px 60px",
            opacity:inView ? 1 : 0,
            transition:"opacity 1.5s ease 0.4s",
          }}
        />
        <span
          className="absolute top-10 right-10 select-none pointer-events-none font-mono font-bold hidden lg:block"
          style={{
            fontSize:"220px",
            lineHeight:1,
            color:"transparent",
            WebkitTextStroke:"1px rgba(227,167,101,0.10)",
            opacity:inView ? 1 : 0,
            transition:"opacity 1.4s ease 0.3s",
          }}
        >
          SN
        </span>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-10 py-16 grid grid-cols-1 md:grid-cols-12 gap-x-14 gap-y-12 items-start">

          {/* Left column: terminal-style profile card, replaces the photo */}
          <div style={slide("left", 0.05)} className="md:col-span-5">
            <div className="terminal-card overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="terminal-dot" style={{ background:"#e3a765" }} />
                  <span className="text-white/40 text-xs tracking-wide">profile.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="terminal-dot"
                    style={{ background:"#8fd18a", animation:"dotPing 1.8s ease-in-out infinite" }}
                  />
                  <span className="text-[#8fd18a] text-[11px] tracking-wide">online</span>
                </div>
              </div>

              <div className="px-6 py-7 text-[13px] leading-7">
                <p><span className="term-punc">const</span> developer = &#123;</p>
                <p className="pl-4"><span className="term-key">name</span><span className="term-punc">:</span> <span className="term-str">'Sajeel Nawaz'</span><span className="term-punc">,</span></p>
                <p className="pl-4"><span className="term-key">role</span><span className="term-punc">:</span> <span className="term-str">'Full-Stack Developer'</span><span className="term-punc">,</span></p>
                <p className="pl-4">
                  <span className="term-key">stack</span><span className="term-punc">:</span> [
                  {STACK.map((s, i) => (
                    <span key={s}>
                      <span className="term-str">'{s}'</span>{i < STACK.length - 1 && <span className="term-punc">, </span>}
                    </span>
                  ))}
                  ]<span className="term-punc">,</span>
                </p>
                <p className="pl-4"><span className="term-key">location</span><span className="term-punc">:</span> <span className="term-str">'Pakistan'</span><span className="term-punc">,</span></p>
                <p className="pl-4"><span className="term-key">status</span><span className="term-punc">:</span> <span className="term-str">'available for work'</span></p>
                <p>&#125;<span className="cursor-blink">▍</span></p>
              </div>
            </div>

            <div style={slide("left", 0.35)} className="flex flex-wrap gap-2 mt-5">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="stack-chip text-white/60 text-xs border border-white/10 rounded-full px-3 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right column: heading, bio, stats */}
          <div className="flex flex-col gap-5 md:col-span-7">
            <div style={slide("right", 0.1)} className="flex items-center gap-3">
              <div className={`label-line${inView ? " visible" : ""}`} />
              <span className="text-[#b9dd9c]/80 text-sm tracking-widest">// About Me</span>
            </div>

            <h1 style={slide("right", 0.2)} className="font-mono text-4xl xl:text-5xl font-light tracking-tight leading-tight">
              <span className="text-[#e3a765]">{"{"}</span>
              <span className="text-[#f5ede2]"> Who I Am </span>
              <span className="text-[#e3a765]">{"}"}</span>
            </h1>

            <div style={slide("right", 0.3)}>
              <p className={`bio-text${inView ? " visible" : ""} font-mono text-sm max-w-[620px] text-white/70 leading-7 pl-4`}>
                I'm Sajeel Nawaz — a passionate Full Stack Developer focused on building modern,
                scalable, and user-friendly web applications. I specialize in both frontend and
                backend development, creating seamless digital experiences from concept to deployment.
              </p>
            </div>
            <div style={slide("right", 0.4)}>
              <p className={`bio-text${inView ? " visible" : ""} font-mono text-sm max-w-[620px] text-white/70 leading-7 pl-4`}>
                With a strong foundation in JavaScript, React, Node.js, and MySQL, I enjoy turning
                complex problems into simple, efficient solutions — paying close attention to
                performance, clean code, and intuitive UI/UX design. I'm constantly learning,
                aiming to deliver high-quality products that create real impact.
              </p>
            </div>

            <div style={slide("up", 0.5)} className="grid grid-cols-3 gap-4 mt-3 max-w-[620px]">
              <div className="stat-card rounded-2xl px-5 py-4 h-[110px] flex flex-col justify-between cursor-default" style={{ background:"#e3a765" }}>
                <p className="text-[#150807]/60 text-xs">Projects</p>
                <p className="text-[#150807] text-3xl font-semibold">
                  <Counter target="10" suffix="+" />
                </p>
              </div>

              <div className="stat-card rounded-2xl px-5 py-4 h-[110px] flex flex-col justify-between cursor-default bg-[#150807] border border-white/[0.06]">
                <p className="text-white/40 text-xs">Experience</p>
                <p className="text-white text-3xl font-semibold">
                  <Counter target="1" suffix="+" />
                </p>
              </div>

              <div className="stat-card rounded-2xl px-5 py-4 h-[110px] flex flex-col justify-between cursor-default bg-[#150807] border border-white/[0.06]">
                <p className="text-white/40 text-xs">Accuracy Rate</p>
                <p className="text-white text-3xl font-semibold">
                  <Counter target="98" suffix="%" />
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}