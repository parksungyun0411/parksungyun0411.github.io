"use client";

import { useEffect, useState } from "react";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "featured", label: "Featured" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-28 pt-16">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          박성윤
        </h1>
        <p className="mt-2 text-lg font-medium text-zinc-500">Park Sung Yun</p>
        <p className="mt-4 text-base font-semibold text-zinc-800">
          Data / AI Backend Engineer
        </p>
        <p className="mt-3 max-w-xs leading-relaxed text-zinc-500">
          데이터·통계 기반으로 사용자의 본질적인 문제를 해결하는 백엔드 엔지니어.
        </p>

        {/* 데스크톱 전용 섹션 네비게이션 */}
        <nav className="mt-12 hidden lg:block" aria-label="섹션 네비게이션">
          <ul className="space-y-3 text-sm">
            {NAV.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="group flex items-center gap-3"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={`h-px transition-all ${
                        isActive
                          ? "w-12 bg-blue-600"
                          : "w-6 bg-zinc-300 group-hover:w-12 group-hover:bg-zinc-500"
                      }`}
                    />
                    <span
                      className={`font-mono uppercase tracking-widest transition-colors ${
                        isActive
                          ? "text-blue-600"
                          : "text-zinc-400 group-hover:text-zinc-700"
                      }`}
                    >
                      {label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-10 flex flex-wrap gap-4 text-sm lg:mt-0">
        <a
          href="https://github.com/parksungyun0411"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 transition-colors hover:text-blue-600"
        >
          GitHub
        </a>
        <a
          href="https://velog.io/@parksungyun0411"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 transition-colors hover:text-blue-600"
        >
          Velog
        </a>
        <a
          href="mailto:psyreo93@gmail.com"
          className="text-zinc-500 transition-colors hover:text-blue-600"
        >
          Email
        </a>
      </div>
    </header>
  );
}
