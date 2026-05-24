export default function FeaturedProject() {
  return (
    <section
      id="featured"
      className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-200"
    >
      <div className="text-sm font-mono text-blue-600 mb-3">## featured</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-12">
        Featured Project
      </h2>

      <article className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white rounded-2xl p-10 shadow-2xl">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-200 mb-2">
              한이음 드림업 2025 · 팀: 수정두유좋아
            </div>
            <h3 className="text-4xl font-bold mb-2">NerdMath · 너드수학</h3>
            <p className="text-blue-100 text-lg">
              Graph-RAG + CLIL 기반 AI 수학 학습 플랫폼
            </p>
          </div>
          <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs">
            🔒 Private (NDA)
          </span>
        </div>

        <p className="text-blue-50 leading-relaxed mb-8 max-w-3xl">
          &quot;수포자 → Nerd(글로벌 수학 학습자)&quot; 정체성 전환을 목표로,
          학생의 진단 결과를 분석해{" "}
          <strong className="text-white">맞춤형 8주 학습 경로</strong>를
          자동 생성하는 풀스택 플랫폼. 직접 모노레포 통합·보안 강화·DB 마이그레이션·기능 구현 등 전반 리딩.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Stat n="3" label="대단원 80% 완료" sub="Nerd 모드 전환 조건" />
          <Stat n="20문제" label="진단 테스트" sub="15분 / 25-40-35% 난이도 비율" />
          <Stat n="< 50ms" label="개념 검색 응답" sub="Graph-RAG + LangChain" />
        </div>

        <div className="mb-8">
          <h4 className="font-semibold mb-3 text-white">기술 스택</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Next.js 15 + React 19 + TypeScript",
              "FastAPI + LangChain + LangGraph",
              "Node.js / Express 5",
              "MongoDB Atlas (14 컬렉션)",
              "Neo4j AuraDB (90 nodes / 893 PRECEDES)",
              "PostgreSQL (Supabase)",
              "Upstash Redis",
              "Pinecone + Chroma",
              "Tailwind 4 · Zustand · TanStack Query · KaTeX",
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1 bg-white/15 backdrop-blur rounded-md"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-white">핵심 구현</h4>
          <ul className="space-y-2 text-sm text-blue-50">
            <li>
              <strong className="text-white">Graph-RAG 학습경로:</strong> Neo4j
              `PRECEDES` 그래프 → 진단 오답 + 개념 오답 기반 취약 개념 탐지 → RAG
              백업으로 fallback, 8주 로드맵 자동 생성 (PDF FUNC-REQ-004 준수)
            </li>
            <li>
              <strong className="text-white">CLIL 단계 전환:</strong> 한국어
              Pre-Nerd → 영어 Nerd 모드 (조건: 대단원 80% × 3 ∧ 마라톤 10회 ∧
              레벨 20). 7대 미해결 난제 읽기 콘텐츠 포함
            </li>
            <li>
              <strong className="text-white">실 버그 fix:</strong> MongoDB 연결
              실패 시 BE 프로세스 죽는 버그(`process.exit(1)`) 제거 + retry 무한
              루프 방지. AI `langgraph_service.py` syntax 에러 발견·수정
            </li>
            <li>
              <strong className="text-white">모노레포 통합:</strong> 분리된
              AI/BE/FE repo를 git subtree로 히스토리 보존하며 단일 모노레포로
              통합. 단일 .env source-of-truth + 심볼릭 링크
            </li>
            <li>
              <strong className="text-white">보안 강화:</strong> Helmet + CORS
              화이트리스트, AWS 키 로깅 제거, FastAPI URL 환경변수화, DEBUG 가드
            </li>
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-sm text-blue-200">
          <strong className="text-white">상태:</strong> 18개 라우트 prerender
          빌드 통과 · BE/AI/FE 3개 서버 동시 기동 검증 · 마라톤·돌발 챌린지·Nerd
          모드 풀스택 동작 확인 (Mock 모드 + 실 BE 호출 흐름).
        </div>
      </article>
    </section>
  );
}

function Stat({ n, label, sub }: { n: string; label: string; sub: string }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
      <div className="text-3xl font-bold mb-1">{n}</div>
      <div className="text-sm text-blue-100">{label}</div>
      <div className="text-xs text-blue-300 mt-1">{sub}</div>
    </div>
  );
}
