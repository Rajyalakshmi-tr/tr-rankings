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

export const metadata: Metadata = {

metadataBase: new URL("https://rajyalakshmi-tr.github.io/tr-rankings"),
  title: {
    default: "TR Rankings | World University Rankings",
    template: "%s | TR Rankings",
  },

  description:
    "TR Rankings provides transparent global university rankings based on teaching excellence, research impact, international outlook and graduate employability.",


  keywords: [
    "TR Rankings",
    "World University Rankings",
    "Global University Rankings",
    "Top Universities",
    "University Ranking 2026",
    "Higher Education Rankings",
    "Teaching Excellence",
    "Research Impact",
  ],


  authors: [
    {
      name: "TR Rankings",
    },
  ],


  creator: "TR Rankings",

robots: {
  index: true,
  follow: true,
},
openGraph: {

    title:
      "TR Rankings | World University Rankings",

    description:
      "Explore trusted global university rankings, methodology, and higher education insights.",

    type: "website",

    siteName:
      "TR Rankings",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TR Rankings World University Rankings",
      },
    ],

},

twitter: {
  card: "summary_large_image",
  title: "TR Rankings | World University Rankings",
  description:
    "Explore trusted global university rankings, methodology, and higher education insights.",
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
<body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
  <Navbar />

  <main className="pt-20 flex-1">
    {children}
  </main>

  <Footer />
</body>
    </html>
  );
}
