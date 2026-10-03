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
    title: "교통사고 위험 예측 AI 플랫폼 운영·배포·유지보수",
    category: "work",
    badge: "2026 · 데이콘",
    result: "인수인계",
    period: "2026.09 – 현재",
    org: "데이콘 / NIA 정책 수립 지원 데이터 분석 사업",
    role: "운영·배포·유지보수 담당 (전임 개발자로부터 인수인계)",
    summary:
      "공공기관에 납품된 교통사고 위험 예측 AI 플랫폼을 2026년 9월 전임 개발자로부터 인수인계받아 운영·배포·유지보수를 담당하고 있습니다.",
    hero: "/projects/traffic-risk.svg",
    color: "#ef4444",
    stack: [],
    body: [
      {
        heading: "담당",
        text: "2026년 9월 11일 전임 개발자로부터 플랫폼을 인수인계받았습니다. 플랫폼의 개발과 이전 배포는 전임 개발자가 수행했습니다. 인수 후 인수인계 패키지를 전수 분석해 코드베이스와 릴리스 이력, 배포 구조를 파악하고, 인수인계 보류 항목 71건을 점수 영향·개인정보·설계 변경·성능으로 분류했습니다.",
      },
      {
        heading: "한계",
        text: "공공기관 납품 과제라 코드와 데이터, 화면, 모델 성능 수치는 공개하지 않습니다.",
      },
    ],
  },
  // ── 개인 프로젝트 (진행 중) ─────────────────────────────────────────────
  // 측정 결과가 아직 없는 프로젝트입니다. 수치·metrics를 넣지 않습니다.
  // 사이트에서 숨기려면 해당 항목의 draft를 true로 바꾸면 됩니다.
  {
    slug: "minwon-rag",
    title: "민원 질의응답 검색 실험 (minwon-rag)",
    category: "personal",
    badge: "2026 · 개인",
    result: "진행 중",
    period: "2026.10 – 진행 중",
    org: "개인 프로젝트 (저장소 비공개)",
    summary:
      "국민권익위 민원정책 질의응답의 실제 시민 질의로 dense → 하이브리드 → 리랭커 검색 설정을 같은 조건에서 비교하는 실험입니다. 아직 측정 전입니다.",
    hero: "/projects/minwon-rag.svg",
    color: "#14b8a6",
    stack: ["Python", "KURE-v1", "bge-m3", "Kiwi + BM25", "bge-reranker-v2-m3", "OpenSearch (선택)", "rag-eval-harness"],
    body: [
      {
        heading: "설계",
        text: "민원 질의는 시민이 쓴 구어체이고 기관 답변은 행정 문체라 같은 내용도 어휘가 많이 어긋납니다. 어휘 일치에 기대는 BM25와 의미 유사도에 기대는 dense 검색의 결과가 갈리는 데이터라 하이브리드·리랭커의 효과를 보기에 맞다고 판단했습니다. data.go.kr API로 민원을 수집해 기준일 이전 민원은 검색 코퍼스, 이후 민원 150건은 평가 질의로 나눕니다. 평가 질의는 LLM으로 합성하지 않고 실제 민원을 그대로 쓰며, 정답 라벨은 기관 답변에 붙은 인용 법령으로 자동 생성합니다(조문 일치는 강, 법령·기관 일치는 약).",
      },
      {
        heading: "비교할 설정",
        text: "Kiwi 형태소 분석 + BM25, dense(KURE-v1, bge-m3), 둘을 RRF로 묶은 하이브리드, 그 위에 bge-reranker-v2-m3로 상위 50건을 다시 정렬하는 설정까지 7종을 한 매트릭스에서 돌립니다. 기준 설정은 dense-kure이고, 지표는 hit@k·recall@k·MRR·nDCG·mAP에 Wilson 신뢰구간과 기준 대비 McNemar 검정, p95 지연을 붙입니다. 평가·통계·보고서는 rag-eval-harness를 의존성으로 씁니다.",
      },
      {
        heading: "상태",
        text: "수집기·전처리·검색·평가 코드와 단위 테스트까지 작성했습니다. 공공데이터포털 인증키를 받기 전이라 실데이터 수집과 측정은 아직 하지 않았고, 결과가 나오기 전에는 이 페이지에 수치를 싣지 않습니다.",
      },
    ],
    draft: true,
  },
  {
    slug: "rag-eval-harness",
    title: "검색·RAG 평가 하네스 (rag-eval-harness)",
    category: "personal",
    badge: "2026 · 개인",
    result: "진행 중",
    period: "2026.10 – 진행 중",
    org: "개인 프로젝트 (저장소 비공개)",
    summary:
      "도메인에 묶이지 않는 검색·RAG 평가 도구입니다. 랭킹 지표, 신뢰구간과 대응 검정, 실험 매트릭스, 실제 질의 대 합성 질의 골든셋 비교를 한 패키지로 묶습니다.",
    hero: "/projects/rag-eval-harness.svg",
    color: "#8b5cf6",
    stack: ["Python", "NumPy", "SciPy", "matplotlib", "Anthropic / OpenAI 호환 API", "pytest", "GitHub Actions"],
    body: [
      {
        heading: "설계",
        text: "골든셋 × 검색 설정 조합을 모두 돌려 질의 단위 결과를 남기고, 평균·신뢰구간·검정은 같은 원자료에서 다시 계산합니다. 비율 지표에는 Wilson 구간을 쓰고, 두 설정의 같은 질의 성공/실패는 McNemar 검정으로 비교합니다(불일치 쌍 25 미만이면 정확 이항검정).",
      },
      {
        heading: "골든셋 비교와 LLM 판정",
        text: "같은 검색 설정들을 실제 시민 질의 골든셋과 LLM이 합성한 질의 골든셋으로 각각 재고, 점수 차이와 설정 순위 상관(Kendall tau-b, Spearman rho)을 계산합니다. 합성 골든셋이 점수를 부풀리더라도 설정 순위가 같다면 설정을 고르는 용도로는 쓸 수 있고, 순위까지 바뀐다면 합성 골든셋으로 고른 설정이 실제 질의에서는 최선이 아닐 수 있다는 질문입니다. 답변 표본은 LLM이 근거성·정확성·유용성을 1~5점으로 판정하고, 파싱되지 않은 판정은 집계에서 빼고 따로 남깁니다.",
      },
      {
        heading: "상태",
        text: "패키지 코드와 단위 테스트(랭킹 지표는 손으로 계산한 값과 대조)까지 작성했습니다. 공공데이터 인증키와 LLM 키를 받기 전이라 측정은 아직 하지 않았습니다.",
      },
    ],
    draft: false,
  },
  {
    slug: "vendor-check-agent",
    title: "공공 API 실패 주입 거래처 점검 에이전트 (vendor-check-agent)",
    category: "personal",
    badge: "2026 · 개인",
    result: "진행 중",
    period: "2026.10 – 진행 중",
    org: "개인 프로젝트 (저장소 비공개)",
    summary:
      "국세청·금융위·OpenDART 공공 API에 실패를 일부러 주입해, 거래처 점검 에이전트가 복구 전략별로 얼마나 회복하는지와 실패를 정상처럼 보고하는 비율을 재려는 실험입니다. 아직 측정 전입니다.",
    hero: "/projects/vendor-check-agent.svg",
    color: "#f59e0b",
    stack: ["Python", "LangGraph", "MCP", "httpx", "Starlette"],
    body: [
      {
        heading: "설계",
        text: "기관별 툴(국세청·금융위·OpenDART 클라이언트)을 MCP 서버로 노출하고, 툴과 기관 API 사이에 실패 주입 프록시를 둡니다. 모든 툴은 예외를 던지지 않고 성공 또는 분류된 오류를 돌려줘, 실패 유형이 MCP 경계 너머 에이전트까지 보존되게 했습니다.",
      },
      {
        heading: "주입하는 실패",
        text: "타임아웃, 5xx, HTTP 200에 오류 본문, 일일 한도 초과, 본문 절단, 필수 필드 누락의 여섯 가지입니다. 복구 전략은 none·retry(지수 백오프)·fallback(다른 기관 값으로 대체)·checkpoint(한도 초과 시 멈췄다가 다음 날 재개) 네 가지로, 효과를 전략 하나에 귀속시키려고 서로 섞지 않습니다.",
      },
      {
        heading: "에이전트 흐름",
        text: "LangGraph로 법인 후보를 찾고, 동명 법인이 둘 이상이면 사람이 법인등록번호를 고르도록 멈춥니다(HITL interrupt). 국세청과 DART 조회는 병렬로 돌리고, 비상장이면서 DART 고유번호가 없는 법인은 DART를 부르지 않습니다. 체크포인트를 SQLite에 남겨, 재개할 때 이미 끝난 기관은 다시 부르지 않습니다.",
      },
      {
        heading: "상태",
        text: "가장 비싼 사고는 툴이 실패했는데 점검 결과가 정상으로 나가는 경우라고 보고 그 비율을 따로 잽니다. 고정 순서 파이프라인(대조군)과 에이전트는 같은 툴과 복구 코드를 써서 차이가 그래프 구조에서만 나도록 했습니다. 코드와 테스트(합성 데이터로 응답하는 가짜 업스트림)는 작성했고, 실험 측정은 아직 하지 않았습니다.",
      },
    ],
    draft: false,
  },
  {
    slug: "jeju-emotion-lora",
    title: "제주어 감정 분류 LoRA 소형 LLM 비교 (jeju-emotion-lora)",
    category: "personal",
    badge: "2026 · 개인",
    result: "진행 중",
    period: "2026.10 – 진행 중",
    org: "개인 프로젝트 (저장소 비공개)",
    summary:
      "졸업 프로젝트의 KoELECTRA 앙상블을 기준으로, LoRA로 미세조정한 소형 LLM 세 종의 분류 성능과 AWQ 4bit·vLLM 서빙 시 건당 비용을 비교하려는 후속 실험입니다. 아직 측정 전입니다.",
    hero: "/projects/jeju-emotion-lora.svg",
    color: "#ea580c",
    stack: ["Python", "PyTorch", "Transformers", "PEFT", "TRL", "LLM Compressor", "vLLM"],
    body: [
      {
        heading: "설계",
        text: "졸업 프로젝트와 같은 데이터·7:1:2 층화 분할·seed 42에서 kanana-1.5-2.1b, Qwen3-4B, Midm-2.0-Mini 세 모델을 제로샷, 클래스당 1개 퓨샷, LoRA bf16, LoRA AWQ 4bit로 나눠 붙이고, 기존 KoELECTRA + Dual KR-BERT 앙상블과 비교합니다. 후보 모델은 상업 이용이 가능한 라이선스만 골랐고, 비상업 라이선스인 EXAONE 4.0 1.2B는 제외했습니다.",

      },
      {
        heading: "보는 지표",
        text: "원 데이터의 감정 라벨은 GPT-4o가 붙였기 때문에, 그 라벨로만 평가하면 GPT-4o를 얼마나 잘 따라 하는지를 재게 됩니다. 그래서 test 분할에서 뽑은 280건에 사람이 다시 라벨을 붙인 평가셋을 따로 두고 두 라벨 기준 macro-F1을 모두 봅니다. 파싱 실패율, 처리량(건/s), p95 지연, 100만 건당 비용도 한 표에 놓고, 표는 측정 파일에서 자동 생성합니다.",
      },
      {
        heading: "상태",
        text: "학습·병합·양자화·평가 코드와 테스트는 작성했고, GPU 실행은 아직 하지 않았습니다. 사람 검수 평가셋도 아직 라벨이 없습니다.",
      },
    ],
    draft: true,
  },
  {
    slug: "cpu-sllm-k8s",
    title: "CPU 쿠버네티스 위 소형 LLM 서빙 측정 (cpu-sllm-k8s)",
    category: "personal",
    badge: "2026 · 개인",
    result: "진행 중",
    period: "2026.10 – 진행 중",
    org: "개인 프로젝트 (저장소 비공개)",
    summary:
      "GPU 없는 쿠버네티스(EKS)에서 4bit 소형 LLM을 llama.cpp 서버로 서빙하고, CPU limit·스레드 수·CFS 스로틀링이 처리량을 얼마나 깎는지와 HPA가 계단 부하에 어떻게 반응하는지 재려는 실험입니다. 아직 AWS에서 실행하지 않았습니다.",
    hero: "/projects/cpu-sllm-k8s.svg",
    color: "#0ea5e9",
    stack: ["Kubernetes (EKS)", "Helm", "llama.cpp (llama-server)", "k6", "Prometheus", "GitHub Actions OIDC", "Python"],
    body: [
      {
        heading: "설계",
        text: "Qwen2.5-1.5B-Instruct Q4_K_M GGUF(커밋 고정, sha256 확인)를 내장한 llama-server 이미지를 만들고, eksctl로 만든 c7i.2xlarge 노드 그룹 클러스터에 Helm 차트로 배포합니다. CPU limit을 스레드 수보다 낮게 주면 CFS 쿼터를 다 쓴 스레드가 주기 끝까지 멈추므로, 스레드 × CPU limit 격자와 HPA의 계단 부하 반응을 따로 잽니다. 배포는 GitHub Actions에서 OIDC 역할로 수동 실행하고, CI에서 pytest·helm lint·kubeconform·hadolint·actionlint를 돌립니다.",
      },
      {
        heading: "측정과 비용 통제",
        text: "k6로 단계형·고정 부하를 걸고, kube-prometheus-stack과 kubectl에서 레플리카·스로틀 지표를 수집해 리포트를 만듭니다. NAT 게이트웨이와 LoadBalancer는 일부러 만들지 않고, 실행 전에 공식 요금표로 비용 상한을 잡아 AWS Budgets 알림을 거는 절차를 문서로 두었습니다.",
      },
      {
        heading: "상태",
        text: "인프라·차트·부하 스크립트·수집기를 작성한 단계로, 아직 클러스터를 만들어 측정하지 않았습니다.",
      },
    ],
    draft: true,
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
    architecture: {
      image: "/projects/arch/jeju-architecture.png",
      alt: "제주어 감정 분류 최종 모델 구조 — 제주어 단독 KoELECTRA 브랜치와 제주어/표준어 Dual-Gated KR-BERT 브랜치의 확률 가중 앙상블",
      note: "저장소 README의 최종 아키텍처를 옮긴 그림입니다.",
    },
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
