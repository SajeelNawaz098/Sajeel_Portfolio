import Reveal from "../component/Reveal";
import SectionHeader from "../component/SectionHeader";

const services = [
  {
    title: "Web application development",
    text: "Dashboards, admin panels and business systems in React, built around how your team actually works.",
  },
  {
    title: "API & backend development",
    text: "REST APIs with authentication and role-based access on Node.js, Express and MySQL, ready to serve both web and mobile.",
  },
  {
    title: "Mobile app development",
    text: "Cross-platform iOS and Android apps with React Native and Expo, from first screen to store release.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0B0B0B] border-t border-[#2A2A2A] font-body py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader index="05" label="Services" title="How I can help." />
        <ol className="border-t border-[#2A2A2A]">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 70}
              className="grid grid-cols-12 gap-4 md:gap-10 py-7 border-b border-[#2A2A2A]"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-xs text-[#FF493D] pt-1.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="col-span-10 md:col-span-4 text-xl font-light tracking-tight text-[#F2EEE9]">{s.title}</h3>
              <p className="col-span-12 col-start-1 md:col-start-auto md:col-span-7 text-[#A7A7A7] leading-7">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
