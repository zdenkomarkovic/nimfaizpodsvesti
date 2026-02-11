import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="relative z-10 border-t border-white/40 mt-20"
      style={{
        background: "rgba(255,255,255,0.22)",
        backdropFilter: "blur(12px) saturate(1.1)",
        WebkitBackdropFilter: "blur(12px) saturate(1.1)",
      }}
    >
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/images/logoo.png"
                alt="Nimfa Iz Podsvesti"
                height={200}
                width={320}
                className="h-24 md:h-48 w-auto object-contain"
              />
            </Link>

            <p className="text-cream-faint text-sm leading-relaxed">
              Astropsihološko savetovanje, coaching i lični razvoj online.
            </p>
          </div>

          {/* Navigacija */}
          <div>
            <p className="text-cream-muted text-xs uppercase tracking-widest mb-4">
              Navigacija
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Početna" },
                { href: "/o-meni", label: "O Meni" },
                { href: "/usluge", label: "Usluge" },
                { href: "/za-koga", label: "Za Koga Je Ovaj Rad" },
                { href: "/kako-izgleda-rad", label: "Kako Izgleda Rad" },
                { href: "/cenovnik", label: "Cenovnik" },
                { href: "/faq", label: "FAQ" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream-faint hover:text-gold text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-cream-muted text-xs uppercase tracking-widest mb-4">
              Kontakt
            </p>
            <div className="flex flex-col gap-2 text-sm text-cream-faint">
              <a
                href="mailto:kontakt@nimfaizpodsvesti.com"
                className="hover:text-gold transition-colors duration-200"
              >
                kontakt@nimfaizpodsvesti.com
              </a>
              <a
                href="https://www.instagram.com/nimfaizpodsvesti"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors duration-200"
              >
                Instagram
              </a>
              <span>WhatsApp / Viber</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Impressum */}
          <div className="text-cream-faint text-xs leading-relaxed mb-6 space-y-1">
            <p className="font-semibold text-cream-muted">Impressum</p>
            <p>
              JELENA STEOVIĆ PR DAVANJE OSTALIH SAVETA PROMODADŽIJA NOVI PAZAR
            </p>
            <p>PIB: 111947661 &nbsp;|&nbsp; MB: 65760002</p>
          </div>

          {/* Disclaimer */}
          <div
            className="rounded p-4 text-cream-faint text-xs leading-relaxed mb-6 border border-white/40"
            style={{ background: "rgba(255,255,255,0.28)" }}
          >
            <p className="font-semibold text-cream-muted mb-1">Disclaimer</p>
            <p>
              Usluge i sadržaji na ovom sajtu imaju savetodavni i edukativni
              karakter u oblasti ličnog razvoja i samorazumevanja. Ne
              predstavljaju psihoterapiju, zdravstvenu delatnost, dijagnostiku
              niti lečenje.
            </p>
          </div>

          <p className="text-cream-faint text-xs text-center">
            © {new Date().getFullYear()} Nimfa Iz Podsvesti. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
