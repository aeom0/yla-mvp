"use client";

import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradiente muy sutil — solo profundidad, sin color dominante */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(91,58,142,.07) 0%, rgba(200,168,75,.04) 60%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(91,58,142,.10) 0%, transparent 65%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,168,75,.07) 0%, transparent 65%)",
        }}
      />

      <div className="container-yla relative z-10 text-center py-16 sm:py-20 md:py-24">
        <h1
          className="title text-[clamp(1.85rem,6.5vw,4.5rem)] sm:text-5xl md:text-6xl lg:text-7xl mb-5 sm:mb-6 leading-[1.12] sm:leading-tight px-1"
          style={{ color: "var(--accent)" }}
        >
          {hero.title}
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl mb-4 max-w-2xl mx-auto font-semibold leading-snug px-2"
          style={{ color: "var(--text)" }}
        >
          {hero.headlineEmotional}
        </p>

        <p
          className="text-base md:text-lg mb-2 max-w-xl mx-auto"
          style={{ color: "var(--muted)" }}
        >
          {hero.headlineAction}
        </p>

        <p className="text-sm mb-10" style={{ color: "var(--muted)", opacity: 0.7 }}>
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
      </div>
    </section>
  );
}
