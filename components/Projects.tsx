import Section from "./Section";

const linkClass =
  "underline decoration-rule underline-offset-4 hover:decoration-accent hover:text-accent-deep transition-colors";

type ProjectRow = {
  no: string;
  title: string;
  meta: string;
  summary: string;
  bullets?: string[];
  tech: string;
  links: { label: string; href: string; external?: boolean }[];
};

const projects: ProjectRow[] = [
  {
    no: "01",
    title: "제주어 다중감정분류",
    meta: "건국대 졸업 프로젝트 · 4인 팀 · 2025.09 – 2025.12",
    summary:
      "제주어/표준어 병렬 코퍼스를 GPT-4o로 7감정 라벨링해 데이터를 직접 구축하고, Dual-Gated KR-BERT + KoELECTRA 앙상블의 7단계 딥러닝 파이프라인으로 F1-Macro 0.30 → 0.84를 달성한 방언 감정 분류 NLP 프로젝트.",
    tech: "Python · PyTorch · HuggingFace Transformers",
    links: [{ label: "02 대표 프로젝트에서 상세 보기", href: "#featured" }],
  },
  {
    no: "02",
    title: "교통사고 위험 예측 AI 플랫폼",
    meta: "데이콘 재직 · 공공기관 납품(NIA 정책 수립 지원 데이터 분석 사업) · 2026 · 비공개 저장소",
    summary:
      "운수종사자의 운전적성정밀검사 결과와 사고 이력으로 개인별 사고 위험도를 산출하고 SHAP으로 요인을 설명하는 웹 플랫폼 — 경진대회로 확보한 우수 모델을 공공기관 현업에 배포하는 단계의 산출물. 외부망이 분리된 Windows PC 한 대에 포터블 zip으로 설치되는 구조로 v4~v9.3.0 릴리스.",
    bullets: [
      "AI 엔진(FastAPI): 도메인별 부스팅 모델 7종의 logit 가중합 + temperature scaling 앙상블과 LightGBM 시퀀스·시간차 피처 모델을 블렌딩, 공식 스코어(0.5·(1−AUC)+0.25·Brier+0.25·ECE) 기준 가중치 탐색, 24개월 관찰창·코호트 90분위 라벨링, 엑셀 전 시트 스트리밍 적재와 SQLite WAL 배치 UPSERT",
      "화면(React·Mantine): 대시보드·운전자 목록(URL 동기화 필터)·개별 정밀 진단(검사 이력 라이브 예측)·비교 분석·500명 단위 zip 다운로드(나눔고딕 내장 벡터 PDF/HTML 보고서)·관리자 재학습·모델 버전·데이터 관리",
      "배포: 임베디드 Python·JRE·nginx와 오프라인 wheel 53개를 담은 포터블 zip, 관리자 권한·여유 공간 검사·파일 단위 덮어쓰기·자동 시작 등록을 멱등하게 수행하는 설치 스크립트와 롤백 절차 — 현장 보안 프로그램의 폴더 이동 차단으로 설치가 실패한 뒤 설치 방식을 전면 재작성(v7), 첫 시트만 읽던 학습 업로드로 검사 이력이 빠지던 결함을 근본 수정(v9)",
      "발주기관 보안 조항(용역 결과물·소스코드 누출 금지)에 따라 코드는 개인 비공개 저장소에만 두고, 기관명·연락처·로고·비밀번호·데이터를 제거한 사본으로 보관 — 면접 시 선별 공유",
    ],
    tech: "Python · FastAPI · scikit-learn · LightGBM · XGBoost · CatBoost · SHAP · SQLite · React · Mantine · jsPDF · Spring Boot(eGovFrame) · nginx · Windows 배포 스크립트",
    links: [{ label: "01 실무 경험에서 상세 보기", href: "#experience" }],
  },
  {
    no: "03",
    title: "liar-game",
    meta: "네트워크 프로그래밍 팀 프로젝트(3인) · 2024.03 – 2024.05",
    summary:
      "최대 8명이 동시 접속하는 TCP 소켓 기반 멀티플레이어 라이어 게임 — 서버 측 멀티스레드 처리와 게임 로직 전담.",
    bullets: [
      "ServerSocket accept 루프와 게임 진행을 별도 스레드로 분리해 서로 블로킹되지 않는 서버 구조 설계 — 인원 상한(8명)·게임 중 입장 차단·강퇴 처리",
      "주제 풀(181개) 로딩, 라이어 무작위 선정, 발언 순서·채팅 잠금 제어, 투표 집계·승패 판정의 게임 로직(GameManager) 구현",
    ],
    tech: "Java · Swing · Socket · Thread · Gradle",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/parksungyun0411/liar-game",
        external: true,
      },
    ],
  },
  {
    no: "04",
    title: "university-coursework",
    meta: "건국대 스마트ICT융합공학과 · 2020 – 2025",
    summary:
      "학부 과정 과제·실습 코드 아카이브 — C 자료구조부터 R 다변량 분석까지.",
    bullets: [
      "C로 Linked List·Stack·Queue 직접 구현, C++로 B+Tree·Slotted Page 등 DBMS 내부 구조 구현",
      "Python 통계전산처리(확률분포·검정·회귀), R 회귀분석·비모수통계·다변량 분석(PCA·인자·군집·판별)",
    ],
    tech: "C · C++ · Java · Python · R",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/parksungyun0411/university-coursework",
        external: true,
      },
    ],
  },
];

export default function Projects() {
  return (
    <Section index="03" id="projects" title="프로젝트 색인" kicker="Index">
      <div>
        {projects.map((p) => (
          <article
            key={p.no}
            className="border-t border-rule py-6 lg:grid lg:grid-cols-12 lg:gap-6"
          >
            <div className="lg:col-span-4">
              <h3 className="font-display text-lg font-bold leading-snug text-ink">
                <span className="mr-2 text-sm text-accent">{p.no}</span>
                {p.title}
              </h3>
              <p className="mt-1.5 text-xs text-ink-faint">{p.meta}</p>
            </div>

            <div className="mt-3 lg:col-span-6 lg:mt-0">
              <p className="text-[15px] leading-relaxed text-ink-soft">
                {p.summary}
              </p>
              {p.bullets && (
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-ink-soft marker:text-ink-faint">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-4 lg:col-span-2 lg:mt-0 lg:text-right">
              <p className="text-xs leading-relaxed text-ink-faint">{p.tech}</p>
              <ul className="mt-2 space-y-1 text-sm">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className={linkClass}
                      {...(l.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
