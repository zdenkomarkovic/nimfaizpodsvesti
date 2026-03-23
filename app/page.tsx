import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeUp, FadeIn, SlideRight, SlideLeft } from "@/components/Motion";

export const metadata: Metadata = {
  title:
    "Astropsihološko savetovanje, coaching mentorstvo i lični razvoj online | Nimfa Iz Podsvesti",
  description:
    "Astropsihološko savetovanje koje povezuje psihologiju i astrologiju, uz NLP i CRT tehnike, hipnotički fokusirani rad i regresivne procese sa temama prošlih života, usmereno na lični razvoj i svesnu promenu.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jelena Stevanović",
  alternateName: "Nimfa iz Podsvesti",
  url: "https://nimfaizpodsvesti.com",
  image: "https://nimfaizpodsvesti.com/images/About%20me.webp",
  jobTitle: "Astropsihološki savetnik i coach",
  description:
    "Diplomirani psiholog i astropsihološki savetnik. Integrativni pristup koji obuhvata astrologiju, NLP, hipnotičke tehnike, CRT i regresivni rad.",
  sameAs: ["https://www.instagram.com/nimfa_iz_podsvesti/"],
  knowsAbout: [
    "Astropsihološko savetovanje",
    "NLP",
    "Hipnoterapija",
    "Regresivni rad",
    "Lični razvoj",
    "Coaching",
  ],
  worksFor: {
    "@type": "LocalBusiness",
    name: "Nimfa Iz Podsvesti",
    url: "https://nimfaizpodsvesti.com",
    telephone: "+381628068616",
    email: "nimfaizpodsvesti@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "RS",
      addressLocality: "Novi Pazar",
    },
    priceRange: "$$",
    serviceType: "Astropsihološko savetovanje i coaching",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Glow effect */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(123,94,184,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="container-main section-padding relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Tekst */}
            <SlideRight className="md:order-2">
              <p className="text-teget text-xs md:text-sm uppercase tracking-[0.25em] mb-4">
                Astropsihološko savetovanje &middot; Coaching &middot; Lični
                razvoj
              </p>
              <h1 className="heading-xl lg:!text-[2.6rem] mb-4">
                Astropsihološko savetovanje, coaching mentorstvo i lični razvoj
                online <span className="font-bold">Nimfa Iz Podsvesti</span>
              </h1>
              <div className="gold-divider mx-0" />
              <p className="text-body text-cream-muted mb-4">
                Postoje trenuci kada osećamo da se nešto ponavlja, ali ne znamo
                zašto. Određeni odnosi, emocije i situacije se vraćaju bez
                jasnog objašnjenja.
              </p>
              <p className="text-body text-cream-muted mb-4">
                Astropsihološko savetovanje koje povezuje psihologiju uz NLP
                tehnike, hipnotički fokusirani rad i regresivne procese sa
                temama prošlih života — omogućava da to postane vidljivo. Da
                razumete sebe na dubljem nivou i donesete odluke koje su u
                skladu sa vama.
              </p>
              <Link href="/kontakt" className="btn-primary">
                Zakaži konsultaciju
              </Link>
            </SlideRight>

            {/* Slika */}
            <SlideLeft
              delay={0.2}
              className="relative aspect-[3/4] rounded-lg overflow-hidden md:order-1"
            >
              <Image
                src="/images/Home.webp"
                alt="Nimfa iz Podsvesti"
                fill
                className="object-cover"
                priority
              />
            </SlideLeft>
          </div>
        </div>
      </section>

      {/* ── OPIS USLUGE ──────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-y border-border">
        <div className="container-main section-padding">
          <FadeUp className=" mx-auto text-center">
            <div className="space-y-4 text-body text-cream-muted">
              <p>
                Ja sam Jelena i diplomirani sam psiholog. Radim individualno,
                online, kroz video i telefonske konsultacije, koristeći
                integrativni pristup koji povezuje psihologiju, astrologiju,
                coaching i regresivne tehnike. Moj rad nastao je iz potrebe da
                se razume ono što nije odmah vidljivo — unutrašnji procesi koji
                oblikuju naše misli, emocije i odnose.
              </p>
              <p>
                Astropsihologiju ne posmatram kao predviđanje, već kao način
                razumevanja. Razumevanja obrazaca koje ponavljamo, reakcija koje
                ne biramo svesno i dinamike odnosa u kojima se prepoznajemo —
                ili gubimo.
              </p>
              <p>
                Kroz rad sa mnom otvara se prostor u kojem je moguće sagledati
                sebe bez pritiska, bez uloga i bez potrebe da se nešto
                „ispravi"... jer odgovori koje tražimo nisu izvan nas. Oni su
                već tu — potrebno je samo da ih postepeno osvestimo.
              </p>
              <p>
                U tom procesu nisam tu da vam dam odgovore, već da vam pomognem
                da ih pronađete.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── USLUGE ───────────────────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <FadeUp className="text-center mb-12">
            <p className="text-teget text-xs uppercase tracking-[0.2em] mb-3">
              Usluge
            </p>
            <h2 className="heading-lg mb-4">Šta nudim</h2>
            <div className="gold-divider" />
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Astrologija",
                subtitle: "Individualni uvid",
                text: "Dubinski uvid u ličnost, odnose i životne cikluse kroz analizu natalne karte i aktuelnih tranzita. Razumevanje obrazaca koji oblikuju vaš život.",
                image: "/images/astro.png",
                href: "/usluge#astrologija",
              },
              {
                title: "Astropsihološko savetovanje",
                subtitle: "Astrohiling",
                text: "Povezivanje astrologije i psihologije u cilju razumevanja unutrašnjih konflikata i ponavljajućih obrazaca. Rad usmeren ka svesnijim izborima i ličnom razvoju.",
                image: "/images/astropsiholosko savetovanje.png",
                href: "/usluge#astropsiholosko-savetovanje",
              },
              {
                title: "Psihološko i NLP coaching",
                subtitle: "Paket sesija",
                text: "Rad na ciljevima, uverenjima i promeni obrazaca koji vas ograničavaju. Proces koji donosi jasnije odluke i stabilniji unutrašnji osećaj.",
                image: "/images/psiholoski i NLP Coaching.png",
                href: "/usluge#nlp-coaching",
              },
              {
                title: "Hipnotičke tehnike",
                subtitle: "Individualni rad",
                text: "Rad sa nesvesnim kada razumete problem, ali promena izostaje. Otklanjanje blokada i pristup dubljim slojevima ličnosti.",
                image: "/images/hipnoza.png",
                href: "/usluge#hipnoticke-tehnike",
              },
              {
                title: "Regresivni rad",
                subtitle: null,
                text: "Istraživanje dubokih unutrašnjih iskustava i obrazaca koji utiču na sadašnji život. Proces razumevanja i integracije.",
                image: "/images/regresija.png",
                href: "/usluge#regresivni-rad",
              },
              {
                title: "CRT proces",
                subtitle: "Complete Restoration Therapy",
                text: "Intenzivan rad usmeren na razrešenje unutrašnjih konflikata i donošenje jasnih odluka. Brz i fokusiran proces promene.",
                image: "/images/CRT.png",
                href: "/usluge#crt-proces",
              },
            ].map((usluga, i) => (
              <FadeUp
                key={usluga.title}
                delay={i * 0.1}
                className="card group hover:border-teget/40 transition-colors duration-300 overflow-hidden !p-0 flex flex-col"
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={usluga.image}
                    alt={usluga.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="heading-md mb-1">{usluga.title}</h3>
                  {usluga.subtitle && (
                    <p className="text-teget text-xs uppercase tracking-widest mb-3">
                      {usluga.subtitle}
                    </p>
                  )}
                  <p className="text-cream-faint text-sm leading-relaxed flex-1 mb-5">
                    {usluga.text}
                  </p>
                  <Link
                    href={usluga.href}
                    className="btn-primary text-center text-sm py-2"
                  >
                    Saznaj više
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZA KOGA JE OVAJ RAD ──────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            <SlideRight>
              <p className="text-teget text-xs uppercase tracking-[0.2em] mb-3">
                Za koga
              </p>
              <h2 className="heading-lg mb-6">Za koga je ovaj rad</h2>
              <div className="gold-divider mx-0 mb-6" />
              <ul className="space-y-4">
                {[
                  "ako ti se isti životni i emotivni obrasci ponavljaju",
                  "ako želiš da definišeš ciljeve i istraješ u njima",
                  "ako imaš mnogo odnosa, ali nijedan 'pravi'",
                  "ako znaš, ali ne uspevaš da istraješ i to sprovedeš",
                  "ako ponekad osećaš da tvoji problemi nisu racionalno objašnjivi",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-teget mt-1 shrink-0">✦</span>
                    <span className="text-cream-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/za-koga" className="link-arrow">
                  Pročitaj više <span aria-hidden>→</span>
                </Link>
              </div>
            </SlideRight>

            <SlideLeft
              delay={0.2}
              className="relative w-full h-full md:-ml-12 rounded-lg overflow-hidden"
            >
              <Image
                src="/images/za koga je ovaj rad.webp"
                alt="Za koga je ovaj rad"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </SlideLeft>
          </div>
        </div>
      </section>

      {/* ── KAKO IZGLEDA RAD ─────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-y border-border">
        <div className="container-main section-padding">
          <FadeUp className="text-center mb-12">
            <p className="text-teget text-xs uppercase tracking-[0.2em] mb-3">
              Proces
            </p>
            <h2 className="heading-lg mb-4">Kako izgleda rad</h2>
            <div className="gold-divider" />
            <p className="text-cream-muted mt-4 max-w-xl mx-auto">
              Online (telefon/video) individualan rad, strukturisan ali
              fleksibilan, prilagođen tvojoj spremnosti.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Uvid",
                text: "Šta se dešava i kada. Šta je okidač, ciklus, tranzit, faza, trenutak… da se javi anksioznost, nervoza, bes, fobije, blokade, krize ili emotivni prekidi.",
                image: "/images/Uvid.webp",
              },
              {
                num: "02",
                title: "Fokus",
                text: "Šta je cilj i pravac rada.",
                image: "/images/Fokus.webp",
              },
              {
                num: "03",
                title: "Rad (na sebi)",
                text: "Kroz coaching, fokusirane metode, mentorstvo, konsultacije dolazimo do ZAŠTO, ali i kako dalje.",
                image: "/images/Kako izgleda rad.webp",
              },
            ].map((step, i) => (
              <FadeUp
                key={step.num}
                delay={i * 0.15}
                className="card group hover:border-teget/40 transition-colors duration-300 overflow-hidden !p-0"
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="font-serif text-3xl text-teget/30 mb-3 group-hover:text-teget/50 transition-colors">
                    {step.num}
                  </p>
                  <h3 className="heading-md mb-3">{step.title}</h3>
                  <p className="text-cream-faint text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/kako-izgleda-rad" className="link-arrow">
              Pročitaj više <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────── */}
      <section className="relative z-10">
        <FadeUp className="container-main section-padding text-center">
          <p className="text-teget text-xs uppercase tracking-[0.25em] mb-4">
            Sledeći korak
          </p>
          <h2 className="heading-lg mb-4">
            Spremni ste za jasnoću i svesnu promenu?
          </h2>
          <div className="gold-divider" />
          <div className="mt-8">
            <Link href="/kontakt" className="btn-primary">
              Zakaži konsultaciju
            </Link>
          </div>
          <p className="mini-disclaimer mt-6">
            Rad je savetodavnog i coaching karaktera i ne predstavlja zamenu za
            medicinski ili klinički tretman.
          </p>
        </FadeUp>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-t border-white/30">
        <div className="container-main section-padding">
          <FadeUp className="text-center mb-10">
            <p className="text-teget text-xs uppercase tracking-[0.25em] mb-3">
              Imate pitanja?
            </p>
            <h2 className="heading-lg mb-2">Često postavljana pitanja</h2>
            <div className="gold-divider" />
          </FadeUp>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                q: "Da li je astrologija obavezna?",
                a: "Ne. Astrologija može biti početna tačka rada, ali nije obavezna. Ako klijent već ima jasno definisanu temu ili cilj, moguće je odmah započeti NLP coaching, fokusirani rad ili druge metode. Astrologija se koristi kao alat koji ubrzava i produbljuje uvid, ali nije uslov za nastavak rada.",
              },
              {
                q: "Da li mogu da zakažem samo astrološku konsultaciju?",
                a: "Da. Astrološki uvid može biti potpuno samostalna usluga, bez ikakvog daljeg psihološkog ili coaching rada. Sa jednim delom klijenata radim isključivo astrologiju.",
              },
              {
                q: "Da li je ovo terapija?",
                a: "Ne. Ovaj rad nije klinička terapija i ne koristi medicinski ili dijagnostički pristup. Fokus je na razumevanju obrazaca, donošenju odluka, ličnom razvoju i svesnom radu na ciljevima i motivaciji, uz coaching i iskustvene metode.",
              },
              {
                q: "Zašto se NLP coaching i mentorstvo radi u paketu?",
                a: "NLP tehnike zahtevaju kontinuitet i proces. Zbog toga se psihološko i NLP coaching savetovanje radi isključivo u minimalnom paketu od 3 ili 4 sesije, a cena je niža nego za isti broj individualnih konsultacija.",
              },
              {
                q: "Da li radite uživo?",
                a: "Ne. Sav rad se odvija online – putem video ili telefonskog poziva (ako metod to dopušta). Ovakav format omogućava kontinuitet, fleksibilnost i pristup klijentima bez obzira na lokaciju.",
              },
              {
                q: "Kako da znam koja je usluga za mene?",
                a: "Ako niste sigurni koja je usluga najadekvatnija, dovoljno je da zakažete inicijalnu konsultaciju. Tokom razgovora zajedno definišemo temu, cilj i najefikasniji način rada.",
              },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.08} className="block">
                <details
                  className="group border border-white/40 rounded-lg"
                  style={{
                    background: "rgba(255,255,255,0.28)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none">
                    <span className="flex items-start gap-3">
                      <span
                        className="text-teget text-xs shrink-0 mt-1"
                        aria-hidden
                      >
                        ✦
                      </span>
                      <span
                        className="font-sans font-semibold text-sm md:text-base leading-snug"
                        style={{ color: "#1e1a50" }}
                      >
                        {item.q}
                      </span>
                    </span>
                    <span
                      className="shrink-0 text-teget transition-transform duration-300 group-open:rotate-180"
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
                  <div className="px-5 pb-5 pt-1 border-t border-white/30">
                    <p
                      className="leading-relaxed text-sm md:text-base pl-6"
                      style={{ color: "#4e4a7a" }}
                    >
                      {item.a}
                    </p>
                  </div>
                </details>
              </FadeUp>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/faq" className="link-arrow">
              Sva pitanja i odgovori <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
