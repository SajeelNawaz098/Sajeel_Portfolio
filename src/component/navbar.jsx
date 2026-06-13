// import { useEffect, useRef } from "react";
// import { HiHome } from "react-icons/hi";
// import { HiUser, HiBriefcase } from "react-icons/hi2";
// import { BsGrid } from "react-icons/bs";
// import { FaLink, FaServicestack } from "react-icons/fa6";
// import logo from "../assets/logo.png";

// const NavBtn = ({ id, Icon, activeNav, setActiveNav }) => {
//   const handleClick = () => {
//     setActiveNav(id);
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
//         activeNav === id
//           ? "bg-white text-gray-900 shadow-md"
//           : "text-white/70 hover:text-white hover:bg-white/10"
//       }`}
//     >
//       <Icon className="w-5 h-5" />
//     </button>
//   );
// };

// const Logo = ({ size = 40 }) => (
//   <img src={logo} alt="Logo" width={size} height={size} style={{ objectFit: "contain" }} />
// );

// export default function Navbar({ activeNav, setActiveNav, time }) {
//   const isClickScrolling = useRef(false);

//   useEffect(() => {
//     const sectionIds = ["home", "about", "skills", "Services", "experience", "contact"];

//     const handleScroll = () => {
//       if (isClickScrolling.current) return;

//       const scrollY = window.scrollY;
//       const windowHeight = window.innerHeight;

//       let current = sectionIds[0];

//       for (const id of sectionIds) {
//         const el = document.getElementById(id);
//         if (!el) continue;
//         const top = el.getBoundingClientRect().top + scrollY;
//         if (scrollY >= top - windowHeight * 0.4) {
//           current = id;
//         }
//       }

//       setActiveNav(current);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [setActiveNav]);

//   const handleNavClick = (id) => {
//     isClickScrolling.current = true;
//     setActiveNav(id);
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//     setTimeout(() => {
//       isClickScrolling.current = false;
//     }, 800);
//   };

//   const NavBtnControlled = ({ id, Icon }) => (
//     <button
//       onClick={() => handleNavClick(id)}
//       className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
//         activeNav === id
//           ? "bg-white text-gray-900 shadow-md"
//           : "text-white/70 hover:text-white hover:bg-white/10"
//       }`}
//     >
//       <Icon className="w-5 h-5" />
//     </button>
//   );

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 px-8 py-5">
//       <div className="grid grid-cols-3 items-center w-full">

//         {/* LEFT - LOGO */}
//         <div className="flex justify-start">
//           <Logo />
//         </div>

//         {/* CENTER - NAV */}
//         <div className="flex justify-center">
//           <nav className="flex items-center justify-center gap-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 shadow-lg">
//             <NavBtnControlled id="home"       Icon={HiHome} />
//             <NavBtnControlled id="about"      Icon={HiUser} />
//             <NavBtnControlled id="skills"     Icon={BsGrid} />
//             <NavBtnControlled id="Services"   Icon={FaServicestack} />
//             <NavBtnControlled id="experience" Icon={HiBriefcase} />
//             <NavBtnControlled id="contact"    Icon={FaLink} />
//           </nav>
//         </div>

//         {/* RIGHT - TIME */}
//         <div className="flex justify-end">
//           <p className="text-white/70 text-sm">Lahore, Pakistan &nbsp; {time}</p>
//         </div>

//       </div>
//     </header>
//   );
// }
import { useEffect, useRef, useState } from "react";
import { HiHome } from "react-icons/hi";
import { HiUser, HiBriefcase } from "react-icons/hi2";
import { BsGrid } from "react-icons/bs";
import { FaLink, FaServicestack } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Logo = ({ size = 40 }) => (
  <img src={logo} alt="Logo" width={size} height={size} style={{ objectFit: "contain" }} />
);

