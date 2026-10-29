import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import Reveal from "../component/Reveal";
import SectionHeader from "../component/SectionHeader";
import { projects, moreWork } from "../data/projects";

const shots = import.meta.glob("../assets/projects/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const shotFor = (id) => {
  const key = Object.keys(shots).find((k) => /\/([^/]+)\.[a-z]+$/.test(k) && k.split("/").pop().split(".")[0] === id);
  return key ? shots[key] : null;
};

function ProjectShot({ project }) {
  const src = shotFor(project.id);
  return (
    <div className="rounded-xl border border-[#2A2A2A] bg-[#111111] overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-[#2A2A2A]" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#2A2A2A]" />
      </div>
      <div className="aspect-[16/10] bg-[#0B0B0B]">
        {src ? (
          <img
            src={src}
            alt={`${project.name} screenshot`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-center px-6">
            <span className="font-body font-light text-2xl text-[#F2EEE9]/80">{project.name}</span>
            <span className="font-mono text-[11px] tracking-widest uppercase text-[#A7A7A7]/60">
              Screenshot coming soon
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false);
  const panelId = `details-${project.id}`;
  const flip = index % 2 === 1;
  const links = Object.entries(project.links || {});
  const labels = { live: "Live demo", source: "Source code", caseStudy: "Case study" };

  return (
    <Reveal
      as="article"
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center py-12 md:py-16 border-t border-[#2A2A2A] first:border-t-0 first:pt-0"
    >
      <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <ProjectShot project={project} />
      </div>

      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <p className="font-mono text-xs tracking-[0.15em] uppercase text-[#FF493D] mb-3">
          {String(index + 1).padStart(2, "0")} — {project.category}
        </p>
        <h3 className="font-body font-light text-3xl md:text-4xl tracking-tight text-[#F2EEE9] mb-4">
          {project.name}
        </h3>
        <p className="font-body text-[#A7A7A7] leading-7 mb-5">{project.problem}</p>
        <p className="font-body text-[#F2EEE9]/90 leading-7 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#A7A7A7] block mb-1">My contribution</span>
          {project.contribution}
        </p>

        <p className="font-mono text-xs text-[#A7A7A7] tracking-wide mb-6">
          {project.stack.join("  ·  ")}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="focus-ring font-body text-sm text-[#F2EEE9] inline-flex items-center gap-2 border-b border-[#F2EEE9]/40 pb-0.5 hover:text-[#FF493D] hover:border-[#FF493D] transition-colors"
          >
            {open ? "Hide details" : "Project details"}
            <span aria-hidden="true" className={`transition-transform ${open ? "rotate-45" : ""}`}>+</span>
          </button>
          {links.map(([key, href]) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring font-body text-sm text-[#FF493D] inline-flex items-center gap-1 hover:underline underline-offset-4"
            >
              {labels[key] || key}
              <HiArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          ))}
        </div>

        <div
          id={panelId}
          hidden={!open}
          className="mt-6 border-t border-[#2A2A2A] pt-5"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#A7A7A7] mb-3">Key features</p>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li key={f} className="font-body text-sm text-[#F2EEE9]/85 leading-6 flex gap-3">
                <span className="text-[#FF493D] mt-0.5" aria-hidden="true">—</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0B0B0B] font-body py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader
          index="01"
          label="Selected work"
          title="Systems I’ve built and shipped."
          intro="Four featured projects, then smaller work. Each one says what it does and what I built."
        />
        <div>
          {projects.map((p, i) => (
            <ProjectRow key={p.id} project={p} index={i} />
          ))}
        </div>

        <Reveal className="mt-8 md:mt-12 pt-12 border-t border-[#2A2A2A]">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#A7A7A7] mb-8">More work</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-14">
            {moreWork.map((m) => (
              <li key={m.name} className="py-6 border-t border-[#2A2A2A]">
                <h3 className="text-xl font-light tracking-tight text-[#F2EEE9]">{m.name}</h3>
                <p className="font-mono text-[11px] tracking-wide text-[#FF493D] mt-1.5">{m.kind}</p>
                <p className="text-sm leading-7 text-[#A7A7A7] mt-3">{m.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
