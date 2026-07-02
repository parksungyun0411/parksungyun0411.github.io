import type { Metadata } from "next";
import { Hahmlet, Gothic_A1 } from "next/font/google";
import "./globals.css";

// 한글 폰트는 unicode-range 조각이 100+개라 전체 preload 시 초기 로드가 무거워짐
// → preload 끄고 필요한 조각만 내려받게 한다
const hahmlet = Hahmlet({
  subsets: ["latin"],
  variable: "--font-hahmlet",
  display: "swap",
  preload: false,
});

const gothicA1 = Gothic_A1({
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-gothic-a1",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "박성윤 · Park Sungyun",
  description:
    "데이터와 AI로 사용자의 본질적인 문제를 찾아 해결하는 엔지니어 — 기획부터 구현·QA·배포까지.",
  openGraph: {
    title: "박성윤 · Park Sungyun",
    description:
      "데이터와 AI로 사용자의 본질적인 문제를 찾아 해결하는 엔지니어 — 기획부터 구현·QA·배포까지.",
    url: "https://parksungyun0411.github.io",
    siteName: "parksungyun0411 portfolio",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${hahmlet.variable} ${gothicA1.variable} h-full`}
    >
      <body className="min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}
