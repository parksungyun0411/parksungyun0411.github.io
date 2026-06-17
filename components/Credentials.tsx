const certs = [
  { name: "정보처리기사", issuer: "한국산업인력공단", date: "2025.12" },
  { name: "빅데이터분석기사", issuer: "한국데이터산업진흥원", date: "2025.12" },
  { name: "ADsP", issuer: "한국데이터자격검정", date: "2025.06" },
  { name: "SQLD", issuer: "한국데이터자격검정", date: "2024.09" },
  { name: "컴퓨터활용능력 1급", issuer: "대한상공회의소", date: "2024.04" },
  { name: "한국사능력검정시험 1급", issuer: "국사편찬위원회", date: "2023.08" },
];

const languages = [
  { name: "TOEIC", score: "885", date: "2024.08" },
  { name: "TOEIC Speaking", score: "IM3 (130)", date: "2026.03" },
];

export default function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-24">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
        06 — Credentials
      </p>
      <h2 className="mb-8 text-2xl font-bold text-zinc-900">Credentials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 자격증 */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6">
          <h3 className="mb-4 text-sm font-semibold text-zinc-900">자격증</h3>
          <ul className="divide-y divide-zinc-100">
            {certs.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between py-2.5">
                <div>
                  <span className="text-sm font-medium text-zinc-800">{c.name}</span>
                  <span className="ml-2 text-xs text-zinc-400">{c.issuer}</span>
                </div>
                <span className="ml-4 shrink-0 font-mono text-xs text-zinc-500">{c.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 어학 */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6">
          <h3 className="mb-4 text-sm font-semibold text-zinc-900">어학</h3>
          <ul className="divide-y divide-zinc-100">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between py-2.5">
                <span className="text-sm font-medium text-zinc-800">{l.name}</span>
                <span className="flex items-baseline gap-2">
                  <span className="font-bold text-zinc-900">{l.score}</span>
                  <span className="text-xs text-zinc-400">{l.date}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
