import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Astrologija, astropsihološko savetovanje i psihološki rad online: NLP coaching, hipnotički fokusirani rad i regresija",
  description:
    "Online astrologija i astropsihološko savetovanje, uz psihološki, coaching i mentorski rad kroz NLP tehnike, hipnotički fokusirane metode i regresivne procese, prilagođene individualnim potrebama i ciljevima.",
};

const services = [
  {
    num: "01",
    emoji: "✦",
    image: "/images/Astrologija 3.jpg",
    title: "Astrologija – individualni astrološki uvid",
    text: `Astrološko savetovanje pruža dubinski uvid u strukturu ličnosti, životne cikluse i razvojne teme kroz analizu natalne karte, aktuelnih tranzita uz primenu prognostičkih tehnika (npr. progresije, direkcije, solari...). Astrologiju koristim kao analitički i simbolički alat koji pomaže u razumevanju psiholoških obrazaca, odnosa, profesionalnih izazova i unutrašnjih potencijala.

Ova usluga može biti potpuno samostalna, namenjena onima koji žele isključivo astrološki uvid bez daljeg psihološkog rada, ali i kao polazna tačka za dublje astropsihološko savetovanje. Konsultacije se rade online interaktivnim razgovorom na osnovu podataka o rođenju.`,
  },
  {
    num: "02",
    emoji: "☽",
    image: "/images/Astrologija 4.jpg",
    title: "Astropsihološko savetovanje (Astrohiling)",
    text: `Astropsihološko savetovanje kombinuje astrologiju i psihologiju u cilju razumevanja unutrašnjih konflikata, razvojnih izazova i životnih tema koje se ponavljaju kroz vreme. Natalna karta se koristi kao mapa psihološke strukture, dok se savetodavni rad fokusira na osvešćivanje obrazaca i donošenje svesnijih odluka. Ovaj pristup omogućava brži i precizniji uvid u unutrašnje konflikte i potencijale za rast i razvoj klijenta, koji bi bez astrologije zahtevali znatno duži istraživački proces i veći broj susreta u kontinuitetu.

Astrologija u ovom principu rada ne predstavlja krajnji cilj, već temeljni okvir kroz koji se sagledava struktura ličnosti, razvojne teme i unutrašnji konflikti. Na osnovu tog uvida, u dogovoru sa klijentom, bira se dalji operativni i iskustveni rad kroz fokusirane metode kao što su NLP tehnike, hipnotički fokusirani rad, regresivni procesi ili CRT pristup. Na taj način astrologija ne zamenjuje psihološki rad, već ga značajno ubrzava i produbljuje.`,
  },
  {
    num: "03",
    emoji: "◎",
    image: "/images/NLP.jpg",
    title: "Psihološko i NLP coaching savetovanje – paket (3–4 sesije)",
    text: `Psihološko i NLP coaching savetovanje namenjeno je ličnom razvoju, postavljanju ciljeva, pronalaženju motivacije, promeni ograničavajućih obrazaca i uverenja, kao i unapređenju emocionalnog i mentalnog funkcionisanja. Rad se odvija isključivo u paketu od 3 do 4 sesije u kontinuitetu, jer NLP tehnike zahtevaju proces i doslednost.

Fokus je na ciljevima, unutrašnjim strategijama, uverenjima i obrascima ponašanja. Ova usluga može se raditi samostalno ili kao nastavak nakon astrološkog uvida.`,
  },
  {
    num: "04",
    emoji: "◈",
    title: "Hipnotičke tehnike – individualni rad",
    image: "/images/Hipnoza.jpg",
    text: `Hipnotičke tehnike koriste se za ulazak u stanje pojačane fokusirane pažnje, gde postaju dostupni dublji slojevi nesvesnog. Ovaj oblik rada pomaže u razrešavanju unutrašnjih blokada, emocionalnih zapisa i ponavljajućih obrazaca. Hipnotički fokusirani rad može biti primenjen kod različitih tema i unutrašnjih blokada, naročito kada osoba ima osećaj da racionalno razume problem, ali promena izostaje.

Ova metoda se često koristi kod:

▪ anksioznosti, unutrašnje napetosti i hroničnog stresa
▪ fobija i intenzivnih strahova
▪ depresivnih stanja i gubitka motivacije
▪ loših navika (prejedanje, prokrastinacija, odlaganje, samosabotaža…)
▪ zavisničkih obrazaca (kocka, cigarete, alkohol, kanabis, kokain…)
▪ niskog samopouzdanja i narušenog samopoštovanja
▪ posttraumatskih iskustava i snažnih emocionalnih sećanja
▪ emotivnih poteškoća nakon raskida, razvoda ili narušenih partnerskih odnosa
▪ pripreme za sportske, javne ili profesionalne performanse i postizanje rezultata

Hipnotički rad ne briše iskustvo niti potiskuje emocije, već omogućava dublji kontakt sa podsvesnim sadržajem, razumevanje unutrašnjih mehanizama i postepenu integraciju promene.

Hipnotički rad se sprovodi od 1 do maksimalno 6 online video seansi, u zavisnosti od teme i cilja koji klijent definiše, ali i od unutrašnje dinamike samog procesa.

Hipnoza se ne kombinuje automatski sa drugim uslugama, već se bira kao poseban modalitet rada.`,
  },
  {
    num: "05",
    emoji: "♾",
    image: "/images/Regresija.jpg",
    title: "Regresivni rad – regresija u prošle događaje ili živote",
    text: `Regresivni rad omogućava istraživanje duboko ukorenjenih iskustava koja se doživljavaju kao prošli životni sadržaji ili rani memorijski zapisi. U okviru astrološkog sistema, kontinuitet svesti i iskustava predstavlja prirodan deo psihološke strukture, zbog čega je regresija često logičan nastavak astrološkog i psihološkog rada.

Regresija se sprovodi od 1 do 6 seansi, sa jasno definisanom temom i ciljem, uz punu svesnost i integraciju doživljenih uvida.`,
  },
  {
    num: "06",
    emoji: "✺",
    image: "/images/CRT.jpg",
    title: "Complete Restoration Therapy™",
    text: `Complete Restoration Therapy (CRT) je strukturisan proces koji kombinuje više oblasti iz različitih metoda, a u osnovi se nalazi hipnotička sugestija i NLP tehnike, koje se koriste u cilju donošenja kompozitne odluke i dubinske unutrašnje reorganizacije. CRT je intenzivna i fokusirana metoda koja može da se primeni za veliki broj problema.

Ona se sprovodi isključivo kroz tri uzastopne seanse u maksimalno nedelju dana i fokusirana je na razrešenje unutrašnjih konflikata, ambivalencija i nesvesnih podela. CRT je namenjena klijentima koji žele intenzivan, fokusiran i transformativan proces sa jasno definisanom temom. Pristup je video online.`,
  },
];

