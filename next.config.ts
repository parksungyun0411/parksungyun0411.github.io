import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages: 정적 export
  output: "export",
  images: {
    unoptimized: true,
  },
  // parksungyun0411.github.io는 user site (root path)
  // 만약 project site였다면 basePath: "/repo-name" 필요
};

export default nextConfig;
