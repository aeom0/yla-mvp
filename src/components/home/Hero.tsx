"use client";

import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/content";
import { Sparkles } from "lucide-react";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, color-mix(in srgb, var(--purple-brand) 8%, transparent) 0%, rgba(232,211,163,.10) 55%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--lavender) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--gold-deep) 0%, transparent 70%)",
        }}
      />

      <div className="container-yla relative z-10 text-center py-24">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
          style={{
            background: "rgba(232,211,163,.25)",
            border: "1px solid var(--gold-deep)",
          }}
        >
          <Sparkles size={14} style={{ color: "var(--gold-deep)" }} />
          <span
            className="text-sm font-medium"
            style={{ color: "var(--gold-deep)" }}
          >
            {hero.tagline}
          </span>
        </div>

        <h1
          className="title text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          style={{ color: "var(--accent)" }}
        >
          {hero.title}
        </h1>

        <p
          className="text-xl md:text-2xl mb-3 max-w-2xl mx-auto font-semibold leading-snug"
          style={{ color: "var(--text)" }}
        >
          {hero.headlineEmotional}
        </p>
        <p
          className="text-lg md:text-xl mb-3 max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--text)" }}
        >
          {hero.headlineMethod}
        </p>
        <p
          className="text-base md:text-lg mb-2 max-w-xl mx-auto font-medium"
          style={{ color: "var(--gold-deep)" }}
        >
          {hero.headlineAction}
        </p>
        <p className="text-sm mb-10" style={{ color: "var(--muted)" }}>
          {hero.microCta}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            className="text-base px-8 py-4 min-h-[48px]"
            onClick={() =>
              document.getElementById("guia-gratis")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {hero.cta.primary}
          </Button>
          <Button
            variant="ghost"
            className="text-base px-8 py-4 min-h-[48px]"
            onClick={() =>
              document.getElementById("programas")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {hero.cta.secondary}
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "3", label: "Programas" },
            { value: "100+", label: "Alumnas" },
            { value: "8+", label: "Clases/mes" },
            { value: "20+", label: "Productos" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-4xl md:text-5xl font-semibold mb-1"
                style={{ color: "var(--gold-deep)", fontFamily: "var(--font-title)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "var(--muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
