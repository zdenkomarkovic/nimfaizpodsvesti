import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp, FaViber } from "react-icons/fa";
import KontaktForm from "./KontaktForm";
import { FadeUp, SlideRight, SlideLeft } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Zakaži online konsultaciju — astropsihološko savetovanje, coaching i lični razvoj sa Jelenom Stevanović, Nimfa iz Podsvesti.",
  alternates: {
    canonical: "https://www.nimfaizpodsvesti.com/kontakt",
  },
  openGraph: {
    title: "Kontakt – Zakaži konsultaciju | Nimfa Iz Podsvesti",
    description:
      "Zakaži online konsultaciju — astropsihološko savetovanje, coaching i lični razvoj sa Jelenom Stevanović.",
    url: "https://www.nimfaizpodsvesti.com/kontakt",
    images: [{ url: "/images/Home.webp", width: 1200, height: 630 }],
  },
};

const PHONE = "+381628068616";
const PHONE_DISPLAY = "+381 62 806 8616";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: "https://www.nimfaizpodsvesti.com" },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://www.nimfaizpodsvesti.com/kontakt" },
  ],
};

export default function KontaktPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="relative pt-32 pb-16 border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        <FadeUp className="container-main relative z-10">
          <p className="text-teget text-xs uppercase tracking-[0.25em] mb-3">
            Sledeći korak
          </p>
          <h1 className="heading-xl mb-4">Kontakt</h1>
          <div className="gold-divider mx-0 mb-4" />
          <p className="text-body max-w-lg">
            Napiši mi poruku ili se javi direktno. Odgovaram u roku od 24 sata
            i dogovaramo termin koji odgovara tvom rasporedu.
          </p>
        </FadeUp>
      </section>

      {/* ── KONTAKT INFO + FORMA ─────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Leva kolona – kanali */}
            <SlideRight>
              <h2 className="heading-md mb-6">Kako me pronaći</h2>
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:nimfaizpodsvesti@gmail.com"
                  className="card flex items-center gap-4 hover:border-teget/40 transition-colors duration-300 group"
                >
                  <span className="text-teget text-xl" aria-hidden>✉</span>
                  <div>
                    <p className="text-cream-muted text-xs uppercase tracking-widest mb-0.5">
                      Email
                    </p>
                    <p className="text-cream group-hover:text-teget transition-colors text-sm">
                      nimfaizpodsvesti@gmail.com
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/nimfa_iz_podsvesti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 hover:border-teget/40 transition-colors duration-300 group"
                >
                  <span className="text-teget text-xl" aria-hidden>◈</span>
                  <div>
                    <p className="text-cream-muted text-xs uppercase tracking-widest mb-0.5">
                      Instagram
                    </p>
                    <p className="text-cream group-hover:text-teget transition-colors text-sm">
                      @nimfa_iz_podsvesti
                    </p>
                  </div>
                </a>

                {/* Telefon – 3 dugmeta */}
                <div className="card">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-teget text-xl" aria-hidden>☎</span>
                    <div>
                      <p className="text-cream-muted text-xs uppercase tracking-widest mb-0.5">
                        Telefon
                      </p>
                      <p className="text-cream text-sm">{PHONE_DISPLAY}</p>
                    </div>
                  </div>
                  <p className="text-cream-muted text-xs leading-relaxed mb-3 pb-3 border-b border-border/50">
                    Kontakt i zakazivanje termina moguće je ostvariti putem
                    poruke (Viber, WhatsApp, Instagram) ili e-maila.{" "}
                    <span className="text-cream font-medium">Pozivi i razgovori se organizuju isključivo po prethodnom dogovoru.</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {/* Pošalji poruku */}
                    <a
                      href={`sms:${PHONE}`}
                      className="flex items-center gap-2 px-4 py-2 rounded border border-border text-cream-muted text-xs hover:border-teget/40 hover:text-cream transition-colors duration-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.27 6.27l1.06-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      Pošalji poruku
                    </a>
                    {/* WhatsApp */}
                    <a
                      href={`https://wa.me/${PHONE.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded border border-border text-cream-muted text-xs hover:border-teget/40 hover:text-cream transition-colors duration-200"
                    >
                      <FaWhatsapp size={15} aria-hidden />
                      WhatsApp
                    </a>
                    {/* Viber */}
                    <a
                      href={`viber://chat?number=${encodeURIComponent(PHONE)}`}
                      className="flex items-center gap-2 px-4 py-2 rounded border border-border text-cream-muted text-xs hover:border-teget/40 hover:text-cream transition-colors duration-200"
                    >
                      <FaViber size={15} aria-hidden />
                      Viber
                    </a>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-4 p-4 border border-border/50 rounded bg-bg-card">
                <p className="text-cream-faint text-xs leading-relaxed">
                  Rad je savetodavnog i coaching karaktera i ne predstavlja
                  zamenu za medicinski ili klinički tretman. Usluge i sadržaji
                  imaju savetodavni i edukativni karakter u oblasti ličnog
                  razvoja i samorazumevanja.
                </p>
              </div>
            </SlideRight>

            {/* Desna kolona – forma */}
            <SlideLeft delay={0.15}>
              <h2 className="heading-md mb-6">Pošalji poruku</h2>
              <KontaktForm />

              <div className="mt-6 text-center">
                <Link href="/faq" className="link-arrow text-xs">
                  Imam pitanje → Pogledaj FAQ <span aria-hidden></span>
                </Link>
              </div>
            </SlideLeft>
          </div>
        </div>
      </section>
    </>
  );
}
