import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Zakaži online konsultaciju — astropsihološko savetovanje, coaching i lični razvoj sa Jelenom Steović, Nimfa Iz Podsvesti.",
};

export default function KontaktPage() {
  return (
    <>
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
        <div className="container-main relative z-10">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3">Sledeći korak</p>
          <h1 className="heading-xl mb-4">Kontakt</h1>
          <div className="gold-divider mx-0 mb-4" />
          <p className="text-body max-w-lg">
            Napiši mi poruku ili se javi direktno. Odgovorim u roku od 24 sata i dogovorimo termin
            koji odgovara tvom rasporedu.
          </p>
        </div>
      </section>

      {/* ── KONTAKT INFO ─────────────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Kontakt kanali */}
            <div>
              <h2 className="heading-md mb-6">Kako me pronaći</h2>
              <div className="space-y-4">
                <a
                  href="mailto:kontakt@nimfaizpodsvesti.com"
                  className="card flex items-center gap-4 hover:border-gold/40 transition-colors duration-300 group"
                >
                  <span className="text-gold text-xl" aria-hidden>✉</span>
                  <div>
                    <p className="text-cream-muted text-xs uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-cream group-hover:text-gold transition-colors text-sm">
                      kontakt@nimfaizpodsvesti.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/nimfaizpodsvesti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card flex items-center gap-4 hover:border-gold/40 transition-colors duration-300 group"
                >
                  <span className="text-gold text-xl" aria-hidden>◈</span>
                  <div>
                    <p className="text-cream-muted text-xs uppercase tracking-widest mb-0.5">Instagram</p>
                    <p className="text-cream group-hover:text-gold transition-colors text-sm">
                      @nimfaizpodsvesti
                    </p>
                  </div>
                </a>

                <div className="card flex items-center gap-4">
                  <span className="text-gold text-xl" aria-hidden>☎</span>
                  <div>
                    <p className="text-cream-muted text-xs uppercase tracking-widest mb-0.5">
                      WhatsApp / Viber
                    </p>
                    <p className="text-cream text-sm">Dostupno po dogovoru</p>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 p-4 border border-border/50 rounded bg-bg-card">
                <p className="text-cream-faint text-xs leading-relaxed">
                  Rad je savetodavnog i coaching karaktera i ne predstavlja zamenu za medicinski ili
                  klinički tretman. Usluge i sadržaji imaju savetodavni i edukativni karakter u
                  oblasti ličnog razvoja i samorazumevanja.
                </p>
              </div>
            </div>

            {/* Info / šta da očekuješ */}
            <div>
              <h2 className="heading-md mb-6">Šta da očekuješ</h2>
              <div className="space-y-5">
                {[
                  {
                    step: "1",
                    text: "Pošalji poruku putem emaila ili Instagrama i ukratko opiši šta te dovodi.",
                  },
                  {
                    step: "2",
                    text: "Dogovorimo termin koji ti odgovara — sve je online, bez putovanja.",
                  },
                  {
                    step: "3",
                    text: "Prva konsultacija je posvećena uvidu — šta se dešava i koji je tvoj cilj.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-full border border-gold text-gold text-xs flex items-center justify-center font-serif">
                      {item.step}
                    </span>
                    <p className="text-cream-muted leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link href="/faq" className="link-arrow text-xs">
                  Imam pitanje → Pogledaj FAQ <span aria-hidden></span>
                </Link>
              </div>

              <div className="mt-6 card text-center border-purple-soft/40">
                <div
                  aria-hidden
                  className="text-4xl text-gold/40 mb-4"
                  style={{ filter: "drop-shadow(0 0 10px rgba(201,168,76,0.3))" }}
                >
                  ✦ ☽ ✦
                </div>
                <p className="text-cream-muted text-sm italic">
                  &ldquo;Svaka promena počinje jednim korakom prema sebi.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
