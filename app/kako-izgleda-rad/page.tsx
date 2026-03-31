import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeUp, SlideRight, SlideLeft } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Kako Izgleda Rad",
  description:
    "Rad je strukturisan, ali fleksibilan, i uvek se prilagođava potrebama i spremnosti klijenta. Proces se odvija kroz jasne faze koje omogućavaju sigurnost, kontinuitet i dubinu uvida.",
};

export default function KakoIzgledaRadPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="relative pt-32 pb-16 border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 70% 50%, rgba(123,94,184,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <SlideRight>
              <p className="text-teget text-xs uppercase tracking-[0.25em] mb-3">
                Proces
              </p>
              <h1 className="heading-xl mb-4">
                Kako sa mnom izgleda tvoj rad na sebi
              </h1>
              <div className="gold-divider mx-0 mb-4" />
              <p className="text-body">
                Rad je <strong>strukturisan, ali fleksibilan</strong> i uvek se
                prilagođava potrebama i spremnosti klijenta. Proces se odvija
                kroz <strong>jasne faze</strong>, koje omogućavaju sigurnost,
                kontinuitet i dubinu uvida.
              </p>
            </SlideRight>
            <SlideLeft
              delay={0.2}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src="/images/Kako izgleda rad samnom.webp"
                alt="Kako izgleda rad sa mnom"
                fill
                className="object-cover"
                priority
              />
            </SlideLeft>
          </div>
        </div>
      </section>

      {/* ── FAZA 1 ───────────────────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="max-w-6xl space-y-12">
            {/* 01 */}
            <FadeUp className="card group hover:border-teget/40 transition-colors duration-300">
              <div className="flex items-start gap-6">
                <div className="shrink-0 text-center">
                  <p className="font-serif text-4xl text-teget/25 leading-none group-hover:text-teget/50 transition-colors">
                    01
                  </p>
                  <span
                    aria-hidden
                    className="text-teget/40 text-lg block mt-2"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))",
                    }}
                  >
                    ✺
                  </span>
                </div>
                <div>
                  <h2 className="heading-md mb-1">Uvid</h2>
                  <p className="text-teget text-sm italic mb-4">
                    Razumevanje strukture i teme
                  </p>
                  <div className="space-y-3 text-cream-muted leading-relaxed">
                    <p>
                      Proces <strong>najčešće započinje astropsihološkim savetovanjem</strong>,
                      kroz koje se, uz astrološki okvir, sagledavaju osnovni
                      psihološki obrasci, razvojne teme i unutrašnji konflikti.
                      Ova faza <strong>pruža mapu i kontekst</strong> — razumevanje šta se dešava
                      i kada, odnosno u kojim životnim periodima, odnosima ili
                      situacijama se javljaju teme poput anksioznosti, straha,
                      besa, unutrašnje napetosti, emotivne vezanosti ili
                      ponavljajućih problema.
                    </p>
                    <p>
                      Ukoliko <strong>klijent već ima jasno definisane teme i ciljeve za
                      lični rast i razvoj, astrološki uvod se može preskočiti</strong>, a
                      deo prve zakazane seanse koristiti za preciziranje fokusa
                      i načina daljeg rada.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* 02 */}
            <FadeUp
              delay={0.1}
              className="card group hover:border-teget/40 transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 text-center">
                  <p className="font-serif text-4xl text-teget/25 leading-none group-hover:text-teget/50 transition-colors">
                    02
                  </p>
                  <span
                    aria-hidden
                    className="text-teget/40 text-lg block mt-2"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))",
                    }}
                  >
                    ✺
                  </span>
                </div>
                <div>
                  <h2 className="heading-md mb-1">Fokus</h2>
                  <p className="text-teget text-sm italic mb-4">
                    Definisanje pravca rada
                  </p>
                  <p className="text-cream-muted leading-relaxed">
                    Na osnovu dobijenog uvida, zajedno sa klijentom{" "}
                    <strong>
                      definiše se fokus rada i prelazi se u operativni i
                      iskustveni proces
                    </strong>
                    . U ovoj fazi jasno se postavlja šta se menja, šta je cilj i
                    šta stoji na putu te promene, a zatim se bira odgovarajući
                    metod ili kombinacija metoda, u skladu sa temom, ciljem i
                    unutrašnjom dinamikom klijenta.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* 03 */}
            <FadeUp
              delay={0.2}
              className="card group hover:border-teget/40 transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 text-center">
                  <p className="font-serif text-4xl text-teget/25 leading-none group-hover:text-teget/50 transition-colors">
                    03
                  </p>
                  <span
                    aria-hidden
                    className="text-teget/40 text-lg block mt-2"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))",
                    }}
                  >
                    ✺
                  </span>
                </div>
                <div>
                  <h2 className="heading-md mb-1">Rad (na sebi)</h2>
                  <p className="text-teget text-sm italic mb-4">
                    Iskustveni i operativni proces
                  </p>
                  <div className="space-y-3 text-cream-muted leading-relaxed">
                    <p>
                      <strong>U zavisnosti od cilja</strong>, rad se nastavlja
                      kroz fokusirane metode: NLP coaching u kontinuitetu,
                      hipnotički fokusirani rad, regresivne procese ili CRT
                      pristup. Ova faza je usmerena na promenu unutrašnjih
                      obrazaca, integraciju uvida i lični razvoj.
                    </p>
                    <p>
                      U ovoj fazi <strong>zajedno dolazimo do odgovora zašto</strong>{" "}
                      se određeni obrasci ponavljaju i zašto su neki odnosi,
                      stanja ili odluke teško promenljivi. Metode se, po potrebi
                      i u dogovoru sa klijentom, mogu kombinovati.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── PRIMER RADA ──────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-t border-border">
        <div className="container-main section-padding">
          <FadeUp className="text-center mb-10">
            <p className="text-teget text-xs uppercase tracking-[0.25em] mb-3">
              Primer rada
            </p>
            <h2 className="heading-lg mb-2">
              Partnerski odnosi – karmički obrazac i regresivni rad
            </h2>
            <div className="gold-divider" />
            <p className="text-cream-faint text-sm italic mt-4">
              Ovo je realan primer osobe (identitet i neki detalji su izmenjeni
              u cilju poštovanja privatnosti).
            </p>
          </FadeUp>

          {/* Kontekst */}
          <FadeUp className="max-w-6xl mx-auto mb-10">
            <p className="text-cream-muted leading-relaxed">
              Klijentkinja, 39 godina,{" "}
              <strong>
                sa ponavljajućim obrascem intenzivnih, sudbinskih odnosa koji
                započinju snažnom povezanošću i osećajem 'kao da se znamo
                od ranije'
              </strong>
              , a završavaju emocionalnim prekidom i osećajem gubitka koji
              prevazilazi realno trajanje veze.
            </p>
          </FadeUp>

          <div className="max-w-6xl mx-auto space-y-6">
            {/* Korak 1 */}
            <FadeUp className="card group hover:border-teget/40 transition-colors duration-300">
              <div className="flex items-start gap-5">
                <div className="shrink-0 text-center">
                  <p className="font-serif text-3xl text-teget/25 leading-none group-hover:text-teget/50 transition-colors">
                    1
                  </p>
                  <span
                    aria-hidden
                    className="text-teget/40 text-lg block mt-2"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))",
                    }}
                  >
                    ✺
                  </span>
                </div>
                <div>
                  <h3 className="heading-sm mb-1">Astrološki uvid</h3>
                  <p className="text-teget text-sm italic mb-4">
                    Pokazatelji karmičkih veza
                  </p>
                  <div className="space-y-3 text-cream-muted leading-relaxed">
                    <p>U natalnoj karti bili su izraženi:</p>
                    <ul className="space-y-1 pl-1">
                      {[
                        "Južni čvor u polju partnerstva",
                        "snažni aspekti Plutona prema Veneri",
                        "kontakt Saturna sa ličnim planetama",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-teget/60 shrink-0">▪</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Takođe, naknadno je utvrđena i aktivacija 12. polja u
                      sinastrijama sa partnerima.
                    </p>
                    <p>
                      Ove kombinacije (ali ne i samo ove!) često ukazuju na
                      karmičke veze, nerešene emotivne obrasce i ponavljanje
                      dinamika koje{" "}
                      <strong>
                        imaju osećaj 'nedovršenosti'
                      </strong>
                      . Astrologija ovde nije korišćena kao dokaz prošlih
                      života, već kao simbolički pokazatelj da se radi o obrascu
                      koji nadilazi racionalno objašnjenje i ima duboko
                      ukorenjen emotivni naboj.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Korak 2 */}
            <FadeUp
              delay={0.1}
              className="card group hover:border-teget/40 transition-colors duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 text-center">
                  <p className="font-serif text-3xl text-teget/25 leading-none group-hover:text-teget/50 transition-colors">
                    2
                  </p>
                  <span
                    aria-hidden
                    className="text-teget/40 text-lg block mt-2"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))",
                    }}
                  >
                    ✺
                  </span>
                </div>
                <div>
                  <h3 className="heading-sm mb-1">
                    Astrohiling / savetodavni rad
                  </h3>
                  <p className="text-teget text-sm italic mb-4">
                    Psihološki uvid i razumevanje obrasca
                  </p>
                  <div className="space-y-3 text-cream-muted leading-relaxed">
                    <p>U ovoj fazi rad je bio usmeren na:</p>
                    <ul className="space-y-1 pl-1">
                      {[
                        "razumevanje privlačnosti prema emocionalno nedostupnim partnerima",
                        "razlikovanje strasti od stabilnosti",
                        "prepoznavanje sopstvene uloge u dinamici odnosa",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-teget/60 shrink-0">▪</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      Klijentkinja je{" "}
                      <strong>
                        jasno uvidela obrazac, ali je i dalje osećala snažnu
                        emocionalnu vezanost
                      </strong>{" "}
                      čak i kada je postojala svesnost da odnos objektivno nije
                      bio zdrav.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Korak 3 */}
            <FadeUp
              delay={0.2}
              className="card group hover:border-teget/40 transition-colors duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 text-center">
                  <p className="font-serif text-3xl text-teget/25 leading-none group-hover:text-teget/50 transition-colors">
                    3
                  </p>
                  <span
                    aria-hidden
                    className="text-teget/40 text-lg block mt-2"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))",
                    }}
                  >
                    ✺
                  </span>
                </div>
                <div>
                  <h3 className="heading-sm mb-1">Regresivni rad</h3>
                  <p className="text-teget text-sm italic mb-4">
                    Lična prošlost i prošli životi
                  </p>
                  <div className="space-y-3 text-cream-muted leading-relaxed">
                    <p>
                      Tokom regresivnog procesa u dve seanse,{" "}
                      <strong>
                        radili smo prvo na 'otvaranju' ranih
                        iskustava iz detinjstva
                      </strong>{" "}
                      – situacija u kojima je ljubav bila povezana sa napetošću
                      i neizvesnošću. Prema dogovoru, narednom seansom smo kroz
                      produbljeni rad 'otišli' u scene iz
                      'drugog vremena' – i{" "}
                      <strong>
                        stekli uvid u iskustvo odnosa u kojem je postojala
                        snažna emotivna povezanost
                      </strong>{" "}
                      (ali ne partnerska!) i njegov nagli prekid bez razrešenja.
                    </p>
                    <p>
                      U radu fokus nije bio na dokazivanju da li je to
                      objektivno prošli život, već na emocionalnom naboju koji
                      je scena nosila. Kroz proces integracije, smanjena je
                      intenzivna potreba za 'dovršavanjem' odnosa
                      koji su realno već završeni.
                    </p>
                    <p>
                      S obzirom da je rad sa klijentkinjom nastavljen još 6
                      meseci,{" "}
                      <strong>efekti promene su se ogledali u sledećem:</strong>
                    </p>
                    <ul className="space-y-1 pl-1">
                      {[
                        "naredna veza započeta je sporije i stabilnije, a partner nije bio emotivno nedostupan",
                        "nestao je impuls da se po svaku cenu ostane u dinamici koja boli",
                        "osećaj \u2018sudbinske vezanosti\u2019 (iz 5. kuće) zamenjen je svesnijim izborom (iz 7. kuće)",
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-teget/60 shrink-0">▪</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Zaključak */}
            <FadeUp
              delay={0.1}
              className="card border-teget/20 bg-bg-secondary"
            >
              <p className="text-cream-muted leading-relaxed mb-3">
                Ovaj primer pokazuje kako se:
              </p>
              <ul className="space-y-1 pl-1 text-cream-muted leading-relaxed">
                {[
                  "astrološki pokazatelji karmičkih veza,",
                  "psihološki uvid",
                  "i metoda regresivnog rada (uključujući i simboliku prošlih života)",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-teget/60 shrink-0">▪</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-cream-muted leading-relaxed mt-3">
                mogu koristiti kao alati za razumevanje i prekid ponavljajućih
                obrazaca.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── METODE ───────────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-t border-border">
        <div className="container-main section-padding">
          <FadeUp className="text-center mb-10">
            <h2 className="heading-lg mb-2">Metode u radu</h2>
            <div className="gold-divider" />
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "✺",
                name: "Astropsihologija",
                desc: "Analitički uvid u psihološku strukturu i razvojne teme kroz natalnu kartu",
                image: "/images/Astrologija (2).webp",
              },
              {
                icon: "✺",
                name: "NLP coaching",
                desc: "Prepoznavanje i promena nesvesnih obrazaca mišljenja i ponašanja",
                image: "/images/NLP2.webp",
              },
              {
                icon: "✺",
                name: "Hipnotičke metode",
                desc: "Stanje pojačane fokusirane pažnje za pristup dubljim slojevima svesti",
                image: "/images/Hipnoza 2.webp",
              },
              {
                icon: "✺",
                name: "Regresivni rad & CRT",
                desc: "Istraživanje dubokih unutrašnjih sadržaja sa fokusom na svesnu promenu",
                image: "/images/Rad samnom.webp",
              },
            ].map((m, i) => (
              <FadeUp
                key={i}
                delay={i * 0.1}
                className="card text-center hover:border-purple-soft/50 transition-colors duration-300 overflow-hidden !p-0"
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <div
                    aria-hidden
                    className="text-2xl text-teget/50 mb-2"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))",
                    }}
                  >
                    {m.icon}
                  </div>
                  <h3 className="text-cream font-semibold text-sm mb-2">
                    {m.name}
                  </h3>
                  <p className="text-cream-faint text-xs leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/usluge" className="link-arrow">
              Pogledaj sve usluge <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FORMAT RADA ──────────────────────────────────── */}
      <section className="relative z-10 border-t border-border">
        <div className="container-main section-padding">
          <FadeUp className="text-center mb-10">
            <h2 className="heading-lg mb-2">Format rada</h2>
            <div className="gold-divider" />
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
            {[
              {
                icon: "📱",
                label: "Video poziv",
                desc: "Viber, WhatsApp, Telegram – osim za metode koje uključuju hipnotičke tehnike gde je potreban Zoom, Google Meet ili drugi sličan video alat",
              },
              {
                icon: "📞",
                label: "Telefonski poziv",
                desc: "Individualni astrološki uvid",
              },
            ].map((f, i) => (
              <FadeUp key={i} delay={i * 0.1} className="card text-center">
                <p className="text-3xl mb-3" aria-hidden>
                  {f.icon}
                </p>
                <p className="text-cream font-semibold mb-1">{f.label}</p>
                <p className="text-cream-faint text-sm">{f.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-t border-border">
        <FadeUp className="container-main section-padding text-center">
          <h2 className="heading-md mb-6">Spreman/a da počnemo?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Zakaži konsultaciju
            </Link>
            <Link href="/za-koga" className="btn-outline">
              Za koga je ovaj rad →
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
