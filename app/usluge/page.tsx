import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/Motion";

export const metadata: Metadata = {
  title:
    "Astropsihologija, NLP coaching, hipnoza i regresija | Nimfa Iz Podsvesti",
  description:
    "Astropsihologija povezuje astrologiju i psihologiju uz NLP coaching, hipnotičke tehnike i regresivni rad. Usluge prilagođene individualnim potrebama i ciljevima.",
  alternates: {
    canonical: "https://www.nimfaizpodsvesti.com/usluge",
  },
  openGraph: {
    title: "Usluge | Astropsihologija, NLP coaching, hipnoza i regresija",
    description:
      "Astropsihologija povezuje astrologiju i psihologiju uz NLP coaching, hipnotičke tehnike i regresivni rad. Usluge prilagođene individualnim potrebama i ciljevima.",
    url: "https://www.nimfaizpodsvesti.com/usluge",
    images: [{ url: "/images/astro.webp", width: 1200, height: 630 }],
  },
};

const services = [
  {
    num: "01",
    id: "astrologija",
    emoji: "✺",
    image: "/images/Astrologija 3.webp",
    title: "Astrologija – individualni astrološki uvid",
    text: "",
    textJsx: (
      <>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          Astrološko savetovanje pruža dubinski uvid u strukturu ličnosti,
          životne cikluse i razvojne teme kroz analizu natalne karte i aktuelnih
          tranzita, a uz primenu prognostičkih tehnika (npr. progresije,
          direkcije, solari...).{" "}
          <strong>Astrologiju koristim kao analitički i simbolički alat</strong>{" "}
          koji pomaže u razumevanju psiholoških obrazaca, odnosa, profesionalnih
          izazova i unutrašnjih potencijala.
        </p>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          Ova usluga može biti potpuno samostalna, namenjena onima koji žele
          isključivo astrološki uvid bez daljeg psihološkog rada, ali i kao
          polazna tačka za dublje astropsihološko savetovanje. Konsultacije se
          rade online, <strong>kroz interaktivni razgovor</strong> na osnovu
          podataka o rođenju.
        </p>
      </>
    ),
  },
  {
    num: "02",
    id: "astropsiholosko-savetovanje",
    emoji: "✺",
    image: "/images/Astrologija (2).webp",
    title: "Astropsihološko savetovanje (Astrohiling)",
    text: "",
    textJsx: (
      <>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          Astropsihološko savetovanje{" "}
          <strong>
            kombinuje astrologiju i psihologiju u cilju razumevanja unutrašnjih
            konflikata, razvojnih izazova i životnih tema koje se ponavljaju
            kroz vreme.
          </strong>{" "}
          Natalna karta se koristi kao mapa psihološke strukture, dok se
          savetodavni rad fokusira na osvešćivanje obrazaca i donošenje
          svesnijih odluka. Ovaj pristup omogućava brži i precizniji uvid u
          unutrašnje konflikte i potencijale za rast i razvoj klijenta, koji bi
          bez astrologije zahtevali znatno duži istraživački proces i veći broj
          susreta u kontinuitetu.
        </p>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          <strong>
            Astrologija u ovom pristupu ne predstavlja krajnji cilj
          </strong>
          , već temeljni okvir kroz koji se sagledava struktura ličnosti,
          razvojne teme i unutrašnji konflikti. Na osnovu tog uvida, u dogovoru
          sa klijentom, bira se dalji operativni i iskustveni rad kroz
          fokusirane metode kao što su NLP tehnike, hipnotički fokusirani rad,
          regresivni procesi ili CRT pristup. Na taj{" "}
          <strong>
            način astrologija ne zamenjuje psihološki rad, već ga značajno
            ubrzava i produbljuje
          </strong>
          .
        </p>
      </>
    ),
  },
  {
    num: "03",
    id: "nlp-coaching",
    emoji: "✺",
    image: "/images/NLP.webp",
    title: "Psihološko savetovanje i NLP coaching – paket (3-4 sesije)",
    text: "",
    textJsx: (
      <>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          Psihološko savetovanje i NLP coaching{" "}
          <strong>
            namenjeno je ličnom razvoju, postavljanju ciljeva, pronalaženju
            motivacije, promeni ograničavajućih obrazaca i uverenja, kao i
            unapređenju emocionalnog i mentalnog funkcionisanja
          </strong>
          . Rad se odvija isključivo u paketu od 3 do 4 sesije u kontinuitetu,
          jer NLP tehnike zahtevaju proces i doslednost.
        </p>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          <strong>
            Fokus je na ciljevima, unutrašnjim strategijama, uverenjima i
            obrascima ponašanja.
          </strong>{" "}
          Ova usluga može se raditi samostalno ili kao nastavak nakon
          astrološkog uvida.
        </p>
      </>
    ),
  },
  {
    num: "04",
    id: "hipnoticke-tehnike",
    emoji: "✺",
    title: "Hipnotičke tehnike – individualni rad",
    image: "/images/Hipnoza3.webp",
    text: "",
    textJsx: (
      <>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          Hipnotičke tehnike koriste se za{" "}
          <strong>
            ulazak u stanje pojačane fokusirane pažnje, gde postaju dostupni
            dublji slojevi nesvesnog
          </strong>
          . Ovaj oblik rada pomaže u razrešavanju unutrašnjih blokada,
          emocionalnih zapisa i ponavljajućih obrazaca.{" "}
          <strong>
            Hipnotički fokusirani rad može biti primenjen kod različitih tema i
            unutrašnjih blokada, naročito kada osoba ima osećaj da racionalno
            razume problem, ali promena izostaje
          </strong>
          .
        </p>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          Ova metoda se često koristi kod:
        </p>
        <ul className="space-y-1 pl-1">
          {[
            "anksioznosti, unutrašnje napetosti i hroničnog stresa",
            "fobija i intenzivnih strahova",
            "depresivnih stanja i gubitka motivacije",
            "loših navika (prejedanje, prokrastinacija, odlaganje, samosabotaža…)",
            "zavisničkih obrazaca (kocka, cigarete, alkohol, kanabis, kokain…)",
            "niskog samopouzdanja i narušenog samopoštovanja",
            "posttraumatskih iskustava i snažnih emocionalnih sećanja",
            "emotivnih poteškoća nakon raskida, razvoda ili narušenih partnerskih odnosa",
            "pripreme za sportske, javne ili profesionalne performanse i postizanje rezultata",
          ].map((item, j) => (
            <li
              key={j}
              className="text-cream-muted leading-relaxed text-sm md:text-base flex gap-2"
            >
              <span className="text-teget/60 shrink-0">▪</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          <strong>
            Hipnotički rad ne briše iskustvo niti potiskuje emocije
          </strong>
          , već omogućava dublji kontakt sa podsvesnim sadržajem, razumevanje
          unutrašnjih mehanizama i postepenu integraciju promene.
        </p>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          Hipnotički rad se sprovodi od 1 do maksimalno 6 online video seansi, u
          zavisnosti od teme i cilja koji klijent definiše, ali i od unutrašnje
          dinamike samog procesa.
        </p>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          Hipnoza se ne kombinuje automatski sa drugim uslugama, već se bira kao
          poseban modalitet rada.
        </p>
      </>
    ),
  },
  {
    num: "05",
    id: "regresivni-rad",
    emoji: "✺",
    image: "/images/Regresija.webp",
    title: "Regresivni rad – regresija u prošle događaje ili živote",
    text: "",
    textJsx: (
      <>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          Regresivni rad, koji sprovodim kroz hipnotičke tehnike,{" "}
          <strong>
            omogućava istraživanje duboko ukorenjenih iskustava koja se
            doživljavaju kao prošli životni sadržaji ili rani memorijski zapisi
          </strong>
          . Ukratko rečeno, regresivni proces se bavi procesuiranjem
          (uočavanjem, obradom, razumevanjem i integracijom) podsvesnih sadržaja
          koji dolaze iz različitih nivoa nesvesne psihe - iz lično, familijarno
          i kolektivno nesvesnih nivoa.
        </p>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          U okviru astrološkog sistema, kontinuitet svesti i iskustava
          predstavlja prirodan deo psihološke strukture, zbog čega je regresija
          često <strong>logičan nastavak astrološkog i psihološkog rada</strong>
          .
        </p>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          Regresija se sprovodi od 1 do 6 seansi, sa{" "}
          <strong>jasno definisanom temom i ciljem</strong>, uz punu svesnost i
          integraciju doživljenih uvida.
        </p>
      </>
    ),
  },
  {
    num: "06",
    id: "crt-proces",
    emoji: "✺",
    image: "/images/CRTu.webp",
    title: "Complete Restoration Therapy™",
    text: "",
    textJsx: (
      <>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          Complete Restoration Therapy (CRT) je{" "}
          <strong>
            strukturisan proces koji kombinuje više oblasti iz različitih
            metoda, a u osnovi se nalazi hipnotička sugestija i NLP tehnike
          </strong>
          , koje se koriste u cilju donošenja kompozitne odluke i dubinske
          unutrašnje reorganizacije. CRT je intenzivna i fokusirana metoda koja
          može da se primeni za veliki broj problema.
        </p>
        <p className="text-cream-muted leading-relaxed text-sm md:text-base">
          Ona se sprovodi{" "}
          <strong>
            isključivo kroz tri uzastopne seanse u maksimalno nedelju dana
          </strong>{" "}
          i fokusirana je na razrešenje unutrašnjih konflikata, ambivalencija i
          nesvesnih podela. CRT je namenjena klijentima koji žele intenzivan,
          fokusiran i transformativan proces sa jasno definisanom temom. Pristup
          je video online.
        </p>
      </>
    ),
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Usluge – Nimfa Iz Podsvesti",
  url: "https://www.nimfaizpodsvesti.com/usluge",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Astrologija – individualni astrološki uvid",
        url: "https://www.nimfaizpodsvesti.com/usluge#astrologija",
        description: "Dubinski uvid u ličnost, odnose i životne cikluse kroz analizu natalne karte i aktuelnih tranzita.",
        provider: { "@type": "Person", name: "Jelena Stevanović" },
        areaServed: "RS",
        serviceType: "Astrološko savetovanje",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Astropsihološko savetovanje (Astrohiling)",
        url: "https://www.nimfaizpodsvesti.com/usluge#astropsiholosko-savetovanje",
        description: "Astropsihologija kombinuje astrologiju i psihologiju u cilju razumevanja unutrašnjih konflikata i ponavljajućih obrazaca.",
        provider: { "@type": "Person", name: "Jelena Stevanović" },
        areaServed: "RS",
        serviceType: "Psihološko savetovanje",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Psihološko savetovanje i NLP coaching",
        url: "https://www.nimfaizpodsvesti.com/usluge#nlp-coaching",
        description: "Rad na ciljevima, uverenjima i promeni obrazaca kroz NLP tehnike u paketu od 3-4 sesije.",
        provider: { "@type": "Person", name: "Jelena Stevanović" },
        areaServed: "RS",
        serviceType: "NLP Coaching",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Hipnotičke tehnike",
        url: "https://www.nimfaizpodsvesti.com/usluge#hipnoticke-tehnike",
        description: "Rad sa nesvesnim kroz hipnotički fokusirani pristup za otklanjanje blokada i pristup dubljim slojevima ličnosti.",
        provider: { "@type": "Person", name: "Jelena Stevanović" },
        areaServed: "RS",
        serviceType: "Hipnoterapija",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Regresivni rad",
        url: "https://www.nimfaizpodsvesti.com/usluge#regresivni-rad",
        description: "Istraživanje dubokih unutrašnjih iskustava i obrazaca koji utiču na sadašnji život kroz regresivne procese.",
        provider: { "@type": "Person", name: "Jelena Stevanović" },
        areaServed: "RS",
        serviceType: "Regresivna terapija",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "Complete Restoration Therapy™ (CRT)",
        url: "https://www.nimfaizpodsvesti.com/usluge#crt-proces",
        description: "Intenzivan strukturisan proces kroz tri uzastopne seanse za razrešenje unutrašnjih konflikata.",
        provider: { "@type": "Person", name: "Jelena Stevanović" },
        areaServed: "RS",
        serviceType: "CRT terapija",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Početna", item: "https://www.nimfaizpodsvesti.com" },
    { "@type": "ListItem", position: 2, name: "Usluge", item: "https://www.nimfaizpodsvesti.com/usluge" },
  ],
};

export default function UslugePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="relative pt-32 pb-16 border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(123,94,184,0.1) 0%, transparent 70%)",
          }}
        />
        <FadeUp className="container-main relative z-10">
          <p className="text-teget text-xs uppercase tracking-[0.25em] mb-3">
            Ponuda
          </p>
          <h1 className="heading-xl mb-4">
            Astropsihologija i usluge savetovanja: NLP coaching, hipnotičke
            tehnike i regresija
          </h1>
          <div className="gold-divider mx-0 mb-4" />
          <p className="text-body max-w-2xl">
            Astropsihologija povezuje astrologiju i psihologiju u online
            pristup savetovanju, uz NLP tehnike, hipnotički fokusirane metode
            i regresivne procese, prilagođene individualnim potrebama i
            ciljevima.
          </p>
        </FadeUp>
      </section>

      {/* ── LISTA USLUGA ─────────────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="space-y-8">
            {services.map((service) => (
              <FadeUp
                key={service.num}
                id={service.id}
                className="card group hover:border-teget/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-5 md:gap-8">
                  {/* Number + icon */}
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <span className="font-serif text-3xl text-teget/25 leading-none group-hover:text-teget/50 transition-colors">
                      {service.num}
                    </span>
                    <span
                      className="text-teget/40 text-lg"
                      aria-hidden
                      style={{
                        filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))",
                      }}
                    >
                      {service.emoji}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="heading-md mb-4">{service.title}</h2>
                    {"image" in service && service.image && (
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-5">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 80vw"
                        />
                      </div>
                    )}
                    <div className="space-y-3">
                      {"textJsx" in service && service.textJsx
                        ? service.textJsx
                        : service.text.split("\n\n").map((paragraph, i) => {
                            const lines = paragraph.split("\n");
                            const isList = lines.every((l) =>
                              l.startsWith("▪")
                            );
                            if (isList) {
                              return (
                                <ul key={i} className="space-y-1 pl-1">
                                  {lines.map((line, j) => (
                                    <li
                                      key={j}
                                      className="text-cream-muted leading-relaxed text-sm md:text-base flex gap-2"
                                    >
                                      <span className="text-teget/60 shrink-0">
                                        ▪
                                      </span>
                                      <span>{line.replace(/^▪\s*/, "")}</span>
                                    </li>
                                  ))}
                                </ul>
                              );
                            }
                            return (
                              <p
                                key={i}
                                className="text-cream-muted leading-relaxed text-sm md:text-base"
                              >
                                {paragraph}
                              </p>
                            );
                          })}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-t border-border">
        <FadeUp className="container-main section-padding text-center">
          <p className="text-teget text-xs uppercase tracking-[0.25em] mb-4">
            Sledeći korak
          </p>
          <h2 className="heading-lg mb-4">Koja usluga odgovara tebi?</h2>
          <div className="gold-divider" />
          <p className="text-cream-muted mt-4 mb-8 max-w-xl mx-auto">
            Ako nisi siguran/a koji oblik rada je pravi za tebe, zakaži uvodni
            razgovor — zajedno ćemo definisati fokus i odabrati odgovarajući
            pristup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Zakaži konsultaciju
            </Link>
            <Link href="/kako-izgleda-rad" className="btn-outline">
              Kako izgleda rad →
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
