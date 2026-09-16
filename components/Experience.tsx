import SectionHeading from "./SectionHeading";
import { site } from "@/content/site";

/** devportfolio 의 세로 타임라인: 카드 위 점, 카드 사이 연결선 */
export default function Experience() {
  const items = site.experience;
  return (
    <section id="experience" className="scroll-mt-16 p-8 sm:p-12 md:p-16 lg:p-24">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading title="Experience" />
        </div>

        <div className="lg:col-span-8">
          <div className="relative">
            {items.map((exp, index) => (
              <div key={exp.company} className="relative mb-12 last:mb-0">
                <div
                  aria-hidden
                  className="absolute -top-2 left-1/2 z-20 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-accent"
                />
                {index < items.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute bottom-0 left-1/2 z-10 h-12 w-0.5 -translate-x-1/2 translate-y-full bg-line"
                  />
                )}

                <article className="rounded-lg border border-line bg-bg p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-5 md:p-6">
                  <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-fg sm:text-xl">
                        {exp.company}
                      </h3>
                      <p className="text-base text-accent sm:text-lg">
                        {exp.title}
                      </p>
                    </div>
                    <span className="mt-2 shrink-0 font-mono text-xs text-fg-muted sm:mt-0 sm:text-sm">
                      {exp.dateRange}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bullets.map((b) => (
                      <li key={b.slice(0, 16)} className="flex items-start">
                        <span
                          aria-hidden
                          className="mr-3 mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-fg-muted"
                        />
                        <span className="text-sm leading-relaxed text-fg-soft sm:text-base">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
