// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { MdEmail } from "react-icons/md";
// import { IoLocationSharp } from "react-icons/io5";
// import { BiTime } from "react-icons/bi";
// import { FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";

// const Contact = () => {
//   const formRef = useRef();
//   const [status, setStatus] = useState("idle");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     try {
//       await emailjs.sendForm(
//         "service_288eg8a",
//         "template_ugvt7gh",
//         formRef.current,
//         "LVp2M-1kr_2Jo9iAF"
//       );
//       setStatus("success");
//       formRef.current.reset();
//     } catch (err) {
//       console.error(err);
//       setStatus("error");
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen bg-gradient-to-br from-black via-black to-[#750B03] px-16 py-16 font-mono"
//     >
//       <p className="text-center text-orange-600 text-sm tracking-widest mb-2">Let's connect</p>
//       <h2 className="text-center text-white text-4xl font-bold mb-3">Get In Touch</h2>
//       <div className="w-12 h-1 bg-orange-600 mx-auto mb-12 rounded" />

//       <div className="flex gap-6 max-w-6xl mx-auto items-stretch">

//         {/* LEFT */}
//         <div className="flex flex-col gap-4 w-72 shrink-0 justify-between">

//           <div className="bg-white/10 rounded-2xl p-5">
//             <p className="text-gray-300 text-sm leading-relaxed">
//               Have a project in mind or just want to say hi? Fill out the form
//               or reach me directly — I'm always open to new opportunities.
//             </p>
//           </div>

//           <div className="bg-white/10 rounded-2xl p-5 flex flex-col gap-5">
//             <div className="flex items-center gap-3">
//               <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
//                 <MdEmail className="text-white text-lg" />
//               </div>
//               <div>
//                 <p className="text-gray-500 text-xs">Email</p>
//                 <p className="text-gray-300 text-xs mt-0.5">miansajeel201@gmail.com</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
//                 <IoLocationSharp className="text-white text-lg" />
//               </div>
//               <div>
//                 <p className="text-gray-500 text-xs">Location</p>
//                 <p className="text-gray-300 text-xs mt-0.5">Lahore, Pakistan</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
//                 <BiTime className="text-white text-lg" />
//               </div>
//               <div>
//                 <p className="text-gray-500 text-xs">Availability</p>
//                 <p className="text-gray-300 text-xs mt-0.5">Open to freelance & full-time</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white/10 rounded-2xl p-10">
//             <p className="text-gray-500 text-xs mb-8">Find me on</p>
//             <div className="flex gap-3">
//               <a href="https://www.linkedin.com/in/sajeel-nawaz-8394313b3/" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition">
//                 <FaLinkedinIn className="text-sm" />
//               </a>
//               <a href="https://www.instagram.com/sajeelx_" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition">
//                 <FaInstagram className="text-sm" />
//               </a>
//               <a href="https://www.facebook.com/mian.sajeel.988" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition">
//                 <FaFacebookF className="text-sm" />
//               </a>
//               <a href="https://github.com/SajeelNawaz098" className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/30 transition">
//                 <FaGithub className="text-sm" />
//               </a>
//             </div>
//           </div>

//         </div>

//         {/* RIGHT - FORM */}
//         <div className="flex-1 bg-white/10 rounded-2xl p-8 flex flex-col gap-5">

//           <div>
//             <h3 className="text-white text-2xl font-bold">Send a Message</h3>
//             <p className="text-gray-500 text-xs mt-1">I'll get back to you within 24 hours.</p>
//           </div>

//           <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">

//             <div className="flex flex-col gap-1">
//               <label className="text-gray-300 text-sm">First Name</label>
//               <input
//                 type="text"
//                 name="from_name"
//                 required
//                 className="w-full bg-white/10 border-none rounded-xl px-4 py-3 text-white text-sm outline-none focus:ring-1 focus:ring-[#750B03]"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label className="text-gray-300 text-sm">Last Name</label>
//               <input
//                 type="text"
//                 name="last_name"
//                 required
//                 className="w-full bg-white/10 border-none rounded-xl px-4 py-3 text-white text-sm outline-none focus:ring-1 focus:ring-[#750B03]"
//               />
//             </div>

//             <div className="flex flex-col gap-1">
//               <label className="text-gray-300 text-sm">Email Address</label>
//               <input
//                 type="email"
//                 name="Email"
//                 required
//                 className="w-full bg-white/10 border-none rounded-xl px-4 py-3 text-white text-sm outline-none focus:ring-1 focus:ring-[#750B03]"
//               />
//             </div>

//             <div className="flex flex-col gap-1 flex-1">
//               <label className="text-gray-300 text-sm">Message</label>
//               <textarea
//                 name="message"
//                 required
//                 className="w-full flex-1 min-h-[120px] bg-white/10 border-none rounded-xl px-4 py-3 text-white text-sm outline-none focus:ring-1 focus:ring-[#750B03] resize-none"
//               />
//             </div>

//             {status === "success" && (
//               <p className="text-green-400 text-xs text-center">
//                 ✓ Message sent! I'll get back to you soon.
//               </p>
//             )}
//             {status === "error" && (
//               <p className="text-red-400 text-xs text-center">
//                 ✕ Something went wrong. Please try again.
//               </p>
//             )}

//             <button
//               type="submit"
//               disabled={status === "sending"}
//               className="w-full bg-[#750B03] hover:bg-[#5a0902] disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold py-3 rounded-xl transition"
//             >
//               {status === "sending" ? "Sending..." : "Send"}
//             </button>

//           </form>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Contact;


import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BiTime } from "react-icons/bi";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";

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