export default function UslugePage() {
  return (
    <>
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
        <div className="container-main relative z-10">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3">
            Ponuda
          </p>
          <h1 className="heading-xl mb-4">
            Astrologija, astropsihološko savetovanje i psihološki rad online:
            NLP coaching, hipnotički fokusirani rad i regresija
          </h1>
          <div className="gold-divider mx-0 mb-4" />
          <p className="text-body max-w-2xl">
            Online astrologija i astropsihološko savetovanje, uz psihološki,
            coaching i mentorski rad kroz NLP tehnike, hipnotički fokusirane
            metode i regresivne procese, prilagođene individualnim potrebama i
            ciljevima.
          </p>
        </div>
      </section>

      {/* ── LISTA USLUGA ─────────────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.num}
                className="card group hover:border-gold/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-5 md:gap-8">
                  {/* Number + icon */}
                  <div className="shrink-0 flex flex-col items-center gap-2">
                    <span className="font-serif text-3xl text-gold/25 leading-none group-hover:text-gold/50 transition-colors">
                      {service.num}
                    </span>
                    <span
                      className="text-gold/40 text-lg"
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
                          quality={90}
                        />
                      </div>
                    )}
                    <div className="space-y-3">
                      {service.text.split("\n\n").map((paragraph, i) => {
                        const lines = paragraph.split("\n");
                        const isList = lines.every((l) => l.startsWith("▪"));
                        if (isList) {
                          return (
                            <ul key={i} className="space-y-1 pl-1">
                              {lines.map((line, j) => (
                                <li
                                  key={j}
                                  className="text-cream-muted leading-relaxed text-sm md:text-base flex gap-2"
                                >
                                  <span className="text-gold/60 shrink-0">▪</span>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-t border-border">
        <div className="container-main section-padding text-center">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">
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
        </div>
      </section>
    </>
  );
}
