import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cenovnik",
  description:
    "Cene i način rada – online individualne konsultacije. Astropsihološko savetovanje, NLP coaching, hipnotički rad, regresija i CRT.",
};

/* ─── DATA ───────────────────────────────────────────────── */

const astrologijaUvid = {
  prva: [
    { label: "Natal + detalj jedno polje", duration: "30 min", rsd: "3.000 RSD", eur: "30€" },
    { label: "Natal + detalj 2 polja", duration: "45 min", rsd: "4.500 RSD", eur: "45€" },
    { label: "Natal + detalj 3 polja", duration: "60 min", rsd: "5.000 RSD", eur: "50€" },
    { label: "Natal x 2", duration: "", rsd: "6.000 RSD", eur: "60€" },
  ],
  sledece: [
    { label: "Konkretno pitanje / horar", duration: "15 min", rsd: "1.500 RSD", eur: "15€" },
    { label: "Analiza dva polja", duration: "30 min", rsd: "2.500 RSD", eur: "25€" },
    { label: "Analiza tri polja", duration: "45 min", rsd: "3.500 RSD", eur: "35€" },
    { label: "Natal + uporedni / solar…", duration: "60 min", rsd: "4.000 RSD", eur: "40€" },
  ],
};

const paketCene = [
  { label: "Paket 4 × 60 min", rsd: "12.000 RSD", eur: "120€" },
  { label: "Paket 3 × 60 min", rsd: "10.500 RSD", eur: "105€" },
  { label: "Paket 4 × 45 min", rsd: "9.000 RSD", eur: "90€" },
  { label: "Paket 3 × 45 min", rsd: "7.500 RSD", eur: "75€" },
];

const hipnoRegresijaCene = [
  { label: "Prva u nizu sa istim ciljem/temom", rsd: "5.000 RSD", eur: "50€" },
  { label: "Druga u nizu sa istim ciljem/temom", rsd: "4.000 RSD", eur: "40€" },
  { label: "Treća i svaka sledeća u nizu sa istim ciljem/temom", rsd: "3.000 RSD", eur: "30€" },
];

/* ─── COMPONENTS ─────────────────────────────────────────── */

function PriceRow({
  label,
  duration,
  rsd,
  eur,
}: {
  label: string;
  duration?: string;
  rsd: string;
  eur: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-border/50 last:border-0 group">
      <div className="flex items-baseline gap-2 min-w-0">
        <span className="text-gold/50 text-xs shrink-0" aria-hidden>
          ✦
        </span>
        <span className="text-cream-muted text-sm leading-snug">{label}</span>
        {duration && (
          <span className="text-cream-faint text-xs italic shrink-0">({duration})</span>
        )}
      </div>
      <div className="flex items-center gap-3 shrink-0 text-right">
        <span className="text-cream-faint text-xs hidden sm:block">{rsd}</span>
        <span className="text-gold font-semibold text-sm">{eur}</span>
      </div>
    </div>
  );
}

