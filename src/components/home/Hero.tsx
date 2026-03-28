"use client";

import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/content";
import { Sparkles } from "lucide-react";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Fondo degradado lila → beige */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(180,151,214,.13) 0%, rgba(232,211,163,.10) 60%, transparent 100%)",
        }}
      />
      {/* Orbe decorativo superior derecha */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--lavender) 0%, transparent 70%)",
        }}
      />
      {/* Orbe dorado inferior izquierda */}
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--gold-deep) 0%, transparent 70%)",
        }}
      />

      <div className="container-yla relative z-10 text-center py-24">
        {/* Tagline pill */}
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

        {/* Título */}
        <h1
          className="title text-5xl md:text-6xl lg:text-7xl mb-5 leading-tight"
          style={{ color: "var(--accent)" }}
        >
          {hero.title}
        </h1>

        {/* Subtítulo */}
        <p
          className="text-xl md:text-2xl mb-3 max-w-2xl mx-auto font-medium"
          style={{ color: "var(--text)" }}
        >
          {hero.subtitle}
        </p>

        {/* Descripción */}
        <p
          className="text-lg md:text-xl mb-12 max-w-xl mx-auto italic"
          style={{ color: "var(--muted)" }}
        >
          &ldquo;{hero.description}&rdquo;
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            className="text-base px-8 py-4"
            onClick={() =>
              (window.location.href = siteContent.community.whatsappLink)
            }
          >
            {hero.cta.primary}
          </Button>
          <Button
            variant="ghost"
            className="text-base px-8 py-4"
            onClick={() =>
              document
                .getElementById("filosofia")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {hero.cta.secondary}
          </Button>
        </div>

        {/* Stats — con acento dorado en el valor */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "4", label: "Programas" },
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
