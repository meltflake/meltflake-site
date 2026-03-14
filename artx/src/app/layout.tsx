import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ArtX — 艺术院校选校指南",
    template: "%s | ArtX",
  },
  description: "帮助艺术生和家长做出更好的选校决策。整合全球艺术院校信息，抹平信息差。",
  openGraph: {
    title: "ArtX — 艺术院校选校指南",
    description: "帮助艺术生和家长做出更好的选校决策",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/artx/og-image.png",
        width: 1200,
        height: 630,
        alt: "ArtX 艺术院校选校指南",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
