"use client";

import { useState } from "react";

export default function PunaBio() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Dugme */}
      <div className="text-center mb-5 md:mb-8">
        <button onClick={() => setOpen((v) => !v)} className="link-arrow">
          {open ? "Sakrij" : "Pročitaj više"}{" "}
          <span aria-hidden>{open ? "↑" : "↓"}</span>
        </button>
      </div>

      {/* Proširivi sadržaj */}
      {open && (
        <section
          id="puna-bio"
          className="relative z-10 bg-bg-secondary border-t border-border mt-0"
        >
          <div className="container-main section-padding">
            <div className="max-w-4xl mx-auto">
              <p className="text-teget text-xs uppercase tracking-[0.25em] mb-3">
                Cela priča
              </p>
              <h2 className="heading-lg mb-4">Jelena Stevanović</h2>
              <p className="text-cream-faint text-sm mb-6 italic">
                alijas Nimfa Iz Podsvesti (poznata i kao Nimfa Bez Manije)
              </p>
              <div className="gold-divider mx-0 mb-10" />

              <div className="space-y-6 text-body">
                <p>
                  Moje formalno obrazovanje iz psihologije završava se 2000.
                  godine, ali moje istinsko putovanje u razumevanje čoveka
                  počinje mnogo ranije — u trenutku kada sa{" "}
                  <strong> petnaest godina</strong> prvi put proračunavam i, uz
                  pomoć šestara i lenjira,
                  <strong> crtam astrološku kartu</strong>.
                  <br />
                  Već tada prepoznajem da<strong>
                    {" "}
                    simbolički jezik neba
                  </strong>{" "}
                  govori o onome što<strong> psihologija</strong> tek
                  <strong> kasnije počinje da imenuje</strong>.
                </p>
                <p>
                  Tokom naredne 24 godine
                  <strong>
                    {" "}
                    radim u marketingu inostranih kompanija i agencija
                  </strong>{" "}
                  — u svetu strategije, istraživanja tržišta, komunikacije i
                  brendova.
                  <br />
                  To iskustvo mi donosi duboko razumevanje načina na koji ljudi
                  razmišljaju, donose odluke i projektuju unutrašnje procese u
                  spoljašnji svet.
                  <br />
                  Paralelno s tim,
                  <strong> astrologija ostaje moja lična disciplina</strong> —
                  prostor istraživanja i unutrašnjeg dijaloga.
                  <br />
                  Sa razvojem tehnologije, čini mi se da poslednjih 25 godina
                  nije prošao nijedan dan bez otvaranja barem jedne astrološke
                  karte — makar kroz pogled na aktuelne tranzite u odnosu na
                  sopstveni natal.
                </p>
                <p>
                  <strong>
                    {" "}
                    Astrologiju doživljavam kao drevnu umetnost precizne analize
                  </strong>{" "}
                  — spoj matematičkog proračuna kretanja nebeskih tela,
                  energetskih ciklusa i mitoloških obrazaca koji imaju snažan
                  uticaj na formiranje ličnosti u trenutku rođenja. Istovremeno
                  pokazuje kako se struktura i dinamika psihe ogledaju u
                  spoljašnjim okolnostima koje podstiču psihološki i duhovni
                  razvoj. U svom radu
                  <strong>
                    {" "}
                    astrologiju koristim kao analitički i interpretativni alat
                  </strong>{" "}
                  koji pruža dubok uvid u osnovne psihološke obrasce i razvojne
                  izazove ličnosti.
                  <strong>
                    {" "}
                    Natalni horoskop posmatram kao ličnu priču koja se razvija i
                    menja
                  </strong>{" "}
                  — uporedo sa razvojem svesti i karaktera.
                </p>

                <p>
                  U jednom trenutku
                  <strong> (tranzit Saturna preko natalnog Urana)</strong>{" "}
                  odlučujem da veliku ljubav prema astrologiji formalizujem.
                  Godine 2014. završavam školu prediktivne astrologije i
                  sinastrije, čime se dugogodišnji hobi oblikuje u strukturisan
                  i profesionalan rad, ali u tom periodu ostaje u domenu lične
                  prakse i neprofitnog angažmana.
                </p>

                <p>
                  Ipak,
                  <strong>
                    {" "}
                    moj Uran (astrolog) je vladar mog 5. polja (hobi/ljubav
                    prema nečemu), egzaltiran u Škorpiji (psihologija) u 2. kući
                    mog natala (novac/zarada/sposobnost sticanja)
                  </strong>
                  , što prirodno vodi ka tome da od 2024. godine započinjem
                  intenzivnu integraciju astrologije sa psihološkim
                  savetovanjem.
                </p>

                <p>
                  Kroz
                  <strong>
                    {" "}
                    NLP edukaciju, hipnotičke metode, CRT pristup i regresivni
                    rad
                  </strong>
                  , dodatno produbljujem integrativni pristup koji
                  <strong>
                    {" "}
                    povezuje psihologiju, astrologiju i savremene coaching
                    tehnike
                  </strong>
                  . <br /> U radu koristim NLP tehnike koje omogućavaju
                  prepoznavanje i promenu nesvesnih obrazaca mišljenja i
                  ponašanja, kao i hipnotičke metode koje klijentima pomažu da
                  uđu u stanje pojačane fokusirane pažnje. U tom prostoru
                  postaju dostupni slojevi svesti koji u svakodnevnom
                  funkcionisanju ostaju skriveni.
                </p>
                <p>
                  <strong> Regresivni rad</strong> omogućava uvid u sadržaje
                  koji se doživljavaju kao
                  <strong>
                    {" "}
                    prošli životni ili duboko ukorenjeni memorijski obrasci
                  </strong>{" "}
                  — uvek sa fokusom na integraciju, razumevanje i svesnu promenu
                  u sadašnjem životu. U astrološkom sistemu takođe postoji jasan
                  postulat kontinuiteta svesti i iskustava, gde se teme prošlih
                  života ili ranijih inkarnacija posmatraju kao prirodan deo
                  psihološke strukture pojedinca. Upravo zato
                  <strong>
                    {" "}
                    regresivni rad doživljavam kao logičan nastavak astrološkog
                    uvida — ne kao verovanje, već kao metod istraživanja dubokih
                    unutrašnjih sadržaja
                  </strong>
                  .
                </p>
                <p>
                  Finalno, danas radim
                  <strong>
                    {" "}
                    individualno astropsihološko savetovanje, online putem
                    direktnih konsultacija
                  </strong>
                  , namenjeno onima koji osećaju da se njihova pitanja ne
                  završavaju na jednom životnom sloju. Moj rad usmeren je na
                  razumevanje unutrašnjih obrazaca, lični razvoj i osvešćivanje
                  potencijala kroz spoj simboličkog, psihološkog i iskustvenog
                  uvida.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
