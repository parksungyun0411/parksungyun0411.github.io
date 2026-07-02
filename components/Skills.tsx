import Section from "./Section";

const groups: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C/C++", "R", "SQL"],
  },
  {
    category: "AI / ML",
    items: [
      "PyTorch",
      "HuggingFace Transformers",
      "scikit-learn",
      "KR-BERT·KoELECTRA",
      "OpenAI API(GPT-4o)",
      "LangChain",
      "LangGraph",
      "Graph-RAG / RAG",
    ],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "MongoDB",
      "Neo4j",
      "SSE 스트리밍",
      "WebSocket",
      "Mathpix OCR 파이프라인",
    ],
  },
  {
    category: "Infra / Cloud",
    items: [
      "AWS(EC2)",
      "Azure(AD/Entra ID·Microsoft 365)",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    category: "Data / Statistics",
    items: [
      "pandas·numpy·seaborn",
      "회귀분석",
      "비모수통계",
      "다변량 분석(PCA·인자·군집·판별)",
    ],
  },
  {
    category: "기획 / QA",
    items: [
      "QA 체크리스트·회귀 테스트 설계",
      "QA 자동화(시드 커맨드·검증 하네스)",
      "PRD 작성",
      "Google Analytics 운영",
    ],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript"],
  },
];

export default function Skills() {
  return (
    <Section index="04" id="skills" title="기술" kicker="Skills">
      <dl className="divide-y divide-rule">
        {groups.map((g) => (
          <div
            key={g.category}
            className="py-4 lg:grid lg:grid-cols-12 lg:gap-6"
          >
            <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-faint lg:col-span-3 lg:pt-0.5">
              {g.category}
            </dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-ink lg:col-span-9 lg:mt-0">
              {g.items.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
