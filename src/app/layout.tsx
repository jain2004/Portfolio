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
  title: "Ishaan Jain | Software Engineer",
  description: "Portfolio of Ishaan Jain, a Software Engineer focused on building intelligent, scalable systems.",
  openGraph: {
    title: "Ishaan Jain | Software Engineer",
    description: "Portfolio of Ishaan Jain, a Software Engineer focused on building intelligent, scalable systems.",
    url: "https://jain2004.github.io/Portfolio",
    siteName: "Ishaan Jain Portfolio",
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
