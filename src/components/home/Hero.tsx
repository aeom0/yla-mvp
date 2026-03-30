"use client";

import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradiente de fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(91,58,142,.10) 0%, rgba(212,175,55,.08) 55%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--purple-soft) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
      />

      <div className="container-yla relative z-10 text-center py-24">
        <h1
          className="title text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          style={{ color: "var(--accent)" }}
        >
          {hero.title}
        </h1>

        <p
          className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto font-semibold leading-snug"
          style={{ color: "var(--text)" }}
        >
          {hero.headlineEmotional}
        </p>

        <p
          className="text-base md:text-lg mb-2 max-w-xl mx-auto font-medium"
          style={{ color: "var(--accent-warm)" }}
        >
          {hero.headlineAction}
        </p>

        <p className="text-sm mb-10" style={{ color: "var(--muted)" }}>
          {hero.microCta}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
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

        {/* Social proof — DEBAJO de los CTAs, no compite con el título */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-2xl mx-auto rounded-2xl overflow-hidden"
          style={{ background: "var(--border)", boxShadow: "0 2px 16px rgba(0,0,0,.06)" }}
        >
          {[
            { value: "3", label: "Programas" },
            { value: "100+", label: "Alumnas" },
            { value: "8+", label: "Clases/mes" },
            { value: "20+", label: "Productos" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center py-5 px-4"
              style={{ background: "var(--card)" }}
            >
              <div
                className="text-3xl md:text-4xl font-semibold mb-0.5"
                style={{ color: "var(--accent)", fontFamily: "var(--font-title)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
