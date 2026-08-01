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
  metadataBase: new URL("https://www.nimfaizpodsvesti.com"),
  title: {
    default: "Nimfa Iz Podsvesti | Astropsihološko savetovanje i lični razvoj",
    template: "%s | Nimfa Iz Podsvesti",
  },
  description:
    "Astropsihološko savetovanje koje povezuje psihologiju i astrologiju, uz NLP i CRT tehnike, hipnotički fokusirani rad i regresivne procese sa temama prošlih života, usmereno na lični razvoj i svesnu promenu.",
  keywords: [
    "astropsihologija",
    "astropsihološko savetovanje",
    "psiholog",
    "astrologija",
    "NLP",
    "coaching",
    "lični razvoj",
    "regresivni rad",
    "online savetovanje",
    "nimfa iz podsvesti",
    "Jelena Stevanović",
    "hipnoza",
    "regresija",
  ],
  alternates: {
    canonical: "https://www.nimfaizpodsvesti.com",
  },
  openGraph: {
    siteName: "Nimfa Iz Podsvesti",
    locale: "sr_RS",
    type: "website",
    url: "https://www.nimfaizpodsvesti.com",
    title: "Nimfa Iz Podsvesti | Astropsihološko savetovanje i lični razvoj",
    description:
      "Astropsihološko savetovanje koje povezuje psihologiju i astrologiju, uz NLP i CRT tehnike, hipnotički fokusirani rad i regresivne procese.",
    images: [{ url: "/images/Home.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimfa Iz Podsvesti | Astropsihološko savetovanje i lični razvoj",
    description:
      "Astropsihološko savetovanje koje povezuje psihologiju i astrologiju, uz NLP i CRT tehnike.",
    images: ["/images/Home.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
