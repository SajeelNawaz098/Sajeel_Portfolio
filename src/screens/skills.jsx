import {
  SiReact, SiNextdotjs, SiNestjs, SiPrisma, SiTailwindcss, SiRedux, SiHtml5, SiJavascript, SiTypescript,
  SiExpo, SiNodedotjs, SiExpress, SiJsonwebtokens, SiMysql,
  SiGit, SiGithub, SiPostman, SiFigma, SiPm2, SiVercel,
} from "react-icons/si";
import { FaMobileAlt, FaDatabase, FaCode, FaServer, FaEnvelope } from "react-icons/fa";
import Reveal from "../component/Reveal";
import SectionHeader from "../component/SectionHeader";

const groups = [
  {
    title: "Frontend",
    items: [
      ["React", SiReact], ["Next.js", SiNextdotjs], ["JavaScript", SiJavascript], ["TypeScript", SiTypescript],
      ["Redux", SiRedux], ["Tailwind CSS", SiTailwindcss], ["HTML & CSS", SiHtml5],
    ],
  },
  {
    title: "Backend",
    items: [
      ["Node.js", SiNodedotjs], ["Express", SiExpress], ["NestJS", SiNestjs], ["REST APIs", FaServer], ["JWT auth", SiJsonwebtokens],
    ],
  },
  {
    title: "Databases",
    items: [["MySQL", SiMysql], ["Schema design", FaDatabase], ["Transactional queries", FaDatabase]],
  },
  {
    title: "Mobile",
    items: [["React Native", FaMobileAlt], ["Expo", SiExpo], ["Expo Router", SiExpo], ["NativeWind", SiTailwindcss], ["Reanimated", FaMobileAlt]],
  },
  {
    title: "Tools & deployment",
    items: [
      ["Git", SiGit], ["GitHub", SiGithub], ["Postman", SiPostman], ["Figma", SiFigma], ["EmailJS", FaEnvelope],
   ["Vercel", SiVercel], ["EAS Build", FaCode],
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#171717] border-t border-[#2A2A2A] font-body py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader index="04" label="Skills" title="What I work with." />

        <div className="border-t border-[#2A2A2A]">
          {groups.map((g, i) => (
            <Reveal
              key={g.title}
              delay={i * 50}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-6 border-b border-[#2A2A2A]"
            >
              <h3 className="md:col-span-3 font-mono text-xs uppercase tracking-widest text-[#A7A7A7] md:pt-2">
                {g.title}
              </h3>
              <ul className="md:col-span-9 flex flex-wrap gap-2.5">
                {g.items.map(([name, Icon]) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 rounded-md border border-[#2A2A2A] bg-[#111111] px-3 py-2 text-sm text-[#F2EEE9]/90"
                  >
                    <Icon className="w-4 h-4 text-[#A7A7A7]" aria-hidden="true" />
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
