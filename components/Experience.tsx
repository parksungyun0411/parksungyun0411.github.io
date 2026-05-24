const experiences = [
  {
    period: "2026 ~ 현재",
    role: "AI / 데이터 컨설턴트",
    company: "데이콘 AX 컨설팅",
    bullets: [
      "AI/데이터 기반 컨설팅 업무 진행 중",
    ],
    current: true,
  },
  {
    period: "2025",
    role: "AI 백엔드 개발자",
    company: "한이음 드림업 — Project NerdMath",
    bullets: [
      "FastAPI + LangChain + LangGraph로 Graph-RAG 맞춤 학습경로 추천 엔진 구현",
      "MongoDB + Neo4j로 개념 그래프 분석 + 진단 결과 기반 취약 개념 자동 보완",
      "GPU Batch Inference + WebSocket 스트림 기반 < 50ms 응답 달성",
    ],
  },
  {
    period: "2025",
    role: "클라우드·엔터프라이즈 서비스 운영 인턴",
    company: "자빅스 (Zabix)",
    bullets: [
      "AWS · Azure 운영, EC2 / Microsoft 365 / IDMS 운영 지원",
      "공공 메신저 '온톡' (사용자 15만, 일 800만 건) 기획·운영 참여",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-200"
    >
      <div className="text-sm font-mono text-blue-600 mb-3">## experience</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-12">
        Experience
      </h2>
      <div className="relative pl-8 sm:pl-12 space-y-10 border-l-2 border-zinc-200">
        {experiences.map((e) => (
          <div key={`${e.period}-${e.company}`} className="relative">
            <div
              className={`absolute -left-[2.6rem] sm:-left-[3.6rem] top-1 w-4 h-4 rounded-full ${
                e.current ? "bg-blue-500 ring-4 ring-blue-100" : "bg-zinc-300"
              }`}
            />
            <div className="text-xs font-mono text-zinc-500 mb-1">
              {e.period}
              {e.current && (
                <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded">
                  현재
                </span>
              )}
            </div>
            <h3 className="text-lg font-bold text-zinc-900">{e.role}</h3>
            <div className="text-sm text-zinc-600 mb-3">{e.company}</div>
            <ul className="space-y-1 text-sm text-zinc-700">
              {e.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-blue-500 mt-1">·</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