const Contact = () => {
  const formRef    = useRef();
  const [sectionRef, inView] = useInView(0.1);
  const [status, setStatus]  = useState("idle");
  const [focused, setFocused] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm("service_288eg8a", "template_ugvt7gh", formRef.current, "LVp2M-1kr_2Jo9iAF");
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const entrance = (direction, delay) => ({
    opacity:   inView ? 1 : 0,
    transform: inView ? "translate(0,0)"
      : direction === "left"  ? "translateX(-32px)"
      : direction === "right" ? "translateX(32px)"
      : direction === "up"    ? "translateY(28px)"
      : "translateY(-28px)",
    transition: `opacity 0.7s cubic-bezier(.22,.68,0,1.2) ${delay}s,
                 transform 0.7s cubic-bezier(.22,.68,0,1.2) ${delay}s`,
  });

  const inputStyle = (name) => ({
    width: "100%",
    background: focused === name ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
    border: `1px solid ${focused === name ? "rgba(117,11,3,0.8)" : "rgba(255,255,255,0.1)"}`,
    borderRadius: 12,
    padding: "12px 16px",
    color: "#fff",
    fontSize: 13,
    outline: "none",
    fontFamily: "monospace",
    transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s",
    boxShadow: focused === name ? "0 0 0 3px rgba(117,11,3,0.2)" : "none",
  });

  return (
    <>
      <style>{`
        @keyframes contactGlow {
          0%,100% { opacity:.4; }
          50%      { opacity:.75; }
        }
        @keyframes successPop {
          0%   { transform:scale(0.8); opacity:0; }
          60%  { transform:scale(1.05); opacity:1; }
          100% { transform:scale(1); opacity:1; }
        }
        @keyframes sendingPulse {
          0%,100% { opacity:1; }
          50%      { opacity:0.5; }
        }
        @keyframes socialBounce {
          0%,100% { transform:translateY(0);  }
          50%      { transform:translateY(-4px); }
        }

        .contact-social-icon {
          transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .contact-social-icon:hover {
          background: rgba(255,255,255,0.3) !important;
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 4px 14px rgba(255,255,255,0.1);
        }

        .contact-info-icon {
          transition: background 0.25s, transform 0.2s;
        }
        .contact-info-icon:hover { transform: scale(1.1); }

        .send-btn {
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s, opacity 0.2s;
        }
        .send-btn:not(:disabled):hover {
          background: #5a0902 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(117,11,3,0.45);
        }
        .send-btn:not(:disabled):active { transform: scale(0.98); }
        .send-btn.sending { animation: sendingPulse 1s ease-in-out infinite; }

        .contact-card {
          transition: background 0.3s, border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .contact-card:hover {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(117,11,3,0.3) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .status-success { animation: successPop 0.4s cubic-bezier(.22,.68,0,1.2) both; }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration:.01ms !important; transition-duration:.01ms !important; }
        }
      `}</style>

      <section
        id="contact"
        ref={sectionRef}
        className="min-h-screen font-mono py-16 px-16"
        style={{ background: "linear-gradient(135deg, #000 0%, #000 55%, #750B03 100%)" }}
      >
        {/* Header */}
        <div style={{ ...entrance("down", 0.05), textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: "#c2410c", fontSize: 13, letterSpacing: "0.12em", marginBottom: 8 }}>
            Let's connect
          </p>
          <h2 style={{ color: "#fff", fontSize: 36, fontWeight: 700, marginBottom: 12 }}>
            Get In Touch
          </h2>
          <div style={{
            height: 3, borderRadius: 2, background: "#c2410c",
            margin: "0 auto",
            width: inView ? 48 : 0,
            transition: "width 0.7s cubic-bezier(.22,.68,0,1.2) 0.3s",
          }} />
        </div>

        <div style={{ display: "flex", gap: 24, maxWidth: 1152, margin: "0 auto", alignItems: "stretch" }}>

          {/* LEFT */}
          <div style={{ ...entrance("left", 0.15), display: "flex", flexDirection: "column", gap: 16, width: 288, flexShrink: 0 }}>

            {/* Intro card */}
            <div className="contact-card" style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16, padding: 20,
            }}>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 13, lineHeight: 1.8 }}>
                Have a project in mind or just want to say hi? Fill out the form
                or reach me directly — I'm always open to new opportunities.
              </p>
            </div>

            {/* Info card */}
            <div className="contact-card" style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16, padding: 20,
              display: "flex", flexDirection: "column", gap: 20,
            }}>
              {[
                { Icon: MdEmail,        label: "Email",        value: "miansajeel201@gmail.com", delay: 0.25 },
                { Icon: IoLocationSharp, label: "Location",    value: "Lahore, Pakistan",          delay: 0.33 },
                { Icon: BiTime,          label: "Availability", value: "Open to freelance & full-time", delay: 0.41 },
              ].map(({ Icon, label, value, delay }) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  opacity:   inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(-12px)",
                  transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
                }}>
                  <div className="contact-info-icon" style={{
                    width: 36, height: 36,
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon style={{ color: "#fff", fontSize: 16 }} />
                  </div>
                  <div>
                    <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 11 }}>{label}</p>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 11, marginTop: 2 }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social card */}
            <div className="contact-card" style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16, padding: 32, flex: 1,
            }}>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginBottom: 16, letterSpacing: "0.1em" }}>
                Find me on
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { href: "https://www.linkedin.com/in/sajeel-nawaz-8394313b3/", Icon: FaLinkedinIn, delay: 0 },
                  { href: "https://www.instagram.com/sajeelx_",                  Icon: FaInstagram,  delay: 0.07 },
                  { href: "https://www.facebook.com/mian.sajeel.988",             Icon: FaFacebookF,  delay: 0.14 },
                  { href: "https://github.com/SajeelNawaz098",                    Icon: FaGithub,     delay: 0.21 },
                ].map(({ href, Icon, delay }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    className="contact-social-icon"
                    style={{
                      width: 40, height: 40,
                      background: "rgba(255,255,255,0.12)",
                      borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#fff",
                      opacity:   inView ? 1 : 0,
                      transform: inView ? "translateY(0)" : "translateY(12px)",
                      transition: `opacity 0.5s ease ${0.5 + delay}s, transform 0.5s ease ${0.5 + delay}s`,
                    }}>
                    <Icon style={{ fontSize: 14 }} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div style={{
            ...entrance("right", 0.2),
            flex: 1,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16, padding: 32,
            display: "flex", flexDirection: "column", gap: 20,
          }}>
            <div style={{
              opacity:   inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(-12px)",
              transition: "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s",
            }}>
              <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700 }}>Send a Message</h3>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, marginTop: 4 }}>
                I'll get back to you within 24 hours.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
              {[
                { label: "First Name", name: "from_name", type: "text",  delay: 0.35 },
                { label: "Last Name",  name: "last_name",  type: "text",  delay: 0.42 },
                { label: "Email Address", name: "Email",  type: "email", delay: 0.49 },
              ].map(({ label, name, type, delay }) => (
                <div key={name} style={{
                  display: "flex", flexDirection: "column", gap: 6,
                  opacity:   inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(16px)",
                  transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
                }}>
                  <label style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>{label}</label>
                  <input
                    type={type} name={name} required
                    style={inputStyle(name)}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              ))}

              <div style={{
                display: "flex", flexDirection: "column", gap: 6, flex: 1,
                opacity:   inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(16px)",
                transition: "opacity 0.5s ease 0.56s, transform 0.5s ease 0.56s",
              }}>
                <label style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>Message</label>
                <textarea
                  name="message" required
                  style={{ ...inputStyle("message"), minHeight: 120, resize: "none", flex: 1 }}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {status === "success" && (
                <p className="status-success" style={{ color: "#4ade80", fontSize: 12, textAlign: "center" }}>
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "#f87171", fontSize: 12, textAlign: "center" }}>
                  ✕ Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className={`send-btn${status === "sending" ? " sending" : ""}`}
                style={{
                  background: "#750B03",
                  color: "#fff",
                  fontSize: 13, fontWeight: 600,
                  padding: "12px 0", borderRadius: 12,
                  border: "none", cursor: status === "sending" ? "not-allowed" : "pointer",
                  opacity: status === "sending" ? 0.6 : 1,
                  fontFamily: "monospace",
                  letterSpacing: "0.05em",
                  opacity:   inView ? (status === "sending" ? 0.6 : 1) : 0,
                  transform: inView ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity 0.5s ease 0.6s, transform 0.5s ease 0.6s, background 0.25s, box-shadow 0.25s",
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;