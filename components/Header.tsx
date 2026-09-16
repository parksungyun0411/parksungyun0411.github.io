"use client";

import { useEffect, useRef, useState } from "react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
];

/**
 * 고정 상단 내비. 스크롤 리스너 대신 페이지 맨 위 센티널이 화면에서 벗어나면
 * 반투명 배경을 켠다 (IntersectionObserver, 매 프레임 재렌더 없음).
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden className="absolute top-0 h-[100px] w-px" />
      <header
        className={`fixed inset-x-0 top-0 z-40 hidden transition-colors duration-300 md:block ${
          scrolled ? "bg-bg/80 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <nav aria-label="섹션 이동" className="mx-auto max-w-7xl px-8 py-4">
          <ul className="flex items-center justify-center gap-8 font-mono text-sm font-medium">
            {NAV.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-fg-soft transition-colors hover:text-fg"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
