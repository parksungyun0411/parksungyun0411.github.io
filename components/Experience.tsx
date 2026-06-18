type ExperienceEntry = {
  period: string;
  role: string;
  company: string;
  bullets: string[];
  tags: string[];
  current: boolean;
};

const experiences: ExperienceEntry[] = [
  {
    period: "2026.04 — 현재",
    role: "운영 / 기획 / QA 매니저",
    company: "DACON",
    bullets: [
      "해커톤 평가용 ELO 순위 시스템을 기획·구현·QA — 1:1 블라인드 비교 매칭, 심사위원·참가자·일반 점수를 가중 합산하는 방식, 참여가 적을 땐 자동으로 업보트로 전환하는 안전장치까지 설계",
      "ELO·갤러리 기능 버그 33건을 한 PR에서 수정·검증 (블라인드 모드에서 팀명이 노출되던 보안 문제 포함)",
      "QA 셋업 자동화 도구 제작 — 해커톤 테스트 데이터를 수작업 수시간에서 30초대로 만드는 시드 명령, 여러 PR 체크리스트를 한 번에 검증하도록 묶는 도구",
      "사용자 피드백 답변 기능(알림·관리자 답변·메일 발송) 기획·설계",
    ],
    tags: ["ELO 평가", "QA 자동화", "TypeScript / React"],
    current: true,
  },
  {
    period: "2025.05 — 2025.08",
    role: "클라우드·엔터프라이즈 서비스 운영 인턴",
    company: "자빅스 (Zabix) · 여름방학 인턴",
    bullets: [
      "AWS·Azure 운영, EC2 / Microsoft 365 / IDMS 운영 지원 및 고객사 사용량 기반 과금 산정",
      "공공 메신저 '온톡' (사용자 15만, 일 800만 건) 서비스 기획·운영 참여",
    ],
    tags: ["AWS", "Azure", "Microsoft 365"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
        02 — Experience
      </p>
      <h2 className="mb-8 text-2xl font-bold text-zinc-900">Experience</h2>

      <div className="flex flex-col gap-2">
        {experiences.map((entry) => (
          <div
            key={`${entry.period}-${entry.company}`}
            className="group rounded-lg p-4 transition-colors hover:bg-zinc-50"
          >
            <div className="sm:grid sm:grid-cols-[8rem_1fr] sm:gap-6">
              {/* Date column */}
              <div className="mb-2 shrink-0 sm:mb-0">
                <span className="font-mono text-xs uppercase tracking-wide text-zinc-400">
                  {entry.period}
                </span>
                {entry.current && (
                  <span className="ml-2 inline-block rounded-md bg-blue-50 px-1.5 py-0.5 text-xs font-mono text-blue-700 sm:ml-0 sm:mt-1.5 sm:block sm:w-fit">
                    현재
                  </span>
                )}
              </div>

              {/* Content column */}
              <div>
                <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-blue-600">
                  {entry.role}
                </h3>
                <p className="mb-3 text-sm text-zinc-500">{entry.company}</p>

                {entry.bullets.length > 0 && (
                  <ul className="mb-3 space-y-1">
                    {entry.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-sm text-zinc-600">
                        <span className="mt-0.5 shrink-0 text-blue-500">·</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-xs text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
