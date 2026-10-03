export type ProjectCategory = "work" | "personal" | "contest" | "academic";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** 연도·소속 컨텍스트 라벨 (예: "2026 · 데이콘") */
  badge: string;
  /** 상태·성과 칩 (예: "진행 중"). 없으면 미표시 */
  result?: string;
  period: string;
  org: string;
  /** 상세 페이지 역할 박스. 없으면 미표시 */
  role?: string;
  summary: string;
  hero?: string;
  github?: string;
  external?: { label: string; url: string }[];
  stack: string[];
  body: { heading: string; text: string }[];
  /** 출처가 있는 핵심 수치. 상세 페이지 스탯 그리드로 표시 */
  metrics?: ProjectMetric[];
  /** 수치의 출처·한계 설명. metrics 아래에 표시 */
  metricsNote?: string;
  /** 아키텍처 다이어그램. 상세 페이지에 이미지로 표시 */
  architecture?: { image: string; alt: string; note?: string };
  /** 카드·상세 강조색 */
  color?: string;
  featured?: boolean;
  featuredOrder?: number;
  /** true면 목록·상세·홈 어디에도 노출하지 않음 (진행 중 프로젝트 공개 전환용) */
  draft?: boolean;
}

const allProjects: Project[] = [
  {
    slug: "daker-evaluation-system",
    title: "AI 경진대회 플랫폼 평가 시스템 기획·개발·QA",
    category: "work",
    badge: "2026 · 데이콘",
    result: "재직 중",
    period: "2026.04 – 현재",
    org: "데이콘 · 운영·개발 파트",
    role: "서비스 기획 · 풀스택 개발 · QA",
    summary:
      "자사 AI 경진대회 플랫폼의 평가 시스템(평가설정·ELO 대중평가)을 기획부터 배포까지 맡고, 플랫폼 전반의 주간 QA를 담당하고 있습니다.",
    hero: "/projects/daker-evaluation.svg",
    color: "#6366f1",
    stack: [],
    featured: true,
    featuredOrder: 2,
    body: [
      {
        heading: "배경",
        text: "평가 방법이 가중치 토글로 암묵적으로 정해지고, 평가 설정이 제출 단계에 묶여 있어 한 대회에서 평가를 여러 차수로 돌릴 수 없었습니다. 심사위원·제출자·참가자·대중의 평가가 한 점수에 섞여 주체별 영향력이 왜곡되는 문제도 있었습니다.",
      },
      {
        heading: "평가 시스템 재설계",
        text: "평가설정 화면을 세 갈래로 나누고 평가 단계가 설정을 주도하도록 바꿔, 데이터 구조를 바꾸지 않고 다차수 평가를 가능하게 했습니다. 기획부터 배포까지 직접 수행했고 테스트 31건을 모두 통과한 뒤 배포했습니다. 대중평가는 역할별 ELO 레더로 분리하고 평가 주체의 역할에 따라 점수를 정규화하는 룰로 재설계해 62팀 규모 월간 해커톤에 적용했습니다.",
      },
      {
        heading: "근거로 기각하고 대안을 구현",
        text: "리더보드를 몇 매치부터 믿어도 되는지 근거가 없었습니다. 자사 수식을 그대로 쓴 시뮬레이션으로 최소 3,000매치라는 기준선과 상위권 선발의 한계를 산출했고, 이를 근거로 요청받은 투표 가산점 안을 기각한 뒤 한 번도 투표하지 않고 남의 표로 점수를 받던 구조를 막는 호혜 게이트를 구현했습니다.",
      },
      {
        heading: "출시 전 품질 검증",
        text: "ELO 대전·점수 계산·리더보드·갤러리 공개 범위를 영역별로 나눠 감사해, 동시 재계산으로 갱신이 사라지던 문제와 투표 대상 검증 누락을 출시 전에 막았습니다. 블라인드 평가에서 팀명이 노출되던 경로는 개인정보 문제로 보고 먼저 차단했습니다. 주간 체크리스트 QA는 통과 여부 대신 재현 조건을 화면 폭 단위로 특정해 기록했고, 확인하지 못한 항목은 검증 한계로 남겼습니다.",
      },
      {
        heading: "한계",
        text: "사내 저장소라 코드는 공개하지 않습니다. 아래 수치는 이력서 작성 시점(2026-09-15)의 저장소 실측이며 이후 변동될 수 있습니다.",
      },
    ],
    metrics: [
      { label: "작성 PR (머지)", value: "32건 (23건)" },
      { label: "고유 커밋", value: "357건" },
      { label: "주간 QA 기록", value: "최소 86회차" },
      { label: "평가설정 재설계 테스트", value: "31 / 31 통과" },
      { label: "ELO 정규화 룰 적용", value: "62팀 해커톤" },
      { label: "순위 신뢰 기준선 (시뮬레이션)", value: "최소 3,000매치" },
    ],
    metricsNote: "PR·커밋·QA 회차는 2026-09-15 저장소 실측, 나머지는 해당 작업 기록 기준입니다.",
  },
  {
    slug: "traffic-risk-platform",
    title: "교통사고 위험 예측 AI 플랫폼 개발·배포",
    category: "work",
    badge: "2026 · 데이콘",
    period: "2026",
    org: "데이콘 / NIA 정책 수립 지원 데이터 분석 사업",
    role: "개발 · 배포",
    summary:
      "경진대회로 확보한 위험 예측 모델을 공공기관 현업 환경에 올린 플랫폼입니다. 예측 엔진과 화면, 오프라인 설치 패키지를 만들어 외부망이 분리된 PC에 배포했습니다.",
    hero: "/projects/traffic-risk.svg",
    color: "#ef4444",
    stack: ["SHAP"],
    body: [
      {
        heading: "배경",
        text: "NIA 정책 수립 지원 데이터 분석 사업 중 민간 플랫폼을 활용한 전문가 참여형 과제입니다. 경진대회로 우수 모델을 확보한 뒤, 주관기관 현업이 쓸 수 있도록 모델을 검증·시각화하고 배포와 매뉴얼까지 제공해야 했습니다.",
      },
      {
        heading: "구현",
        text: "운수종사자의 검사 결과와 과거 사고 이력을 올리면 개인별 사고 위험도를 산출하고, 어떤 요인이 값을 밀어 올렸는지 SHAP으로 설명해 진단 보고서와 비교 분석으로 내려받게 했습니다.",
      },
      {
        heading: "폐쇄망 배포",
        text: "운영 환경이 외부망이 분리된 윈도우 PC 한 대여서, 임베디드 런타임과 오프라인 설치 파일을 담은 포터블 압축본과 여러 번 실행해도 같은 결과가 나오는 설치 스크립트, 롤백 절차를 만들었습니다. 현장 설치가 보안 프로그램의 폴더 이동 차단으로 실패한 뒤에는 설치 방식을 파일 단위 복사로 다시 작성했습니다. 학습 업로드가 엑셀 첫 시트만 읽어 일부 연도 이력이 빠지던 결함은 전 시트 적재로 고쳤습니다.",
      },
      {
        heading: "한계",
        text: "공공기관 납품 과제라 코드와 데이터, 화면은 공개하지 않습니다. 모델 성능 수치도 이 페이지에는 싣지 않습니다.",
      },
    ],
  },
  {
    slug: "nerdmath",
    title: "너드수학 · AI 개인 맞춤형 수학 학습 플랫폼",
    category: "contest",
    badge: "2025 · 한이음 드림업",
    period: "2025",
    org: "한이음 드림업 공모전",
    role: "AI 백엔드 개발",
    summary:
      "FastAPI와 LangChain·LangGraph 기반으로 Graph-RAG 학습 경로 추천 엔진과 3모드 RAG 챗봇을 구축하고, Mathpix OCR 문항 파이프라인을 설계했습니다.",
    hero: "/projects/nerdmath.svg",
    color: "#0ea5e9",
    stack: ["FastAPI", "LangChain", "LangGraph", "Graph-RAG", "Mathpix OCR"],
    featured: true,
    featuredOrder: 3,
    body: [
      {
        heading: "개요",
        text: "학습 진단 결과로 개인별 학습 경로를 추천하는 AI 수학 튜터 서비스입니다. 한이음 드림업 공모전 팀 프로젝트로, AI 백엔드 개발을 맡았습니다.",
      },
      {
        heading: "담당",
        text: "FastAPI와 LangChain·LangGraph 기반으로 Graph-RAG 학습 경로 추천 엔진과 질문을 세 모드로 나눠 답하는 RAG 챗봇을 구축했고, Mathpix OCR로 문항을 정형화하는 파이프라인을 설계했습니다. 추천 엔진과 챗봇은 각각 완성도 90%까지 구축했고, 추론 응답은 50ms 미만이었습니다.",
      },
      {
        heading: "한계",
        text: "NDA로 저장소가 비공개라 코드와 세부 설계는 공개하지 않습니다. 완성도와 응답 시간은 프로젝트 내부 기준 수치로, 외부에서 검증할 수 없습니다.",
      },
    ],
  },
  {
    slug: "jeju-emotion-analysis",
    title: "제주어 다중감정분류",
    category: "academic",
    badge: "2025 · 졸업 프로젝트",
    period: "2025.09 – 2025.12",
    org: "건국대학교 스마트ICT융합공학과 졸업 프로젝트",
    role: "4인 팀 · 데이터 구축·모델 설계·실험·분석 담당",
    summary:
      "제주어/표준어 병렬 코퍼스를 GPT-4o로 7감정 라벨링해 학습 데이터를 직접 만들고, 고전 ML 베이스라인에서 Dual-Gated KR-BERT + KoELECTRA 앙상블까지 7단계로 개선한 방언 감정 분류 프로젝트입니다.",
    hero: "/projects/jeju-emotion.svg",
    github: "https://github.com/parksungyun0411/jeju-emotion-analysis",
    color: "#f97316",
    stack: ["Python", "PyTorch", "HuggingFace Transformers", "scikit-learn", "KR-BERT", "KoELECTRA", "OpenAI GPT-4o API", "pandas"],
    featured: true,
    featuredOrder: 1,
    body: [
      {
        heading: "배경",
        text: "제주어에는 감정 라벨이 붙은 데이터가 없어 모델을 학습시킬 재료부터 없었습니다. 표준어용 감정 모델은 제주어 특유의 어휘와 어미를 처리하지 못합니다.",
      },
      {
        heading: "데이터 구축",
        text: "AI Hub 제주어/표준어 병렬 코퍼스(텍스트 파일 4,600여 개)와 한국어 단발성 대화 데이터셋을 수집·정제하고, GPT-4o API로 7감정(중립·기쁨·슬픔·분노·놀람·공포·혐오)을 자동 라벨링한 뒤 수동 검증을 병행해 학습 데이터 127,324행을 확보했습니다. 모든 실험은 seed를 고정한 Stratified 7:1:2 분할로 같은 test set을 공유합니다.",
      },
      {
        heading: "접근",
        text: "먼저 TF-IDF + N-gram 특성으로 로지스틱 회귀·SVM·랜덤 포레스트·나이브 베이즈 네 종을 같은 조건에서 비교해 F1-Macro가 약 0.30에 머문다는 것을 확인하고, 이를 딥러닝 전환의 근거로 삼았습니다. 이후 KR-BERT 베이스라인 → 데이터 밸런싱 → Dual-Gated KR-BERT(제주어/표준어 공유 인코더 + 게이트 융합) → 제주어 토크나이저 최적화 → DAPT → Hard Mining → KoELECTRA 앙상블 순으로 개선을 누적했습니다.",
      },
      {
        heading: "결과",
        text: "최종 발표 실험 기준 테스트셋 F1-Macro는 0.8404이고, 강감정(공포·혐오·놀람)은 F1 0.87~0.95입니다. 이후 감정 분류·번역 모델을 서비스로 확장한 탐라(Tamna) 코드(KoBART 제주어↔표준어 번역, FastAPI 추론 API, Next.js 웹앱)도 같은 저장소에 있습니다.",
      },
      {
        heading: "한계",
        text: "0.8404는 최종 발표 실험의 수치입니다. 공개 저장소의 재현 코드로는 단일 KR-BERT(F1-Macro 0.7593)까지 재현을 확인했고 이후 단계의 재현은 진행 중입니다. 원본 데이터(AI Hub 라이선스)와 학습된 가중치는 저장소에 없어, 재현하려면 데이터를 내려받아 직접 학습해야 합니다.",
      },
    ],
    metrics: [
      { label: "고전 ML 최고 (Naive Bayes)", value: "F1-Macro 0.2957" },
      { label: "단일 KR-BERT (저장소 재현)", value: "F1-Macro 0.7593" },
      { label: "최종 앙상블 (발표 실험)", value: "F1-Macro 0.8404" },
      { label: "학습 데이터", value: "127,324행 · 7클래스" },
    ],
    metricsNote: "저장소의 results/baseline_jeju.txt, docs/bert_improvement_report.md, README 기준입니다. 0.8404는 최종 발표 실험 수치로, 저장소 재현은 진행 중입니다.",
  },
  {
    slug: "liar-game",
    title: "라이어 게임 · Java 소켓 멀티플레이어",
    category: "academic",
    badge: "2024 · 네트워크 프로그래밍",
    period: "2024.03 – 2024.05",
    org: "건국대학교 네트워크 프로그래밍 수업 팀 프로젝트",
    role: "3인 팀 · 서버 멀티스레드·게임 로직 담당",
    summary:
      "최대 8명이 동시 접속하는 TCP 소켓 기반 라이어 게임입니다. 접속 처리와 게임 진행이 서로 막지 않도록 서버 스레드를 분리하고 게임 로직을 구현했습니다.",
    hero: "/projects/liar-game.svg",
    github: "https://github.com/parksungyun0411/liar-game",
    color: "#10b981",
    stack: ["Java", "Swing", "Socket", "Thread", "Gradle"],
    featured: true,
    featuredOrder: 4,
    body: [
      {
        heading: "배경",
        text: "한 스레드에서 접속을 받으면서 게임까지 진행하니 사람이 붙는 동안 진행이 멈췄습니다.",
      },
      {
        heading: "접근",
        text: "ServerSocket accept 루프와 게임 진행을 별도 스레드로 나누고, 접속마다 전용 수신 스레드를 두어 메시지를 접두사로 분기해 최대 8인에게 브로드캐스트했습니다. 게임 로직(GameManager)은 주제 풀 181개 로딩, 라이어 무작위 선정, 발언 순서·채팅 잠금 제어, 투표 집계와 승패 판정을 담당합니다.",
      },
      {
        heading: "한계와 회고",
        text: "텍스트 접두사 프로토콜은 확장에 취약해 다시 한다면 구조화된 메시지와 명령 enum을 쓰겠습니다. 동기화를 Vector에 의존해 게임 중 입퇴장 시 순회-수정 경합 위험이 있고, 네트워크 스레드에서 Swing 컴포넌트를 직접 갱신한 부분은 EDT로 위임했어야 합니다. 원본은 팀원 저장소이며, 이 저장소는 포트폴리오 목적으로 복제한 것입니다.",
      },
    ],
  },
  {
    slug: "university-coursework",
    title: "학부 과제·실습 코드 아카이브",
    category: "academic",
    badge: "2020 – 2025 · 학부",
    period: "2020 – 2025",
    org: "건국대학교 스마트ICT융합공학과 · 응용통계학과",
    summary:
      "C 자료구조부터 C++ DBMS 내부 구조, R 다변량 분석까지 학부 과정의 과제·실습 코드를 학기별로 정리한 저장소입니다.",
    hero: "/projects/coursework.svg",
    github: "https://github.com/parksungyun0411/university-coursework",
    color: "#64748b",
    stack: ["C", "C++", "Java", "Python", "R"],
    body: [
      {
        heading: "구성",
        text: "C로 Linked List·Stack·Queue를 직접 구현하고, C++로 B+Tree와 Slotted Page 같은 DBMS 내부 구조를 구현했습니다. Prim·Dijkstra·Cut Vertex 알고리즘(Java·C++), fork/pipe 프로세스 통신, Python 통계전산처리(확률분포·검정·회귀), R 회귀분석·비모수통계·다변량 분석(PCA·인자·군집·판별)이 학기별 폴더에 있습니다.",
      },
      {
        heading: "한계",
        text: "학생 시절 작성한 코드를 그대로 보관한 아카이브로, 리팩터링하지 않았습니다. 일부 과제는 강의용 데이터셋이 있어야 실행됩니다.",
      },
    ],
  },
];

/** 공개 대상 프로젝트. draft 항목은 사이트 어디에도 노출되지 않는다 */
export const projects: Project[] = allProjects.filter((p) => !p.draft);

export const featuredProjects: Project[] = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
