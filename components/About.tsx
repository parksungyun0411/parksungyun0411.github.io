export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-sm font-mono text-blue-600 mb-3">## about</div>
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-8">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4 text-zinc-700 leading-relaxed">
          <p>
            건국대학교 스마트ICT융합공학과 / 응용통계학과 다전공.{" "}
            <strong className="text-zinc-900">2026년 2월 졸업 예정.</strong>{" "}
            데이터·통계 백그라운드 위에 백엔드/AI 엔지니어링을 쌓아가는 중.
          </p>
          <p>
            관심 영역은{" "}
            <strong className="text-zinc-900">
              실시간으로 수만 명에게 안정적으로 동작하는 AI 시스템
            </strong>{" "}
            — Graph-RAG 같은 비결정적 모듈을 결정적인 백엔드로 wrap하고, 캐싱·인덱싱·관측 가능성으로 production-grade로 끌어올리는 일.
          </p>
          <p>
            현재 <strong className="text-zinc-900">데이콘 AX 컨설팅</strong>에서 AI/데이터 컨설팅 업무 중. 이전엔 자빅스에서 클라우드·엔터프라이즈 서비스 운영, 한이음 드림업에서 AI 백엔드 개발.
          </p>
        </div>
        <aside className="bg-zinc-100 rounded-xl p-6 space-y-3 text-sm">
          <div>
            <div className="text-zinc-500 mb-1">학력</div>
            <div className="text-zinc-900 font-medium">
              건국대학교 스마트ICT융합공학과
            </div>
            <div className="text-zinc-600 text-xs">
              응용통계학과 다전공 · 2020.03 ~ 2026.02
            </div>
          </div>
          <div>
            <div className="text-zinc-500 mb-1">현재</div>
            <div className="text-zinc-900 font-medium">데이콘 AX 컨설팅</div>
          </div>
          <div>
            <div className="text-zinc-500 mb-1">위치</div>
            <div className="text-zinc-900 font-medium">Seoul, KR</div>
          </div>
        </aside>
      </div>
    </section>
  );
}
