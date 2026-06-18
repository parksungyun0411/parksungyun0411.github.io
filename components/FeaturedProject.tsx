export default function FeaturedProject() {
  return (
    <section id="featured" className="scroll-mt-24">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
        03 — Featured Projects
      </p>
      <h2 className="mb-8 text-2xl font-bold text-zinc-900">Featured Projects</h2>

      <div className="space-y-6">
        {/* === NerdMath === */}
        <article className="rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">
                한이음 드림업 2025 · 팀: 수정두유좋아
              </p>
              <h3 className="text-xl font-bold text-zinc-900">NerdMath · 너드수학</h3>
              <p className="text-zinc-500 mt-0.5">Graph-RAG + CLIL 기반 AI 수학 학습 플랫폼</p>
            </div>
            <span className="bg-zinc-100 text-zinc-500 text-xs rounded-full px-3 py-1 shrink-0">
              🔒 Private (NDA)
            </span>
          </div>

          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            &apos;수포자 → Nerd(글로벌 수학 학습자)&apos; 정체성 전환을 목표로, 학생 진단 결과를 분석해{" "}
            <strong className="font-medium text-zinc-800">맞춤형 8주 학습 경로</strong>를 자동 생성하는 풀스택 플랫폼.
            모노레포 통합·보안 강화·DB 마이그레이션·기능 구현 전반 리딩.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <Stat n="대단원 80%×3" label="Nerd 모드 전환 조건" sub="" />
            <Stat n="20문제 / 15분" label="진단 테스트 (25-40-35% 난이도)" sub="" />
            <Stat n="&lt; 50ms" label="개념 검색 응답 (Graph-RAG)" sub="" />
          </div>

          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">기술 스택</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Next.js 15 + React 19 + TS",
                "FastAPI + LangChain + LangGraph",
                "Node.js / Express 5",
                "MongoDB Atlas (14 컬렉션)",
                "Neo4j AuraDB (90 nodes / 893 PRECEDES)",
                "PostgreSQL (Supabase)",
                "Upstash Redis",
                "Pinecone + Chroma",
                "Tailwind 4 · Zustand · TanStack Query · KaTeX",
              ].map((s) => (
                <span key={s} className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">핵심 구현</p>
            <ul className="space-y-1.5 text-sm text-zinc-600">
              {[
                ["Graph-RAG 학습경로", "Neo4j 개념 선후관계 그래프로 진단·오답 기반 취약 개념을 찾고, 부족한 부분은 검색(RAG)으로 보완해 8주 로드맵 자동 생성"],
                ["CLIL 단계 전환", "한국어 Pre-Nerd → 영어 Nerd 모드 (대단원 80%×3 ∧ 마라톤 10회 ∧ 레벨 20)"],
                ["실 버그 fix", "MongoDB 연결 실패 시 BE 프로세스 죽는 버그(process.exit(1)) 제거 + retry 무한 루프 방지"],
                ["모노레포 통합", "분리된 AI/BE/FE repo를 git subtree로 히스토리 보존하며 단일 모노레포로 통합"],
                ["보안 강화", "Helmet + CORS 화이트리스트, AWS 키 로깅 제거, FastAPI URL 환경변수화, DEBUG 가드"],
              ].map(([lead, body]) => (
                <li key={lead} className="flex gap-2">
                  <span className="text-blue-500 shrink-0">·</span>
                  <span><strong className="font-medium text-zinc-800">{lead}:</strong> {body}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-zinc-400">
            18개 라우트 prerender 빌드 통과 · BE/AI/FE 3개 서버 동시 기동 검증 · 풀스택 동작 확인
          </p>
        </article>

        {/* === 제주어 다중감정분류 === */}
        <article className="rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mb-1">
                건국대학교 스마트ICT융합공학과 · 2025 가을학기 · 졸업 프로젝트
              </p>
              <h3 className="text-xl font-bold text-zinc-900">제주어 다중감정분류</h3>
              <p className="text-zinc-500 mt-0.5">GPT-4o 라벨링 + 고전 ML로 푸는 저자원 방언 감정 분류</p>
            </div>
            <a
              href="https://github.com/parksungyun0411/jeju-emotion-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-100 text-blue-600 text-xs rounded-full px-3 py-1 shrink-0 hover:underline"
            >
              🎓 GitHub →
            </a>
          </div>

          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            AI Hub 제주어/표준어 병렬 데이터에{" "}
            <strong className="font-medium text-zinc-800">GPT-4o로 7가지 감정 자동 라벨링</strong>을 적용하고,
            TF-IDF + N-gram 특성을 4개 고전 ML 분류기(LR/SVM/RF/NB)로 비교해 저자원 방언 텍스트 감정 분류 모델 구축.{" "}
            <strong className="font-medium text-zinc-800">KoELECTRA 베이스라인 대비 데이터 정제 기준 재설계</strong>로 성능 개선.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <Stat n="4,600+" label="학습 샘플 (AI Hub 제주어)" sub="" />
            <Stat n="7개" label="감정 라벨 (중립·기쁨·슬픔·분노·놀람·공포·혐오)" sub="" />
            <Stat n="4개 분류기" label="LR / SVM / RF / NB · F1-Weighted" sub="" />
          </div>

          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">기술 스택</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Python 3",
                "scikit-learn (TF-IDF·LR·SVM·RF·NB)",
                "OpenAI API (GPT-4o)",
                "pandas · numpy",
                "seaborn · matplotlib",
                "openpyxl",
              ].map((s) => (
                <span key={s} className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-600 font-mono">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">핵심 구현</p>
            <ul className="space-y-1.5 text-sm text-zinc-600">
              {[
                ["GPT-4o 자동 라벨링 파이프라인", "automation.py로 OpenAI API 호출 → 7-class 라벨링 + 수동 검증"],
                ["실험 설계", "제주어 단독 / 표준어 / 통합 데이터 3-way 비교, F1-Weighted + 감정별 상세 분석"],
                ["다중 문장 처리", "간단/완전 두 버전으로 입력 단위 변화 효과 검증"],
                ["TF-IDF 깊이 분석", "단어/2-gram/3-gram 가중치 분포·F1 영향 문서화"],
                ["KoELECTRA 베이스라인 대비", "저자원 환경에서 데이터 정제 기준 재설계로 고전 ML로 더 안정적 성능 확보"],
              ].map(([lead, body]) => (
                <li key={lead} className="flex gap-2">
                  <span className="text-blue-500 shrink-0">·</span>
                  <span><strong className="font-medium text-zinc-800">{lead}:</strong> {body}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-zinc-400">
            GitHub →{" "}
            <a
              href="https://github.com/parksungyun0411/jeju-emotion-analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://github.com/parksungyun0411/jeju-emotion-analysis
            </a>
          </p>
        </article>
      </div>
    </section>
  );
}

function Stat({ n, label, sub }: { n: string; label: string; sub: string }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50/50 p-3">
      <div className="text-xl font-bold text-blue-600 break-keep leading-tight">{n}</div>
      <div className="text-xs text-zinc-500 mt-0.5">{label}</div>
      {sub && <div className="text-[11px] text-zinc-400 mt-0.5">{sub}</div>}
    </div>
  );
}
