const projects = [
  {
    name: "liar-game",
    title: "Liar Game",
    subtitle: "네트워크 프로그래밍 팀 프로젝트 · 3-1 · 3인",
    description:
      "Java Swing + raw TCP 소켓으로 구현한 8인 멀티플레이어 라이어 게임. 서버 멀티스레드 처리 + GameManager 라운드 로직 전담. 181개 주제 풀, 투표·발언 순서·결과 판정 직접 설계.",
    tags: ["Java", "Swing", "TCP Socket", "Multi-Thread", "Gradle"],
    url: "https://github.com/parksungyun0411/liar-game",
  },
  {
    name: "university-coursework",
    title: "학부 4년 코드 모음",
    subtitle: "건국대 스마트ICT융합공학과 · 2020 ~ 2025",
    description:
      "학기별 과제·실습 코드. C 자료구조 직접 구현, C++ B+Tree/Slotted Page(DBMS 내부), Java 알고리즘(Prim/Dijkstra/Cut Vertex), R 회귀·비모수·다변량분석, Python 통계전산처리.",
    tags: ["C", "C++", "Java", "Python", "R"],
    url: "https://github.com/parksungyun0411/university-coursework",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
        04 — Other Projects
      </p>
      <h2 className="mb-8 text-2xl font-bold text-zinc-900">Other Projects</h2>
      <div className="space-y-4">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-300 hover:shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 rounded-lg bg-zinc-100 text-zinc-500 font-mono text-xs flex items-center justify-center">
                {p.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <h3 className="font-bold text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <svg
                    className="shrink-0 w-4 h-4 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
                <p className="text-xs text-zinc-400 mb-2">{p.subtitle}</p>
                <p className="text-sm text-zinc-600 leading-relaxed mb-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
