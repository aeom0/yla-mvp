"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/content";
import { Check, Sparkles } from "lucide-react";

export function LeadMagnet() {
  const { leadMagnet } = siteContent;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const email = String(fd.get("email") ?? "").trim();
    if (!email) return;

    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Algo salió mal. Intenta de nuevo.");
        return;
      }
      setStatus("success");
      setMessage(leadMagnet.successMessage);
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Sin conexión. Revisa tu red e intenta otra vez.");
    }
  }

  return (
    <section
      id="guia-gratis"
      className="py-20 md:py-24"
      style={{
        background: "color-mix(in srgb, var(--lila-doc) 22%, var(--beige))",
      }}
    >
      <div className="container-yla max-w-3xl mx-auto text-center px-4">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
          style={{
            background: "rgba(91,58,142,.12)",
            border: "1px solid color-mix(in srgb, var(--purple-brand) 35%, transparent)",
          }}
        >
          <Sparkles size={16} style={{ color: "var(--purple-brand)" }} aria-hidden />
          <span className="text-sm font-medium" style={{ color: "var(--purple-brand)" }}>
            Regalo para nuevas almas
          </span>
        </div>
        <h2 className="title text-3xl md:text-4xl mb-4" style={{ color: "var(--text)" }}>
          {leadMagnet.title}
        </h2>
        <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--muted)" }}>
          {leadMagnet.subtitle}
        </p>
        <ul className="text-left max-w-md mx-auto space-y-3 mb-10 text-sm md:text-base">
          <li className="flex gap-3 items-start">
            <Check className="flex-shrink-0 mt-0.5" size={18} style={{ color: "var(--gold-deep)" }} />
            <span style={{ color: "var(--text)" }}>{leadMagnet.bulletLogic}</span>
          </li>
          <li className="flex gap-3 items-start">
            <Check className="flex-shrink-0 mt-0.5" size={18} style={{ color: "var(--gold-deep)" }} />
            <span style={{ color: "var(--text)" }}>{leadMagnet.bulletSoul}</span>
          </li>
        </ul>

        {status === "success" ? (
          <p className="rounded-2xl px-6 py-4 text-sm font-medium" style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)" }}>
            {message}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto items-stretch">
            <label htmlFor="lead-email" className="sr-only">
              {leadMagnet.emailPlaceholder}
            </label>
            <input
              id="lead-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={leadMagnet.emailPlaceholder}
              disabled={status === "loading"}
              className="flex-1 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold-deep)]"
              style={{
                border: "1px solid var(--border)",
                background: "var(--card)",
                color: "var(--text)",
              }}
            />
            <Button type="submit" variant="primary" className="sm:w-auto shrink-0" disabled={status === "loading"}>
              {status === "loading" ? "Enviando…" : leadMagnet.submitLabel}
            </Button>
          </form>
        )}

        {status === "error" && message ? (
          <p className="mt-4 text-sm" style={{ color: "#b91c1c" }} role="alert">
            {message}
          </p>
        ) : null}

        <p className="mt-6 text-xs" style={{ color: "var(--muted)" }}>
          {leadMagnet.privacyNote}
        </p>
      </div>
    </section>
  );
}
