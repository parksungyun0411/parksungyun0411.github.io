const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "C / C++", "R", "SQL", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend / AI",
    items: [
      "FastAPI",
      "Node.js / Express",
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "scikit-learn",
      "KoELECTRA",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Zustand",
      "TanStack Query",
      "KaTeX",
    ],
  },
  {
    title: "Data Stores",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Neo4j",
      "Redis",
      "Pinecone / Chroma",
      "pandas / numpy",
    ],
  },
  {
    title: "Infra / DevOps",
    items: [
      "AWS (EC2 · S3 · SES)",
      "Azure",
      "Docker",
      "GitHub Actions",
      "Linux",
      "Nginx",
    ],
  },
  {
    title: "Statistics",
    items: [
      "회귀 분석",
      "비모수 통계",
      "다변량 분석 (PCA · 인자 · 군집 · 판별)",
      "분류 / 클러스터링",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-200"
    >
      <div className="text-sm font-mono text-blue-600 mb-3">## skills</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-12">
        Tech Stack
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((g) => (
          <div
            key={g.title}
            className="bg-white border border-zinc-200 rounded-xl p-5"
          >
            <h3 className="font-semibold text-zinc-900 mb-3 text-sm">
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2 py-1 bg-zinc-100 text-zinc-700 rounded font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
