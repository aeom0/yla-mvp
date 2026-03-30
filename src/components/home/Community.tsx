"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { TiktokGlyph } from "@/components/ui/icons/TiktokGlyph";
import { lucideBrand } from "@/lib/lucideBrand";
import { Instagram, MessageCircle, Youtube } from "lucide-react";

const CHANNELS = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@yube.karina",
    description: "Práctica, reflexiones y detrás de cámaras.",
    icon: Instagram,
    href: "https://www.instagram.com/yube.karina?igsh=MWg4Z2M5ang2YzI2bg==",
    color: "var(--purple)",
    bg: "var(--purple-mist)",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@yube.karina",
    description: "Clips cortos de movimiento e intención.",
    icon: TiktokGlyph,
    href: "https://tiktok.com/@yube.karina",
    color: "var(--purple)",
    bg: "var(--purple-mist)",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "@yube.karinag",
    description: "Clases completas y contenido en profundidad.",
    icon: Youtube,
    href: "https://youtube.com/@yube.karinag?si=tBKXzfHdKXK6Sx7t",
    color: "var(--purple)",
    bg: "var(--purple-mist)",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: "Yoga con Lógica y Alma",
    description: "Escríbenos directamente o únete al grupo.",
    icon: MessageCircle,
    href: "https://wa.me/584243547179",
    color: "var(--gold)",
    bg: "var(--gold-pale)",
  },
] as const;

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
      setMessage("Gracias. Pronto recibirás novedades en tu bandeja.");
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

      {/* 4 canales sociales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10 sm:mb-14">
        {CHANNELS.map((ch) => {
          const Icon = ch.icon;
          return (
            <a
              key={ch.id}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-2 sm:gap-3 rounded-2xl p-4 sm:p-5 transition-soft hover:-translate-y-1 hover:shadow-md min-h-0"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <span
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: ch.bg }}
              >
                <Icon {...lucideBrand} size={22} style={{ color: ch.color }} aria-hidden />
              </span>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                  {ch.label}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                  {ch.handle}
                </p>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                {ch.description}
              </p>
            </a>
          );
        })}
      </div>

      {/* Newsletter */}
      <div
        className="max-w-lg mx-auto rounded-2xl p-8"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      >
        <h3 className="title text-2xl mb-2 text-center">{newsletter.title}</h3>
        <p className="text-sm mb-1 text-center" style={{ color: "var(--muted)" }}>
          {newsletter.description}
        </p>
        <p className="text-xs mb-6 text-center" style={{ color: "var(--muted)" }}>
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
              className="rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--purple)] min-h-[48px]"
              style={{ border: "1px solid var(--border)", background: "var(--bg)", color: "var(--text)" }}
            />
            <Button type="submit" variant="primary" disabled={status === "loading"} className="min-h-[48px]">
              {status === "loading" ? "Enviando…" : newsletter.cta}
            </Button>
          </form>
        )}
        {status === "error" && message && (
          <p className="mt-3 text-sm text-center" style={{ color: "#b91c1c" }} role="alert">
            {message}
          </p>
        )}
      </div>
    </Section>
  );
}
