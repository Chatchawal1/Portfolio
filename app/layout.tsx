import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  icons: {
    icon: "/favicon.ico",
  },
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
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <main className="flex w-full min-w-0 flex-1 flex-col overflow-x-clip px-8 py-8 sm:px-12 sm:py-12 lg:px-16 xl:px-20 2xl:px-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}