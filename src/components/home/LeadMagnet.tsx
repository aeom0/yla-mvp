"use client";

import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/content";
import { useState } from "react";

export function LeadMagnet() {
  const { leadMagnet } = siteContent;
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
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
      className="py-14 sm:py-20 md:py-24"
      style={{ background: "var(--section-alt)" }}
    >
      <div className="container-yla max-w-2xl mx-auto text-center px-4">
        <h2
          className="title text-2xl sm:text-3xl md:text-4xl mb-4 px-1 leading-tight"
          style={{ color: "var(--accent)" }}
        >
          {leadMagnet.title}
        </h2>
        <p
          className="text-base md:text-lg mb-10 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {leadMagnet.subtitle}
        </p>

        {status === "success" ? (
          <p
            className="rounded-2xl px-6 py-4 text-sm font-medium"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          >
            {message}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto items-stretch"
          >
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
              className="flex-1 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-(--purple) min-h-12"
              style={{
                border: "1px solid var(--border)",
                background: "var(--card)",
                color: "var(--text)",
              }}
            />
            <Button
              type="submit"
              variant="primary"
              className="sm:w-auto shrink-0 min-h-12"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando…" : leadMagnet.submitLabel}
            </Button>
          </form>
        )}

        {status === "error" && message && (
          <p className="mt-4 text-sm" style={{ color: "#b91c1c" }} role="alert">
            {message}
          </p>
        )}

        <p className="mt-6 text-xs" style={{ color: "var(--muted)" }}>
          {leadMagnet.privacyNote}
        </p>
      </div>
    </section>
  );
}
