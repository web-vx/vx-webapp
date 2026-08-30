import type { Metadata } from "next";
import { Archivo, Big_Shoulders, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const bigShoulders = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vertexshell.com"),
  title: {
    default: "VertexShell Solutions | Diversified Industrial Supply",
    template: "%s | VertexShell Solutions",
  },
  description:
    "Cairo-based industrial supply and trading group delivering modular infrastructure, power systems, aviation and specialized assets, and broader industrial supply across the MENA region and international markets.",
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
    "oil and gas",
    "telecom infrastructure",
  ],
  openGraph: {
    title: "VertexShell Solutions | Diversified Industrial Supply",
    description:
      "Cairo-based industrial supply and trading group delivering modular infrastructure, power systems, aviation and specialized assets, and broader industrial supply across the MENA region and international markets.",
    url: "https://vertexshell.com",
    siteName: "VertexShell Solutions",
    images: [
      {
        url: "/logo-blue-bg.jpg",
        width: 2000,
        height: 2000,
        alt: "VertexShell Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VertexShell Solutions | Diversified Industrial Supply",
    description:
      "Cairo-based industrial supply and trading group delivering modular infrastructure, power, aviation, and specialized supply across MENA and international markets.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${bigShoulders.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
