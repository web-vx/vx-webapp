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
    default: "VertexShell Advanced Solutions | Engineered Supply",
    template: "%s | VertexShell Advanced Solutions",
  },
  description:
    "VertexShell Advanced Solutions delivers aviation and specialized assets, modular infrastructure, and power and industrial equipment across the MENA region and beyond.",
  keywords: [
    "industrial supply",
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
    title: "VertexShell Advanced Solutions | Engineered Supply",
    description:
      "VertexShell Advanced Solutions delivers aviation and specialized assets, modular infrastructure, and power and industrial equipment across the MENA region and beyond.",
    url: "https://vertexshell.com",
    siteName: "VertexShell Advanced Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VertexShell Advanced Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VertexShell Advanced Solutions | Engineered Supply",
    description:
      "Engineered supply across MENA and beyond.",
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
