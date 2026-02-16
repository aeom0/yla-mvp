"use client";

import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/content";
import { Sparkles } from "lucide-react";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="container-yla relative z-10 text-center py-20">
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 mb-6 shadow-soft">
          <Sparkles size={16} className="text-accent" />
          <span className="text-sm text-muted">{hero.tagline}</span>
        </div>

        {/* Título principal */}
        <h1 className="title text-4xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-br from-accent to-accent/60 bg-clip-text text-transparent">
          {hero.title}
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-muted mb-3 max-w-2xl mx-auto">
          {hero.subtitle}
        </p>

        {/* Descripción */}
        <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto italic">
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

        {/* Stats decorativos */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "4", label: "Programas" },
            { value: "100+", label: "Alumnas" },
            { value: "8+", label: "Clases/mes" },
            { value: "20+", label: "Productos" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
