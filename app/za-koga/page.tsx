import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Za Koga Je Ovaj Pristup",
  description:
    "Ovaj rad je namenjen ljudima koji osećaju da se njihova pitanja ne završavaju na površinskom nivou. Astropsihološko savetovanje, coaching i lični razvoj za one koji žele razumevanje i unutrašnju promenu.",
};

const jestePrikladan = [
  "otvoreni ste za spoj psihološkog uvida, astrosimbolike, mentorskog i coaching pristupa usmerenog na konkretne promene",
  "imate osećaj da isti životni ili emocionalni obrasci stalno ponavljaju",
  "želite da razumete zašto se nešto dešava (astrosimbolički, neurolingvistički ili na osnovu prethodnih iskustava), ali i kako da to promenite u praksi",
  "želite jasno da definišete lične ili profesionalne ciljeve",
  "želite da istrajete u svojim odlukama, bez odlaganja, sabotaže ili vraćanja na staro",
  "želite da prepoznate i aktivirate unutrašnje resurse, motivatore i kapacitete",
  "imate iskustvo više partnerskih odnosa, ali i osećaj da 'nijedan nije bio pravi'",
  "primećujete toksične ponavljajuće obrasce u odnosima, izborima partnera ili dinamici bliskosti",
  "spremni ste da preuzmete aktivnu i odgovornu ulogu u sopstvenom procesu i odlukama",
];

const nijeZa = [
  "traže brza rešenja, gotove odgovore ili instant promene",
  "očekuju da neko drugi 'uradi posao umesto njih'",
  "žele dijagnoze, etikete ili klasičnu terapiju",
  "nisu spremni da se suoče sa sopstvenim obrascima i izborima",
  "traže isključivo predviđanja bez lične refleksije i rada",
  "dolaze bez jasne namere ili otvorenosti za proces",
];

export default function ZaKogaPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="relative pt-32 pb-16 border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="container-main relative z-10">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3">Prepoznaješ li sebe?</p>
          <h1 className="heading-xl mb-4">Za koga je ovaj pristup</h1>
          <div className="gold-divider mx-0" />
        </div>
      </section>

      {/* ── UVOD ─────────────────────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="max-w-3xl">
            <p className="text-body mb-10">
              Ovaj rad je namenjen ljudima koji osećaju da se njihova pitanja ne završavaju na
              površinskom nivou, a da im klasični dugotrajni, isključivo klinički pristupi, često ne
              daju potpune odgovore. Namenjen je onima koji žele razumevanje, ali i unutrašnju
              promenu, kroz dublji uvid u sopstvene obrasce, odluke i životne teme.
            </p>

            {/* Za koga JESTE */}
            <div className="mb-12">
              <h2 className="heading-md mb-6">Rad je posebno prikladan za vas ako:</h2>

              <div className="space-y-3">
                {jestePrikladan.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded border border-border bg-bg-card
                               hover:border-gold/40 transition-colors duration-200"
                  >
                    <span
                      className="text-gold shrink-0 mt-0.5 text-base"
                      aria-hidden
                      style={{ filter: "drop-shadow(0 0 4px rgba(201,168,76,0.4))" }}
                    >
                      ✦
                    </span>
                    <p className="text-cream-muted leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Zaključak */}
            <p className="text-body mb-4">
              Ovaj pristup je za ljude koji shvataju da su oni sami nosioci sopstvene promene, koji
              žele svesniji odnos prema sebi, svojim obrascima i potencijalima, a koji su otvoreni
              za integraciju uvida na psihološkom, simboličkom i iskustvenom nivou. Ovaj rad ne
              ostaje na pukoj analizi — već pruža jasnoću, fokus i svesno delovanje, uz konkretan
              rad na ciljevima, odnosima i ličnom razvoju.
            </p>

            {/* Pull quote */}
            <div className="border-l-2 border-gold pl-6 py-2 my-8">
              <p className="font-serif text-lg text-cream italic leading-relaxed">
                Ako vam ovo zvuči zahtevno – verovatno je za vas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NIJE ZA ──────────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-y border-border">
        <div className="container-main section-padding">
          <div className="max-w-3xl">
            <h2 className="heading-lg mb-4">Za koga ovaj pristup nije</h2>
            <div className="gold-divider mx-0 mb-8" />

            <p className="text-body mb-8">Ovaj rad nije za osobe koje:</p>

            <div className="space-y-3 mb-8">
              {nijeZa.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded border border-border/60 bg-bg-primary/50"
                >
                  <span className="text-cream-faint shrink-0 mt-0.5 text-base" aria-hidden>
                    ✕
                  </span>
                  <p className="text-cream-faint leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-cream-muted leading-relaxed">
              Ovaj rad podrazumeva svesno učešće, kontinuitet i ličnu odgovornost. Ako tražite
              pasivni pristup ili brzu utehu – ovo verovatno nije vaš pravi izbor.
            </p>
          </div>
        </div>
      </section>

      {/* ── VAŽNO JE ZNATI ───────────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="max-w-3xl">
            <div className="card border-purple-soft/40">
              <div className="flex items-start gap-4 mb-4">
                <span
                  className="text-gold text-xl shrink-0 mt-0.5"
                  aria-hidden
                  style={{ filter: "drop-shadow(0 0 6px rgba(201,168,76,0.3))" }}
                >
                  ✦
                </span>
                <h2 className="heading-md">Važno je znati</h2>
              </div>
              <div className="space-y-3 text-cream-muted leading-relaxed pl-8">
                <p>
                  Rad koji nudim ima za cilj lični razvoj, osvešćivanje obrazaca i dublje
                  razumevanje unutrašnjih procesa.
                </p>
                <p>
                  Ne predstavlja medicinski, psihijatrijski ili kliničko-terapijski tretman i ne
                  zamenjuje zdravstvenu ili psihoterapijsku pomoć.
                </p>
                <p>
                  U radu se ne postavljaju dijagnoze niti se daje medicinski savet. Klijent
                  zadržava punu odgovornost za sopstvene odluke i postupke.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-t border-border">
        <div className="container-main section-padding text-center">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">Sledeći korak</p>
          <h2 className="heading-lg mb-4">Prepoznajete se?</h2>
          <div className="gold-divider" />
          <p className="text-cream-muted mt-4 mb-8 max-w-md mx-auto">
            Zakazivanjem inicijalnog razgovora počinjemo sa uvidom — bez obaveze i bez unapred
            zadatog pravca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary">
              Zakaži inicijalni razgovor
            </Link>
            <Link href="/usluge" className="btn-outline">
              Pogledaj usluge →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
