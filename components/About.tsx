import SectionHeading from "./SectionHeading";
import { site } from "@/content/site";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading title="About Me" />
        </div>

        <div className="space-y-8 lg:col-span-8">
          <div className="space-y-5">
            {site.about.map((p) => (
              <p
                key={p.slice(0, 12)}
                className="text-lg leading-relaxed text-fg-soft sm:text-xl md:text-[1.35rem] md:leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>

          <ul className="flex flex-wrap gap-3 pt-4" aria-label="주요 기술">
            {site.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-pill px-3 py-1.5 font-mono text-sm font-medium text-fg transition-colors duration-200 hover:bg-line sm:px-4 sm:py-2 sm:text-base"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
