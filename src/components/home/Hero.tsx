"use client";

import { Button } from "@/components/ui/Button";
import type { SiteContent } from "@/data/content";
import { siteContent } from "@/data/content";

type HeroProps = {
  hero?: SiteContent["hero"];
};

export function Hero({ hero: heroProp }: HeroProps) {
  const hero = heroProp ?? siteContent.hero;
  const hasBanner = !!hero.bannerImage;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* ── Imagen de fondo (banner) ── */}
      {hasBanner && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${hero.bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />
      )}

      {/* Overlay: más opaco si hay banner para legibilidad del texto */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: hasBanner
            ? "linear-gradient(160deg, color-mix(in srgb, var(--accent) 72%, transparent) 0%, color-mix(in srgb, var(--violet-anchor) 80%, transparent) 100%)"
            : "linear-gradient(160deg, color-mix(in srgb, var(--accent) 7%, transparent) 0%, color-mix(in srgb, var(--accent-soft) 4%, transparent) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Orbes decorativos — solo sin banner */}
      {!hasBanner && (
        <>
          <div
            aria-hidden="true"
            className="absolute -top-32 -right-32 w-120 h-120 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--accent) 10%, transparent) 0%, transparent 65%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, color-mix(in srgb, var(--accent-soft) 7%, transparent) 0%, transparent 65%)",
            }}
          />
        </>
      )}

      <div className="container-yla relative z-10 text-center py-16 sm:py-20 md:py-24">
        <h1
          className="title text-[clamp(1.85rem,6.5vw,4.5rem)] sm:text-5xl md:text-6xl lg:text-7xl mb-5 sm:mb-6 leading-[1.12] sm:leading-tight px-1"
          style={{ color: hasBanner ? "white" : "var(--accent)" }}
        >
          {hero.title}
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl mb-4 max-w-2xl mx-auto font-semibold leading-snug px-2"
          style={{
            color: hasBanner
              ? "color-mix(in srgb, white 92%, transparent)"
              : "var(--text)",
          }}
        >
          {hero.headlineEmotional}
        </p>

        <p
          className="text-base md:text-lg mb-2 max-w-xl mx-auto"
          style={{
            color: hasBanner
              ? "color-mix(in srgb, white 72%, transparent)"
              : "var(--muted)",
          }}
        >
          {hero.headlineAction}
        </p>

        <p
          className="text-sm mb-10"
          style={{
            color: hasBanner
              ? "color-mix(in srgb, white 55%, transparent)"
              : "var(--muted)",
            opacity: hasBanner ? 1 : 0.7,
          }}
        >
          {hero.microCta}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            className="text-base px-8 py-4 min-h-12"
            onClick={() =>
              document
                .getElementById("guia-gratis")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {hero.cta.primary}
          </Button>
          <Button
            variant="ghost"
            className="text-base px-8 py-4 min-h-12"
            style={
              hasBanner
                ? {
                    borderColor: "color-mix(in srgb, white 35%, transparent)",
                    color: "white",
                  }
                : {}
            }
            onClick={() =>
              document
                .getElementById("programas")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {hero.cta.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
