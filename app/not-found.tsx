import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-main text-center">
        <p className="font-serif text-gold text-6xl mb-4 opacity-40">404</p>
        <h1 className="heading-lg mb-4">Stranica nije pronađena</h1>
        <div className="gold-divider" />
        <p className="text-cream-muted mb-8">Stranica koju tražiš ne postoji ili je premeštena.</p>
        <Link href="/" className="btn-primary">
          Povratak na početnu
        </Link>
      </div>
    </div>
  );
}
