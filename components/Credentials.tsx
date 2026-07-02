import Section from "./Section";

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
    <Section
      index="05"
      id="credentials"
      title="자격·어학"
      kicker="Credentials"
    >
      <div className="space-y-10">
        {/* 학력 */}
        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint">
            학력
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink">
            건국대학교 — 본전공 스마트ICT융합공학과 · 다전공 응용통계학과{" "}
            <span className="tabular-nums text-ink-soft">
              (2020.03 – 2026.02 졸업)
            </span>
          </p>
        </div>

        {/* 자격증 */}
        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint">
            자격증
          </h3>
          <table className="mt-3 w-full border-y border-rule text-sm">
            <thead>
              <tr className="border-b border-rule text-left text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                <th scope="col" className="py-2 font-medium">
                  자격명
                </th>
                <th scope="col" className="py-2 font-medium">
                  발급기관
                </th>
                <th scope="col" className="py-2 text-right font-medium">
                  취득연월
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rule">
              {certs.map((c) => (
                <tr key={c.name}>
                  <td className="py-2 pr-4 font-medium text-ink">{c.name}</td>
                  <td className="py-2 pr-4 text-ink-soft">{c.issuer}</td>
                  <td className="py-2 text-right tabular-nums text-ink-faint">
                    {c.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 어학 */}
        <div>
          <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint">
            어학
          </h3>
          <table className="mt-3 w-full border-y border-rule text-sm">
            <tbody className="divide-y divide-rule">
              {languages.map((l) => (
                <tr key={l.name}>
                  <td className="py-2 pr-4 font-medium text-ink">{l.name}</td>
                  <td className="py-2 pr-4 text-right text-ink-soft">
                    {l.score}
                  </td>
                  <td className="w-24 py-2 text-right tabular-nums text-ink-faint">
                    {l.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
