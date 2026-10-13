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
  /** 성과 칩 (예: "1등", "상위 5.2%", "진행 중"). 없으면 미표시 */
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
  /** 저장소 리포트에 근거한 핵심 수치. 상세 페이지 스탯 그리드로 표시 */
  metrics?: ProjectMetric[];
  /** 아키텍처 다이어그램. 상세 페이지에 이미지로 표시 */
  architecture?: { image: string; alt: string; note?: string };
  /** 카드·상세 강조색 */
  color?: string;
  featured?: boolean;
  featuredOrder?: number;
}

// 자리표시 데이터: 빌드 통과용. 실제 프로젝트 배열로 교체한다.
export const projects: Project[] = [
  {
    slug: "placeholder-work",
    title: "업무 프로젝트 (자리표시)",
    category: "work",
    badge: "2026",
    period: "2026",
    org: "소속 기관",
    role: "역할",
    summary: "업무 프로젝트 자리표시 항목입니다. 실제 내용으로 교체됩니다.",
    hero: "/projects/driver-risk-platform.svg",
    color: "#dc2626",
    stack: ["Python"],
    featured: true,
    featuredOrder: 1,
    body: [{ heading: "배경", text: "자리표시 본문입니다." }],
  },
  {
    slug: "placeholder-personal",
    title: "개인 프로젝트 (자리표시)",
    category: "personal",
    badge: "2026",
    period: "2026",
    org: "개인",
    summary: "개인 프로젝트 자리표시 항목입니다. 실제 내용으로 교체됩니다.",
    hero: "/projects/ko-judge-lora.svg",
    color: "#db2777",
    stack: ["Python"],
    body: [{ heading: "배경", text: "자리표시 본문입니다." }],
  },
  {
    slug: "placeholder-academic",
    title: "학부 프로젝트 (자리표시)",
    category: "academic",
    badge: "2026",
    period: "2026",
    org: "학부 수업",
    summary: "학부 프로젝트 자리표시 항목입니다. 실제 내용으로 교체됩니다.",
    hero: "/projects/coursework.svg",
    color: "#64748b",
    stack: ["Python"],
    body: [{ heading: "배경", text: "자리표시 본문입니다." }],
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999));
