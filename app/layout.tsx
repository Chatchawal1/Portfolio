import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio | โป้ Kuhakan",
    template: "%s | โป้ Kuhakan",
  },
  description:
    "พอร์ตโฟลิโอแสดงผลงานและทักษะด้าน Frontend/Next.js ออกแบบเรียบหรู ใช้งานง่าย",
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Portfolio | โป้ Kuhakan",
    description:
      "พอร์ตโฟลิโอแสดงผลงานและทักษะด้าน Frontend/Next.js ออกแบบเรียบหรู ใช้งานง่าย",
    url: "https://example.com",
    siteName: "Portfolio",
    locale: "th_TH",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <Header /> */}
        <main className="max-w-5xl px-4 py-8 sm:py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
