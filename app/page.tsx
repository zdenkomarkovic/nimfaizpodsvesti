import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Astropsihološko savetovanje, coaching mentorstvo i lični razvoj online | Nimfa Iz Podsvesti",
  description:
    "Astropsihološko savetovanje koje povezuje psihologiju i astrologiju, uz NLP i CRT tehnike, hipnotički fokusirani rad i regresivne procese sa temama prošlih života, usmereno na lični razvoj i svesnu promenu.",
};

export default function HomePage() {
  return (
    <>
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
          <div className="max-w-3xl">
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-6">
              Astropsihološko savetovanje &middot; Coaching &middot; Lični razvoj
            </p>

            <h1 className="heading-xl mb-6">
              Astropsihološko savetovanje, coaching mentorstvo i lični razvoj online
            </h1>

            <div className="gold-divider mx-0" />

            <p className="text-body text-cream-muted max-w-2xl mb-8">
              Astropsihološko savetovanje koje povezuje psihologiju i astrologiju, uz NLP i CRT
              tehnike, hipnotički fokusirani rad i regresivne procese sa temama prošlih života,
              usmereno na lični razvoj i svesnu promenu.
            </p>

            <Link href="/kontakt" className="btn-primary">
              Zakaži konsultaciju
            </Link>
          </div>
        </div>
      </section>

      {/* ── OPIS USLUGE ──────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-y border-border">
        <div className="container-main section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-body">
              Diplomirani sam psiholog. Radim individualno, online, kroz video ili telefonske
              konsultacije, koristeći integrativni pristup koji povezuje psihologiju, astrologiju i
              coaching i regresivne tehnike. U radu primenjujem NLP, hipnotičke metode i regresivni
              rad usmeren na istraživanje prošlih životnih ili ranijih životnih iskustava, sa ciljem
              dubljeg razumevanja unutrašnjih obrazaca i ličnog razvoja.
            </p>
          </div>
        </div>
      </section>

      {/* ── ZA KOGA JE OVAJ RAD ──────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">Za koga</p>
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
                    <span className="text-gold mt-1 shrink-0">✦</span>
                    <span className="text-cream-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/za-koga" className="link-arrow">
                  Pročitaj više <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Decorative card */}
            <div className="card border-purple-soft/50 text-center hidden md:flex flex-col items-center justify-center min-h-[280px]">
              <div
                aria-hidden
                className="text-5xl mb-4 opacity-60"
                style={{ filter: "drop-shadow(0 0 12px rgba(201,168,76,0.4))" }}
              >
                ☽
              </div>
              <p className="text-cream-muted text-sm italic max-w-xs leading-relaxed">
                &ldquo;Razumevanje unutrašnjih obrazaca je prvi korak ka svesnoj promeni.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── KAKO IZGLEDA RAD ─────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-y border-border">
        <div className="container-main section-padding">
          <div className="text-center mb-12">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">Proces</p>
            <h2 className="heading-lg mb-4">Kako izgleda rad</h2>
            <div className="gold-divider" />
            <p className="text-cream-muted mt-4 max-w-xl mx-auto">
              Online (telefon/video) individualan rad, strukturisan ali fleksibilan, prilagođen
              tvojoj spremnosti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Uvid",
                text: "Šta se dešava i kada. Šta je okidač, ciklus, tranzit, faza, trenutak… da se javi anksioznost, nervoza, bes, fobije, blokade, krize ili emotivni prekidi.",
              },
              {
                num: "02",
                title: "Fokus",
                text: "Šta je cilj i pravac rada.",
              },
              {
                num: "03",
                title: "Rad (na sebi)",
                text: "Kroz coaching, fokusirane metode, mentorstvo, konsultacije dolazimo do ZAŠTO, ali i kako dalje.",
              },
            ].map((step) => (
              <div key={step.num} className="card group hover:border-gold/40 transition-colors duration-300">
                <p className="font-serif text-3xl text-gold/30 mb-3 group-hover:text-gold/50 transition-colors">
                  {step.num}
                </p>
                <h3 className="heading-md mb-3">{step.title}</h3>
                <p className="text-cream-faint text-sm leading-relaxed">{step.text}</p>
              </div>
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
        <div className="container-main section-padding text-center">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4">Sledeći korak</p>
          <h2 className="heading-lg mb-4">Spremni ste za jasnoću i svesnu promenu?</h2>
          <div className="gold-divider" />
          <div className="mt-8">
            <Link href="/kontakt" className="btn-primary">
              Zakaži konsultaciju
            </Link>
          </div>
          <p className="mini-disclaimer mt-6">
            Rad je savetodavnog i coaching karaktera i ne predstavlja zamenu za medicinski ili
            klinički tretman.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="relative z-10 bg-bg-secondary border-t border-white/30">
        <div className="container-main section-padding">
          <div className="text-center mb-10">
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3">Imate pitanja?</p>
            <h2 className="heading-lg mb-2">Često postavljana pitanja</h2>
            <div className="gold-divider" />
          </div>

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
              <details
                key={i}
                className="group border border-white/40 rounded-lg"
                style={{ background: "rgba(255,255,255,0.28)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
              >
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none select-none">
                  <span className="flex items-start gap-3">
                    <span className="text-gold text-xs shrink-0 mt-1" aria-hidden>✦</span>
                    <span className="font-sans font-semibold text-sm md:text-base leading-snug" style={{ color: "#1e1a50" }}>
                      {item.q}
                    </span>
                  </span>
                  <span className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-180" aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-1 border-t border-white/30">
                  <p className="leading-relaxed text-sm md:text-base pl-6" style={{ color: "#4e4a7a" }}>
                    {item.a}
                  </p>
                </div>
              </details>
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
