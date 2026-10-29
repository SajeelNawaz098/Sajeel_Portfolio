import Reveal from "./Reveal";

export default function SectionHeader({ index, label, title, intro }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#FF493D]">
          {index} / {label}
        </span>
        <span className="h-px flex-1 bg-[#2A2A2A]" aria-hidden="true" />
      </div>
      <h2 className="font-body font-light text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.1] text-[#F2EEE9] max-w-3xl">
        {title}
      </h2>
      {intro && (
        <p className="font-body text-[#A7A7A7] text-base leading-7 mt-5 max-w-2xl">{intro}</p>
      )}
    </Reveal>
  );
}
