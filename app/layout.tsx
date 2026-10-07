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
    default: "VertexShell | Engineered Supply and International Trading",
    template: "%s | VertexShell",
  },
  description:
    "Group of companies delivering engineered infrastructure, power systems, aviation and specialized assets, and international import and export trading across the MENA region and beyond.",
  keywords: [
    "industrial supply",
    "import and export",
    "food and beverage trading",
    "raw materials",
    "equipment trading",
    "group of companies",
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
    title: "VertexShell | Engineered Supply and International Trading",
    description:
      "Group of companies delivering engineered infrastructure, power systems, aviation and specialized assets, and international import and export trading across the MENA region and beyond.",
    url: "https://vertexshell.com",
    siteName: "VertexShell",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VertexShell Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VertexShell | Engineered Supply and International Trading",
    description:
      "Engineered supply and international trading across MENA and beyond.",
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
