import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import Reveal from "../component/Reveal";

const EMAIL = "sajeelnawaz201@gmail.com";

const socials = [
  { label: "GitHub", href: "https://github.com/SajeelNawaz098", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sajeel-nawaz-8394313b3/", Icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/sajeelx_", Icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/mian.sajeel.988", Icon: FaFacebookF },
];

const fieldClass =
  "w-full bg-[#111111] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-[#F2EEE9] placeholder:text-[#A7A7A7]/50 focus:outline-none focus:border-[#FF493D] focus:ring-1 focus:ring-[#FF493D] transition-colors";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle");

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

  return (
    <section id="contact" className="bg-[#171717] border-t border-[#2A2A2A] font-body pt-24 md:pt-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <Reveal className="lg:col-span-6">
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#FF493D] mb-6">06 / Contact</p>
            <h2 className="font-light text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] text-[#F2EEE9]">
              Have a project in mind?
            </h2>
            <p className="text-[#A7A7A7] leading-7 mt-6 max-w-md">
              Open to freelance work and full-time roles. Send a message and I’ll reply as soon as I can.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF493D] text-[#0B0B0B] font-medium px-6 py-3 hover:bg-[#F2EEE9] transition-colors break-all"
            >
              {EMAIL}
              <HiArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 text-sm text-[#A7A7A7] hover:text-[#FF493D] transition-colors"
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-6">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-xl border border-[#2A2A2A] bg-[#0B0B0B] p-6 sm:p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <label className="flex flex-col gap-2 text-sm text-[#A7A7A7]">
                  First name
                  <input type="text" name="from_name" required autoComplete="given-name" className={fieldClass} />
                </label>
                <label className="flex flex-col gap-2 text-sm text-[#A7A7A7]">
                  Last name
                  <input type="text" name="last_name" required autoComplete="family-name" className={fieldClass} />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-[#A7A7A7]">
                Email address
                <input type="email" name="Email" required autoComplete="email" className={fieldClass} />
              </label>
              <label className="flex flex-col gap-2 text-sm text-[#A7A7A7]">
                Message
                <textarea name="message" required rows={5} className={`${fieldClass} resize-none`} />
              </label>

              <div aria-live="polite" className="min-h-[20px] text-sm">
                {status === "success" && <p className="text-[#F2EEE9]">Message sent — I’ll get back to you soon.</p>}
                {status === "error" && <p className="text-[#FF493D]">Something went wrong. Please try again or email me directly.</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="focus-ring rounded-lg bg-[#F2EEE9] text-[#0B0B0B] font-medium py-3 hover:bg-[#FF493D] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>

        <footer className="mt-24 py-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row gap-2 justify-between text-xs text-[#A7A7A7] font-mono">
          <span>© {new Date().getFullYear()} Sajeel Nawaz</span>
          <span>Lahore, Pakistan</span>
        </footer>
      </div>
    </section>
  );
}
