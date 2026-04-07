import type { Metadata } from "next";
import Link from "next/link";
import { FadeUp } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Često Postavljana Pitanja",
  description:
    "Odgovori na najčešća pitanja o astropsihološkom savetovanju, NLP coachingu, hipnotičkom radu, regresiji i CRT metodama – Nimfa Iz Podsvesti.",
  alternates: {
    canonical: "https://nimfaizpodsvesti.com/faq",
  },
  openGraph: {
    title: "Često Postavljana Pitanja | Nimfa Iz Podsvesti",
    description:
      "Odgovori na najčešća pitanja o astropsihološkom savetovanju, NLP coachingu, hipnotičkom radu, regresiji i CRT metodama.",
    url: "https://nimfaizpodsvesti.com/faq",
    images: [{ url: "/images/Home.webp", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Da li je astrologija obavezna?",
    a: "Ne. Astrologija može biti početna tačka rada, ali nije obavezna. Ako klijent već ima jasno definisanu temu ili cilj, moguće je odmah započeti NLP coaching, fokusirani rad ili druge metode. Astrologija se koristi kao alat koji ubrzava i produbljuje uvid, ali nije uslov za nastavak rada.",
  },
  {
    q: "Da li mogu da zakažem samo astrološku konsultaciju?",
    a: "Da. Astrološki uvid može biti potpuno samostalna usluga, bez ikakvog daljeg psihološkog ili coaching rada. Sa jednim delom klijenata radim isključivo astrološke konsultacije.",
  },
  {
    q: "Kako izgleda astropsihološko savetovanje, odnosno Astrohiling?",
    a: "Astropsihološko savetovanje ili astrohiling kombinuje astrološki uvid i psihološki razgovor. Astrologija daje mapu i kontekst, dok se savetodavni rad fokusira na razumevanje obrazaca, donošenje odluka i definisanje daljeg pravca rada. Nakon ovog uvida, u dogovoru sa klijentom bira se da li i kako se nastavlja rad kroz fokusirane metode.",
  },
  {
    q: "Da li je ovo terapija?",
    a: "Ne. Ovaj rad nije klinička terapija i ne koristi medicinski ili dijagnostički pristup. Fokus je na razumevanju obrazaca, donošenju odluka, ličnom razvoju i svesnom radu na ciljevima i motivaciji, uz coaching i iskustvene metode.",
  },
  {
    q: "Zašto se NLP coaching i psihološko savetovanje radi u paketu?",
    a: "NLP tehnike zahtevaju kontinuitet i proces. Zbog toga se psihološko savetovanje i NLP coaching radi isključivo u minimalnom paketu od 3 ili 4 sesije, a cena je niža nego za isti broj individualnih konsultacija. Pojedinačna sesija retko daje stabilne i dugoročno održive rezultate, pa su paketi osmišljeni kao strukturisan proces i dvostruki benefit za klijenta – i metodološki i finansijski.",
  },
  {
    q: "Koliko sesija je potrebno za hipnotički ili regresivni rad?",
    a: "Prema protokolu škole, hipnotički fokusirani rad i regresija se rade od 1 do maksimalno 6 seansi, u zavisnosti od teme, cilja i načina na koji klijentova podsvest reaguje. Broj seansi se ne može dogovoriti unapred, pa se na kraju prethodne uvek dogovara sledeća sa klijentom, ako za to postoji potreba. Razmak između dve seanse i vreme trajanja seanse variraju u odnosu na klijentove podsvesne obrasce, temu i cilj samog rada.",
  },
  {
    q: "Da li regresija znači da 'moram da verujem u prošle živote'?",
    a: "Ne. Regresivni rad se koristi kao metod istraživanja unutrašnjih sadržaja i iskustava. Fokus nije na verovanju, već na doživljaju, uvidu i integraciji sadržaja koji se pojavljuju tokom rada. Ono što je od presudne važnosti je klijentova odluka da želi da sprovede seansu na određenu temu, kao i poverenje u samu tehniku i mentora.",
  },
  {
    q: "Da li mogu da radim samo CRT?",
    a: "Da. Complete Restoration Therapy (CRT) je zaseban, strukturisan proces koji se sprovodi isključivo kroz tri uzastopne sesije. Namenjena je klijentima koji žele intenzivan i fokusiran rad sa jasno definisanom temom.",
  },
  {
    q: "Da li radite uživo?",
    a: "Ne. Sav rad se odvija online – putem video ili telefonskog poziva (ako metod to dopušta). Ovakav format omogućava kontinuitet, fleksibilnost i pristup klijentima bez obzira na lokaciju.",
  },
  {
    q: "Kako da znam koja je usluga za mene?",
    a: "Ako nisi siguran odakle da počneš, možeš da zakažeš:\n✦ 15 minuta uvodnog razgovora (bez nadoknade)\n✦ ili 30 minuta po ceni individualnog astrološkog uvida, koji možemo uključiti po potrebi\nKroz razgovor dolazimo do jasnoće i pravca daljeg rada.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: "https://nimfaizpodsvesti.com" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://nimfaizpodsvesti.com/faq" },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="relative pt-32 pb-16 border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(123,94,184,0.08) 0%, transparent 70%)",
          }}
        />
        <FadeUp className="container-main relative z-10">
          <p className="text-teget text-xs uppercase tracking-[0.25em] mb-3">
            Pitanja i odgovori
          </p>
          <h1 className="heading-xl mb-4">Često postavljana pitanja</h1>
          <div className="gold-divider mx-0" />
        </FadeUp>
      </section>

      {/* ── FAQ LISTA ────────────────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="max-w-3xl space-y-3">
            {faqs.map((item, i) => (
              <FadeUp key={i} delay={i * 0.06} className="block">
                <details
                  className="group border border-white/40 rounded-lg open:border-teget/40 transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.28)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  <summary
                    className="flex items-center justify-between gap-4 p-5 cursor-pointer
                             list-none select-none"
                  >
                    <span className="flex items-start gap-3">
                      <span
                        className="text-teget text-xs shrink-0 mt-1"
                        aria-hidden
                        style={{
                          filter: "drop-shadow(0 0 4px rgba(201,168,76,0.4))",
                        }}
                      >
                        ✦
                      </span>
                      <span className="font-sans font-semibold text-cream text-sm md:text-base leading-snug">
                        {item.q}
                      </span>
                    </span>
                    {/* Chevron */}
                    <span
                      className="shrink-0 text-teget transition-transform duration-300
                               group-open:rotate-180"
                      aria-hidden
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </summary>

                  <div className="px-5 pb-5 pt-1 border-t border-border/50">
                    <p className="text-cream-muted leading-relaxed text-sm md:text-base pl-6 whitespace-pre-line">
                      {item.a}
                    </p>
                  </div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-t border-border">
        <div className="container-main section-padding text-center">
          <p className="text-teget text-xs uppercase tracking-[0.25em] mb-4">
            Ostala pitanja?
          </p>
          <h2 className="heading-lg mb-4">
            Zakaži konsultaciju i definiši svoj pravac rada
          </h2>
          <div className="gold-divider" />
          <p className="text-cream-muted mt-4 mb-8 max-w-md mx-auto">
            Ako nisi pronašao/la odgovor na svoje pitanje, slobodno se javi —
            razgovaraćemo o svemu što te zanima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Zakaži konsultaciju
            </Link>
            <Link href="/usluge" className="btn-outline">
              Pročitaj o uslugama →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
