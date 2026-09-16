import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_KR } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

// devportfolio 는 IBM Plex Mono 단일 서체. 한글 본문은 같은 가족의 Plex Sans KR 로 받는다.
const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

const plexSansKr = IBM_Plex_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex-sans-kr",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://parksungyun0411.github.io"),
  title: `${site.name} | ${site.title}`,
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.description,
    url: "https://parksungyun0411.github.io",
    siteName: "parksungyun0411 portfolio",
    locale: "ko_KR",
    type: "website",
    images: ["/profile.jpg"],
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
      className={`${plexMono.variable} ${plexSansKr.variable} h-full`}
    >
      <body className="min-h-full bg-bg text-fg">{children}</body>
    </html>
  );
}
