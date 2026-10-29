import Reveal from "../component/Reveal";
import SectionHeader from "../component/SectionHeader";

const experiences = [
  {
    period: "2025 — Present",
    role: "Frontend Developer → Full-Stack Developer",
    company: "Leotech Solutions & Consultancy",
    link: "https://leotechsolutions.org/",
    summary:
      "Joined as a frontend developer and grew into full-stack work over the first year, owning features from the database to deployment.",
    points: [
      "Build production UI with React and Tailwind CSS, and design and consume REST APIs with Node.js and Express.",
      "Handle MySQL schema design, queries and data operations alongside frontend work.",
      "Delivered full-stack work on HMS Care, POS Control Center & Inventory, the Sea Oil Trade DMCC ERP and the Health Care App.",
      "Built and shipped Budget Planner to Google Play with React Native (Expo), Expo Router, NativeWind and EAS Build.",
      "Worked with the team on UI/UX consistency using reusable component patterns.",
    ],
    stack: ["React", "Next.js", "React Native", "Expo", "Node.js", "Express", "MySQL"],
  },
];

const education = [
  {
    period: "In progress",
    title: "ADP Computer Science",
    place: "Riphah International University",
    note: "1st semester CGPA 3.47",
  },
  { period: "Completed", title: "Intermediate (ICS)", place: "KIPS College" },
  { period: "Completed", title: "Matriculation", place: "Modern Public High School" },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0B0B0B] border-t border-[#2A2A2A] font-body py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader index="03" label="Experience" title="Where I’ve worked and studied." />

        <ol className="relative border-l border-[#2A2A2A] ml-1.5">
          {experiences.map((e) => (
            <Reveal as="li" key={e.role + e.period} className="pl-8 md:pl-12 pb-4 relative">
              <span
                className="absolute -left-[6px] top-2 w-[11px] h-[11px] rounded-full bg-[#FF493D] ring-4 ring-[#0B0B0B]"
                aria-hidden="true"
              />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10">
                <div className="md:col-span-3">
                  <p className="font-mono text-xs tracking-widest uppercase text-[#FF493D]">{e.period}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-light tracking-tight text-[#F2EEE9]">{e.role}</h3>
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-block mt-1 text-[#A7A7A7] hover:text-[#FF493D] transition-colors"
                  >
                    {e.company}
                  </a>
                  <p className="text-[#A7A7A7] leading-7 mt-4 max-w-2xl">{e.summary}</p>
                  <ul className="mt-5 space-y-3 max-w-2xl">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-7 text-[#F2EEE9]/85">
                        <span className="text-[#FF493D]" aria-hidden="true">—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono text-xs text-[#A7A7A7] tracking-wide mt-6">{e.stack.join("  ·  ")}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-20">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#A7A7A7] mb-6">Education</p>
          <ul className="border-t border-[#2A2A2A]">
            {education.map((ed) => (
              <li
                key={ed.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-10 py-5 border-b border-[#2A2A2A]"
              >
                <span className="md:col-span-3 font-mono text-xs tracking-widest uppercase text-[#A7A7A7]">{ed.period}</span>
                <div className="md:col-span-9">
                  <p className="text-lg font-light text-[#F2EEE9]">{ed.title}</p>
                  <p className="text-sm text-[#A7A7A7] mt-1">
                    {ed.place}
                    {ed.note ? ` · ${ed.note}` : ""}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
