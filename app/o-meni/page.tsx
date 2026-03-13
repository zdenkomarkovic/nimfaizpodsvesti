import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PunaBio from "./PunaBio";

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
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3">
            Upoznajte me
          </p>
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
              <div className="aspect-[3/4] rounded-lg overflow-hidden relative">
                <Image
                  src="/images/About me.jpg"
                  alt="Jelena Stevanović – Nimfa iz Podsvesti"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Short bio */}
            <div className="md:col-span-3">
              <p className="text-body mb-6">
                Ja sam Jelena Stevanović, diplomirani psiholog i astropsihološki
                savetnik, poznata kao{" "}
                <strong className="text-cream">Nimfa iz Podsvesti</strong> i kao{" "}
                <strong className="text-cream">Nimfa bez Manije</strong>. Više
                od dve decenije istražujem načine na koje se unutrašnji
                psihološki obrasci ogledaju kroz simboliku astrologije, iskustva
                svesti i procese ličnog razvoja.
              </p>
              <p className="text-body mb-6">
                U radu integrišem psihologiju i astrologiju sa savremenim
                metodama mentorstva (coachinga) — NLP tehnikama, hipnotičkim
                metodama, CRT pristupom i regresivnim radom. Astrologiju
                koristim kao analitički alat koji pruža uvid u strukturu
                ličnosti i razvojne teme, NLP tehnike koristim za prepoznavanje
                i promenu nesvesnih obrazaca u cilju ličnog razvoja i donošenja
                svesnijih odluka, dok mi iskustvene tehnike omogućavaju dublji
                rad sa nesvesnim sadržajima, uključujući i teme koje se mogu
                doživljavati kao prošli životi.
              </p>
              <p className="text-body mb-6">
                Astropsihološko savetovanje predstavlja početni i neophodan
                okvir rada, kroz koji se stiče uvid u psihološku strukturu i
                razvojne teme, a na osnovu kog se dalje bira odgovarajući
                fokusirani metod rada.
              </p>
              <p className="text-body">
                Radim individualno, online, sa ljudima koji osećaju da njihova
                pitanja prevazilaze jedan životni ili racionalni nivo i traže
                podršku, usmeravanje i dublje razumevanje sebe, svojih obrazaca
                i potencijala.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PunaBio />

      {/* ── EDUKACIJE ────────────────────────────────────── */}
      <section className="relative z-10 border-t border-border">
        <div className="container-main section-padding">
          <div className="max-w-4xl mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3">
              Studies &amp; Certificates
            </p>
            <h2 className="heading-lg mb-4">Edukacije i sertifikati</h2>
            <div className="gold-divider mx-0 mb-10" />

            <div className="space-y-6">
              {[
                {
                  title: "Diplomirani psiholog",
                  period: "1993 – 2000",
                  institution: "Faculty of Philosophy – Department of Psychology, University of Belgrade",
                },
                {
                  title: "Astrolog",
                  period: "2012 – 2014",
                  institution: "Spicum škola astrologije",
                },
                {
                  title: "NLP Basic",
                  period: "2023",
                  institution: "MYND akademija – IANLP sertifikat",
                },
                {
                  title: "NLP Practitioner",
                  period: "2024 – 2025",
                  institution: "MYND akademija – IANLP sertifikat",
                },
                {
                  title: "NLP Master (on going)",
                  period: "2024 – 2026",
                  institution: "MYND akademija – IANLP sertifikat",
                },
                {
                  title: "Certified Hypnotherapist",
                  period: "2024",
                  institution: "NEW ERA akademija – IHA sertifikat",
                },
                {
                  title: "Certified PLR Therapist",
                  period: "2024",
                  institution: "NEW ERA akademija",
                },
                {
                  title: "Certified Complete Restoration Therapist",
                  period: "2024",
                  institution: "NEW ERA akademija",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-6 border-b border-border last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-cream font-semibold">{edu.title}</p>
                    <p className="text-cream-muted text-sm mt-0.5">{edu.institution}</p>
                  </div>
                  <span className="text-gold text-sm shrink-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="relative z-10 border-t border-border">
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
