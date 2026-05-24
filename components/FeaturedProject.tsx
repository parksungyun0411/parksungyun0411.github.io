export default function FeaturedProject() {
  return (
    <section
      id="featured"
      className="max-w-5xl mx-auto px-6 py-20 border-t border-zinc-200"
    >
      <div className="text-sm font-mono text-blue-600 mb-3">## featured</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-12">
        Featured Projects
      </h2>

      {/* === NerdMath === */}
      <article className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white rounded-2xl p-8 sm:p-10 shadow-2xl mb-8">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-200 mb-2">
              한이음 드림업 2025 · 팀: 수정두유좋아 · 외부 프로그램
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">
              NerdMath · 너드수학
            </h3>
            <p className="text-blue-100 text-base sm:text-lg">
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
          <strong className="text-white">맞춤형 8주 학습 경로</strong>를 자동 생성하는 풀스택 플랫폼. 모노레포 통합·보안 강화·DB 마이그레이션·기능 구현 등 전반 리딩.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Stat
            n="3"
            label="대단원 80% 완료"
            sub="Nerd 모드 전환 조건"
            color="blue"
          />
          <Stat
            n="20문제"
            label="진단 테스트"
            sub="15분 / 25-40-35% 난이도 비율"
            color="blue"
          />
          <Stat
            n="< 50ms"
            label="개념 검색 응답"
            sub="Graph-RAG + LangChain"
            color="blue"
          />
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
              <code className="font-mono mx-1">PRECEDES</code>그래프 → 진단 오답
              + 개념 오답 기반 취약 개념 탐지 → RAG 백업으로 fallback, 8주 로드맵 자동 생성 (PDF FUNC-REQ-004 준수)
            </li>
            <li>
              <strong className="text-white">CLIL 단계 전환:</strong> 한국어
              Pre-Nerd → 영어 Nerd 모드 (조건: 대단원 80% × 3 ∧ 마라톤 10회 ∧ 레벨 20). 7대 미해결 난제 읽기 콘텐츠 포함
            </li>
            <li>
              <strong className="text-white">실 버그 fix:</strong> MongoDB 연결 실패 시 BE 프로세스 죽는 버그(<code className="font-mono">process.exit(1)</code>) 제거 + retry 무한 루프 방지. AI <code className="font-mono">langgraph_service.py</code> syntax 에러 발견·수정
            </li>
            <li>
              <strong className="text-white">모노레포 통합:</strong> 분리된
              AI/BE/FE repo를 git subtree로 히스토리 보존하며 단일 모노레포로 통합. 단일 .env source-of-truth + 심볼릭 링크
            </li>
            <li>
              <strong className="text-white">보안 강화:</strong> Helmet + CORS
              화이트리스트, AWS 키 로깅 제거, FastAPI URL 환경변수화, DEBUG 가드
            </li>
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-sm text-blue-200">
          <strong className="text-white">상태:</strong> 18개 라우트 prerender 빌드 통과 · BE/AI/FE 3개 서버 동시 기동 검증 · 마라톤·돌발 챌린지·Nerd 모드 풀스택 동작 확인.
        </div>
      </article>

      {/* === jeju-emotion-analysis === */}
      <article className="bg-gradient-to-br from-rose-600 via-pink-600 to-fuchsia-700 text-white rounded-2xl p-8 sm:p-10 shadow-2xl">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-rose-200 mb-2">
              건국대학교 스마트ICT융합공학과 · 2025 가을학기
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold mb-2">
              제주어 다중감정분류
            </h3>
            <p className="text-rose-100 text-base sm:text-lg">
              GPT-4o 라벨링 + 고전 ML로 푸는 저자원 방언 감정 분류
            </p>
          </div>
          <a
            href="https://github.com/parksungyun0411/jeju-emotion-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs hover:bg-white/30 transition-colors"
          >
            🎓 졸업 프로젝트 →
          </a>
        </div>

        <p className="text-rose-50 leading-relaxed mb-8 max-w-3xl">
          AI Hub 제주어/표준어 병렬 데이터에 <strong className="text-white">GPT-4o로 7가지 감정 자동 라벨링</strong>을 적용하고, TF-IDF + N-gram 특성을 4개 고전 ML 분류기(LR/SVM/RF/NB)로 비교해 저자원 방언 텍스트의 감정 분류 모델을 구축. <strong className="text-white">KoELECTRA 베이스라인 대비 데이터 정제 기준 재설계</strong>로 성능 개선.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Stat
            n="4,600+"
            label="학습 샘플"
            sub="AI Hub 제주어 + 단발성 대화"
            color="rose"
          />
          <Stat
            n="7개"
            label="감정 라벨"
            sub="중립·기쁨·슬픔·분노·놀람·공포·혐오"
            color="rose"
          />
          <Stat
            n="4개 분류기"
            label="비교 실험"
            sub="LR / SVM / RF / NB · F1-Weighted"
            color="rose"
          />
        </div>

        <div className="mb-8">
          <h4 className="font-semibold mb-3 text-white">기술 스택</h4>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Python 3",
              "scikit-learn (TF-IDF · LR · SVM · RF · NB)",
              "OpenAI API (GPT-4o)",
              "pandas · numpy",
              "seaborn · matplotlib",
              "openpyxl",
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
          <ul className="space-y-2 text-sm text-rose-50">
            <li>
              <strong className="text-white">GPT-4o 자동 라벨링 파이프라인:</strong>
              <code className="font-mono mx-1">automation.py</code>로 OpenAI API 호출 → 7-class 라벨링 + 수동 검증. 비용·시간 효율 라벨링 자동화
            </li>
            <li>
              <strong className="text-white">실험 설계:</strong> 제주어 단독
              모델 / 표준어 베이스라인 / 통합 데이터 베이스라인 3-way 비교. F1-Weighted + 감정별 상세 성능 분석
            </li>
            <li>
              <strong className="text-white">다중 문장 처리:</strong> 간단/완전
              두 버전(<code className="font-mono">multi_sentence_handler*.py</code>)으로 입력 단위 변화 효과 검증
            </li>
            <li>
              <strong className="text-white">TF-IDF 깊이 분석:</strong> 단어 /
              2-gram / 3-gram 변화에 따른 가중치 분포·F1 영향 별도 문서화 (<code className="font-mono">docs/f1_weighted_analysis.txt</code>, <code className="font-mono">tfidf_explanation.txt</code>)
            </li>
            <li>
              <strong className="text-white">KoELECTRA 베이스라인 대비:</strong>
              transformer 베이스라인 결과를 그대로 따르지 않고, 저자원 환경에서 데이터 정제 기준을 재설계해 고전 ML 분류기로 더 안정적인 성능 확보
            </li>
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-sm text-rose-200">
          <strong className="text-white">산출물:</strong> README + 4개 문서(실험 설계 / 모델 명세 / F1 분석 / TF-IDF 설명) +{" "}
          <code className="font-mono text-rose-100">results/</code> 폴더(베이스라인 비교 4종) ·{" "}
          <a
            href="https://github.com/parksungyun0411/jeju-emotion-analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            GitHub →
          </a>
        </div>
      </article>
    </section>
  );
}

function Stat({
  n,
  label,
  sub,
  color = "blue",
}: {
  n: string;
  label: string;
  sub: string;
  color?: "blue" | "rose";
}) {
  const labelColor = color === "rose" ? "text-rose-100" : "text-blue-100";
  const subColor = color === "rose" ? "text-rose-300" : "text-blue-300";
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
      <div className="text-3xl font-bold mb-1">{n}</div>
      <div className={`text-sm ${labelColor}`}>{label}</div>
      <div className={`text-xs ${subColor} mt-1`}>{sub}</div>
    </div>
  );
}
