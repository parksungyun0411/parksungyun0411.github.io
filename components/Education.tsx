import SectionHeading from "./SectionHeading";
import { site } from "@/content/site";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading title="Education" />
        </div>

        <div className="space-y-8 lg:col-span-8">
          {site.education.map((edu) => (
            <article
              key={edu.school}
              className="rounded-lg border border-line bg-bg p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-5 md:p-6"
            >
              <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-fg sm:text-xl">
                    {edu.degree}
                  </h3>
                  <p className="text-base text-accent sm:text-lg">{edu.school}</p>
                </div>
                <span className="mt-2 shrink-0 font-mono text-xs text-fg-muted sm:mt-0 sm:text-sm">
                  {edu.dateRange}
                </span>
              </div>

              <ul className="space-y-2">
                {edu.achievements.map((a) => (
                  <li key={a} className="flex items-start">
                    <span
                      aria-hidden
                      className="mr-3 mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-fg-muted"
                    />
                    <span className="text-sm leading-relaxed text-fg-soft sm:text-base">
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
