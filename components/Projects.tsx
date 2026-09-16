import { IconArrowUpRight } from "@tabler/icons-react";
import SectionHeading from "./SectionHeading";
import { site } from "@/content/site";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading title="Projects" />
        </div>

        <div className="space-y-8 lg:col-span-8">
          {site.projects.map((project, index) => {
            const inner = (
              <div className="space-y-4">
                <div>
                  <span className="font-mono text-sm text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-fg sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-fg-muted sm:text-sm">
                    {project.period}
                  </p>
                </div>
                <p
                  className={`text-base leading-relaxed text-fg-soft sm:text-lg ${
                    project.link ? "pr-12 sm:pr-14 md:pr-16" : ""
                  }`}
                >
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-1.5 pt-2 sm:gap-2">
                  {project.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-md bg-pill-strong px-2.5 py-1 font-mono text-xs font-medium text-pill-strong-fg sm:rounded-lg sm:px-3 sm:py-1.5 sm:text-sm"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            );

            const cardClass =
              "relative block rounded-xl border border-line bg-bg-soft p-4 transition-all duration-300 sm:rounded-2xl sm:p-6 md:p-8";

            return (
              <article key={project.name} className="group relative">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${cardClass} hover:-translate-y-1 hover:border-fg-muted hover:bg-bg hover:shadow-xl hover:shadow-accent-soft`}
                  >
                    <span
                      aria-hidden
                      className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-pill-strong text-pill-strong-fg transition-all duration-300 sm:right-6 sm:top-6 sm:h-11 sm:w-11 md:right-8 md:top-8 md:h-12 md:w-12"
                    >
                      <IconArrowUpRight
                        size={20}
                        stroke={2}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                    {inner}
                  </a>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
