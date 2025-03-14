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
    locale: "fr_FR",
    url: "https://jason-suarez.com/",
    siteName: "Portfolio de Jason Suarez",
    title: "Jason Suarez | Développeur Frontend React & TypeScript",
    description:
      "Explorez mon portfolio pour découvrir mes compétences en développement web, mes projets innovants, et comment je peux aider votre entreprise à créer des interfaces utilisateur performantes et modernes.",
    images: [
      {
        url: "/portfolio-cover.png",
        width: 1200,
        height: 630,
        alt: "Portfolio de Jason Suarez - Développeur Frontend",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@swarecito",
    creator: "@swarecito",
    title: "Jason Suarez | Développeur Frontend React & TypeScript",
    description:
      "Découvrez mon portfolio de développeur frontend spécialisé en React, TypeScript et Next.js. Projets innovants et solutions web modernes.",
    images: ["/portfolio-cover.png"],
  },
  themeColor: "#000000",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/portfolio-cover.png" }],
  },
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
