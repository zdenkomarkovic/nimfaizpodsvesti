"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/o-meni", label: "O Meni" },
  { href: "/usluge", label: "Usluge" },
  { href: "/za-koga", label: "Za Koga" },
  { href: "/kako-izgleda-rad", label: "Kako Izgleda Rad" },
  { href: "/cenovnik", label: "Cenovnik" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/40"
      style={{
        background: "rgba(255,255,255,0.28)",
        backdropFilter: "blur(16px) saturate(1.3)",
        WebkitBackdropFilter: "blur(16px) saturate(1.3)",
      }}
    >
      <div className="container-main flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logoo.png"
            alt="Nimfa Iz Podsvesti"
            height={48}
            width={160}
            className="h-10 md:h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-xs tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? "text-gold"
                  : "text-cream-muted hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/kontakt" className="btn-primary text-xs py-2 px-5">
            Zakaži konsultaciju
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream-muted hover:text-cream p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Otvori meni"
        >
          {menuOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="8" x2="21" y2="8" />
              <line x1="3" y1="16" x2="21" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/40"
          style={{
            background: "rgba(255,255,255,0.38)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <nav className="container-main py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-sans text-sm py-2 transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-cream-muted hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-center mt-2"
            >
              Zakaži konsultaciju
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
