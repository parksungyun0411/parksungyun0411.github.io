const skillGroups = [
  { title: "Languages", items: ["Python", "Java", "C / C++", "R", "SQL", "TypeScript", "JavaScript"] },
  { title: "Backend / AI", items: ["FastAPI", "Node.js / Express", "LangChain", "LangGraph", "OpenAI API", "scikit-learn", "KoELECTRA"] },
  { title: "Frontend", items: ["Next.js 15", "React 19", "Tailwind CSS", "Zustand", "TanStack Query", "KaTeX"] },
  { title: "Data Stores", items: ["MongoDB", "PostgreSQL", "Neo4j", "Redis", "Pinecone / Chroma", "pandas / numpy"] },
  { title: "Infra / DevOps", items: ["AWS (EC2·S3·SES)", "Azure", "Docker", "GitHub Actions", "Linux", "Nginx"] },
  { title: "Statistics", items: ["회귀 분석", "비모수 통계", "다변량 분석 (PCA·인자·군집·판별)", "분류 / 클러스터링"] },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">05 — Tech Stack</p>
      <h2 className="mb-8 text-2xl font-bold text-zinc-900">Tech Stack</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-xl border border-zinc-200 bg-white p-5">
            <p className="text-sm font-semibold text-zinc-900 mb-3">{group.title}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 font-mono">
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