function PackageRow({ label, rsd, eur }: { label: string; rsd: string; eur: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-border/50 last:border-0">
      <div className="flex items-center gap-2 min-w-0">
        <span className="text-gold/50 text-xs shrink-0" aria-hidden>
          ✦
        </span>
        <span className="text-cream-muted text-sm">{label}</span>
      </div>
      <div className="flex items-center gap-3 shrink-0 text-right">
        <span className="text-cream-faint text-xs hidden sm:block">{rsd}</span>
        <span className="text-gold font-semibold text-sm">{eur}</span>
      </div>
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */

export default function CenovnikPage() {
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
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3">Transparentno</p>
          <h1 className="heading-xl mb-4">Cenovnik i format rada</h1>
          <div className="gold-divider mx-0 mb-4" />
          <p className="text-body max-w-2xl">
            Rad se odvija individualno, online, i prilagođen je temi, cilju i nivou rada koji
            klijent bira. Neke usluge se rade kao pojedinačne konsultacije, dok su druge
            organizovane u jasno definisane pakete.
          </p>
        </div>
      </section>

      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="space-y-10 max-w-3xl">

            {/* ── I. Astropsihološko savetovanje ── */}
            <div className="card">
              <div className="flex items-start gap-3 mb-6">
                <span
                  className="text-gold text-lg shrink-0 mt-0.5"
                  aria-hidden
                  style={{ filter: "drop-shadow(0 0 5px rgba(201,168,76,0.4))" }}
                >
                  ☽
                </span>
                <div>
                  <h2 className="heading-md mb-1">Astropsihološko savetovanje</h2>
                  <p className="text-cream-faint text-xs italic">
                    individualni uvid (fokus na astrološki uvid i analizu)
                  </p>
                </div>
              </div>

              {/* Prva konsultacija */}
              <div className="mb-6">
                <p className="text-gold text-xs uppercase tracking-widest mb-3">
                  Prva konsultacija u toku godine
                </p>
                <div>
                  {astrologijaUvid.prva.map((item, i) => (
                    <PriceRow key={i} {...item} />
                  ))}
                </div>
              </div>

              {/* Sledeće */}
              <div>
                <p className="text-gold text-xs uppercase tracking-widest mb-3">
                  Sledeće konsultacije u godini
                </p>
                <div>
                  {astrologijaUvid.sledece.map((item, i) => (
                    <PriceRow key={i} {...item} />
                  ))}
                </div>
              </div>

              <p className="text-cream-faint text-xs mt-4 italic">
                ✦ Moguće kao samostalna usluga
              </p>
            </div>

            {/* ── II. Astrohiling ── */}
            <div className="card">
              <div className="flex items-start gap-3 mb-6">
                <span
                  className="text-gold text-lg shrink-0 mt-0.5"
                  aria-hidden
                  style={{ filter: "drop-shadow(0 0 5px rgba(201,168,76,0.4))" }}
                >
                  ◎
                </span>
                <div>
                  <h2 className="heading-md mb-1">Astropsihološko savetovanje (Astrohiling)</h2>
                  <p className="text-cream-faint text-xs italic">
                    početni uvid + dalje usmeravanje; astrologija kao temelj, dalje operativni rad
                    po dogovoru
                  </p>
                </div>
              </div>

              <div>
                {paketCene.map((item, i) => (
                  <PackageRow key={i} {...item} />
                ))}
              </div>

              <div className="mt-4 space-y-1">
                <p className="text-cream-faint text-xs">✦ Online video (telefon / Viber / WhatsApp)</p>
                <p className="text-cream-faint text-xs">
                  ✦ Trajanje paketa: 30 dana (paket 3), odnosno 40 dana (paket 4) od prve sesije
                </p>
              </div>
            </div>

            {/* ── III. NLP Coaching ── */}
            <div className="card">
              <div className="flex items-start gap-3 mb-6">
                <span
                  className="text-gold text-lg shrink-0 mt-0.5"
                  aria-hidden
                  style={{ filter: "drop-shadow(0 0 5px rgba(201,168,76,0.4))" }}
                >
                  ◈
                </span>
                <div>
                  <h2 className="heading-md mb-1">Psihološko i NLP coaching savetovanje</h2>
                  <p className="text-cream-faint text-xs italic">
                    paket – 3 ili 4 sesije u kontinuitetu
                  </p>
                </div>
              </div>

              <p className="text-cream-faint text-xs mb-4">
                Fokus na ciljeve, odluke, motivaciju i istrajnost
              </p>

              <div>
                {paketCene.map((item, i) => (
                  <PackageRow key={i} {...item} />
                ))}
              </div>

              <div className="mt-4 space-y-1">
                <p className="text-cream-faint text-xs">✦ Ne radi se kao pojedinačna sesija</p>
                <p className="text-cream-faint text-xs">
                  ✦ Trajanje paketa: 30 dana (paket 3), odnosno 40 dana (paket 4) od prve sesije
                </p>
              </div>
            </div>

            {/* ── IV. Hipnotički rad ── */}
            <div className="card">
              <div className="flex items-start gap-3 mb-6">
                <span
                  className="text-gold text-lg shrink-0 mt-0.5"
                  aria-hidden
                  style={{ filter: "drop-shadow(0 0 5px rgba(201,168,76,0.4))" }}
                >
                  ✦
                </span>
                <div>
                  <h2 className="heading-md mb-1">Hipnotički fokusirani rad</h2>
                  <p className="text-cream-faint text-xs italic">1 do maksimalno 6 seansi</p>
                </div>
              </div>

              <p className="text-cream-faint text-xs mb-4">
                Klijent (uz pomoć mentora) jasno definiše temu i cilj
              </p>

              <div>
                {hipnoRegresijaCene.map((item, i) => (
                  <PackageRow key={i} {...item} />
                ))}
              </div>

              <p className="text-cream-faint text-xs mt-4">
                ✦ Isključivo video online (Zoom, Google Meet…)
              </p>
            </div>

            {/* ── V. Regresivni rad ── */}
            <div className="card">
              <div className="flex items-start gap-3 mb-6">
                <span
                  className="text-gold text-lg shrink-0 mt-0.5"
                  aria-hidden
                  style={{ filter: "drop-shadow(0 0 5px rgba(201,168,76,0.4))" }}
                >
                  ♾
                </span>
                <div>
                  <h2 className="heading-md mb-1">Regresivni rad</h2>
                  <p className="text-cream-faint text-xs italic">
                    prošli događaji ili životi – 1 do maksimalno 6 seansi
                  </p>
                </div>
              </div>

              <p className="text-cream-faint text-xs mb-4">
                Rad sa temama koje se doživljavaju kao duboko ukorenjene, a za koje klijent nema
                racionalno objašnjenje ili svest o uzroku. Klijent (uz pomoć mentora) jasno
                definiše temu i cilj.
              </p>

              <div>
                {hipnoRegresijaCene.map((item, i) => (
                  <PackageRow key={i} {...item} />
                ))}
              </div>

              <p className="text-cream-faint text-xs mt-4">
                ✦ Isključivo video online (Zoom, Google Meet…)
              </p>
            </div>

            {/* ── VI. CRT ── */}
            <div className="card border-purple-soft/50">
              <div className="flex items-start gap-3 mb-6">
                <span
                  className="text-gold text-lg shrink-0 mt-0.5"
                  aria-hidden
                  style={{ filter: "drop-shadow(0 0 5px rgba(201,168,76,0.4))" }}
                >
                  ✺
                </span>
                <div>
                  <h2 className="heading-md mb-1">Complete Restoration Therapy™ (CRT)</h2>
                  <p className="text-cream-faint text-xs italic">
                    intenzivan i fokusiran proces
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 py-3 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <span className="text-gold/50 text-xs" aria-hidden>✦</span>
                  <span className="text-cream-muted text-sm">
                    Paket – 3 uzastopne seanse u 7 dana
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-cream-faint text-xs hidden sm:block">12.000 RSD</span>
                  <span className="text-gold font-semibold text-sm">120€</span>
                </div>
              </div>

              <p className="text-cream-faint text-xs mt-4">
                ✦ Isključivo video online (Zoom, Google Meet…)
              </p>
            </div>

            {/* ── Napomena ── */}
            <div className="border border-border/50 rounded-lg p-5 bg-bg-card/50">
              <p className="text-cream-faint text-xs mb-1 uppercase tracking-widest font-semibold">
                Napomena
              </p>
              <p className="text-cream-muted text-sm leading-relaxed">
                Izbor usluge i metoda uvek se dogovara u skladu sa temom, ciljem i spremnošću
                klijenta. Astrologija može, ali ne mora biti početna tačka rada.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-t border-border">
        <div className="container-main section-padding text-center">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">Sledeći korak</p>
          <h2 className="heading-lg mb-4">Spremi za početak?</h2>
          <div className="gold-divider" />
          <p className="text-cream-muted mt-4 mb-8 max-w-md mx-auto">
            Zakaži konsultaciju i zajedno ćemo definisati koji oblik rada odgovara tvojem cilju i
            tempu.
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
