import type { Metadata } from "next";
import "./globals.css"; // Tailwind CSS 및 커스텀 스타일 로드

export const metadata: Metadata = {
  title: "화사 | .NET 기술 컨설팅",
  description: "신뢰할 수 있는 지능과 현대적인 장인정신을 제공하는 AI 기반 기술 컨설팅.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}