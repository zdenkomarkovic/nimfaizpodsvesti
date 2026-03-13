import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nimfa Iz Podsvesti | Astropsihološko savetovanje i lični razvoj",
    template: "%s | Nimfa Iz Podsvesti",
  },
  description:
    "Astropsihološko savetovanje koje povezuje psihologiju i astrologiju, uz NLP i CRT tehnike, hipnotički fokusirani rad i regresivne procese sa temama prošlih života, usmereno na lični razvoj i svesnu promenu.",
  keywords: [
    "astropsihološko savetovanje",
    "psiholog",
    "astrologiya",
    "NLP",
    "coaching",
    "lični razvoj",
    "regresivni rad",
    "online savetovanje",
    "nimfa iz podsvesti",
  ],
  openGraph: {
    siteName: "Nimfa Iz Podsvesti",
    locale: "sr_RS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={playfair.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Alan+Sans:wght@300..900&display=swap" rel="stylesheet" />
      </head>
      <body className="relative">
        {/* ── Fixed background: 4-corner gradient ─────────── */}
        <div aria-hidden className="bg-gradient-layer" />
        {/* ── Fixed background: grain/sandblasted texture ── */}
        <div aria-hidden className="bg-grain-layer" />

        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
