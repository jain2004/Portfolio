import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { PageWrapper } from "@/components/providers/page-wrapper";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Doe | Staff Software Engineer & Designer",
  description: "Portfolio of John Doe, a Staff Software Engineer & Creative Director specializing in high-performance web experiences.",
  openGraph: {
    title: "John Doe | Engineer & Designer",
    description: "Portfolio of John Doe, specializing in high-performance web experiences.",
    url: "https://example.com",
    siteName: "John Doe Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <PageWrapper>
          {children}
        </PageWrapper>
        <Analytics />
      </body>
    </html>
  );
}
