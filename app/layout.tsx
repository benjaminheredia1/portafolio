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
  title: {
    default: "Benjamin Heredia — Full-Stack Engineer",
    template: "%s",
  },
  description:
    "Full-stack engineer in Santa Cruz, Bolivia. I build production systems and AI integrations with Next.js, NestJS, Laravel, LangChain and n8n.",
  keywords: [
    "Benjamin Heredia",
    "Full-Stack Engineer",
    "Next.js",
    "NestJS",
    "Laravel",
    "LangChain",
    "Bolivia",
  ],
  openGraph: {
    title: "Benjamin Heredia — Full-Stack Engineer",
    description:
      "Production systems and AI integrations: hospital platforms, academic systems and self-service bots.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
