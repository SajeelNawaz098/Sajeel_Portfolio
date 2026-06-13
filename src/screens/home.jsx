import { useRef, useState, useEffect } from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { HiMiniPlay, HiMiniPause } from "react-icons/hi2";
import bgImage from "../assets/bg2.png";
import profileImage from "../assets/cardimg.png";
import logoImg from "../assets/logo.png";
import blackLogoImg from "../assets/blacklogo.png";
import music from "../assets/beanie-piano.mp3";

const LogoIcon = ({ size = 32 }) => (
  <img src={logoImg} alt="Logo" width={size} height={size} style={{ objectFit: "contain" }} />
);
const BlackLogoIcon = ({ size = 32 }) => (
  <img src={blackLogoImg} alt="Logo" width={size} height={size} style={{ objectFit: "contain" }} />
);

const BAR_HEIGHTS  = Array.from({ length: 20 }, () => Math.floor(20 + Math.random() * 80));
const BAR_DURATIONS = Array.from({ length: 20 }, () => (0.4 + Math.random() * 0.5).toFixed(2));
const BAR_DELAYS   = Array.from({ length: 20 }, (_, i) => (i * 0.04).toFixed(2));

export default function Home() {
  const audioRef   = useRef(null);
  const [playing,   setPlaying]   = useState(false);
  const [volume,    setVolume]    = useState(0.5);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const [ready,     setReady]     = useState(false);   // animations gate
  const [unlocked,  setUnlocked]  = useState(false);   // audio gate

  // ── Step 1: trigger entrance animations after first paint ──────────────────
  useEffect(() => {
    // rAF ensures the browser has painted once before we add classes
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // ── Step 2: try silent autoplay; show overlay if browser blocks it ─────────
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.play()
      .then(() => { setPlaying(true); setUnlocked(true); })
      .catch(() => {
        // Browser blocked — overlay will ask for a click
        setUnlocked(false);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Step 3: pause / resume on tab visibility ───────────────────────────────
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handle = () => {
      if (document.hidden) { audio.pause(); setPlaying(false); }
      else { audio.play().then(() => setPlaying(true)).catch(() => {}); }
    };
    document.addEventListener("visibilitychange", handle);
    return () => document.removeEventListener("visibilitychange", handle);
  }, []);

  // ── Cursor glow ────────────────────────────────────────────────────────────
  useEffect(() => {
    const handle = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  // ── Unlock audio on first user click (overlay) ────────────────────────────
  const handleUnlock = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.play().then(() => { setPlaying(true); setUnlocked(true); }).catch(() => {});
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.volume = volume; audio.play().then(() => setPlaying(true)); }
  };

  const handleVolume = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) audioRef.current.volume = val;
  };

  // Helper: build inline style for staggered entrance
  const entrance = (delay) => ({
    opacity:   ready ? 1 : 0,
    transform: ready ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.7s cubic-bezier(.22,.68,0,1.2) ${delay}s,
                 transform 0.7s cubic-bezier(.22,.68,0,1.2) ${delay}s`,
  });

  return (
    <>
      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px);  }
          50%      { transform: translateY(-10px); }
        }
        @keyframes barPulse {
          0%,100% { transform: scaleY(0.25); }
          50%      { transform: scaleY(1);    }
        }
        @keyframes dotPing {
          0%,100% { opacity:1; transform:scale(1);   }
          50%      { opacity:.4; transform:scale(1.6); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes overlayFadeOut {
          to { opacity:0; pointer-events:none; }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .card-entrance {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(.22,.68,0,1.2) 0.5s,
                      transform 0.8s cubic-bezier(.22,.68,0,1.2) 0.5s;
        }
        .card-entrance.ready {
          opacity: 0.9;
          transform: translateY(0);
          animation: float 5s ease-in-out 1.3s infinite;
        }

        .stat-card { position:relative; overflow:hidden; }
        .stat-card::after {
          content:''; position:absolute; inset:0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%);
          background-size:200% 100%; opacity:0; transition:opacity 0.3s;
        }
        .stat-card:hover::after { opacity:1; animation:shimmer 0.7s ease forwards; }

        .tag-pill { transition: border-color .25s, transform .25s, color .25s; }
        .tag-pill:hover { border-color:rgba(255,255,255,.7); color:#fff; transform:translateY(-2px); }

        .contact-btn { transition: background .25s, box-shadow .25s, transform .2s; }
        .contact-btn:hover { background:rgba(255,255,255,.1); box-shadow:0 0 20px rgba(255,255,255,.08); transform:scale(1.02); }

        .social-icon { transition: color .2s, border-color .2s, transform .2s, box-shadow .2s; }
        .social-icon:hover { transform:translateY(-3px) scale(1.12); box-shadow:0 4px 14px rgba(255,255,255,.1); }

        .music-bar { transform-origin:bottom; border-radius:9999px; background:rgba(255,255,255,.35); }
        .music-bar.active { animation: barPulse var(--dur) ease-in-out var(--delay) infinite; }

        .cursor-glow {
          pointer-events:none; position:fixed; border-radius:50%;
          width:380px; height:380px;
          background: radial-gradient(circle, rgba(180,100,60,.13) 0%, transparent 70%);
          transform:translate(-50%,-50%);
          transition: left .08s linear, top .08s linear;
          z-index:5; mix-blend-mode:screen;
        }

        .unlock-overlay {
          position:fixed; inset:0; z-index:50;
          display:flex; align-items:center; justify-content:center;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(4px);
          cursor:pointer;
          transition: opacity 0.5s ease;
        }
        .unlock-overlay.hidden-overlay {
          animation: overlayFadeOut 0.5s ease forwards;
        }
        .unlock-pulse {
          display:flex; flex-direction:column; align-items:center; gap:14px;
        }
        .unlock-ring {
          width:72px; height:72px; border-radius:50%;
          border: 1.5px solid rgba(255,255,255,0.4);
          display:flex; align-items:center; justify-content:center;
          animation: dotPing 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration:.01ms !important; transition-duration:.01ms !important; }
        }
      `}</style>

      {/* ── Audio unlock overlay (only shown when browser blocks autoplay) ── */}
      {!unlocked && (
        <div className="unlock-overlay" onClick={handleUnlock}>
          <div className="unlock-pulse">
            <div className="unlock-ring">
              <HiMiniPlay style={{ width:28, height:28, color:"white" }} />
            </div>
            <p style={{ color:"rgba(255,255,255,0.75)", fontSize:13, letterSpacing:"0.15em", fontFamily:"monospace" }}>
              CLICK ANYWHERE TO START
            </p>
          </div>
        </div>
      )}

      {/* ── Cursor glow ── */}
      <div className="cursor-glow" style={{ left: cursorPos.x, top: cursorPos.y }} />

      <div
        id="home"
        className="relative min-h-screen w-full overflow-hidden font-mono"
        style={{ backgroundImage:`url(${bgImage})`, backgroundSize:"cover", backgroundPosition:"center" }}
      >
        <audio ref={audioRef} src={music} loop />

        <main className="relative z-10 mt-50 flex items-start justify-between px-8 pt-24 pb-10">

          {/* ── LEFT CONTENT ── */}
          <div className="flex flex-col gap-7 mt-32 max-w-xl">

            <p style={entrance(0.05)} className="flex items-center gap-2 text-white/60 text-sm tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block"
                style={{ animation:"dotPing 2.5s ease-in-out infinite" }} />
              Introduction
            </p>

            <h1 style={entrance(0.2)} className="text-white text-5xl xl:text-6xl font-light leading-tight tracking-tight">
              Passion meets code,<br />
              creativity meets<br />
              design.
            </h1>

            <div style={entrance(0.35)} className="flex flex-wrap gap-2">
              {["Full Stack Development","UI/UX Design","Database Design","Webflow Development"].map((tag) => (
                <span key={tag} className="tag-pill px-3 py-1 rounded-full border border-white/30 text-white/80 text-xs cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            <div style={entrance(0.5)} className="flex gap-4 mt-2">
              <div className="stat-card bg-white rounded-2xl px-5 py-4 min-w-[200px] h-[140px] flex flex-col justify-between cursor-default">
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-xs mb-1">Projects</p>
                  <BlackLogoIcon size={18} />
                </div>
                <p className="text-gray-900 text-3xl font-semibold">10+</p>
              </div>
              <div className="stat-card rounded-2xl px-5 py-4 min-w-[200px] bg-[#1e0c09] opacity-80 h-[140px] flex flex-col justify-between cursor-default">
                <div className="flex items-center justify-between">
                  <p className="text-white/50 text-xs">Success Rate</p>
                  <LogoIcon size={18} />
                </div>
                <p className="text-white text-3xl font-semibold mt-1">98%</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT PROFILE CARD ── */}
          <div className={`hidden lg:flex flex-col mt-20 rounded-3xl h-full overflow-hidden w-72 shadow-2xl bg-[#1e0c09] card-entrance${ready ? " ready" : ""}`}>

            <div className="flex items-center justify-between px-4 pt-4 pb-2">
              <LogoIcon size={30} />
              <span className="flex items-center gap-1.5 text-xs text-white/70 border border-white/20 rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400"
                  style={{ animation:"dotPing 1.8s ease-in-out infinite" }} />
                Available
              </span>
            </div>

            <img src={profileImage} alt="profile"
              className="w-80 p-6 h-90 object-cover object-top"
              style={{ transition:"transform 0.4s ease" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />

            <div className="px-4 pt-4 pb-2 text-center">
              <p className="text-white font-semibold tracking-widest text-sm uppercase">SAJEEL NAWAZ</p>
              <p className="text-white/50 text-xs mt-1">Lahore , Pakistan</p>
            </div>

            {/* MUSIC PLAYER */}
            <div className="mx-4 my-2 bg-white/10 rounded-2xl px-4 py-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <p className="text-white text-xs font-semibold truncate">Beanie - Piano Version</p>
                  <p className="text-white/40 text-xs">Ambient</p>
                </div>
                <button onClick={togglePlay}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white"
                  style={{ transition:"background 0.2s, transform 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                  {playing ? <HiMiniPause className="w-4 h-4" /> : <HiMiniPlay className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-end gap-0.5 h-5">
                {BAR_HEIGHTS.map((h, i) => (
                  <div key={i}
                    className={`flex-1 music-bar${playing ? " active" : ""}`}
                    style={{ height:`${h}%`, "--dur":`${BAR_DURATIONS[i]}s`, "--delay":`${BAR_DELAYS[i]}s` }} />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-white/30 text-xs">🔈</span>
                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolume}
                  className="flex-1 h-1 accent-white cursor-pointer" />
                <span className="text-white/30 text-xs">🔊</span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center justify-center gap-3 py-3">
              {[
                { href:"https://www.linkedin.com/in/sajeel-nawaz-8394313b3/", icon:<FaLinkedinIn className="w-4 h-4" /> },
                { href:"https://www.instagram.com/sajeelx_/",                 icon:<FaInstagram  className="w-4 h-4" /> },
                { href:"https://www.facebook.com/mian.sajeel.988",             icon:<FaFacebookF  className="w-4 h-4" /> },
              ].map(({ href, icon }) => (
                <a key={href} href={href}
                  className="social-icon w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50">
                  {icon}
                </a>
              ))}
            </div>

            {/* CONTACT BUTTON */}
            <div className="px-4 pb-5">
              <button
                onClick={() => { const s = document.getElementById("contact"); if(s) s.scrollIntoView({ behavior:"smooth", block:"start" }); }}
                className="contact-btn w-full flex items-center justify-between border border-white/15 rounded-full px-4 py-2.5 text-white/80 text-sm group">
                <span>Contact Now</span>
                <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-gray-900 group-hover:scale-110"
                  style={{ transition:"transform 0.2s" }}>
                  <HiArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>

        </main>
      </div>
    </>
  );
}