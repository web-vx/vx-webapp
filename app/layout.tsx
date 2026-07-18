import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vertexshell.com"),
  title: "VertexShell Solutions | Diversified Industrial Supply",
  description:
    "Cairo-based industrial supply and trading group delivering modular infrastructure, power systems, aviation and specialized assets, and broader industrial supply across Egypt, the MENA region, and international markets.",
  keywords: [
    "industrial supply",
    "trading group",
    "modular infrastructure",
    "e-houses",
    "prefabricated shelters",
    "power systems",
    "aviation",
    "specialized assets",
    "MENA",
    "Egypt",
    "oil and gas",
    "telecom infrastructure",
  ],
  openGraph: {
    title: "VertexShell Solutions | Diversified Industrial Supply",
    description:
      "Cairo-based industrial supply and trading group delivering modular infrastructure, power systems, aviation and specialized assets, and broader industrial supply across Egypt, the MENA region, and international markets.",
    url: "https://vertexshell.com",
    siteName: "VertexShell Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VertexShell Solutions - Diversified Industrial Supply for Demanding Operations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VertexShell Solutions | Diversified Industrial Supply",
    description:
      "Cairo-based industrial supply and trading group delivering modular infrastructure, power, aviation, and specialized supply across Egypt, MENA, and international markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
