"use client";

import { useState } from "react";

export default function KontaktForm() {
  const [form, setForm] = useState({ ime: "", email: "", poruka: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="card text-center border-teget/30 py-10">
        <div className="text-4xl text-teget/60 mb-4" aria-hidden>✦</div>
        <p className="text-cream font-semibold mb-2">Poruka je poslata!</p>
        <p className="text-cream-muted text-sm">
          Odgovorim u roku od 24 sata.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-cream-muted text-xs uppercase tracking-widest mb-1.5">
          Ime
        </label>
        <input
          type="text"
          required
          value={form.ime}
          onChange={(e) => setForm({ ...form, ime: e.target.value })}
          className="w-full bg-bg-card border border-border rounded px-4 py-2.5 text-cream text-sm placeholder:text-cream-faint focus:outline-none focus:border-teget/50 transition-colors"
          placeholder="Tvoje ime"
        />
      </div>

      <div>
        <label className="block text-cream-muted text-xs uppercase tracking-widest mb-1.5">
          Email
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-bg-card border border-border rounded px-4 py-2.5 text-cream text-sm placeholder:text-cream-faint focus:outline-none focus:border-teget/50 transition-colors"
          placeholder="tvoj@email.com"
        />
      </div>

      <div>
        <label className="block text-cream-muted text-xs uppercase tracking-widest mb-1.5">
          Poruka
        </label>
        <textarea
          required
          rows={5}
          value={form.poruka}
          onChange={(e) => setForm({ ...form, poruka: e.target.value })}
          className="w-full bg-bg-card border border-border rounded px-4 py-2.5 text-cream text-sm placeholder:text-cream-faint focus:outline-none focus:border-teget/50 transition-colors resize-none"
          placeholder="Ukratko opiši šta te dovodi..."
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Slanje nije uspelo. Pokušaj ponovo ili me kontaktiraj direktno.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Šalje se..." : "Pošalji poruku"}
      </button>
    </form>
  );
}
