export default function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
        01 — About
      </p>
      <h2 className="mb-8 text-2xl font-bold text-zinc-900">About</h2>

      <div className="space-y-5 text-zinc-600 leading-relaxed">
        <p>
          건국대학교 <strong className="font-medium text-zinc-800">스마트ICT융합공학과</strong>와{" "}
          <strong className="font-medium text-zinc-800">응용통계학과</strong>를 다전공하고
          2026년 2월에 졸업했습니다. 데이터·통계 백그라운드 위에 백엔드와 AI 엔지니어링을
          쌓아 왔습니다.
        </p>
        <p>
          주된 관심은{" "}
          <strong className="font-medium text-zinc-800">
            실시간으로 수만 명에게 안정적으로 동작하는 AI 시스템
          </strong>
          입니다. Graph-RAG처럼 결과가 매번 달라질 수 있는 AI 모듈을 안정적인 백엔드로 감싸고,
          캐싱·인덱싱·모니터링을 더해 실제 서비스 수준으로 끌어올리는 일을 좋아합니다.
        </p>
        <p>
          현재 <strong className="font-medium text-zinc-800">DACON</strong>에서 운영 / 기획 / QA
          매니저로 일하며, 해커톤 평가(ELO 순위) 시스템과 QA 자동화 도구를 직접 기획·구현하고 있습니다
          (2026.04~). 2025년 여름에는{" "}
          <strong className="font-medium text-zinc-800">자빅스</strong>에서 클라우드·엔터프라이즈
          서비스 운영 인턴을 했고, 같은 해 한이음 드림업에서{" "}
          <strong className="font-medium text-zinc-800">NerdMath</strong> 프로젝트를
          진행했습니다.
        </p>
      </div>

      <div className="mt-8 rounded-xl border border-zinc-200 bg-white p-5">
        <dl className="grid grid-cols-[max-content_1fr] gap-x-8 gap-y-4 text-sm">
          <dt className="text-zinc-400">학력</dt>
          <dd className="text-zinc-800">
            건국대학교 스마트ICT융합공학과 · 응용통계학과 다전공
            <span className="ml-2 text-zinc-400 text-xs">2020.03 – 2026.02</span>
          </dd>

          <dt className="text-zinc-400">현재</dt>
          <dd className="text-zinc-800">
            DACON — 운영 / 기획 / QA 매니저
            <span className="ml-2 text-zinc-400 text-xs">2026.04~</span>
          </dd>

          <dt className="text-zinc-400">위치</dt>
          <dd className="text-zinc-800">Seoul, KR</dd>
        </dl>
      </div>
    </section>
  );
}
