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
              <p className="text-zinc-500 mt-0.5">학생마다 다른 학습 경로를 짜주는 AI 수학 학습 플랫폼</p>
            </div>
            <span className="bg-zinc-100 text-zinc-500 text-xs rounded-full px-3 py-1 shrink-0">
              🔒 Private (NDA)
            </span>
          </div>

          <p className="text-sm text-zinc-600 leading-relaxed mb-6">
            수학을 포기한 학생도 다시 붙들 수 있도록, 진단 결과를 분석해 학생마다 다른{" "}
            <strong className="font-medium text-zinc-800">학습 경로를 자동으로 짜주는</strong> AI 수학 학습 플랫폼.
            진단 추천 알고리즘과 AI 챗봇 같은 AI 기능부터 보안·안정성·배포 구조까지, 백엔드 전반을 맡았습니다.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <Stat n="대단원 80%×3" label="Nerd 모드 전환 조건" sub="" />
            <Stat n="20문제 / 15분" label="진단 테스트" sub="" />
            <Stat n="&lt; 50ms" label="개념 검색 응답 속도" sub="" />
          </div>

          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">기술 스택</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Next.js · React · TypeScript",
                "FastAPI · LangChain",
                "Node.js · Express",
                "MongoDB",
                "Neo4j",
                "PostgreSQL",
                "Redis",
                "Pinecone · Chroma",
                "Tailwind · Zustand · TanStack Query",
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
                ["학생 맞춤 학습 경로", "진단으로 학생이 막힌 부분을 찾고, 개념의 선후 관계를 따라 부족한 곳부터 채우는 맞춤 학습 경로를 자동으로 생성"],
                ["AI 챗봇·풀이 도우미", "학생 질문을 '문제 풀이 / 개념 설명 / 일반 질문'으로 자동 분류해, 맥락에 맞는 답을 실시간으로 이어서 보여주는 챗봇 구현"],
                ["문제 자동 디지털화", "종이·이미지 속 문항을 OCR로 수식까지 인식해, 사람이 일일이 옮기지 않아도 구조화된 데이터로 자동 변환·저장"],
                ["서버가 죽던 버그 해결", "DB 연결이 한 번 실패하면 백엔드 전체가 멈추던 문제를, 타임아웃·예외 처리로 고쳐 일시적 장애에도 서비스가 계속 동작하도록 개선"],
                ["흩어진 코드 통합", "AI·백엔드·프론트엔드로 따로 관리되던 3개 저장소를, 작업 이력을 보존하며 하나로 합쳐 협업·배포를 단순화"],
                ["보안 강화", "외부 접근을 허용된 주소로만 제한하고 보안 헤더를 더하며, 로그에 남던 접근 키를 제거하고 민감한 설정을 코드 밖으로 분리"],
              ].map(([lead, body]) => (
                <li key={lead} className="flex gap-2">
                  <span className="text-blue-500 shrink-0">·</span>
                  <span><strong className="font-medium text-zinc-800">{lead}:</strong> {body}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-zinc-400">
            전체 페이지 사전 빌드 통과 · 백엔드·AI·프론트 서버를 동시에 띄워 전체 동작까지 직접 확인
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
              <p className="text-zinc-500 mt-0.5">데이터가 적은 제주 방언의 감정을 분류한 모델</p>
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
            데이터가 부족한 제주 방언 문장의 감정을 분류하는 모델을 만든 졸업 프로젝트.{" "}
            <strong className="font-medium text-zinc-800">라벨이 없는 문장을 GPT-4o로 7가지 감정으로 자동 분류</strong>해 학습 데이터를 만들고,
            여러 머신러닝 모델을 비교해 가장 잘 맞는 조합을 찾았습니다.{" "}
            <strong className="font-medium text-zinc-800">무거운 딥러닝 모델보다 데이터를 깨끗하게 다듬는 쪽이 더 안정적</strong>이라는 걸 실험으로 확인했습니다.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <Stat n="4,600+" label="학습 샘플 (AI Hub 제주어)" sub="" />
            <Stat n="7개" label="감정 라벨 (중립·기쁨·슬픔·분노·놀람·공포·혐오)" sub="" />
            <Stat n="4종 비교" label="여러 머신러닝 모델 비교" sub="" />
          </div>

          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-zinc-400 mb-2">기술 스택</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Python",
                "scikit-learn",
                "OpenAI (GPT-4o)",
                "pandas · numpy",
                "seaborn · matplotlib",
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
                ["감정 데이터 자동 생성", "라벨이 없는 방언 문장을 GPT-4o로 7가지 감정으로 자동 분류하고, 사람이 다시 검수해 학습 데이터의 신뢰도를 확보"],
                ["조건을 나눈 비교 실험", "제주 방언만 / 표준어만 / 둘을 합친 경우로 나눠, 어떤 데이터가 감정 분류에 더 유리한지 비교"],
                ["입력 단위 효과 검증", "문장을 짧게 나눠 넣을 때와 통째로 넣을 때의 성능 차이를 확인"],
                ["감정을 가르는 표현 분석", "감정 판단에 크게 작용한 단어·표현을 정리해, 모델이 무엇을 보고 판단하는지 해석"],
                ["가벼운 모델로 더 안정적인 결과", "큰 딥러닝 모델 대신 데이터를 잘 다듬어, 단순한 머신러닝만으로 더 일관된 성능을 확보"],
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
