"use client";

import { useEffect, useState } from "react";

const NAV = [
  { id: "experience", no: "01", label: "경력" },
  { id: "featured", no: "02", label: "대표 프로젝트" },
  { id: "projects", no: "03", label: "프로젝트 색인" },
  { id: "skills", no: "04", label: "기술" },
  { id: "credentials", no: "05", label: "자격·어학" },
  { id: "contact", no: "06", label: "연락" },
];

export default function SiteNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="섹션 네비게이션"
      className="sticky top-0 z-40 border-b border-rule bg-paper"
    >
      <div className="mx-auto flex max-w-6xl items-baseline gap-6 overflow-x-auto px-6 py-3 lg:px-10">
        <a
          href="#top"
          className="hidden shrink-0 font-display text-sm font-bold sm:inline"
        >
          박성윤
        </a>
        <ul className="flex gap-5 whitespace-nowrap text-[12px]">
          {NAV.map(({ id, no, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`transition-colors ${
                    isActive
                      ? "font-bold text-accent-deep"
                      : "text-ink-faint hover:text-ink"
                  }`}
                >
                  <span className="font-display">{no}</span>
                  <span className="ml-1.5">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
