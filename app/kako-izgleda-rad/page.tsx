import type { Metadata } from "next";
import Link from "next/link";

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
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3">
            Proces
          </p>
          <h1 className="heading-xl mb-4">
            Kako sa mnom izgleda vaš rad na sebi
          </h1>
          <div className="gold-divider mx-0 mb-4" />
          <p className="text-body max-w-4xl">
            Rad je strukturisan, ali fleksibilan, i uvek se prilagođava
            potrebama i spremnosti klijenta. Proces se odvija kroz jasne faze,
            koje omogućavaju sigurnost, kontinuitet i dubinu uvida.
          </p>
        </div>
      </section>

      {/* ── FAZA 1 ───────────────────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="max-w-6xl space-y-12">
            {/* 01 */}
            <div className="card group hover:border-gold/40 transition-colors duration-300">
              <div className="flex items-start gap-6">
                <div className="shrink-0 text-center">
                  <p className="font-serif text-4xl text-gold/25 leading-none group-hover:text-gold/50 transition-colors">
                    01
                  </p>
                  <span
                    aria-hidden
                    className="text-gold/40 text-lg block mt-2"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))",
                    }}
                  >
                    ☽
                  </span>
                </div>
                <div>
                  <h2 className="heading-md mb-1">Uvid</h2>
                  <p className="text-gold text-sm italic mb-4">
                    Razumevanje strukture i teme
                  </p>
                  <div className="space-y-3 text-cream-muted leading-relaxed">
                    <p>
                      Proces najčešće započinje astropsihološkim savetovanjem,
                      kroz koje se, uz astrološki okvir, sagledavaju osnovni
                      psihološki obrasci, razvojne teme i unutrašnji konflikti.
                      Ova faza pruža mapu i kontekst — razumevanje šta se dešava
                      i kada, odnosno u kojim životnim periodima, odnosima ili
                      situacijama se javljaju teme poput anksioznosti, straha,
                      besa, unutrašnje napetosti, emotivne vezanosti ili
                      ponavljajućih problema.
                    </p>
                    <p>
                      Ukoliko klijent već ima jasno definisane teme i ciljeve za
                      lični rast i razvoj, astrološki uvod se može preskočiti, a
                      deo prve zakazane seanse koristiti za preciziranje fokusa
                      i načina daljeg rada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 02 */}
            <div className="card group hover:border-gold/40 transition-colors duration-300">
              <div className="flex items-start gap-6">
                <div className="shrink-0 text-center">
                  <p className="font-serif text-4xl text-gold/25 leading-none group-hover:text-gold/50 transition-colors">
                    02
                  </p>
                  <span
                    aria-hidden
                    className="text-gold/40 text-lg block mt-2"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))",
                    }}
                  >
                    ◎
                  </span>
                </div>
                <div>
                  <h2 className="heading-md mb-1">Fokus</h2>
                  <p className="text-gold text-sm italic mb-4">
                    Definisanje pravca rada
                  </p>
                  <p className="text-cream-muted leading-relaxed">
                    Na osnovu dobijenog uvida, zajedno sa klijentom definiše se
                    fokus rada i prelazi se u operativni i iskustveni proces. U
                    ovoj fazi jasno se postavlja šta se menja, šta je cilj i šta
                    stoji na putu te promene, a zatim se bira odgovarajući metod
                    ili kombinacija metoda, u skladu sa temom, ciljem i
                    unutrašnjom dinamikom klijenta.
                  </p>
                </div>
              </div>
            </div>

            {/* 03 */}
            <div className="card group hover:border-gold/40 transition-colors duration-300">
              <div className="flex items-start gap-6">
                <div className="shrink-0 text-center">
                  <p className="font-serif text-4xl text-gold/25 leading-none group-hover:text-gold/50 transition-colors">
                    03
                  </p>
                  <span
                    aria-hidden
                    className="text-gold/40 text-lg block mt-2"
                    style={{
                      filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))",
                    }}
                  >
                    ✦
                  </span>
                </div>
                <div>
                  <h2 className="heading-md mb-1">Rad (na sebi)</h2>
                  <p className="text-gold text-sm italic mb-4">
                    Iskustveni i operativni proces
                  </p>
                  <div className="space-y-3 text-cream-muted leading-relaxed">
                    <p>
                      U zavisnosti od cilja, rad se nastavlja kroz fokusirane
                      metode: NLP coaching u kontinuitetu, hipnotički fokusirani
                      rad, regresivne procese ili CRT pristup. Ova faza je
                      usmerena na promenu unutrašnjih obrazaca, integraciju
                      uvida i lični razvoj.
                    </p>
                    <p>
                      U ovoj fazi zajedno dolazimo do odgovora zašto se određeni
                      obrasci ponavljaju i zašto su neki odnosi, stanja ili
                      odluke teško promenljivi. Metode se, po potrebi i u
                      dogovoru sa klijentom, mogu kombinovati.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METODE ───────────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-t border-border">
        <div className="container-main section-padding">
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-2">Metode u radu</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "☽",
                name: "Astropsihologija",
                desc: "Analitički uvid u psihološku strukturu i razvojne teme kroz natalnu kartu",
              },
              {
                icon: "◎",
                name: "NLP coaching",
                desc: "Prepoznavanje i promena nesvesnih obrazaca mišljenja i ponašanja",
              },
              {
                icon: "◈",
                name: "Hipnotičke metode",
                desc: "Stanje pojačane fokusirane pažnje za pristup dubljim slojevima svesti",
              },
              {
                icon: "♾",
                name: "Regresivni rad & CRT",
                desc: "Istraživanje dubokih unutrašnjih sadržaja sa fokusom na svesnu promenu",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="card text-center hover:border-purple-soft/50 transition-colors duration-300"
              >
                <div
                  aria-hidden
                  className="text-2xl text-gold/50 mb-3"
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
          <div className="text-center mb-10">
            <h2 className="heading-lg mb-2">Format rada</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
            {[
              {
                icon: "📱",
                label: "Video poziv",
                desc: "Zoom, Google Meet ili drugi video alat",
              },
              {
                icon: "📞",
                label: "Telefonski poziv",
                desc: "Za one koji preferiraju glas bez kamere",
              },
            ].map((f, i) => (
              <div key={i} className="card text-center">
                <p className="text-3xl mb-3" aria-hidden>
                  {f.icon}
                </p>
                <p className="text-cream font-semibold mb-1">{f.label}</p>
                <p className="text-cream-faint text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-t border-border">
        <div className="container-main section-padding text-center">
          <h2 className="heading-md mb-6">Spreman/a da počnemo?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Zakaži konsultaciju
            </Link>
            <Link href="/za-koga" className="btn-outline">
              Za koga je ovaj rad →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
