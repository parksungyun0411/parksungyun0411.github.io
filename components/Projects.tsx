const projects = [
  {
    name: "liar-game",
    title: "Liar Game",
    subtitle: "네트워크 프로그래밍 팀 프로젝트 · 3-1",
    description:
      "Java Swing + raw TCP 소켓으로 구현한 8인 멀티플레이어 라이어 게임. 서버 멀티스레드 처리 + GameManager 라운드 로직 전담. 181개 주제 풀, 투표·발언 순서·결과 판정 직접 설계.",
    tags: ["Java", "Swing", "TCP Socket", "Multi-Thread", "Gradle"],
    url: "https://github.com/parksungyun0411/liar-game",
    badge: "🎮 팀 프로젝트 (3인)",
    color: "from-emerald-500 to-teal-600",
    star: true,
  },
  {
    name: "university-coursework",
    title: "학부 4년 코드 모음",
    subtitle: "건국대 스마트ICT융합공학과 · 2020 ~ 2025",
    description:
      "학기별 과제·실습 코드. C 자료구조 직접 구현, C++ B+Tree/Slotted Page (DBMS 내부), Java 알고리즘(Prim/Dijkstra/Cut Vertex), R 회귀분석·비모수통계·다변량분석, Python 통계전산처리.",
    tags: ["C", "C++", "Java", "Python", "R"],
    url: "https://github.com/parksungyun0411/university-coursework",
    badge: "📚 학부 학습 기록",
    color: "from-amber-500 to-orange-600",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-200"
    >
      <div className="text-sm font-mono text-blue-600 mb-3">## projects</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-12">
        Other Projects
      </h2>
      <div className="space-y-4">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white border border-zinc-200 rounded-xl p-6 hover:border-zinc-400 hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div
                className={`shrink-0 w-12 h-12 bg-gradient-to-br ${p.color} rounded-lg flex items-center justify-center text-white text-xs font-mono`}
              >
                {p.name.slice(0, 2).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-bold text-lg text-zinc-900 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-xs text-zinc-400">·</span>
                  <code className="text-xs text-zinc-500 font-mono">
                    {p.name}
                  </code>
                  {p.star && (
                    <span className="text-xs">⭐</span>
                  )}
                </div>
                <div className="text-xs text-zinc-500 mb-2">{p.subtitle}</div>
                <p className="text-sm text-zinc-700 mb-3 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded">
                    {p.badge}
                  </span>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 bg-zinc-50 border border-zinc-200 text-zinc-600 rounded font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <svg
                className="shrink-0 w-5 h-5 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
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
          </a>
        ))}
      </div>
    </section>
  );
}
