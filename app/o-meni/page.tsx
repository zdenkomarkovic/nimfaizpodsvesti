import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O Meni",
  description:
    "Jelena Stevanović, diplomirani psiholog i astropsihološki savetnik poznata kao Nimfa iz Podsvesti. Više od dve decenije istražuje unutrašnje psihološke obrasce kroz simboliku astrologije i procese ličnog razvoja.",
};

export default function OMeniPage() {
  return (
    <>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section className="relative pt-32 pb-16 border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(123,94,184,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="container-main relative z-10">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3">Upoznajte me</p>
          <h1 className="heading-xl mb-4">O Meni</h1>
          <div className="gold-divider mx-0" />
        </div>
      </section>

      {/* ── KRATKA BIO ───────────────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
            {/* Photo placeholder */}
            <div className="md:col-span-2">
              <div className="aspect-[3/4] rounded-lg bg-bg-card border border-border flex flex-col items-center justify-center text-cream-faint">
                <div
                  aria-hidden
                  className="text-6xl mb-4 opacity-40"
                  style={{ filter: "drop-shadow(0 0 16px rgba(201,168,76,0.3))" }}
                >
                  ☽✦☽
                </div>
                <p className="text-xs tracking-wider uppercase opacity-60">Foto</p>
              </div>
            </div>

            {/* Short bio */}
            <div className="md:col-span-3">
              <p className="text-body mb-6">
                Ja sam Jelena Steović, diplomirani psiholog i astropsihološki savetnik, poznata kao{" "}
                <strong className="text-cream">Nimfa iz Podsvesti</strong> i kao{" "}
                <strong className="text-cream">Nimfa bez Manije</strong>. Više od dve
                decenije istražujem načine na koje se unutrašnji psihološki obrasci ogledaju kroz
                simboliku astrologije, iskustva svesti i procese ličnog razvoja.
              </p>
              <p className="text-body mb-6">
                U radu integrišem psihologiju i astrologiju sa savremenim metodama mentorstva
                (coachinga) — NLP tehnikama, hipnotičkim metodama, CRT pristupom i regresivnim
                radom. Astrologiju koristim kao analitički alat koji pruža uvid u strukturu ličnosti
                i razvojne teme, NLP tehnike koristim za prepoznavanje i promenu nesvesnih obrazaca
                u cilju ličnog razvoja i donošenja svesnijih odluka, dok mi iskustvene tehnike
                omogućavaju dublji rad sa nesvesnim sadržajima, uključujući i teme koje se mogu
                doživljavati kao prošli životi.
              </p>
              <p className="text-body mb-6">
                Astropsihološko savetovanje predstavlja početni i neophodan okvir rada, kroz koji se
                stiče uvid u psihološku strukturu i razvojne teme, a na osnovu kog se dalje bira
                odgovarajući fokusirani metod rada.
              </p>
              <p className="text-body mb-8">
                Radim individualno, online, sa ljudima koji osećaju da njihova pitanja prevazilaze
                jedan životni ili racionalni nivo i traže podršku, usmeravanje i dublje razumevanje
                sebe, svojih obrazaca i potencijala.
              </p>

              <a href="#puna-bio" className="link-arrow">
                Pročitaj više <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PUNA BIO ─────────────────────────────────────── */}
      <section id="puna-bio" className="relative z-10 bg-bg-secondary border-t border-border">
        <div className="container-main section-padding">
          <div className="max-w-3xl mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3">Cela priča</p>
            <h2 className="heading-lg mb-4">Jelena Stevanović</h2>
            <p className="text-cream-faint text-sm mb-6 italic">
              alijas Nimfa iz Podsvesti (poznata i kao Nimfa bez Manije)
            </p>
            <div className="gold-divider mx-0 mb-10" />

            <div className="space-y-6 text-body">
              <p>
                Moje formalno obrazovanje iz psihologije završava se 2000. godine, ali moje
                istinsko putovanje u razumevanje čoveka počinje mnogo ranije — u trenutku kada sa
                petnaest godina prvi put proračunavam i, uz pomoć šestara i lenjira, crtam
                astrološku kartu. Već tada osećam da simbolički jezik neba govori o onome što
                psihologija tek kasnije počinje da imenuje.
              </p>

              <p>
                Tokom naredne 24 godine radim u marketingu inostranih kompanija i agencija, u svetu
                strategije, istraživanja tržišta, komunikacije i brendova. To iskustvo mi je
                omogućilo duboko razumevanje načina na koji ljudi razmišljaju, donose odluke i
                projektuju svoje unutrašnje procese u spoljašnji svet. Paralelno s tim, astrologija
                ostaje moja lična disciplina, prostor istraživanja i unutrašnjeg dijaloga. Sa
                razvojem tehnologije i dostupnošću savremenih alata, čini mi se da poslednjih 25
                godina nije prošao nijedan dan bez otvaranja barem jedne astrološke karte — makar
                kao pogled na aktuelne tranzite u odnosu na sopstveni natal.
              </p>

              <p>
                Astrologiju doživljavam kao drevnu umetnost precizne analize — spoj matematičkog
                proračuna kretanja nebeskih tela, energetskih ciklusa i mitoloških obrazaca koji
                imaju snažan uticaj na formiranje ličnosti u trenutku rođenja. Ona istovremeno
                pokazuje kako se struktura i dinamika psihe ogledaju u spoljašnjim okolnostima koje
                podstiču psihološki i duhovni razvoj. U svom radu astrologiju koristim kao
                analitički i interpretativni alat koji pruža dubok uvid u osnovne psihološke
                obrasce i razvojne izazove ličnosti. Natalni horoskop posmatram kao ličnu priču koja
                se vremenom razvija, progresira — priču u kojoj se iskustva menjaju uporedo sa
                razvojem svesti i karaktera.
              </p>

              <p>
                U jednom trenutku (tranzit Saturna preko natalnog Urana) odlučujem da veliku ljubav
                prema astrologiji i hobi formalizujem, pa godine 2014. završavam školu Prediktivne
                astrologije i sinastrije, čime se dugogodišnji hobi oblikuje u strukturisan i
                profesionalan rad, ali u tom periodu ostaje u domenu lične prakse i neprofitnog
                angažmana. Ipak, moj Uran (astrolog) je vladar mog 5. polja (hobi/ljubav prema
                nečemu), koji je egzaltiran (maksimalna snaga) u Škorpiji (psihologija) u 2. kući
                mog natala (novac/zarada/sposobnost sticanja), što vodi ka tome da od 2024. godine
                započinjem intenzivnu integraciju astrologije sa psihološkim savetovanjem. Kroz NLP
                edukaciju (Master nivo 2026), hipnotičke metode, CRT pristup i regresivni rad,
                dodatno produbljujem integrativni pristup koji povezuje psihologiju, astrologiju i
                savremene coaching tehnike.
              </p>

              <p>
                U radu koristim NLP tehnike koje omogućavaju prepoznavanje i promenu nesvesnih
                obrazaca mišljenja i ponašanja, kao i hipnotičke metode koje klijentima pomažu da
                uđu u stanje pojačane fokusirane pažnje. U tom prostoru postaju dostupni slojevi
                svesti koji u svakodnevnom funkcionisanju ostaju skriveni. Regresivni rad omogućava
                uvid u sadržaje koji se doživljavaju kao prošli životni ili duboko ukorenjeni
                memorijski obrasci — uvek sa fokusom na integraciju, razumevanje i svesnu promenu u
                sadašnjem životu.
              </p>

              <p>
                U astrološkom sistemu takođe postoji jasan postulat kontinuiteta svesti i iskustava,
                gde se teme prošlih života ili ranijih inkarnacija posmatraju kao prirodan deo
                psihološke strukture pojedinca. Upravo zato regresivni rad doživljavam kao logičan
                nastavak astrološkog uvida — ne kao verovanje, već kao metod istraživanja dubokih
                unutrašnjih sadržaja.
              </p>

              <p>
                Danas radim individualno astropsihološko savetovanje, online putem direktnih
                konsultacija, namenjeno onima koji osećaju da se njihova pitanja ne završavaju na
                jednom životnom sloju. Moj rad je usmeren na razumevanje unutrašnjih obrazaca, lični
                razvoj i osvešćivanje potencijala kroz spoj simboličkog, psihološkog i iskustvenog
                uvida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative z-10">
        <div className="container-main section-padding text-center">
          <h2 className="heading-md mb-6">Zainteresovani za rad?</h2>
          <Link href="/kontakt" className="btn-primary">
            Zakaži konsultaciju
          </Link>
        </div>
      </section>
    </>
  );
}
