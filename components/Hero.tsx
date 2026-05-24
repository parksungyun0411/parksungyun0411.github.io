export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-blue-50"
    >
      <div className="max-w-5xl mx-auto px-6 py-24 sm:py-32">
        <div className="text-sm font-mono text-blue-600 mb-3">
          $ whoami
        </div>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 mb-4">
          박성윤
          <span className="block text-2xl sm:text-3xl text-zinc-500 mt-2 font-normal">
            Park Sung Yun
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-zinc-700 mb-8 max-w-3xl leading-relaxed">
          데이터 / AI 기반으로 사용자의{" "}
          <strong className="text-zinc-900">본질적인 문제</strong>를 해결하는
          <br />
          <strong className="text-zinc-900">백엔드 엔지니어</strong>
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://github.com/parksungyun0411"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white rounded-lg hover:bg-zinc-700 transition-colors text-sm font-medium"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
          <a
            href="mailto:psyreo93@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            ✉ Email
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-300 text-zinc-700 rounded-lg hover:bg-zinc-100 transition-colors text-sm font-medium"
          >
            연락하기 →
          </a>
        </div>
        <div className="flex flex-wrap gap-2 text-xs">
          {[
            "FastAPI",
            "LangChain / LangGraph",
            "Next.js",
            "Node.js",
            "MongoDB / Neo4j",
            "AWS / Azure",
            "Python · Java · TypeScript",
          ].map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-zinc-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
