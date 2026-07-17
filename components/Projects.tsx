import Section from "./Section";

const linkClass =
  "underline decoration-rule underline-offset-4 hover:decoration-accent hover:text-accent-deep transition-colors";

type ProjectRow = {
  no: string;
  title: string;
  meta: string;
  summary: string;
  bullets?: string[];
  tech: string;
  links: { label: string; href: string; external?: boolean }[];
};

const projects: ProjectRow[] = [
  {
    no: "01",
    title: "제주어 다중감정분류",
    meta: "건국대 졸업 프로젝트 · 4인 팀 · 2025.09 – 2025.12",
    summary:
      "제주어/표준어 병렬 코퍼스를 GPT-4o로 7감정 라벨링해 데이터를 직접 구축하고, Dual-Gated KR-BERT + KoELECTRA 앙상블의 7단계 딥러닝 파이프라인으로 F1-Macro 0.30 → 0.84를 달성한 방언 감정 분류 NLP 프로젝트.",
    tech: "Python · PyTorch · HuggingFace Transformers",
    links: [{ label: "02 대표 프로젝트에서 상세 보기", href: "#featured" }],
  },
  {
    no: "02",
    title: "liar-game",
    meta: "네트워크 프로그래밍 팀 프로젝트(3인) · 2024.03 – 2024.05",
    summary:
      "최대 8명이 동시 접속하는 TCP 소켓 기반 멀티플레이어 라이어 게임 — 서버 측 멀티스레드 처리와 게임 로직 전담.",
    bullets: [
      "ServerSocket accept 루프와 게임 진행을 별도 스레드로 분리해 서로 블로킹되지 않는 서버 구조 설계 — 인원 상한(8명)·게임 중 입장 차단·강퇴 처리",
      "주제 풀(181개) 로딩, 라이어 무작위 선정, 발언 순서·채팅 잠금 제어, 투표 집계·승패 판정의 게임 로직(GameManager) 구현",
    ],
    tech: "Java · Swing · Socket · Thread · Gradle",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/parksungyun0411/liar-game",
        external: true,
      },
    ],
  },
  {
    no: "03",
    title: "university-coursework",
    meta: "건국대 스마트ICT융합공학과 · 2020 – 2025",
    summary:
      "학부 과정 과제·실습 코드 아카이브 — C 자료구조부터 R 다변량 분석까지.",
    bullets: [
      "C로 Linked List·Stack·Queue 직접 구현, C++로 B+Tree·Slotted Page 등 DBMS 내부 구조 구현",
      "Python 통계전산처리(확률분포·검정·회귀), R 회귀분석·비모수통계·다변량 분석(PCA·인자·군집·판별)",
    ],
    tech: "C · C++ · Java · Python · R",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/parksungyun0411/university-coursework",
        external: true,
      },
    ],
  },
];

export default function Projects() {
  return (
    <Section index="03" id="projects" title="프로젝트 색인" kicker="Index">
      <div>
        {projects.map((p) => (
          <article
            key={p.no}
            className="border-t border-rule py-6 lg:grid lg:grid-cols-12 lg:gap-6"
          >
            <div className="lg:col-span-4">
              <h3 className="font-display text-lg font-bold leading-snug text-ink">
                <span className="mr-2 text-sm text-accent">{p.no}</span>
                {p.title}
              </h3>
              <p className="mt-1.5 text-xs text-ink-faint">{p.meta}</p>
            </div>

            <div className="mt-3 lg:col-span-6 lg:mt-0">
              <p className="text-[15px] leading-relaxed text-ink-soft">
                {p.summary}
              </p>
              {p.bullets && (
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink-soft marker:text-ink-faint">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-4 lg:col-span-2 lg:mt-0 lg:text-right">
              <p className="text-xs leading-relaxed text-ink-faint">{p.tech}</p>
              <ul className="mt-2 space-y-1 text-sm">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className={linkClass}
                      {...(l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
