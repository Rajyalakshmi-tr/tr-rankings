import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://rajyalakshmi-tr.github.io/tr-rankings"
    : "http://localhost:3000/tr-rankings";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "TR Rankings | World University Rankings",

  description:
    "TR Rankings provides transparent global university rankings.",

  openGraph: {
    title: "TR Rankings",
    description: "Explore trusted university rankings.",
    url: siteUrl,
    siteName: "TR Rankings",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TR Rankings",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TR Rankings",
    description: "Explore trusted university rankings.",
    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}