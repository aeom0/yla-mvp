import { NextResponse } from "next/server";

/**
 * Suscripción lead magnet / newsletter (MVP sin proveedor externo).
 * Listo para conectar a Resend, Mailchimp, Supabase, etc.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const emailRaw =
    typeof body === "object" && body !== null && "email" in body
      ? String((body as { email: unknown }).email ?? "").trim()
      : "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailRaw)) {
    return NextResponse.json({ error: "Email no válido" }, { status: 400 });
  }

  return NextResponse.json({ ok: true as const });
}
