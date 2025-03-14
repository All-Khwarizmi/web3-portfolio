import type React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jason Suarez | Web3 Security Researcher & Developer",
  description:
    "Portfolio of Jason Suarez, a Web3 security researcher and developer specializing in smart contract security and blockchain technology.",
  metadataBase: new URL("https://jason-suarez.com"),
  authors: [{ name: "Jason Suarez" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jason-suarez.com/",
    siteName: "Jason Suarez Portfolio",
    title: "Jason Suarez | Web3 Security Researcher & Developer",
    description:
      "Explore my portfolio showcasing smart contract security research, blockchain development projects, and how I can help secure your Web3 applications.",
    images: [
      {
        url: "/portfolio-cover.png",
        width: 1200,
        height: 630,
        alt: "Jason Suarez - Web3 Security Researcher & Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@swarecito",
    creator: "@swarecito",
    title: "Jason Suarez | Web3 Security Researcher & Developer",
    description:
      "Discover my portfolio focused on blockchain security, smart contract auditing, and Web3 development with expertise in Solidity and security analysis.",
    images: ["/portfolio-cover.png"],
  },
  themeColor: "#0A0E17", // Dark blue/black for cyberpunk aesthetic
  keywords: [
    "web3 security",
    "smart contract auditing",
    "blockchain developer",
    "solidity security",
    "ethereum",
    "security researcher",
    "web3 development",
    "blockchain security",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    google: "your-google-verification-id", // Add your verification ID if you have one
  },
  alternates: {
    canonical: "https://jason-suarez.com",
  },
  category: "Technology",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
