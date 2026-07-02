const LINKS = [
  { href: "https://github.com/parksungyun0411", label: "GitHub" },
  { href: "https://velog.io/@parksungyun0411", label: "Velog" },
  { href: "mailto:psyreo93@gmail.com", label: "Email" },
];

/** 이번 지면의 주요 기록 색인 — 마스트헤드 하단 한 줄 */
const INDEX_LINE = [
  { figure: "F1-Macro 0.30 → 0.84", note: "제주어 감정분류 · 딥러닝 7단계", href: "#featured" },
  { figure: "테스트 31 / 31", note: "평가설정 시퀀스 재설계", href: "#experience" },
  { figure: "62팀 적용", note: "ELO 정규화 룰 설계", href: "#experience" },
];

export default function Masthead() {
  return (
    <header className="mx-auto max-w-6xl px-6 lg:px-10">
      {/* 발행 정보줄 */}
      <div className="reveal flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
        <span>Portfolio — Work &amp; Records</span>
        <span className="hidden sm:inline">Seoul, Korea · 2026</span>
        <nav aria-label="외부 링크" className="flex gap-5">
          {LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-accent-deep"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* 제호 + 데크 */}
      <div className="grid gap-10 pb-12 pt-12 lg:grid-cols-12 lg:gap-12 lg:pb-16 lg:pt-16">
        <div className="reveal-2 reveal lg:col-span-7">
          <h1 className="font-display text-[clamp(3.2rem,10vw,6.8rem)] font-extrabold leading-[1.05] tracking-tight">
            박성윤
          </h1>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-ink-soft">
            Park Sungyun — Data / AI Backend Engineer
          </p>
        </div>
        <div className="reveal-3 reveal flex flex-col justify-end lg:col-span-5">
          <p className="font-display text-[1.35rem] font-medium leading-snug">
            데이터와 AI로 사용자의 본질적인 문제를 찾아 해결하는 엔지니어 —
            기획부터 구현·QA·배포까지.
          </p>
          <div className="mt-5 space-y-2 text-[15px] leading-relaxed text-ink-soft">
            <p>
              건국대학교 스마트ICT융합공학과와 응용통계학과를 다전공하고,
              통계·데이터 위에 AI 백엔드 엔지니어링을 쌓아 왔습니다.
            </p>
            <p>
              지금은 DACON에서 AI 해커톤 플랫폼의 평가 시스템을 기획·설계부터
              구현·테스트·배포까지 직접 수행하고, 플랫폼 전반의 QA와 자동화
              도구를 담당하고 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 이중 괘선 + 주요 기록 색인 */}
      <div className="reveal-4 reveal">
        <div className="border-t-2 border-rule-strong" />
        <div className="mt-[3px] border-t border-rule" />
        <ul className="flex flex-col gap-x-10 gap-y-2 py-4 text-[13px] sm:flex-row sm:flex-wrap">
          {INDEX_LINE.map(({ figure, note, href }) => (
            <li key={figure}>
              <a
                href={href}
                className="group inline-flex flex-wrap items-baseline gap-x-2"
              >
                <span className="font-display font-bold text-accent-deep transition-colors group-hover:text-accent">
                  {figure}
                </span>
                <span className="text-ink-faint transition-colors group-hover:text-ink-soft">
                  {note}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
