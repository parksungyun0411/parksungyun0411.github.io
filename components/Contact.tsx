import Section from "./Section";

const linkClass =
  "underline decoration-rule underline-offset-4 hover:decoration-accent hover:text-accent-deep transition-colors";

const channels = [
  {
    label: "Email",
    value: "psyreo93@gmail.com",
    href: "mailto:psyreo93@gmail.com",
  },
  {
    label: "Email",
    value: "psyreo@naver.com",
    href: "mailto:psyreo@naver.com",
  },
  {
    label: "GitHub",
    value: "github.com/parksungyun0411",
    href: "https://github.com/parksungyun0411",
    external: true,
  },
  {
    label: "Velog",
    value: "velog.io/@parksungyun0411",
    href: "https://velog.io/@parksungyun0411",
    external: true,
  },
];

export default function Contact() {
  return (
    <Section index="06" id="contact" title="연락" kicker="Contact">
      <p className="max-w-[36ch] font-display text-lg leading-relaxed text-ink">
        데이터 / AI / 백엔드 협업이나 프로젝트 제안, 채용 관련 문의
        환영합니다.
      </p>

      <ul className="mt-8 divide-y divide-rule border-y border-rule">
        {channels.map((c) => (
          <li
            key={c.href}
            className="flex items-baseline justify-between gap-4 py-3"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint">
              {c.label}
            </span>
            <a
              href={c.href}
              className={`text-sm text-ink ${linkClass}`}
              {...(c.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {c.value}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 border-t border-rule pt-4 text-[11px] leading-relaxed text-ink-faint">
        © 2026 박성윤 — Next.js로 만들고 GitHub Pages에서 배포
      </p>
    </Section>
  );
}
