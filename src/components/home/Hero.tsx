"use client";

import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(91,58,142,.10) 0%, rgba(212,175,55,.06) 55%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-15 pointer-events-none"
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
