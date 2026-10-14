export type ProjectCategory = "work" | "personal" | "academic";

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
  /** 성과 칩 (예: "배포 완료", "진행 중"). 없으면 미표시 */
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
  /** 저장소 리포트·문서에 근거한 핵심 수치. 상세 페이지 스탯 그리드로 표시 */
  metrics?: ProjectMetric[];
  /** 아키텍처 다이어그램. 상세 페이지에 이미지로 표시 */
  architecture?: { image: string; alt: string; note?: string };
  /** 카드·상세 강조색 */
  color?: string;
  featured?: boolean;
  featuredOrder?: number;
}

export const projects: Project[] = [
  // ───────────────────────── Work ─────────────────────────
  {
    slug: "driver-risk-platform",
    title: "공공기관 납품 교통사고 위험 예측 AI 플랫폼 개발·배포",
    category: "work",
    badge: "2026 · 데이콘",
    result: "배포 완료",
    period: "2026.04 – 2026.09",
    org: "데이콘 / NIA 「정책 수립 지원 데이터 분석 사업」 민간플랫폼 활용 분석과제 (공공기관 주관)",
    role: "웹 플랫폼 개발·배포 (모델 탑재 – 데이터 적재 – 화면 – 망분리 환경 배포 전 구간)",
    summary:
      "운수종사자의 검사 결과와 사고 이력으로 개인별 사고 위험도를 산출하고 SHAP으로 요인을 설명하는 공공기관 납품 플랫폼. 경진대회로 확보한 모델을 현업에 앉히고, 외부망이 분리된 PC 한 대에 설치되는 배포 체계까지 만들어 발주기관 운영 환경에 배포.",
    hero: "/projects/driver-risk-platform.svg",
    color: "#dc2626",
    stack: ["Python", "FastAPI", "LightGBM", "XGBoost", "CatBoost", "SHAP", "SQLite", "React", "Spring Boot (eGovFrame)", "Nginx"],
    featured: true,
    featuredOrder: 1,
    metrics: [
      { label: "화면·API", value: "API 35개" },
      { label: "코드 규모", value: "약 2만 6천 줄" },
      { label: "배포 패키지", value: "약 420MB (오프라인)" },
      { label: "운영 환경", value: "망분리 Windows PC 1대" },
    ],
    body: [
      {
        heading: "배경",
        text: "경진대회로 우수 모델을 확보한 뒤, 그 모델을 주관기관 현업에서 쓸 수 있도록 검증하고 시각화해 배포와 매뉴얼까지 제공해야 하는 과제였습니다. 운수종사자의 운전적성정밀검사 결과와 과거 사고 이력을 올리면 개인별 사고 위험도를 산출하고, 어떤 요인이 그 값을 밀어 올렸는지 설명해 진단 보고서와 비교 분석으로 내려받게 하는 것이 목표였습니다.",
      },
      {
        heading: "접근",
        text: "예측 엔진은 경진대회 상위 모델을 그대로 쓰지 않고, 도메인별 부스팅 모델을 로짓 가중합과 온도 보정으로 묶은 앙상블에 문항 응답 시퀀스에서 정답률과 반응시간을 뽑는 모델을 블렌딩해 얹었습니다. 데이터는 엑셀 전 시트를 흘려 읽어 헤더를 자동으로 찾고, 주민번호 해시를 단일 식별자로 삼아 적재한 뒤 원본 파일을 곧바로 지우게 했습니다. 운영 환경이 외부망과 분리된 윈도우 PC 한 대라, 임베디드 런타임과 오프라인 설치 파일을 담은 포터블 압축본을 만들고 여러 번 돌려도 같은 결과가 나오는 설치 스크립트와 롤백 절차를 두었습니다.",
      },
      {
        heading: "현장에서 바꾼 것",
        text: "현장 설치가 보안 프로그램의 폴더 이동 차단으로 실패한 뒤에는 설치 방식을 파일 단위 복사로 전면 재작성하고 내부 포트를 옮겨 다른 프로그램을 강제로 끄지 않도록 바꿨습니다. 학습 업로드가 엑셀 첫 시트만 읽어 일부 연도의 검사 이력이 화면에서 빠지던 결함은 보이는 화면만 고치지 않고 전 시트 적재와 업로드 소속 추적으로 근본을 고쳤습니다.",
      },
      {
        heading: "결과",
        text: "예측 엔진·적재·화면·설치 체계를 갖춘 플랫폼을 발주기관 운영 환경에 배포했습니다. 인수인계 문서에는 점수에 영향을 주는 항목을 포함한 보류 목록과 발주자 원칙, 운영자 설치 가이드를 남겼습니다. 실무 데이터와 성능 수치는 보안상 공개하지 않으며, 발주기관 보안 조항(결과물·소스코드 누출금지)에 따라 코드도 비공개입니다.",
      },
    ],
  },
  {
    slug: "hackathon-eval-system",
    title: "해커톤 평가 시스템 기획·개발 (평가 설정 재설계 · ELO 대중평가)",
    category: "work",
    badge: "2026 · 데이콘",
    period: "2026.04 – 2026.08",
    org: "데이콘 · 운영·개발 파트",
    role: "기획 · 설계 · 구현 · 테스트 · 개발 환경 배포 전 과정",
    summary:
      "평가 방법이 화면에 드러나지 않고 설정이 제출 단계에 묶여 있던 구조를 평가일정·평가설정·공개설정으로 나눠 여러 차수의 평가가 가능하게 만들고, 참가자끼리 1:1로 비교 평가하는 ELO 대중평가의 정규화 룰과 결함 감사, 순위 신뢰도 검증까지 수행.",
    hero: "/projects/hackathon-eval.svg",
    color: "#2563eb",
    stack: ["TypeScript", "React", "Node.js · Express", "PostgreSQL", "Drizzle", "몬테카를로 시뮬레이션"],
    featured: true,
    featuredOrder: 2,
    metrics: [
      { label: "회귀 테스트", value: "31 / 31 통과" },
      { label: "결함 감사 검증", value: "테스트 141개" },
      { label: "순위 신뢰 기준", value: "총 3,000매치" },
      { label: "정규화 룰 적용", value: "62팀 규모 대중평가" },
    ],
    body: [
      {
        heading: "배경",
        text: "자사 AI 해커톤 플랫폼에서 평가 방법이 화면에 드러나지 않고 가중치 토글로 정해졌고, 평가 설정이 제출 단계에 묶여 한 대회에서 평가를 여러 차수로 돌릴 수 없었습니다. 같은 시기에 참가자가 서로의 결과물을 1:1로 비교 평가해 순위를 매기는 ELO 대중평가를 도입하면서 점수 기준과 공정성, 순위 신뢰도를 정해야 했습니다.",
      },
      {
        heading: "접근",
        text: "기획서를 먼저 작성해 합의를 받은 뒤 화면과 서버를 함께 고쳤습니다. 설정 화면을 평가일정·평가설정·공개설정 세 부분으로 나누고 평가 방법을 명시 선택으로 바꿨으며, 평가 단계가 설정을 주도하도록 구조를 바꿔 제출 단계와 평가 단계를 명시적으로 연결했습니다. 데이터 구조는 바꾸지 않아 진행 중이던 대회에 영향이 없었습니다. ELO 대중평가는 제출자·참가자·일반 참여자 채널별 레더와 반영 비중을 정하는 정규화 룰을 설계하고, 대회마다 달라지는 값은 운영자 설정으로 분리했습니다.",
      },
      {
        heading: "감사와 검증",
        text: "대전·점수 계산·리더보드를 영역별로 감사해 동시 재계산 시 결과가 사라지던 결함을 잠금으로, 새로고침으로 매치업이 다시 뽑히던 결함을 상태 저장으로 고쳤고, 블라인드 평가에서 팀명과 외부 프로필이 노출되던 문제를 출시 전에 막았습니다. 순위를 몇 매치부터 믿어도 되는지는 자사 ELO 수식과 페어링 로직을 그대로 쓴 몬테카를로 시뮬레이션에 실제 데이터로 기준점을 맞춰 산출했습니다. 이 계산을 근거로 요청받은 투표 가산점 안을 기각하고, 평가에 참여하지 않아도 점수를 받던 구조를 막는 호혜 게이트를 대신 기획·구현했습니다.",
      },
      {
        heading: "결과",
        text: "하나의 제출에 여러 차수의 평가를 걸 수 있게 됐고, 회귀 테스트를 모두 통과시킨 뒤 개발 환경에 배포했습니다. 정규화 룰은 62팀 규모 대중평가에 적용됐습니다. 순위가 실력을 복원하기 시작하는 구간은 총 3,000매치로 산출했고, 상위권 선발에는 매치를 늘려도 한계가 남아 컷 경계는 사람이 재확인하도록 권고했습니다. 호혜 게이트는 기본값을 끈 상태로 머지했습니다.",
      },
    ],
  },
  {
    slug: "platform-weekly-qa",
    title: "플랫폼 주간 QA · QA 준비 자동화",
    category: "work",
    badge: "2026 · 데이콘",
    period: "2026.04 – 현재",
    org: "데이콘 · 운영·개발 파트",
    role: "주간 체크리스트 QA 수행, QA 도구 설계·구현",
    summary:
      "개발자가 작성한 체크리스트를 주간 단위로 수행하며 결함을 재현 조건까지 기록하고, 손으로 만들던 QA용 대회·제출 데이터를 시드 커맨드로 자동화. 코드 변경분으로 체크리스트를 쓰는 에이전트와 그 결과를 대조하는 검증 에이전트를 분리한 구성.",
    hero: "/projects/weekly-qa.svg",
    color: "#0d9488",
    stack: ["Playwright", "TypeScript", "Jira"],
    metrics: [
      { label: "주간 QA", value: "최소 86회차 (확인된 것만)" },
      { label: "시드 커맨드", value: "6종 → 실사용 2종" },
    ],
    body: [
      {
        heading: "하는 일",
        text: "개발자가 작성한 체크리스트를 주간 단위로 수행합니다. 결함은 어느 화면 폭에서 어떤 순서로 눌렀을 때 재현되는지를 함께 적고, 확인하지 못한 항목은 통과로도 실패로도 적지 않고 한계를 그대로 남깁니다. 한 항목을 비워 두자 그 기능은 실제로 쓰이지 않는다는 회신이 돌아온 적도 있습니다.",
      },
      {
        heading: "자동화",
        text: "회차마다 손으로 만들던 QA용 대회·제출 데이터를 시드 커맨드로 자동화했습니다. 처음 만든 6종은 실사용 기준으로 2종으로 정리했습니다. 코드 변경분에서 체크리스트를 작성하는 에이전트와, 그 결과를 실제 변경분과 대조해 근거 없는 항목과 빠진 항목을 되돌려 보내는 독립 검증 에이전트를 분리한 구성도 만들어 돌려 봤습니다.",
      },
      {
        heading: "그 밖에",
        text: "신규 QA 인력 온보딩과 버그 리포트 작성법 인수인계를 맡았습니다. 리더보드 화면 구조와 날짜 표기 같은 규칙은 문서로 먼저 합의한 뒤 구현했습니다.",
      },
    ],
  },
  {
    slug: "competition-ops",
    title: "AI 경진대회 · 해커톤 현장 운영",
    category: "work",
    badge: "2026 · 데이콘",
    period: "2026.04 – 현재",
    org: "데이콘 · 운영·개발 파트",
    summary:
      "대학 연합 경진대회 본선에서 발표 진행과 인기상 투표 안내를 맡아 24팀 전원 제출로 마감하고, 본선 직전 채점표 QA에서 최종제출이 풀리던 결함을 수정. 공공기관 발주 경진대회 온라인 사전 설명회의 발표와 Q&A 진행.",
    hero: "/projects/event-ops.svg",
    color: "#d97706",
    stack: [],
    body: [
      {
        heading: "현장",
        text: "대학 연합 디지털 경진대회 본선에서는 발표 진행과 타이머를 운영하면서 포스터세션 인기상 투표의 QR 스캔 방법과 투표 절차를 참가자에게 직접 안내해, 두 부문 24팀이 전원 포스터를 제출하고 득표가 없는 팀 없이 투표가 끝났습니다. 이 대회는 본선 직전 채점표 QA에서 점수 항목을 지우면 최종제출이 자동으로 풀리던 결함을 찾아 처리한 건이기도 해서, QA로 찾은 결함과 실제 대회 운영이 한 줄로 이어진 사례입니다.",
      },
      {
        heading: "설명회와 응대",
        text: "공공기관 발주 AI 경진대회의 온라인 사전 설명회는 리허설 준비와 운영 세팅부터 발표와 Q&A 응답까지 진행했습니다. 사용자 피드백은 직접 재현한 뒤 개발팀 전달과 사용자 답변으로 나눠 응대하며 네 단계로 관리했고, 고칠 수는 있으나 계속 쓸 기능인지부터 정해야 하는 건은 존치 여부를 회의 안건으로 올렸습니다.",
      },
    ],
  },
  {
    slug: "zabix-cloud-ops",
    title: "클라우드 인프라 운영 · 과금 산정 지원 (인턴)",
    category: "work",
    badge: "2025 · 자빅스",
    period: "2025.05 – 2025.08",
    org: "자빅스 · 클라우드·엔터프라이즈 서비스 운영팀",
    role: "운영 지원 (인턴)",
    summary:
      "고객사 AWS 인프라 요청을 받아 EC2를 구성하고 CPU·메모리·디스크 사용량을 분석해 과금을 산정했으며, 사용자 약 15만 명 규모 공공 메신저의 기능 기획에 참여.",
    hero: "/projects/zabix-cloud.svg",
    color: "#f59e0b",
    stack: ["AWS EC2", "Azure Entra ID", "Microsoft 365"],
    body: [
      {
        heading: "인프라 운영",
        text: "고객사의 AWS 인프라 요청을 접수해 구성 내역을 정리하고 EC2 인스턴스 생성·확장 요청에 대응했습니다. 고객사 사용량을 분석해 과금을 산정하고 결과를 어드민과 재무 담당자에게 전달하면서, 설정 하나가 곧장 비용으로 이어지는 것을 봤습니다. Azure Entra ID 계정 체계와 Microsoft 365 운영을 보조했습니다.",
      },
      {
        heading: "기획 참여",
        text: "중앙부처와 지자체가 쓰는 공공 메신저의 조직도 기반 사용자 조회와 대화방 기능 기획에 참여하고, 행정 시스템 연계 구조와 통합 알림 트리거 서비스 기획안을 정리했습니다.",
      },
    ],
  },
  {
    slug: "nerdmath",
    title: "너드수학 · AI 개인 맞춤형 수학 학습 플랫폼 (AI 백엔드)",
    category: "work",
    badge: "2025 · 한이음 드림업",
    period: "2025.04 – 2025.11",
    org: "한이음 드림업 (정보통신기획평가원 ICT 멘토링) · 4인 팀",
    role: "AI 백엔드·엔진 개발 (기획 포함) · 기여도 40%",
    summary:
      "진단 결과로 학습자가 막힌 개념을 찾아 학습경로를 추천하는 AI 수학 튜터. 개념 선후 관계를 Neo4j 그래프로 세운 Graph-RAG 추천 엔진과 3모드 챗봇, 문항 OCR 적재 파이프라인, FastAPI 추론 서버 배포까지 백엔드 전반을 담당. 과제 규정에 따라 저장소 비공개.",
    hero: "/projects/nerdmath.svg",
    color: "#7c3aed",
    stack: ["Python", "FastAPI", "LangChain", "LangGraph", "OpenAI API", "Neo4j", "MongoDB", "Docker", "GitHub Actions", "AWS EC2"],
    metrics: [
      { label: "추론 응답", value: "50ms 미만" },
      { label: "챗봇 모드", value: "풀이 · 개념 · 자료 검색" },
      { label: "학습경로 제안", value: "8주 단위" },
    ],
    body: [
      {
        heading: "배경",
        text: "진단 점수만으로는 학생이 어떤 선수 개념에서 막혔는지 알 수 없습니다. 수학학원에서 학생을 가르치며 틀린 문제에서 거슬러 올라가 비어 있는 선행 개념부터 다시 쌓던 방식을 코드로 옮긴 프로젝트입니다.",
      },
      {
        heading: "접근",
        text: "개념 사이의 선후 관계를 Neo4j 그래프로 세우고 진단 데이터를 결합한 Graph-RAG 추천 엔진을 LangChain 체인으로 설계·구현해 8주 학습경로 제안까지 자동화했습니다. 질문을 풀이·개념 설명·자료 검색 세 모드로 분류하는 챗봇은 LangChain·LangGraph 워크플로로 만들고 JSON 스키마 응답과 SSE 스트리밍을 적용했습니다. 이미지와 PDF로만 있던 문항은 Mathpix API로 변환·파싱해 MongoDB에 적재하고 컬렉션 간 참조 무결성을 검증하는 파이프라인을 따로 만들었습니다.",
      },
      {
        heading: "결과",
        text: "FastAPI 추론 서버를 GPU 배치 추론과 WebSocket 스트림 구조로 설계해 응답을 50ms 아래로 맞췄고, Docker와 GitHub Actions로 배포를 자동화했습니다. 학습경로 추천 모듈과 챗봇 RAG 시스템의 완성도는 한이음 드림업 개발보고서 기준 각 90%입니다. 모델을 손대기 전에 데이터를 쓸 수 있는 모양으로 만드는 것이 일의 절반이라는 것을 여기서 배웠습니다.",
      },
    ],
  },

  // ───────────────────────── Personal ─────────────────────────
  {
    slug: "rag-eval-harness",
    title: "RAG 리더보드 순위 안정성",
    category: "personal",
    badge: "2026 · 개인",
    period: "2026.10",
    org: "개인 프로젝트 · 공개 데이터 (allganize/RAG-Evaluation-Dataset-KO)",
    summary:
      "공개 한국어 RAG 리더보드의 순위가 질문 수에 따라 얼마나 흔들리는지 부트스트랩 10,000회로 측정하고, 역전 확률과 필요한 질문 수를 계산하는 계산기를 만든 프로젝트. 데이콘에서 ELO 순위를 몇 매치부터 믿을 수 있는지 계산한 뒤 남은 질문에서 출발.",
    hero: "/projects/rag-eval-harness-demo.png",
    github: "https://github.com/parksungyun0411/rag-eval-harness",
    color: "#0891b2",
    stack: ["Python", "NumPy", "SciPy", "Matplotlib", "FastAPI", "JavaScript", "Kiwi · BM25", "sentence-transformers", "pytest", "Ruff", "GitHub Actions"],
    featured: true,
    featuredOrder: 3,
    metrics: [
      { label: "RAG 시스템", value: "23개" },
      { label: "질문 (도메인 5 × 60)", value: "300개" },
      { label: "부트스트랩", value: "10,000회" },
      { label: "Kendall tau (n=300)", value: "0.930" },
      { label: "1위 유지 확률", value: "0.744" },
      { label: "1–2위 McNemar p", value: "0.6072" },
    ],
    architecture: {
      image: "/projects/rag-eval-harness-arch.png",
      alt: "rag-eval-harness 아키텍처 — 공개 데이터 로더, 부트스트랩·정확해·정규 근사·도메인별 분석, 리포트와 정적 웹 화면, 재사용 평가 구성 요소",
      note: "공개 데이터 로더 → 부트스트랩·정확해·정규 근사·도메인별 분석 → 리포트와 정적 웹 화면",
    },
    body: [
      {
        heading: "배경",
        text: "리더보드 표의 점수 차이만으로는 질문을 다시 뽑아도 순위가 유지될지 알 수 없습니다. 공개 데이터셋에 담긴 RAG 시스템 23개의 질문 300개별 정답 여부를 그대로 쓰고, 질문 집합을 10,000회 복원추출해 질문 수에 따라 순위가 얼마나 흔들리는지 계산했습니다.",
      },
      {
        heading: "핵심 설계 판단",
        text: "복원추출에서 두 시스템 차이의 합은 삼항 분포의 합이라 정확히 계산할 수 있어, 시뮬레이션과 정확해의 차이가 몬테카를로 오차 수준인지 인접 쌍 22개 × 질문 수 12개 지점에서 확인했습니다. 순위의 흔들림은 정확도가 아니라 한쪽만 맞힌 질문의 비율에 달려 있으므로, 질문 수·정확도 차이·불일치율로 역전 확률과 필요한 질문 수를 계산하는 함수를 Python과 JavaScript로 같은 식으로 구현하고 두 결과를 테스트로 비교했습니다. 동점은 유지로 세지 않았고, 원본 데이터는 저장소에 넣지 않고 고정 리비전에서 받아 SHA-256을 확인하는 스크립트만 두었습니다.",
      },
      {
        heading: "평가에서 배운 것",
        text: "1위(254/300)와 2위(251/300)의 차이는 3문항이고, 300문항을 다시 뽑으면 1위가 유지되는 비율은 0.744였습니다. 한쪽만 맞힌 질문 15개가 9 대 6으로 갈린 결과는 McNemar 정확 검정으로 p = 0.6072라 우연과 구별되지 않습니다. 이웃한 순위 쌍 22개 중 300문항 안에서 갈리는 쌍은 3개였고, 나머지 19개 쌍의 순서는 이 평가셋으로 말할 수 없습니다. 도메인별 60문항으로 같은 시스템이 1위가 될 확률은 법률 0.39, 커머스 0.53이었습니다.",
      },
      {
        heading: "한계",
        text: "방법은 새롭지 않습니다. 질문 수와 순위 안정성의 관계를 부트스트랩으로 재는 것은 정보검색 분야의 표준적인 방법이고, 이 프로젝트가 한 일은 그 방법을 한국어 RAG 리더보드 데이터에 적용하고 계산기로 만든 것입니다. 정답 여부는 데이터셋 작성자가 LLM 평가기 4종의 투표로 판정한 값이라 라벨 오류에서 오는 불확실성은 반영하지 않았습니다.",
      },
    ],
  },
  {
    slug: "airgap-egress-audit",
    title: "폐쇄망 반입 후 외부 호출 감사",
    category: "personal",
    badge: "2026 · 개인",
    period: "2026.10",
    org: "개인 프로젝트 · 로컬 kind 클러스터 (macOS · colima)",
    summary:
      "egress를 막은 쿠버네티스 네임스페이스에 한국어 소형 LLM과 RAG 스택을 설치하고 설치·기동·첫 요청·유휴 네 단계의 외부 호출 시도를 패킷으로 기록해, 허용 목록 밖 호출 0건을 회귀 게이트로 고정한 프로젝트.",
    hero: "/projects/airgap-egress-audit.svg",
    github: "https://github.com/parksungyun0411/airgap-egress-audit",
    color: "#4f46e5",
    stack: ["Kubernetes (kind)", "NetworkPolicy", "tcpdump", "CoreDNS", "llama.cpp", "Text Embeddings Inference", "Qdrant", "FastAPI", "Python"],
    metrics: [
      { label: "회귀 게이트", value: "FAIL 6건 → PASS 0건" },
      { label: "전체 Ready", value: "364초 → 5초" },
      { label: "유휴 관찰", value: "600초" },
      { label: "환경", value: "kind v0.33 · k8s v1.37" },
    ],
    architecture: {
      image: "/projects/airgap-egress-audit-arch.png",
      alt: "airgap-egress-audit 구성 — 반입 전 준비, egress 기본 거부 네임스페이스, 노드 네트워크 네임스페이스의 tcpdump와 CoreDNS 로그, 분석기와 회귀 게이트",
      note: "반입 전 준비 → egress 기본 거부 네임스페이스 → 노드의 tcpdump·CoreDNS 로그 → 분석기와 회귀 게이트",
    },
    body: [
      {
        heading: "배경",
        text: "외부망이 분리된 환경에 설치되는 납품 시스템의 운영을 맡으며 생긴 질문에서 출발했습니다. 파일을 모두 반입해도 구성 요소가 기동하면서 허브에 메타데이터를 묻거나 사용 통계를 보내려 할 수 있습니다. 그 시도를 추측이 아니라 패킷으로 확인하고 싶었습니다.",
      },
      {
        heading: "핵심 설계 판단",
        text: "정책 엔진 로그에는 패킷별 판정이 남지 않아, 클러스터 밖 컨테이너가 노드의 네트워크 네임스페이스에 붙어 TCP SYN과 UDP를 기록하게 했습니다. 파드가 보낸 패킷은 정책이 버리기 전에 잡히고, NAT 사본이 노드 밖으로 나갔는지로 실제 유출도 구분됩니다. 정책이 언제부터 막는지도 따로 시험했는데, 정책이 이미 적용된 네임스페이스에 새로 만든 파드는 첫 1초 안팎 동안 밖으로 나갈 수 있었습니다. 그래서 차단은 구성 요소 설정으로 하고 정책은 관찰 대상을 좁히는 장치로 씁니다. 게이트는 허용 목록 밖의 외부 호출이 한 건이라도 있으면 실패하고, 일부러 넣은 누출로 게이트가 실제로 잡는지 확인했습니다.",
      },
      {
        heading: "결과",
        text: "완화 전에는 임베딩 서버가 모델 허브에, 벡터 DB가 사용 통계 서버에 DNS와 TCP 443으로 연결을 시도해 게이트가 6건으로 실패했습니다. 임베딩 모델을 로컬 경로로 지정하고 사용 통계를 끄자 외부 호출 시도는 0건이 됐고 전체 Ready까지 걸리는 시간도 364초에서 5초로 줄었습니다.",
      },
      {
        heading: "한계",
        text: "kind는 실제 폐쇄망이 아닙니다. 노드는 인터넷에 연결된 VM 안에 있고 CoreDNS가 외부 이름을 풀어 줍니다. EKS 변형은 작성만 하고 실행하지 않았으며, 감사는 설정별로 한 번씩 실행했습니다.",
      },
    ],
  },
  {
    slug: "k-mcp-qa",
    title: "한국 공공데이터 MCP 서버 공통 시험",
    category: "personal",
    badge: "2026 · 개인",
    period: "2026.10",
    org: "개인 프로젝트 · 공개 MCP 서버 10개",
    summary:
      "주간 QA에서 쓰던 방식, 곧 같은 시험을 같은 조건으로 돌리고 관찰마다 입력과 응답, 재현 명령을 남기는 방식을 공공기관 API를 감싸는 한국 MCP 서버 10개에 적용. 커밋을 고정해 격리 실행하고 프로토콜·스키마·오류 처리를 같은 시험으로 관찰.",
    hero: "/projects/k-mcp-qa.svg",
    github: "https://github.com/parksungyun0411/k-mcp-qa",
    color: "#0369a1",
    stack: ["Python", "JSON Schema", "MCP conformance", "mcp-audit", "macOS sandbox-exec", "uv", "npm", "pytest", "GitHub Actions"],
    metrics: [
      { label: "시험한 서버", value: "10개 (+ 변형 1)" },
      { label: "설치 명령 성공", value: "11 / 11" },
      { label: "initialize 응답", value: "10 / 11" },
      { label: "conformance 3종", value: "9 / 9 (측정 불가 1)" },
      { label: "서버당 툴 수", value: "3 ~ 89개" },
    ],
    architecture: {
      image: "/projects/k-mcp-qa-arch.png",
      alt: "k-mcp-qa 시험 구성 — 대상 고정, 서버별 격리 실행, 원문 stdio 클라이언트와 입력 프로브, 기존 도구 연동, 출처 판별과 리포트",
      note: "대상 고정 → 서버별 격리 실행 → 원문 stdio 클라이언트와 입력 프로브 → 출처 판별과 리포트",
    },
    body: [
      {
        heading: "배경",
        text: "공공기관 API를 감싸는 MCP 서버는 많지만, 같은 조건에서 어떻게 동작하는지 비교한 기록은 없었습니다. 실제 API 키 대신 자리 표시자 문자열을 넣고 설치·기동, 프로토콜 적합성, 입력 스키마와 실제 동작의 차이, 기관 API 오류를 돌려주는 방식을 같은 시험으로 봤습니다. 결과는 하루 동안 고정한 커밋에서 관찰한 동작이며 품질 순위가 아닙니다.",
      },
      {
        heading: "핵심 설계 판단",
        text: "남의 코드를 실행하기 전에 서버마다 임시 HOME을 두고 환경 변수를 비웠으며, sandbox-exec로 작업 디렉터리 밖 쓰기와 실제 HOME 내용 읽기를 막았습니다. SDK는 잘못된 메시지를 걸러 내거나 예외로 바꾸므로, 송수신 줄을 그대로 기록하는 원문 stdio 클라이언트를 직접 썼습니다. 응답 문구와 스택을 서버 소스와 SDK 소스에서 찾아, SDK 소스에서만 확인되는 동작은 서버에 대한 관찰로 세지 않았습니다.",
      },
      {
        heading: "관찰한 것",
        text: "실행 실패를 isError 없는 결과로 응답하는 서버가 5개, 입력 검증 오류를 같은 방식으로 응답하는 서버가 2개 있었습니다. 스키마를 만족하는 입력을 스키마에 없는 인자 조건으로 거부하는 경우도 있었습니다. 근거가 되는 MCP 스펙 절에는 규범 키워드가 없어, 이 표는 그 서술과 다른 동작의 기록이며 스펙 위반 판정이 아닙니다.",
      },
      {
        heading: "한계",
        text: "키 없는 조건만 측정했습니다. 정상 키에서의 응답과, MCP 응답이 기관 API 직접 호출 결과와 일치하는지는 측정 전입니다. 표본 10개가 전체를 대표하지 않습니다.",
      },
    ],
  },
  {
    slug: "ko-judge-lora",
    title: "한국어 LLM 평가자 LoRA",
    category: "personal",
    badge: "2026 · 개인",
    result: "진행 중",
    period: "2026.10 – 현재",
    org: "개인 프로젝트 · 공개 데이터 (KUDGE)",
    summary:
      "한국어 응답을 1~5점으로 채점하는 소형 LLM 평가자를 사람 점수로 학습하고 사람과 얼마나 맞는지 재려는 프로젝트. 데이터 확인과 분석은 실제 데이터로 끝냈고, LoRA 학습·양자화·서빙은 코드와 테스트만 있어 모델 결과는 측정 전.",
    hero: "/projects/ko-judge-lora.svg",
    github: "https://github.com/parksungyun0411/ko-judge-lora",
    color: "#db2777",
    stack: ["Python", "PyTorch", "PEFT (LoRA)", "AWQ", "vLLM", "pandas", "SciPy", "pytest"],
    metrics: [
      { label: "응답 / 질문 / 모델", value: "2,506 / 87 / 31" },
      { label: "평가자 간 완전 일치", value: "47.92%" },
      { label: "평가자 간 1점 이내", value: "83.84%" },
      { label: "평가자 간 피어슨 r", value: "0.640" },
      { label: "항상 1점 판정의 정확도", value: "43.10%" },
    ],
    body: [
      {
        heading: "배경",
        text: "데이터는 한국어 사람 평가 데이터셋 KUDGE로, 31개 모델이 87개 질문에 쓴 응답 2,506건에 평가자 두 명이 각각 점수를 매겼습니다. 학습 전에 사람끼리의 일치를 먼저 계산해 이 프로젝트가 닿을 수 있는 상한을 정했습니다.",
      },
      {
        heading: "분석에서 확인한 것",
        text: "질문을 복원추출해 매긴 사람 순위와 87개 전체 순위의 Kendall τ 평균은 질문 10개에서 0.826, 30개에서 0.896, 87개에서 0.939였습니다. 사람 순위도 질문 수에 민감합니다. 논문이 쓰는 off-by-0.5 정확도는 항상 1점을 주는 판정도 43.10%가 나와, 정확도만으로는 판정을 평가할 수 없다고 보고 피어슨 r과 순위 τ를 함께 보기로 했습니다.",
      },
      {
        heading: "다음 단계",
        text: "질문 5-fold와 평가 대상 모델 8개 보류를 한 번의 학습에서 함께 만족하도록 분할을 설계하고 겹침이 없는지 실제 데이터로 테스트합니다. GPU 단계는 Qwen3-4B 하나로 줄인 축소안으로 실행할 계획이며, 시간은 추정값이고 아직 실행하지 않았습니다.",
      },
    ],
  },

  {
    slug: "minwon-rag",
    title: "민원 RAG 검색 실험",
    category: "personal",
    badge: "2026 · 개인",
    result: "진행 중",
    period: "2026.10 – 현재",
    org: "개인 프로젝트 · 공공데이터 (국민권익위원회 민원정책 질의응답)",
    summary:
      "국민권익위원회 민원정책 질의응답에 실제로 올라온 시민 질의로 dense 검색, 한국어 BM25 하이브리드, 크로스인코더 리랭커를 차례로 비교하려는 프로젝트. 수집기·전처리·검색·평가 코드와 단위 테스트까지 작성했고, 공공데이터포털 인증키를 받기 전이라 실데이터 수집과 측정은 하지 않아 평가 표는 비어 있다.",
    hero: "/projects/minwon-rag.svg",
    github: "https://github.com/parksungyun0411/minwon-rag",
    color: "#0e7490",
    stack: ["Python", "Kiwi + BM25", "sentence-transformers", "KURE-v1 · bge-m3", "bge-reranker-v2-m3", "RRF", "OpenSearch (선택)", "rag-eval-harness", "pytest"],
    architecture: {
      image: "/projects/minwon-rag-arch.png",
      alt: "minwon-rag 아키텍처: 수집, 시점 분할과 인용 법령 라벨, 검색 설정 7종, rag-eval-harness 평가",
      note: "수집기가 민원을 받아 시점으로 나누고, 기관 답변의 인용 법령으로 관련성 라벨을 만든 뒤, 검색 설정 7종을 같은 골든셋으로 rag-eval-harness에 넘깁니다.",
    },
    body: [
      {
        heading: "배경",
        text: "민원 질의는 시민이 쓴 구어체이고 기관 답변은 행정 문체입니다. 같은 내용이라도 쓰는 단어가 달라 어휘 일치에 기대는 BM25와 의미 유사도에 기대는 dense 검색의 결과가 갈립니다. 평가 질의는 LLM으로 합성하지 않고 실제 민원을 그대로 쓰고, 정답 라벨은 기관 답변에 붙은 인용 법령으로 자동 생성합니다.",
      },
      {
        heading: "구현한 것",
        text: "하루 호출 예산과 이어 받기를 갖춘 목록·항목 API 수집기, 이중 이스케이프된 HTML 해제와 정형 인사말 제거, 기준일 이전 민원은 코퍼스로 이후 민원은 평가 질의로 나누는 시점 분할, 조문 일치와 법령명 일치를 등급으로 나눈 관련성 라벨, 그리고 bm25·dense 2종·하이브리드 2종·하이브리드+리랭커 2종의 설정 매트릭스를 만들었습니다. 지표와 통계, 보고서는 rag-eval-harness를 의존성으로 씁니다.",
      },
      {
        heading: "설계 판단",
        text: "평가 질의가 코퍼스에 섞이는 누수를 막기 위해 무작위 분할 대신 시점 분할을 택했습니다. 처리기관만 같은 민원은 관련 문서로 치지 않았고, 관련 문서가 100건을 넘는 질의는 평가에서 뺐습니다. BM25는 Docker 없이 돌아가도록 Kiwi 분석 결과를 희소 행렬로 미리 계산해 프로세스 안에서 구현했고, 하이브리드 결합은 점수 정규화 방식을 고를 필요가 없는 RRF를 썼습니다.",
      },
      {
        heading: "상태와 한계",
        text: "실데이터로 측정하지 않았습니다. 응답을 감싸는 키는 기관 참고문서 예시로만 확인했고, 답변에 인용 법령이 붙은 비율도 아직 모릅니다. 비율이 낮으면 평가 질의 후보가 부족해집니다. OpenSearch 백엔드와 docker-compose는 작성만 했습니다. 다음 단계는 인증키 발급 뒤 수집, 색인, 평가, 보고서 생성입니다.",
      },
    ],
  },
  {
    slug: "vendor-check-agent",
    title: "거래처 점검 에이전트 복구율 실험",
    category: "personal",
    badge: "2026 · 개인",
    result: "진행 중",
    period: "2026.10 – 현재",
    org: "개인 프로젝트 · 공공 API (국세청 · 금융위원회 · OpenDART)",
    summary:
      "상호를 받아 국세청·금융위원회·OpenDART 공공 API로 거래처를 점검하는 LangGraph 에이전트와 고정 순서 파이프라인을 같은 MCP 툴 위에 두고, 공공 API에서 실제로 일어나는 실패를 주입해 복구 전략별 회복률과 조용한 오답 비율을 재려는 프로젝트. MCP 서버, 실패 주입 프록시, 그래프, 실험 러너까지 구현했고 기관 API 키가 없어 측정은 하지 않았다.",
    hero: "/projects/vendor-check-agent.svg",
    github: "https://github.com/parksungyun0411/vendor-check-agent",
    color: "#b45309",
    stack: ["Python", "LangGraph", "MCP Python SDK", "SQLite checkpointer", "HTTPX", "Starlette", "Anthropic SDK", "pytest"],
    architecture: {
      image: "/projects/vendor-check-agent-arch.png",
      alt: "vendor-check-agent 아키텍처: 실험 러너, 대조군 파이프라인과 LangGraph 에이전트, 공유 복구 전략, MCP 서버, 실패 주입 프록시, 기관 API 클라이언트",
      note: "두 시스템은 같은 MCP 툴과 같은 복구 코드를 쓰므로 결과 차이는 그래프 구조에서만 생깁니다. 실패 주입 프록시는 툴과 기관 API 사이에 끼웁니다.",
    },
    body: [
      {
        heading: "배경",
        text: "공공 API의 실패는 모양이 기관마다 다릅니다. OpenDART는 오류를 HTTP 200 응답 본문의 status 코드로 알려 주고, 공공데이터포털 게이트웨이는 별도 봉투에 오류 코드를 담아 보냅니다. HTTP 상태만 확인하는 코드는 이런 응답을 정상으로 읽고 미등록이나 조회 결과 없음으로 보고할 수 있습니다. 그래서 복구율과 함께, 툴이 실패했는데 정상 값처럼 보고된 비율을 따로 잽니다.",
      },
      {
        heading: "구현한 것",
        text: "기관 API 클라이언트 3종과 기관별 툴 5개를 노출하는 MCP 서버, timeout·5xx·HTTP 200 오류 본문·일일 한도·형식 오류·부분 응답 여섯 유형을 주입하는 프록시, 무대응·재시도·대체 경로·체크포인트 재개 네 가지 복구 전략, 고정 순서 대조군, 그리고 동명 법인 확인 interrupt와 상장 여부 분기, 기관 병렬 조회, SQLite 체크포인터 재개를 담은 LangGraph 에이전트를 만들었습니다. 실험 러너는 시나리오 31개 × 전략 4종 × 시스템 2개를 돌려 점검 한 건당 한 줄을 남기고, 키 없이 도는 가짜 업스트림 위에서 전체 경로를 테스트합니다.",
      },
      {
        heading: "설계 판단",
        text: "툴은 실패해도 예외를 던지지 않고 분류된 오류를 데이터로 돌려줍니다. MCP 경계를 지나도 실패 종류가 남아야 두 시스템을 같은 기준으로 비교할 수 있기 때문입니다. 오류 판별은 HTTP 상태가 아니라 응답 본문을 기준으로 했고, 임의 키로 직접 호출해 두 기관의 오류 형식을 확인했습니다. 경로 결정은 규칙으로 하고 LLM은 최종 보고서만 쓰게 해서, LLM이 값을 바꾸면 그대로 조용한 오답 비율에 잡히도록 했습니다.",
      },
      {
        heading: "상태와 한계",
        text: "측정 결과가 없습니다. 정답 생성과 실험은 공공데이터포털과 OpenDART 키를 발급받은 뒤에 돌립니다. 금융위 응답 구조, 상장 구분 코드, 국세청의 한도 초과 응답은 확인하지 못해 코드에 미확인으로 표시했습니다. 실험에서 동명 법인 선택은 정답을 아는 자동 승인자가 하고, 실패는 점검마다 한 기관에 하나씩만 겁니다.",
      },
    ],
  },
  {
    slug: "jeju-emotion-lora",
    title: "제주어 감정 분류: LoRA 소형 LLM 대 인코더 앙상블",
    category: "personal",
    badge: "2026 · 개인",
    result: "진행 중",
    period: "2026.10 – 현재",
    org: "개인 프로젝트 · 졸업 프로젝트와 같은 데이터·분할·시드",
    summary:
      "졸업 프로젝트 제주어 7감정 분류와 같은 데이터, 분할, 시드에서 소형 LLM 3종을 LoRA로 학습해 KoELECTRA + Dual KR-BERT 앙상블과 비교하고, 병합과 AWQ 4bit 양자화, vLLM 서빙까지 이어서 정확도와 처리량, 100만 건당 비용을 한 표에 놓으려는 프로젝트. 코드와 테스트는 있고 GPU 실행은 하지 않아 결과 표는 모두 측정 전.",
    hero: "/projects/jeju-emotion-lora.svg",
    github: "https://github.com/parksungyun0411/jeju-emotion-lora",
    color: "#7c3aed",
    stack: ["Python", "PyTorch", "Transformers", "PEFT (LoRA)", "TRL", "llm-compressor (AWQ)", "vLLM", "scikit-learn", "pytest"],
    body: [
      {
        heading: "배경",
        text: "원 데이터의 감정 라벨은 GPT-4o가 붙였습니다. 그 라벨로만 평가하면 GPT-4o를 얼마나 잘 따라 하는가를 재게 되므로, test 분할에서 뽑은 280건에 사람이 다시 라벨을 붙인 평가셋을 따로 두고 두 라벨로 모두 잽니다. 후보 모델은 상업 이용이 가능한 라이선스만 골랐고 비상업 라이선스 모델은 제외했으며, 커밋 해시를 고정했습니다.",
      },
      {
        heading: "구현한 것",
        text: "원 프로젝트와 같은 7:1:2 층화 분할을 재현하고 원 저장소의 분할 함수와 행 단위로 대조하는 검증, 감정별 층화와 모델 불일치 문항을 우선 뽑는 사람 검수 표본 도구와 블라인드 터미널 라벨링, 제로샷·퓨샷 기준선, 라벨 이름에만 손실을 주는 LoRA 학습과 어댑터 병합, train 분할만으로 보정하는 AWQ 양자화, 출력을 7개 라벨로 제한하는 vLLM 평가와 부하 측정, GPU 시간당 요금을 입력으로 받는 비용 표 생성을 만들었습니다.",
      },
      {
        heading: "설계 판단",
        text: "QLoRA 대신 bf16 LoRA를 썼습니다. 4bit로 학습하면 병합 대상 가중치가 원본과 달라져 양자화 전후 비교에 학습 단계의 양자화가 섞이기 때문입니다. 생성 자체를 라벨 이름으로 제한해 모델 간 차이가 출력 형식 실수가 아니라 분류에서 나오게 했고, 사람 검수는 GPT-4o 라벨을 보지 않는 블라인드를 기본으로 두었습니다. 학습 환경과 서빙 환경은 의존성 충돌 때문에 나눴습니다.",
      },
      {
        heading: "상태와 한계",
        text: "GPU 단계는 한 번도 실행하지 않았습니다. 로컬에서 확인한 것은 분할, 프롬프트, 파싱, 지표, 비용 계산과 CPU에서 작은 랜덤 모델로 학습부터 생성까지 도는 것까지입니다. 원 라벨링 파일을 아직 확보하지 못해 실제 데이터로 분할을 대조하지 못했고, 사람 검수 라벨도 없습니다. 원 앙상블의 가중치가 test 분할에서 고른 값이라 기준선은 그만큼 낙관적입니다.",
      },
    ],
  },
  {
    slug: "cpu-sllm-k8s",
    title: "CPU 전용 쿠버네티스 소형 LLM 서빙",
    category: "personal",
    badge: "2026 · 개인",
    result: "진행 중",
    period: "2026.10 – 현재",
    org: "개인 프로젝트 · Amazon EKS (배포 전) · 공개 모델",
    summary:
      "GPU가 없는 쿠버네티스 노드에서 4bit 양자화 소형 LLM을 llama.cpp 서버로 서빙하고, CPU limit과 스레드 수, CFS 스로틀링이 생성 처리량을 얼마나 줄이는지와 HPA가 계단식 부하에 어떻게 반응하는지 재려는 프로젝트. 모델 내장 이미지, Helm 차트, EKS 배포 파이프라인, 부하 스크립트, 수집기와 리포트 생성기까지 구현했고 EKS 배포와 측정은 하지 않았다.",
    hero: "/projects/cpu-sllm-k8s.svg",
    github: "https://github.com/parksungyun0411/cpu-sllm-k8s",
    color: "#2563eb",
    stack: ["llama.cpp (GGUF Q4_K_M)", "Docker", "Kubernetes", "Helm", "Amazon EKS", "Amazon ECR", "eksctl", "GitHub Actions (OIDC)", "k6", "Prometheus", "Python · pandas"],
    architecture: {
      image: "/projects/cpu-sllm-k8s-arch.png",
      alt: "cpu-sllm-k8s 빌드·배포·측정 흐름: 모델 내장 이미지, ECR, Helm 배포, k6 부하, Prometheus와 kubectl 수집, 리포트",
      note: "이미지 빌드와 ECR 푸시, Helm 배포는 수동 실행 워크플로가 맡고, 측정은 k6 부하와 Prometheus·kubectl 수집기를 시간축으로 합쳐 리포트로 만듭니다.",
    },
    body: [
      {
        heading: "배경",
        text: "CPU 추론은 GPU 서빙과 쿠버네티스 설정이 맞물리는 방식이 다릅니다. 추론이 CPU에 묶여 있어 HPA의 기본 지표인 CPU 사용률이 실제 부하를 따라가는지 볼 수 있고, CPU limit을 스레드 수보다 낮게 주면 CFS 쿼터를 소진한 스레드가 주기 끝까지 멈춰 requests와 limits 설정이 처리량 차이로 드러납니다. 모델 적재에 시간이 걸려 프로브와 롤링 업데이트 설정도 동작에 영향을 줍니다. 이 세 가지를 같은 이미지와 같은 부하에서 비교하는 것이 목표입니다.",
      },
      {
        heading: "구현한 것",
        text: "Hugging Face 고정 커밋에서 받은 GGUF 모델의 sha256을 검증해 llama.cpp 공식 CPU 서버 이미지에 넣는 멀티스테이지 Dockerfile, Deployment·Service·ConfigMap·프로브·HPA·ServiceMonitor를 담은 Helm 차트, 관리형 노드 그룹 하나와 metrics-server만 두는 eksctl 설정, GitHub OIDC 역할과 ECR을 만드는 스크립트, lint와 매니페스트 스키마 검증을 돌리는 CI와 수동 실행 전용 배포 워크플로, 고정 동시성과 계단식 도착률 k6 스크립트, CFS 스로틀 비율과 서버 측 토큰 처리량을 기록하는 수집기, 히트맵과 시계열을 그리는 리포트 생성기를 만들었습니다.",
      },
      {
        heading: "설계 판단",
        text: "모델은 런타임 다운로드 대신 이미지에 넣었습니다. 망이 분리된 환경에서는 파드가 뜰 때 외부에서 모델을 받을 수 없기 때문입니다. startup 프로브가 모델 적재를 기다린 뒤 liveness가 넘겨받도록 역할을 나눴고, 롤링 업데이트는 새 파드가 준비되기 전에 기존 파드를 내리지 않게 했습니다. HPA 기본 설정은 requests와 limits를 같게 둔 Guaranteed로 하고 Burstable 비교는 별도 실행으로 분리했습니다. 배포는 클러스터가 떠 있는 동안만 비용이 들도록 수동 실행으로 제한하고, 장기 액세스 키 대신 OIDC로 역할을 맡습니다.",
      },
      {
        heading: "상태와 한계",
        text: "EKS 배포, 이미지 빌드, IAM 스크립트, 실험 스크립트는 한 번도 실행하지 않았습니다. 로컬에서 확인한 범위는 lint, 매니페스트 스키마 검증, 단위 테스트, k6 스크립트 파싱까지이고, 작업 환경에 Docker가 없어 이미지도 빌드해 보지 않았습니다. 측정 결과가 없으므로 이 저장소는 CPU limit이나 스레드 수가 처리량에 미치는 영향에 대해 아직 아무것도 보여 주지 않습니다. HPA는 CPU 사용률 기준 한 종류만 구현했고 노드 수는 최대 2대로 고정했습니다.",
      },
    ],
  },

  // ───────────────────────── Academic ─────────────────────────
  {
    slug: "jeju-emotion-analysis",
    title: "제주어 다중감정분류 · 도메인 특화 BERT 최적화",
    category: "academic",
    badge: "2025 · 건국대 졸업 프로젝트",
    result: "F1-Macro 0.30 → 0.84",
    period: "2025.09 – 2025.12",
    org: "건국대학교 스마트ICT융합공학과 · 4인 팀",
    role: "데이터 수집·라벨링, 모델 설계·실험, 성능 분석",
    summary:
      "감정 라벨이 붙은 제주어 데이터가 없어 제주어·표준어 병렬 코퍼스에 GPT-4o로 일곱 감정을 붙이고 사람이 검수해 학습 데이터부터 만든 프로젝트. 고전 머신러닝의 한계를 먼저 숫자로 확인한 뒤, 같은 테스트셋 위에 KR-BERT 개선 단계를 쌓아 F1-Macro를 0.30에서 0.84로 올림.",
    hero: "/projects/jeju-emotion.svg",
    github: "https://github.com/parksungyun0411/jeju-emotion-analysis",
    color: "#16a34a",
    stack: ["Python", "PyTorch", "HuggingFace Transformers", "scikit-learn", "KR-BERT", "KoELECTRA", "GPT-4o API"],
    featured: true,
    featuredOrder: 4,
    metrics: [
      { label: "학습 데이터", value: "127,324행 · 7클래스" },
      { label: "고전 ML 최고", value: "F1-Macro 0.30" },
      { label: "KR-BERT 단일", value: "F1-Macro 0.76" },
      { label: "최종 앙상블", value: "F1-Macro 0.84 (발표 기준)" },
    ],
    architecture: {
      image: "/projects/jeju-pipeline.png",
      alt: "제주어 감정 분류 7단계 파이프라인 도식",
      note: "KR-BERT 베이스라인 → 밸런싱 → Dual-Gated 구조 → 토크나이저 → DAPT → Hard Mining → KoELECTRA 앙상블",
    },
    body: [
      {
        heading: "배경",
        text: "제주어는 라벨링된 감정 분석 데이터가 존재하지 않습니다. 표준어용 감정 모델은 제주어 특유의 어휘와 어미를 처리하지 못하므로, 데이터 구축부터 모델 설계까지 처음부터 풀어야 했습니다.",
      },
      {
        heading: "접근",
        text: "공개 제주어·표준어 병렬 코퍼스를 수집·정제하고 GPT-4o로 7감정을 자동 라벨링한 뒤 직접 검수해 학습 데이터를 만들었습니다. 먼저 고전 머신러닝 4종을 같은 조건에서 비교해 F1-Macro가 약 0.30에 머문다는 기준선을 확인하고, 단어 빈도만 보는 방식으로는 방언 문맥을 읽을 수 없다고 판단해 사전학습 언어 모델로 접근을 바꿨습니다. 제주어와 표준어를 공유 인코더로 처리하고 게이트로 융합하는 구조를 설계한 뒤 토크나이저 최적화, 제주어 말뭉치 추가 사전학습, 어려운 표본 가중, KoELECTRA 앙상블을 차례로 적용했습니다. 모든 실험이 같은 테스트셋을 쓰도록 시드를 고정했습니다.",
      },
      {
        heading: "수치의 범위",
        text: "최종 F1-Macro 0.84는 최종 발표 실험 기준 값입니다. 공개 저장소의 재현 코드로 확인되는 값은 KR-BERT 단계의 0.7593까지이며, 원본 데이터(AI Hub 라이선스)와 학습된 가중치는 저장소에 포함되어 있지 않습니다.",
      },
    ],
  },
  {
    slug: "liar-game",
    title: "라이어 게임 서버 · Java 소켓 멀티플레이어",
    category: "academic",
    badge: "2024 · 건국대 네트워크 프로그래밍",
    period: "2024.03 – 2024.05",
    org: "건국대학교 네트워크 프로그래밍 수업 · 3인 팀",
    role: "서버 측 멀티스레드 처리 · 게임 로직",
    summary:
      "최대 8명이 동시에 접속하는 TCP 소켓 기반 라이어 게임. 접속 처리와 게임 진행이 서로를 막지 않도록 스레드를 나누고, 라이어 선정과 발언 순서, 투표와 승패 판정을 맡음. 프레임워크 없이 동시 접속 타이밍 문제를 직접 디버깅.",
    hero: "/projects/liar-game.svg",
    github: "https://github.com/parksungyun0411/liar-game",
    color: "#475569",
    stack: ["Java", "Swing", "Socket · ServerSocket", "Thread", "Gradle"],
    metrics: [
      { label: "동시 접속", value: "최대 8명" },
      { label: "제시어 풀", value: "181개" },
      { label: "발언 · 투표", value: "10초 · 20초" },
    ],
    body: [
      {
        heading: "구조",
        text: "서버는 accept 루프를 별도 스레드로 돌리고 접속마다 클라이언트 처리 스레드를 만들어 보관합니다. 게임 시작 시 또 다른 스레드에서 게임 매니저를 구동해 accept 루프와 게임 진행이 서로 블로킹되지 않게 분리했습니다. 메시지는 접두사로 라이어의 제시어 추리, 투표, 게임 명령, 채팅을 구분해 분기하고 전체에 브로드캐스트합니다.",
      },
      {
        heading: "배운 점과 한계",
        text: "스레드 생성·동기화·자원 정리를 프레임워크 없이 손으로 다뤘고, 동시 접속 환경에서 강퇴와 브로드캐스트 타이밍 버그를 디버깅한 것이 가장 기억에 남습니다. 텍스트 접두사 프로토콜은 확장에 취약하고, 동기화가 Vector에 기대어 게임 중 입퇴장 시 순회와 수정이 경합할 수 있으며, 네트워크 스레드에서 Swing 컴포넌트를 직접 갱신한 점은 다시 만든다면 바꿀 부분입니다.",
      },
    ],
  },
  {
    slug: "university-coursework",
    title: "학부 과제 코드 모음",
    category: "academic",
    badge: "2020 – 2025 · 건국대",
    period: "2020.03 – 2025.12",
    org: "건국대학교 스마트ICT융합공학과 · 응용통계학과",
    summary:
      "자료구조·알고리즘·데이터베이스 내부 구조·시스템 프로그래밍부터 통계전산, 회귀분석, 비모수통계, 다변량 분석까지 학기별 과제 코드를 과목 단위로 정리한 저장소.",
    hero: "/projects/coursework.svg",
    github: "https://github.com/parksungyun0411/university-coursework",
    color: "#64748b",
    stack: ["C", "C++", "Java", "Python", "R"],
    body: [
      {
        heading: "구성",
        text: "C로 Linked List·Stack·Queue를 직접 구현한 자료구조, fork와 pipe로 프로세스 통신을 다룬 시스템 프로그래밍, B+Tree와 Slotted Page를 C++로 구현한 데이터베이스, Prim·Dijkstra 같은 알고리즘 과제가 있습니다. 응용통계학과 쪽은 Python으로 확률분포·검정·회귀를 구현한 통계전산처리와 R로 수행한 회귀분석 텀 프로젝트, 비모수통계, 다변량 자료분석(PCA·인자·군집·판별) 과제입니다.",
      },
    ],
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