export default function Navbar({ activeNav, setActiveNav, time }) {
  const isClickScrolling = useRef(false);
  const [ready, setReady]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  // ── Fire entrance AFTER first paint, with a tiny extra delay so
  //    the "from" state is definitely rendered before we transition ───────────
  useEffect(() => {
    // double-rAF: first frame paints the hidden state, second triggers transition
    let raf1 = requestAnimationFrame(() => {
      let raf2 = requestAnimationFrame(() => {
        setTimeout(() => setReady(true), 30); // extra 30ms safety net
      });
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  // ── Shrink pill on scroll ──────────────────────────────────────────────────
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  // ── Active section detection ───────────────────────────────────────────────
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "Services", "experience", "contact"];
    const handle = () => {
      if (isClickScrolling.current) return;
      const scrollY = window.scrollY;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (scrollY >= top - window.innerHeight * 0.4) current = id;
      }
      setActiveNav(current);
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, [setActiveNav]);

  const handleNavClick = (id) => {
    isClickScrolling.current = true;
    setActiveNav(id);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => { isClickScrolling.current = false; }, 800);
  };

  const navItems = [
    { id: "home",       Icon: HiHome,         label: "Home"       },
    { id: "about",      Icon: HiUser,         label: "About"      },
    { id: "skills",     Icon: BsGrid,         label: "Skills"     },
    { id: "Services",   Icon: FaServicestack, label: "Services"   },
    { id: "experience", Icon: HiBriefcase,    label: "Experience" },
    { id: "contact",    Icon: FaLink,         label: "Contact"    },
  ];

  // ── Reusable entrance style (inline transitions, not CSS animations) ────────
  const fromLeft = {
    opacity:   ready ? 1 : 0,
    transform: ready ? "translateX(0)"   : "translateX(-22px)",
    transition: "opacity 0.65s cubic-bezier(.22,.68,0,1.2) 0.05s, transform 0.65s cubic-bezier(.22,.68,0,1.2) 0.05s",
  };
  const fromTop = {
    opacity:   ready ? 1 : 0,
    transform: ready ? "translateY(0)"   : "translateY(-22px)",
    transition: "opacity 0.65s cubic-bezier(.22,.68,0,1.2) 0.15s, transform 0.65s cubic-bezier(.22,.68,0,1.2) 0.15s",
  };
  const fromRight = {
    opacity:   ready ? 1 : 0,
    transform: ready ? "translateX(0)"   : "translateX(22px)",
    transition: "opacity 0.65s cubic-bezier(.22,.68,0,1.2) 0.25s, transform 0.65s cubic-bezier(.22,.68,0,1.2) 0.25s",
  };

  return (
    <>
      <style>{`
        @keyframes activePop {
          0%   { transform: scale(1);    }
          40%  { transform: scale(1.18); }
          100% { transform: scale(1);    }
        }
        @keyframes tooltipFade {
          from { opacity: 0; transform: translateX(-50%) translateY(6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0);   }
        }
        @keyframes timePulse {
          0%,100% { opacity: 0.3; transform: scale(1);   }
          50%      { opacity: 1;   transform: scale(1.4); }
        }
        @keyframes activePop {
          0%   { transform: scale(1);    }
          40%  { transform: scale(1.18); }
          100% { transform: scale(1);    }
        }

        .nav-btn {
          position: relative;
          transition: background 0.2s ease, color 0.2s ease,
                      transform 0.2s ease, box-shadow 0.2s ease;
        }
        .nav-btn:hover { transform: translateY(-2px); }
        .nav-btn.is-active {
          animation: activePop 0.35s cubic-bezier(.22,.68,0,1.2) forwards;
          box-shadow: 0 2px 14px rgba(255,255,255,0.22);
        }

        .nav-tooltip {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(20,10,5,0.88);
          color: rgba(255,255,255,0.85);
          font-size: 10px;
          letter-spacing: 0.08em;
          padding: 3px 8px;
          border-radius: 6px;
          white-space: nowrap;
          pointer-events: none;
          animation: tooltipFade 0.2s ease forwards;
          font-family: monospace;
          border: 1px solid rgba(255,255,255,0.1);
          z-index: 100;
        }

        .nav-divider {
          width: 1px; height: 18px;
          background: rgba(255,255,255,0.12);
          border-radius: 1px;
          flex-shrink: 0;
          transition: opacity 0.3s, width 0.3s;
        }

        .time-dot {
          display: inline-block;
          width: 5px; height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.45);
          margin-left: 8px;
          vertical-align: middle;
          animation: timePulse 2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: .01ms !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <header className="fixed top-0 left-0 w-full z-50 px-8 py-5">
        <div className="grid grid-cols-3 items-center w-full">

          {/* LEFT — LOGO */}
          <div className="flex justify-start">
            <div
              style={{
                ...fromLeft,
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.1))",
                transition: fromLeft.transition + ", filter 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={e => e.currentTarget.style.filter = "drop-shadow(0 0 16px rgba(255,255,255,0.28))"}
              onMouseLeave={e => e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(255,255,255,0.1))"}
            >
              <Logo />
            </div>
          </div>

          {/* CENTER — NAV PILL */}
          <div className="flex justify-center">
            <nav
              style={{
                ...fromTop,
                // pill shrink on scroll layered on top of entrance transition
                padding:    scrolled ? "6px 10px" : "8px 12px",
                gap:        scrolled ? "2px" : "4px",
                background: scrolled ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.10)",
                boxShadow:  scrolled ? "0 4px 24px rgba(0,0,0,0.28)" : "0 2px 12px rgba(0,0,0,0.15)",
                // merge transitions
                transition: fromTop.transition
                  + ", padding 0.35s cubic-bezier(.22,.68,0,1.2)"
                  + ", gap 0.35s cubic-bezier(.22,.68,0,1.2)"
                  + ", background 0.3s ease"
                  + ", box-shadow 0.3s ease",
              }}
              className="flex items-center justify-center backdrop-blur-md border border-white/20 rounded-full"
            >
              {navItems.map((item, idx) => {
                const isActive  = activeNav === item.id;
                const isHovered = hoveredId === item.id;

                return (
                  <div key={item.id} className="flex items-center" style={{ gap: scrolled ? "2px" : "4px" }}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      aria-label={item.label}
                      className={`nav-btn w-10 h-10 rounded-full flex items-center justify-center ${
                        isActive
                          ? "is-active bg-white text-gray-900"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <item.Icon className="w-5 h-5" />
                      {isHovered && !isActive && (
                        <span className="nav-tooltip">{item.label}</span>
                      )}
                    </button>

                    {idx < navItems.length - 1 && (
                      <div
                        className="nav-divider"
                        style={{ opacity: scrolled ? 0 : 1, width: scrolled ? 0 : 1 }}
                      />
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* RIGHT — TIME */}
          <div className="flex justify-end">
            <p style={fromRight} className="text-white/70 text-sm font-mono">
              Lahore, Pakistan &nbsp; {time}
              <span className="time-dot" />
            </p>
          </div>

        </div>
      </header>
    </>
  );
}