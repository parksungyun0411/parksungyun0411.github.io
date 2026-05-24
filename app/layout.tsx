import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "박성윤 · Park Sung Yun",
  description: "데이터 / AI 기반으로 사용자의 본질적인 문제를 해결하는 백엔드 엔지니어",
  openGraph: {
    title: "박성윤 · Park Sung Yun",
    description: "데이터 / AI 기반 백엔드 엔지니어 · 건국대 스마트ICT융합공학과",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-50 text-zinc-900">{children}</body>
    </html>
  );
}
