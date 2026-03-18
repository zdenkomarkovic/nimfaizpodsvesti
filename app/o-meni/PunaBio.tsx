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
                alijas Nimfa iz Podsvesti (poznata i kao Nimfa bez Manije)
              </p>
              <div className="gold-divider mx-0 mb-10" />

              <div className="space-y-6 text-body">
                <p>
                  Moje formalno obrazovanje iz psihologije završava se 2000.
                  godine, ali moje istinsko putovanje u razumevanje čoveka
                  počinje mnogo ranije — u trenutku kada sa petnaest godina prvi
                  put proračunavam i, uz pomoć šestara i lenjira, crtam
                  astrološku kartu. Već tada osećam da simbolički jezik neba
                  govori o onome što psihologija tek kasnije počinje da imenuje.
                </p>

                <p>
                  Tokom naredne 24 godine radim u marketingu inostranih
                  kompanija i agencija, u svetu strategije, istraživanja
                  tržišta, komunikacije i brendova. To iskustvo mi je omogućilo
                  duboko razumevanje načina na koji ljudi razmišljaju, donose
                  odluke i projektuju svoje unutrašnje procese u spoljašnji
                  svet. Paralelno s tim, astrologija ostaje moja lična
                  disciplina, prostor istraživanja i unutrašnjeg dijaloga. Sa
                  razvojem tehnologije i dostupnošću savremenih alata, čini mi
                  se da poslednjih 25 godina nije prošao nijedan dan bez
                  otvaranja barem jedne astrološke karte — makar kao pogled na
                  aktuelne tranzite u odnosu na sopstveni natal.
                </p>

                <p>
                  Astrologiju doživljavam kao drevnu umetnost precizne analize —
                  spoj matematičkog proračuna kretanja nebeskih tela,
                  energetskih ciklusa i mitoloških obrazaca koji imaju snažan
                  uticaj na formiranje ličnosti u trenutku rođenja. Ona
                  istovremeno pokazuje kako se struktura i dinamika psihe
                  ogledaju u spoljašnjim okolnostima koje podstiču psihološki i
                  duhovni razvoj. U svom radu astrologiju koristim kao
                  analitički i interpretativni alat koji pruža dubok uvid u
                  osnovne psihološke obrasce i razvojne izazove ličnosti.
                  Natalni horoskop posmatram kao ličnu priču koja se vremenom
                  razvija, progresira — priču u kojoj se iskustva menjaju
                  uporedo sa razvojem svesti i karaktera.
                </p>

                <p>
                  U jednom trenutku (tranzit Saturna preko natalnog Urana)
                  odlučujem da veliku ljubav prema astrologiji i hobi
                  formalizujem, pa godine 2014. završavam školu Prediktivne
                  astrologije i sinastrije, čime se dugogodišnji hobi oblikuje u
                  strukturisan i profesionalan rad, ali u tom periodu ostaje u
                  domenu lične prakse i neprofitnog angažmana.{" "}
                  <span className="font-bold">
                    {" "}
                    Ipak, moj Uran (astrolog) je vladar mog 5. polja
                    (hobi/ljubav prema nečemu), koji je egzaltiran (maksimalna
                    snaga) u Škorpiji (psihologija) u 2. kući mog natala
                    (novac/zarada/sposobnost sticanja), što vodi ka tome da od
                    2024. godine započinjem intenzivnu integraciju astrologije
                    sa psihološkim savetovanjem
                  </span>
                  . Kroz NLP edukaciju (Master nivo 2026), hipnotičke metode,
                  CRT pristup i regresivni rad, dodatno produbljujem
                  integrativni pristup koji povezuje psihologiju, astrologiju i
                  savremene coaching tehnike.
                </p>

                <p>
                  U radu koristim NLP tehnike koje omogućavaju prepoznavanje i
                  promenu nesvesnih obrazaca mišljenja i ponašanja, kao i
                  hipnotičke metode koje klijentima pomažu da uđu u stanje
                  pojačane fokusirane pažnje. U tom prostoru postaju dostupni
                  slojevi svesti koji u svakodnevnom funkcionisanju ostaju
                  skriveni. Regresivni rad omogućava uvid u sadržaje koji se
                  doživljavaju kao prošli životni ili duboko ukorenjeni
                  memorijski obrasci — uvek sa fokusom na integraciju,
                  razumevanje i svesnu promenu u sadašnjem životu.
                </p>

                <p>
                  U astrološkom sistemu takođe postoji jasan postulat
                  kontinuiteta svesti i iskustava, gde se teme prošlih života
                  ili ranijih inkarnacija posmatraju kao prirodan deo psihološke
                  strukture pojedinca. Upravo zato regresivni rad doživljavam
                  kao logičan nastavak astrološkog uvida — ne kao verovanje, već
                  kao metod istraživanja dubokih unutrašnjih sadržaja.
                </p>

                <p>
                  Danas radim individualno astropsihološko savetovanje, online
                  putem direktnih konsultacija, namenjeno onima koji osećaju da
                  se njihova pitanja ne završavaju na jednom životnom sloju. Moj
                  rad je usmeren na razumevanje unutrašnjih obrazaca, lični
                  razvoj i osvešćivanje potencijala kroz spoj simboličkog,
                  psihološkog i iskustvenog uvida.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
