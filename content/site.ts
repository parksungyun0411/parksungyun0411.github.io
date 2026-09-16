/**
 * 사이트 내용 단일 소스. devportfolio 의 config.ts 와 같은 역할.
 * 문장은 서술형으로 쓴다. 수치는 실측된 것만, 기술은 문장 안에서 필요한 만큼만.
 */
export const site = {
  name: "박성윤",
  nameEn: "Park Sungyun",
  title: "데이터·AI 백엔드 엔지니어",
  tagline:
    "기획부터 구현, 검증, 배포까지 한 흐름으로 맡는 일을 좋아합니다. 지금은 DACON에서 AI 해커톤 플랫폼을 만듭니다.",
  description:
    "박성윤 포트폴리오. 데이터·AI 백엔드 엔지니어. 기획부터 구현, 검증, 배포까지.",
  accent: "#1d4ed8",
  social: {
    email: "psyreo93@gmail.com",
    github: "https://github.com/parksungyun0411",
    blog: "https://velog.io/@parksungyun0411",
  },
  about: [
    "건국대학교에서 스마트ICT융합공학과 응용통계학을 함께 전공하며, 데이터를 읽는 통계 감각 위에 백엔드와 AI 엔지니어링을 쌓아 왔습니다. 지금은 DACON에서 AI 해커톤 플랫폼의 평가 시스템을 기획하고, 만들고, 검증하는 일을 합니다.",
    "근거 없는 주장을 쓰지 않으려고 합니다. 순위를 믿어도 되는지 궁금하면 시뮬레이션을 돌려 숫자를 만들고, 리뷰에서 전제를 지적받으면 제 코드부터 되돌립니다. 기획서와 설계 문서를 코드보다 먼저 쓰는 편이라, 규칙은 합의를 받은 뒤에 구현합니다.",
    "새 기능을 설계하는 일만큼 남이 만든 시스템을 넘겨받아 안정적으로 굴리는 일도 좋아합니다. 최근에는 공공기관에 납품되는 교통사고 위험 예측 플랫폼을 맡아 모델 탑재부터 외부망이 분리된 환경의 배포까지 담당했습니다.",
  ],
  skills: [
    "Python",
    "TypeScript",
    "FastAPI",
    "React / Next.js",
    "PostgreSQL",
    "MongoDB",
    "Neo4j",
    "PyTorch",
    "scikit-learn",
    "LangChain",
    "Docker",
    "GitHub Actions",
    "AWS",
    "QA 자동화",
  ],
  projects: [
    {
      name: "교통사고 위험 예측 AI 플랫폼",
      period: "2026",
      description:
        "운수종사자의 검사 결과와 사고 이력으로 개인별 사고 위험도를 산출하고, 왜 그런 점수가 나왔는지 SHAP으로 설명해 주는 공공기관 납품 플랫폼입니다. 경진대회로 확보한 모델을 현업에 앉히는 마지막 구간을 맡아, 외부망이 분리된 PC 한 대에 설치되는 배포 방식과 운영 가이드까지 만들었습니다. 발주기관 보안 조항에 따라 코드는 비공개입니다.",
      link: null,
      skills: ["FastAPI", "LightGBM", "SHAP", "React", "eGovFrame"],
    },
    {
      name: "제주어 다중감정분류",
      period: "2025.09 - 2025.12",
      description:
        "라벨링된 제주어 감정 데이터가 없어서, 제주어와 표준어 병렬 코퍼스를 모아 GPT-4o로 일곱 가지 감정을 직접 붙였습니다. 고전 머신러닝이 어디까지 되는지 먼저 수치로 확인한 뒤 KR-BERT를 일곱 단계로 개선해 F1-Macro를 0.30에서 0.84까지 끌어올렸습니다. 4인 팀에서 데이터 구축과 모델 설계, 실험을 맡았습니다.",
      link: "https://github.com/parksungyun0411/jeju-emotion-analysis",
      skills: ["PyTorch", "HuggingFace", "KR-BERT", "GPT-4o API"],
    },
    {
      name: "너드수학 NerdMath",
      period: "2025",
      description:
        "진단 점수만으로는 학생이 어떤 선수 개념에서 막혔는지 알 수 없던 문제를, 개념의 선후 관계 그래프 위에 진단 데이터를 얹은 Graph-RAG 추천 엔진으로 풀었습니다. 질문을 풀이, 개념, 자료 검색으로 나눠 답하는 챗봇과 문항 OCR 파이프라인, 추론 서버 배포까지 백엔드 전반을 맡았습니다. 한이음 드림업 과제이며 저장소는 비공개입니다.",
      link: null,
      skills: ["FastAPI", "LangChain", "Neo4j", "MongoDB", "Docker"],
    },
    {
      name: "liar-game",
      period: "2024.03 - 2024.05",
      description:
        "최대 8명이 동시에 접속하는 TCP 소켓 기반 라이어 게임입니다. 접속 처리와 게임 진행이 서로를 막지 않도록 스레드를 나누고, 라이어 선정과 발언 순서, 투표와 승패 판정 같은 게임 로직을 맡았습니다. 프레임워크 없이 동시 접속 타이밍 문제를 직접 디버깅한 프로젝트입니다.",
      link: "https://github.com/parksungyun0411/liar-game",
      skills: ["Java", "Socket", "Thread"],
    },
  ],
  experience: [
    {
      company: "DACON 데이콘",
      title: "운영·개발 파트, 서비스 기획과 풀스택 개발, QA",
      dateRange: "2026.04 - 현재",
      bullets: [
        "해커톤 평가 시스템을 기획부터 배포까지 맡았습니다. 평가 방법이 화면에 드러나지 않고 가중치 토글로 정해지던 구조를 평가일정, 평가설정, 공개설정으로 나누고, 제출과 평가를 명시적으로 연결해 여러 차수의 평가가 가능하게 했습니다.",
        "ELO 평가의 결함을 감사해 공정성 문제와 개인정보 노출을 출시 전에 막았습니다. 순위를 몇 매치부터 믿어도 되는지를 시뮬레이션으로 계산했고, 그 근거로 가산점 안을 기각하고 평가에 참여해야 점수를 받는 호혜 게이트를 만들었습니다.",
        "공공기관에 납품되는 교통사고 위험 예측 AI 플랫폼을 개발하고 외부망이 분리된 환경에 배포했습니다. 현장 설치가 보안 프로그램에 막히자 설치 방식을 다시 썼고, 검사 이력이 화면에서 빠지던 결함을 근본부터 고쳤습니다.",
        "플랫폼 전반의 주간 QA를 맡아 결함을 재현 조건까지 적어 남겼고, 손으로 하던 QA 준비를 커맨드로 자동화했습니다. 리더보드 화면 구조와 날짜 표기 같은 규칙은 문서로 먼저 합의한 뒤 구현했습니다.",
        "대학 연합 AI 경진대회 본선의 현장 운영과 공공기관 경진대회 온라인 설명회의 발표를 맡았습니다.",
      ],
    },
    {
      company: "자빅스",
      title: "클라우드·엔터프라이즈 서비스 운영 인턴",
      dateRange: "2025.05 - 2025.08",
      bullets: [
        "고객사의 AWS 인프라 요청을 받아 EC2를 만들고 늘리며, 사용량을 분석해 과금을 산정하고 담당자에게 전달했습니다.",
        "Azure AD와 Microsoft 365 운영을 지원하고, 서비스별 비용 구조를 분석해 과금 모델 검토에 기여했습니다.",
        "공공 메신저 서비스의 조직도 기반 사용자 조회와 대화방 기능 기획에 참여했습니다.",
      ],
    },
    {
      company: "갈매 시그마 수학학원",
      title: "수학 강사 (아르바이트)",
      dateRange: "2019.12 - 2026.04",
      bullets: [
        "같은 내용도 학생마다 이해 속도가 달라 일괄 설명이 통하지 않던 문제를, 막힌 선행 개념부터 되짚는 방식으로 풀었습니다. 군 복무 기간을 빼고 초등학생부터 고3까지 지도했습니다.",
        "문제은행에서 AI로 난이도별 문제를 만들어 수준에 맞는 연습을 제공했고, 이 경험이 진단 결과로 학습경로를 제안하는 너드수학 설계로 이어졌습니다.",
      ],
    },
  ],
  education: [
    {
      school: "건국대학교",
      degree: "스마트ICT융합공학과 주전공, 응용통계학과 복수전공",
      dateRange: "2020.03 - 2026.02",
      achievements: [
        "전체 평점 4.10 / 4.5",
        "졸업 프로젝트: 제주어 다중감정분류",
        "네트워크 프로그래밍부터 다변량 통계까지, 학부 과제 코드를 저장소로 정리",
      ],
    },
    {
      school: "자격과 어학",
      degree: "정보처리기사, 빅데이터분석기사, SQLD, ADsP",
      dateRange: "2023 - 2026",
      achievements: [
        "컴퓨터활용능력 1급, 한국사능력검정시험 1급",
        "TOEIC 885, TOEIC Speaking IM3",
      ],
    },
  ],
} as const;

export type Project = (typeof site.projects)[number];
export type Experience = (typeof site.experience)[number];
export type Education = (typeof site.education)[number];
