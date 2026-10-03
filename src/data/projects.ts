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
  /** 저장소 주소. public이 true일 때만 링크로 렌더링 */
  repo?: string;
  /** 저장소 공개 여부. 비공개 저장소는 false로 두면 링크가 노출되지 않음 */
  public?: boolean;
  external?: { label: string; url: string }[];
  stack: string[];
  body: { heading: string; text: string }[];
  /** 출처가 있는 핵심 수치. 상세 페이지 스탯 그리드로 표시 */
  metrics?: ProjectMetric[];
  /** 수치의 출처·한계 설명. metrics 아래에 표시 */
  metricsNote?: string;
  /** 화면 캡처. 상세 페이지에 이미지로 표시 */
  screenshot?: { image: string; alt: string; note?: string };
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
      "자사 AI 경진대회 플랫폼의 평가 시스템(평가설정·ELO 대중평가)을 기획부터 구현·개발 환경 배포까지 맡고, 플랫폼 전반의 주간 QA를 담당하고 있습니다.",
    hero: "/projects/daker-evaluation.svg",
    color: "#6366f1",
    stack: [],
    body: [
      {
        heading: "배경",
        text: "평가 방법 가중치 토글로 암묵적으로 정해지고, 평가 설정이 제출 단계에 묶여 있어 한 대회에서 평가를 여러 차수로 돌릴 수 없었습니다. 심사위원·제출자·참가자·대중의 평가가 한 점수에 섞여 주체별 영향력이 왜곡되는 문제도 있었습니다.",
      },
      {
        heading: "평가 시스템 재설계",
        text: "평가설정 화면을 세 갈래로 나누고 평가 단계가 설정을 주도하도록 바꿔, 데이터 구조를 바꾸지 않고 다차수 평가를 가능하게 했습니다. 기획서 작성부터 화면·서버 구현까지 직접 수행했고, 회귀 테스트 31건을 모두 통과시킨 뒤 개발 환경에 배포했습니다. 대중평가는 역할별 ELO 레더로 분리하고 평가 주체의 역할에 따라 점수를 정규화하는 룰로 재설계해 62팀 규모 월간 해커톤에 적용했습니다.",
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
  // ── 개인 프로젝트 ───────────────────────────────────────────────────────
  // 수치는 모두 각 저장소 reports/ 파일에서 옮겼고, metricsNote에 출처 파일을 적는다.
  // 저장소가 비공개인 동안 repo 링크는 렌더링되지 않는다. 공개하면 public: true 로 바꾼다.
  {
    slug: "rag-eval-harness",
    title: "한국어 RAG 리더보드 순위 안정성",
    category: "personal",
    badge: "2026 · 개인",
    result: "완료 · 공개 데이터 실측",
    period: "2026.10",
    org: "개인 프로젝트 (rag-eval-harness)",
    summary:
      "공개 한국어 RAG 평가셋의 시스템 23개 × 질문 300개 정답 여부를 부트스트랩해, 질문 수에 따라 리더보드 순위가 얼마나 흔들리는지 측정했습니다. 1위와 2위의 차이는 300문항으로 판정할 수 없었습니다.",
    hero: "/projects/arch/rag-eval-harness.png",
    repo: "https://github.com/parksungyun0411/rag-eval-harness",
    public: false,
    color: "#16a34a",
    stack: ["Python", "NumPy", "SciPy", "Matplotlib", "FastAPI", "JavaScript", "pytest", "GitHub Actions"],
    featured: true,
    featuredOrder: 1,
    body: [
      {
        heading: "질문",
        text: "리더보드 표의 숫자 차이만으로는 그 차이가 질문을 다시 뽑아도 유지될지 알 수 없습니다. 같은 질문으로 두 시스템을 채점하면 한쪽만 맞힌 질문의 비율(불일치율)이 순위의 흔들림을 결정하는데, 리더보드에는 이 값이 보이지 않습니다. 이 프로젝트는 그 값을 계산해 \"이 두 시스템을 가르려면 질문이 몇 개 필요한가\"에 답합니다.",
      },
      {
        heading: "방법",
        text: "allganize/RAG-Evaluation-Dataset-KO(고정 리비전, SHA-256 확인)에 담긴 시스템 23개의 질문 300개(도메인 5개 × 60개)별 정답 여부로 정답 행렬을 만들고, 질문 집합을 10,000회 복원추출해 질문 수별 Kendall tau, 1위 유지 확률, top-k 집합 유지 확률을 계산했습니다. 동점은 유지로 세지 않았습니다. 바로 이웃한 순위 쌍마다 한쪽만 맞힌 질문 수와 McNemar 정확 검정 p를 구하고, 관측된 차이가 참값이라고 가정했을 때 양측 95%로 가르는 질문 수를 검정력 약 50% 기준(시뮬레이션·정확해·정규 근사)과 검정력 80% 기준(정규 근사)으로 계산했습니다. 시뮬레이션과 정확해의 최대 절대 차는 264개 지점에서 0.016이었습니다.",
      },
      {
        heading: "결과",
        text: "300문항 기준 1위는 254/300, 2위는 251/300으로 3문항 차이입니다. 같은 크기의 평가셋을 다시 뽑으면 1위가 유지되는 비율은 0.744이며, 옆의 구간 [0.736, 0.753]은 반복에서 오는 몬테카를로 오차일 뿐 이 값의 실제 불확실성은 그보다 훨씬 큽니다. 두 시스템 중 한쪽만 맞힌 질문은 15개로 9 대 6으로 갈렸고, 이 차이는 McNemar 정확 검정으로 p = 0.6072라 우연과 구별되지 않습니다. 관측된 차이를 참값으로 두면 이 둘을 가르는 질문 수는 검정력 약 50% 기준으로 정확해 2,000문항, 검정력 80% 기준으로 정규 근사 3,917문항이며 모두 300을 넘는 외삽입니다. 인접 순위 쌍 22개 중 검정력 약 50% 기준으로 300문항 안에서 갈리는 쌍은 3개였습니다. 그중 2-3위 쌍은 23 대 7(p = 0.0052)이고 검정력 80% 기준은 268문항입니다. 질문 수·정확도 차이·불일치율로 역전 확률을 계산하는 함수와, 리더보드·안정성 곡선·계산기를 보여 주는 정적 웹 화면도 만들었습니다.",
      },
      {
        heading: "한계",
        text: "방법은 정보검색의 topic set size 연구에서 쓰이는 표준 방법이고, 새로 한 것은 한국어 RAG 리더보드 데이터에 적용한 측정과 계산기입니다. 정답 여부는 데이터셋 작성자가 LLM 평가기 4종의 투표로 정한 값이라 라벨 오류의 불확실성은 반영하지 못합니다. 시스템 23개는 한 회사가 만든 벤치마크에서 나왔고 그중 10개는 같은 플랫폼의 생성 모델만 바꾼 변형이라 다른 리더보드에 그대로 일반화할 수 없습니다. 필요한 질문 수는 관측된 차이와 불일치율을 참값으로 둔 계산이고, 300을 넘는 값은 같은 질문 분포를 가정한 외삽입니다. 실제 질의 대 합성 질의 골든셋 비교(보조 실험)는 아직 측정하지 않았고, 웹 화면은 로컬에서만 실행했으며 배포하지 않았습니다.",
      },
    ],
    metrics: [
      { label: "데이터", value: "시스템 23 × 질문 300" },
      { label: "n=300 Kendall tau-b [95%]", value: "0.930 [0.863, 0.974]" },
      { label: "n=300 1위 유지 확률 [반복 오차 95%]", value: "0.744 [0.736, 0.753]" },
      { label: "1-2위 한쪽만 정답 · McNemar p", value: "9 / 6 · p = 0.6072" },
      { label: "1-2위 검정력 80% 질문 수 (정규 근사)", value: "3,917 (외삽)" },
      { label: "300문항 안에서 갈리는 인접 쌍 (검정력 약 50%)", value: "3 / 22" },
    ],
    metricsNote: "출처: rag-eval-harness 저장소 reports/REPORT.md (원자료 reports/rank_stability/curve_overall.csv, adjacent_pairs.csv, approx_check.csv, leaderboard.csv). 1위 유지 확률의 구간은 반복 횟수에서 오는 몬테카를로 오차입니다. 필요한 질문 수는 관측된 차이를 참값으로 둔 값이며 300을 넘으면 외삽입니다.",
    screenshot: {
      image: "/projects/screens/rag-eval-harness-demo.png",
      alt: "rag-eval-harness 웹 화면 — 리더보드, 질문 수에 따른 순위 안정성 곡선, 순위 역전 확률 계산기",
      note: "로컬에서 실행한 정적 웹 화면입니다. 배포하지 않았습니다.",
    },
  },
  {
    slug: "airgap-egress-audit",
    title: "폐쇄망 반입 후 외부 호출 감사",
    category: "personal",
    badge: "2026 · 개인",
    result: "로컬 kind 실측 · EKS 미실행",
    period: "2026.10",
    org: "개인 프로젝트 (airgap-egress-audit)",
    summary:
      "한국어 소형 LLM과 RAG 스택을 egress가 막힌 쿠버네티스 네임스페이스에 설치하고, 설치·기동·첫 요청·유휴 단계에서 밖으로 나가려는 시도를 패킷으로 기록한 뒤 \"외부 호출 0건\"을 회귀 게이트로 고정했습니다. 결과는 로컬 kind(macOS·colima)에서 낸 것입니다.",
    hero: "/projects/arch/airgap-egress-audit.png",
    repo: "https://github.com/parksungyun0411/airgap-egress-audit",
    public: false,
    color: "#0ea5e9",
    stack: ["kind", "Kubernetes", "Helm", "tcpdump", "CoreDNS", "llama.cpp", "TEI", "Qdrant", "FastAPI", "Python", "GitHub Actions"],
    featured: true,
    featuredOrder: 2,
    body: [
      {
        heading: "질문",
        text: "폐쇄망 반입은 보통 필요한 이미지와 모델 파일을 모두 들고 들어가면 끝난다고 가정합니다. 이 프로젝트는 이미지와 모델을 클러스터에 미리 넣어 둔 상태에서도 구성 요소가 밖으로 나가려 하는지를 문서가 아니라 패킷과 DNS 기록으로 확인합니다.",
      },
      {
        heading: "방법",
        text: "llama.cpp llama-server(kanana-1.5-2.1b Q4_K_M), Text Embeddings Inference, Qdrant, FastAPI RAG 앱을 한 Helm 차트로 설치하고, 네임스페이스에 egress 기본 거부 NetworkPolicy를 걸었습니다(예외는 CoreDNS와 같은 네임스페이스). 클러스터 밖 컨테이너가 kind 노드의 네트워크 네임스페이스에서 tcpdump로 TCP SYN과 UDP를 기록하고, CoreDNS 질의 로그와 파드 IP 기록으로 시도를 구성 요소·단계·목적지에 귀속합니다. 기본 설정(before), 완화 설정(after), 일부러 누출을 넣은 설정(leak)을 각각 새 클러스터에서 한 번씩 감사했습니다.",
      },
      {
        heading: "결과",
        text: "before에서 임베딩 서버(TEI)는 huggingface.co로 DNS 질의 32회(그중 6회는 CoreDNS가 상위 리졸버로 넘김)와 TCP 443 SYN 109회를, Qdrant는 telemetry.qdrant.io로 DNS 질의 8회(2회는 상위 리졸버로 넘어감)와 SYN 1회를 시도했고, 두 구성 요소 모두 SYN 1회씩은 클러스터 밖으로 나갔습니다. TEI에 로컬 스냅숏 경로를 지정하고 Qdrant 사용 통계를 끈 after에서는 시도가 관찰되지 않아 게이트가 FAIL(6행)에서 PASS(0건)로 바뀌었고, Running에서 전체 Ready까지 걸린 시간은 364초에서 5초로 줄었습니다. leak 설정에서는 주입한 호출(DNS 8회, SYN 10회)을 기록하고 게이트가 3행으로 실패했습니다.",
      },
      {
        heading: "새 파드의 정책 틈",
        text: "정책 적용 시점을 따로 시험한 결과(새 kind 클러스터 2개), 이미 떠 있는 파드에 정책을 건 직후의 첫 시도는 2/2 막혔습니다. 반면 정책이 막는 것을 확인하고 10초 뒤 만든 새 파드는 프로세스 시작 직후 16/16 연결됐고, 약 0.5초 뒤 7/16, 약 1초 이후에는 0/64가 연결됐습니다. 이 환경에서는 정책이 이미 적용된 네임스페이스에서도 새로 뜬 파드가 첫 1초 안팎 동안 밖으로 나갈 수 있었고, 원인은 확인하지 않았습니다. 그래서 차단은 구성 요소 설정(after)으로 하고, 정책은 관찰 대상을 좁히는 장치로 씁니다.",
      },
      {
        heading: "한계",
        text: "모든 결과는 인터넷에 연결된 macOS의 colima VM 안 kind 클러스터에서 낸 것이며 실제 폐쇄망이 아닙니다. EKS 변형은 작성만 했고 실행하지 않았습니다. DNS는 막지 않은 유출 경로입니다. NetworkPolicy는 CoreDNS까지 허용하고 CoreDNS는 외부 이름을 상위 리졸버로 넘기므로, 파드가 외부 이름을 물으면 그 이름은 클러스터 밖으로 나가며, 질의 이름에 데이터를 실어 보내는 방식은 이 감사와 정책으로 막을 수 없습니다. 유휴 600초 동안 관찰되지 않았다는 것은 호출이 없다는 증명이 아니고, 캡처는 IPv4의 TCP SYN과 UDP만 봅니다. 시험한 구성 요소 버전 밖으로는 일반화할 수 없습니다.",
      },
    ],
    metrics: [
      { label: "TEI before: DNS (상위 리졸버로) · SYN", value: "32 (6) · 109" },
      { label: "Qdrant before: DNS (상위 리졸버로) · SYN", value: "8 (2) · 1" },
      { label: "클러스터 밖으로 나간 SYN (before)", value: "2" },
      { label: "게이트 before → after", value: "FAIL 6행 → PASS 0건" },
      { label: "Running → 전체 Ready", value: "364초 → 5초" },
      { label: "누출 주입(leak): DNS (상위) · SYN · 게이트", value: "8 (2) · 10 · FAIL 3행" },
      { label: "새 파드 연결: 0초 · 약 0.5초 · 약 1초 이후", value: "16/16 · 7/16 · 0/64" },
    ],
    metricsNote: "출처: airgap-egress-audit 저장소 reports/kind-20261003/REPORT.md (새 파드 연결은 reports/policy-timing-20261003/REPORT.md). 로컬 kind on macOS(colima), 유휴 관찰 600초, 각 설정 1회 실행. DNS의 괄호는 CoreDNS가 상위 리졸버로 넘긴 질의 수입니다. EKS는 실행하지 않았습니다.",
  },
  {
    slug: "k-mcp-qa",
    title: "한국 공공데이터 MCP 서버 공통 시험",
    category: "personal",
    badge: "2026 · 개인",
    result: "키 없는 조건 실측",
    period: "2026.10",
    org: "개인 프로젝트 (k-mcp-qa)",
    summary:
      "공공기관 API를 감싸는 한국 MCP 서버 10개를 커밋 SHA로 고정해 격리 환경에서 설치·실행하고, 같은 시험을 돌려 관찰한 동작을 유형별로 기록했습니다. 서버의 품질 순위가 아니라 2026-10-03 고정 커밋에서 관찰한 동작입니다.",
    hero: "/projects/arch/k-mcp-qa.png",
    repo: "https://github.com/parksungyun0411/k-mcp-qa",
    public: false,
    color: "#8b5cf6",
    stack: ["Python", "MCP", "JSON Schema", "MCP conformance", "mcp-audit", "macOS sandbox-exec", "pytest", "GitHub Actions"],
    featured: true,
    featuredOrder: 3,
    body: [
      {
        heading: "시험 항목",
        text: "설치·기동, 프로토콜 적합성(initialize, tools/list, 응답 스키마, 알 수 없는 메서드·툴, 제한 시간), 선언된 입력 스키마와 실제 동작의 차이, 기관 API 오류를 어떻게 돌려주는지를 봅니다. 실제 API 키는 쓰지 않고 키 변수에 자리 표시자를 넣었기 때문에, 기관 API를 부르는 호출은 인증 오류를 받습니다. 이때 서버가 오류를 오류로 알려 주는지가 시험 항목 중 하나입니다.",
      },
      {
        heading: "방법",
        text: "서버마다 임시 HOME과 비운 환경 변수, macOS sandbox-exec로 격리해 실행하고, SDK를 거치지 않는 stdio JSON-RPC 클라이언트로 송수신 줄을 그대로 기록했습니다. 응답은 MCP 공식 스키마(2025-11-25)로 검증하고, 툴마다 필수 인자 누락·타입 오류·스키마를 만족하는 입력으로 호출했습니다. 공식 conformance 시나리오 3개와 mcp-audit도 함께 돌렸습니다. 관찰은 응답 문구와 오류 스택을 고정 커밋의 서버 소스와 설치된 SDK 소스에서 찾아, 서버 소스에서 확인되면 \"서버 코드\", SDK 소스에서만 확인되면 \"SDK 기본 동작(확인)\"으로 나누고 소스 파일과 줄을 함께 적었습니다.",
      },
      {
        heading: "관찰",
        text: "변형 1개를 포함한 11개 실행에서 설치는 모두 성공했고, 자리 표시자 키로 initialize에 응답한 실행은 10개였습니다. 공식 conformance 세 시나리오는 측정한 9개 실행이 모두 통과했고, 1개 실행은 시나리오 도중 서버 프로세스가 이미 종료되어 측정할 수 없었습니다. 서버 코드에서 나온 관찰 중 가장 넓게 나타난 것은 실행 실패를 isError 없는 결과로 돌려준 경우로, 5개 실행에서 원인 15개·발생 121건이었습니다. 알 수 없는 툴 호출을 isError 결과로 답한 동작은 7개 실행에서 SDK 기본 동작으로 확인되어 서버에 대한 관찰로 세지 않았습니다. 근거로 든 MCP 스펙의 오류 처리 절에는 MUST/SHOULD 같은 규범 키워드가 없어, 이 관찰들은 스펙 서술과 다른 동작을 기록한 것이지 위반 판정이 아닙니다.",
      },
      {
        heading: "한계",
        text: "표본은 awesome-mcp-korea에서 고른 10개(+변형 1)로 한국 공공데이터 MCP 서버 전체를 대표하지 않습니다. 실행은 하루, 서버마다 고정 커밋 하나입니다. 키 없는 조건만 측정해, 오류 처리 관찰은 유효하지 않은 키에서의 동작이며 정상 키에서는 나타나지 않을 수 있습니다. MCP 응답과 기관 API 직접 호출의 일치 검사는 구현했지만 키가 필요해 측정 전입니다. 발생 수는 툴 수에 비례하므로 서버끼리 직접 비교할 수 없습니다. 각 관찰의 이슈 초안은 만들었지만 업스트림에 올리지 않았습니다.",
      },
    ],
    metrics: [
      { label: "시험한 서버", value: "10 (+ 변형 1)" },
      { label: "시험하지 않은 서버", value: "2" },
      { label: "설치 성공", value: "11 / 11" },
      { label: "자리 표시자 키로 initialize 응답", value: "10 / 11" },
      { label: "공식 conformance 3개 모두 통과", value: "9 / 9 측정 + 1 측정 불가" },
      { label: "서버 코드: 실행 실패를 isError 없이 응답", value: "5개 실행 · 원인 15 / 발생 121" },
      { label: "SDK 기본 동작(확인): 알 수 없는 툴에 isError", value: "7개 실행" },
      { label: "직접 호출 일치", value: "측정 전" },
    ],
    metricsNote: "출처: k-mcp-qa 저장소 reports/RESULTS.md (서버별 요약, 서버 코드에서 나온 관찰, SDK 기본 동작으로 확인된 관찰, 시험하지 않은 서버). 2026-10-03 실행, 키 없음(자리 표시자) 조건. 원인 수는 같은 문구·같은 출처를 하나로 묶은 값이고 발생 수는 툴 수에 비례합니다.",
  },
  {
    slug: "ko-judge-lora",
    title: "한국어 LLM 평가자 LoRA",
    category: "personal",
    badge: "2026 · 개인",
    result: "진행 중",
    period: "2026.10 – 진행 중",
    org: "개인 프로젝트 (ko-judge-lora)",
    summary:
      "한국어 응답을 1~5점으로 채점하는 소형 LLM 평가자를 사람 점수로 LoRA 학습하고, 사람 점수와의 일치와 모델 순위 재현을 재려는 프로젝트입니다. 데이터 프로파일만 실측했고 모델 학습·서빙은 실행 전입니다.",
    hero: "/projects/arch/ko-judge-lora.png",
    repo: "https://github.com/parksungyun0411/ko-judge-lora",
    public: false,
    color: "#f59e0b",
    stack: ["Python", "PyTorch", "Transformers", "PEFT", "TRL", "llm-compressor", "vLLM", "pandas", "SciPy"],
    body: [
      {
        heading: "설계",
        text: "한국어 사람 평가 데이터셋 KUDGE(Son et al., 2024)를 씁니다. 학습용 분할이 없는 평가 전용 데이터라, 질문 5-fold와 평가 대상 모델 8개 보류를 한 번의 학습에서 함께 만족시키는 out-of-fold 설계로 질문과 모델 두 방향의 누수를 막았습니다. 판정 모델은 상업 이용이 가능한 라이선스의 Qwen3-4B(주)와 kanana-1.5-2.1b(보조)이고, 학습한 평가자를 AWQ 4bit로 양자화해 vLLM으로 서빙하며 양자화 전후 품질과 100만 건당 비용을 비교할 계획입니다.",
      },
      {
        heading: "데이터 프로파일 (실측)",
        text: "pointwise 응답 2,506건, 질문 87개, 평가 대상 모델 31개입니다. 두 평가자의 점수는 47.92%가 완전히 일치하고 83.84%가 1점 이내이며 피어슨 r은 0.640입니다. 이 사람 간 일치를 판정 모델의 상한으로 둡니다. 논문 지표인 off-by-0.5 정확도는 항상 1점을 주는 상수 판정도 43.10%가 나오므로, 피어슨 r과 모델 순위의 Kendall τ를 함께 봅니다.",
      },
      {
        heading: "상태와 한계",
        text: "학습·서빙이 필요한 단계는 코드와 테스트만 있고 GPU에서 실행하지 않아 모델 결과는 없습니다. GPU 계획은 Qwen3-4B 하나로 학습 7회를 돌리는 축소안으로 약 10.1시간이 추정되며(토큰 수는 실측, 처리 속도는 가정), 계획일 뿐 실행하지 않았습니다. 질문이 87개뿐이라 사람 순위조차 87개 전부를 써야 τ의 2.5 백분위가 0.9를 넘으므로, 판정 모델 간 τ 차이가 작으면 구분할 수 없습니다.",
      },
    ],
    metrics: [
      { label: "응답 / 질문 / 모델", value: "2,506 / 87 / 31" },
      { label: "평가자 간 완전 일치", value: "47.92%" },
      { label: "평가자 간 1점 이내", value: "83.84%" },
      { label: "평가자 간 피어슨 r", value: "0.640" },
      { label: "상수(1점) 판정 off-by-0.5", value: "43.10%" },
      { label: "평가자1 대 평가자2 순위 τ (실제 87문항)", value: "0.901" },
    ],
    metricsNote: "출처: ko-judge-lora 저장소 reports/dataset_profile.md (KUDGE 고정 커밋 09e1316, 모델 없이 데이터만으로 계산). τ 0.901은 실제 87개 질문 그대로의 값이며, 질문을 복원추출한 1,000회 평균(0.867)과 다릅니다. GPU 시간 추정은 reports/gpu_budget.md. 판정 모델 결과는 측정 전입니다.",
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
    repo: "https://github.com/parksungyun0411/jeju-emotion-analysis",
    public: true,
    color: "#f97316",
    stack: ["Python", "PyTorch", "HuggingFace Transformers", "scikit-learn", "KR-BERT", "KoELECTRA", "OpenAI GPT-4o API", "pandas"],
    featured: true,
    featuredOrder: 4,
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
    repo: "https://github.com/parksungyun0411/liar-game",
    public: true,
    color: "#10b981",
    stack: ["Java", "Swing", "Socket", "Thread", "Gradle"],
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
    repo: "https://github.com/parksungyun0411/university-coursework",
    public: true,
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
