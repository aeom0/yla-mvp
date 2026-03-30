"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export function Community() {
  const { community, newsletter } = siteContent;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleNewsletterSubmit(e: React.FormEvent<HTMLFormElement>) {
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
        setMessage(data.error ?? "No pudimos guardar tu email. Intenta otra vez.");
        return;
      }
      setStatus("success");
      setMessage("Gracias. Pronto recibís novedades en tu bandeja.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Sin conexión. Revisa tu red e intenta otra vez.");
    }
  }

  return (
    <Section id="comunidad">
      <SectionHeader
        title={community.sectionTitle}
        subtitle={community.sectionSubtitle}
        centered
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-4xl mx-auto mb-12">
        {community.instagramGrid.map((cell, i) => (
          <a
            key={i}
            href={cell.href}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 transition-soft hover:-translate-y-0.5 hover:shadow-md min-h-[120px]"
            style={{
              background:
                i % 3 === 0
                  ? "linear-gradient(145deg, color-mix(in srgb, var(--lavender) 25%, var(--beige)), var(--beige))"
                  : i % 3 === 1
                    ? "linear-gradient(145deg, color-mix(in srgb, var(--purple-brand) 12%, var(--beige)), var(--beige-warm))"
                    : "linear-gradient(145deg, var(--beige), color-mix(in srgb, var(--gold) 35%, var(--beige)))",
              border: "1px solid var(--border)",
            }}
          >
            <Instagram size={22} style={{ color: "var(--lavender-deep)" }} aria-hidden />
            <span className="text-xs font-medium text-center px-2" style={{ color: "var(--text)" }}>
              {cell.label}
            </span>
          </a>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center mb-10">
        <a
          href={siteContent.classes.socialPractice.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:opacity-80"
          style={{ color: "var(--lavender-deep)" }}
        >
          {siteContent.classes.socialPractice.label}
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card
          className="transition-soft hover:shadow-lg"
          style={{ borderTop: "3px solid var(--lavender)" }}
        >
          <CardBody className="py-10 px-6">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto md:mx-0"
              style={{ background: "rgba(180,151,214,.15)" }}
            >
              <MessageCircle size={32} style={{ color: "var(--lavender)" }} />
            </div>
            <h3 className="title text-2xl mb-3 text-center md:text-left">{community.title}</h3>
            <p className="mb-4 text-center md:text-left" style={{ color: "var(--muted)" }}>
              {community.description}
            </p>
            <p
              className="text-sm mb-6 text-center md:text-left leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {community.whatsappHelper}
            </p>
            <div className="flex justify-center md:justify-start">
              <Button
                variant="primary"
                className="min-h-[48px]"
                onClick={() => window.open(community.whatsappLink, "_blank")}
              >
                {community.whatsappCta}
              </Button>
            </div>
          </CardBody>
        </Card>

        <Card
          className="transition-soft hover:shadow-lg"
          style={{ borderTop: "3px solid var(--gold-deep)" }}
        >
          <CardBody className="py-10 px-6">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto md:mx-0"
              style={{ background: "rgba(201,169,110,.15)" }}
            >
              <Mail size={32} style={{ color: "var(--gold-deep)" }} />
            </div>
            <h3 className="title text-2xl mb-3 text-center md:text-left">{newsletter.title}</h3>
            <p className="mb-2 text-center md:text-left" style={{ color: "var(--muted)" }}>
              {newsletter.description}
            </p>
            <p className="text-xs mb-6 text-center md:text-left" style={{ color: "var(--muted)" }}>
              {newsletter.microcopy}
            </p>
            {status === "success" ? (
              <p
                className="rounded-2xl px-4 py-3 text-sm text-center"
                style={{ background: "var(--bg)", border: "1px solid var(--border)", color: "var(--text)" }}
              >
                {message}
              </p>
            ) : (
              <form className="flex flex-col gap-3" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder={newsletter.placeholder}
                  required
                  autoComplete="email"
                  disabled={status === "loading"}
                  className="rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold-deep)] min-h-[48px]"
                  style={{
                    border: "1px solid var(--border)",
                    background: "var(--bg)",
                    color: "var(--text)",
                  }}
                />
                <Button type="submit" variant="primary" disabled={status === "loading"} className="min-h-[48px]">
                  {status === "loading" ? "Enviando…" : newsletter.cta}
                </Button>
              </form>
            )}
            {status === "error" && message ? (
              <p className="mt-3 text-sm text-center" style={{ color: "#b91c1c" }} role="alert">
                {message}
              </p>
            ) : null}
          </CardBody>
        </Card>
      </div>
    </Section>
  );
}
