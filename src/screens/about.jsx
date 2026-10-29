import Reveal from "../component/Reveal";
import SectionHeader from "../component/SectionHeader";
import aboutImg from "../assets/image.png";

const principles = [
  ["Own the whole stack", "I build the interface, the API and the database, so the pieces fit together."],
  ["Match what already works", "When a mobile app exists, I use it as the reference for web behaviour and field names."],
  ["Ship, then keep it running", "I deploy and maintain live apps, so I write code with production in mind."],
];

export default function About() {
  return (
    <section id="about" className="bg-[#171717] border-t border-[#2A2A2A] font-body py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeader index="02" label="About" title="A developer who likes the whole picture." />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="max-w-[280px] rounded-xl overflow-hidden border border-[#2A2A2A] bg-[#111111]">
              <img
                src={aboutImg}
                alt="Portrait of Sajeel Nawaz"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover object-top"
              />
            </div>
          </Reveal>

          <div className="md:col-span-8">
            <Reveal delay={80}>
              <p className="text-xl sm:text-2xl font-light leading-9 text-[#F2EEE9] max-w-2xl">
                I’m Sajeel, a full-stack developer in Lahore. I build web apps, REST APIs and mobile
                apps with React, Node.js, MySQL and Expo.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-[#A7A7A7] leading-8 mt-6 max-w-2xl">
                I care about clean code, fast screens and interfaces that are easy to use. I’ve worked on
                hospital, POS and finance products, from the first screen to the live server.
              </p>
            </Reveal>

            <dl className="mt-12 border-t border-[#2A2A2A]">
              {principles.map(([title, text], i) => (
                <Reveal
                  key={title}
                  delay={200 + i * 70}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 py-5 border-b border-[#2A2A2A]"
                >
                  <dt className="sm:col-span-4 font-mono text-xs uppercase tracking-widest text-[#F2EEE9]">{title}</dt>
                  <dd className="sm:col-span-8 text-[#A7A7A7] text-sm leading-7">{text}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
