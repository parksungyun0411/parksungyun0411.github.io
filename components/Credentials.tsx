const certs = [
  "정보처리기사",
  "빅데이터분석기사",
  "SQLD",
  "ADsP",
  "컴활 1급",
  "한국사 1급",
];
const languages = [
  { name: "TOEIC", score: "885", date: "2024.08" },
  { name: "TOEIC Speaking", score: "IM3", date: "2026.03" },
];

export default function Credentials() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-200">
      <div className="text-sm font-mono text-blue-600 mb-3">## credentials</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8">
        Credentials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-zinc-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4 text-zinc-900 text-sm">자격증</h3>
          <div className="flex flex-wrap gap-2">
            {certs.map((c) => (
              <span
                key={c}
                className="text-sm px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="bg-white border border-zinc-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4 text-zinc-900 text-sm">어학</h3>
          <div className="space-y-2">
            {languages.map((l) => (
              <div
                key={l.name}
                className="flex items-baseline justify-between text-sm"
              >
                <span className="text-zinc-700">{l.name}</span>
                <span>
                  <span className="font-bold text-zinc-900">{l.score}</span>
                  <span className="text-xs text-zinc-500 ml-2">{l.date}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
