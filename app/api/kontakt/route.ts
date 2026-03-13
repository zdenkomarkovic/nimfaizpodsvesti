import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { ime, email, poruka } = await req.json();

  if (!ime || !email || !poruka) {
    return NextResponse.json({ error: "Sva polja su obavezna." }, { status: 400 });
  }

  const body = {
    Messages: [
      {
        From: {
          Email: process.env.SITE_MAIL_SENDER,
          Name: "Nimfa iz Podsvesti – Kontakt forma",
        },
        To: [{ Email: process.env.SITE_MAIL_RECEIVER }],
        ReplyTo: { Email: email, Name: ime },
        Subject: `Nova poruka od ${ime}`,
        TextPart: `Ime: ${ime}\nEmail: ${email}\n\n${poruka}`,
        HTMLPart: `<p><strong>Ime:</strong> ${ime}</p><p><strong>Email:</strong> ${email}</p><hr/><p>${poruka.replace(/\n/g, "<br/>")}</p>`,
      },
    ],
  };

  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(
          `${process.env.MAILJET_API_KEY}:${process.env.MAILJET_SECRET_KEY}`
        ).toString("base64"),
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Slanje nije uspelo." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
