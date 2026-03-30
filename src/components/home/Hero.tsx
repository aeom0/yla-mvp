"use client";

import { Button } from "@/components/ui/Button";
import { siteContent } from "@/data/content";

export function Hero() {
  const { hero } = siteContent;

  const stats = [
    { value: "3", label: "Programas" },
    { value: "100+", label: "Alumnas" },
    { value: "8+", label: "Clases/mes" },
    { value: "20+", label: "Productos" },
  ] as const;

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Fondo degradado */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(180,151,214,.13) 0%, rgba(232,211,163,.10) 55%, transparent 100%)",
        }}
      />
      {/* Orbe lavanda superior derecha */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--lavender) 0%, transparent 70%)",
        }}
      />
      {/* Orbe dorado inferior izquierda */}
      <div
        aria-hidden="true"
        className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--gold-deep) 0%, transparent 70%)",
        }}
      />

      {/* ── CONTENIDO PRINCIPAL ── */}
      <div className="container-yla relative z-10 text-center py-24 flex-1 flex flex-col items-center justify-center">

        {/* Título marca */}
        <h1
          className="title text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight"
          style={{ color: "var(--accent)" }}
        >
          {hero.title}
        </h1>

        {/* Headline emocional — lo que el visitante siente/gana */}
        <p
          className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto font-semibold leading-snug"
          style={{ color: "var(--text)" }}
        >
          {hero.headlineEmotional}
        </p>

        {/* Acción / gancho del lead magnet */}
        <p
          className="text-base md:text-lg mb-2 max-w-xl mx-auto font-medium"
          style={{ color: "var(--gold-deep)" }}
        >
          {hero.headlineAction}
        </p>

        {/* Micro CTA — reduce fricción */}
        <p className="text-sm mb-10" style={{ color: "var(--muted)" }}>
          {hero.microCta}
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="primary"
            className="text-base px-8 py-4 min-h-[48px]"
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
            className="text-base px-8 py-4 min-h-[48px]"
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

      {/* ── FRANJA DE PRUEBA SOCIAL — separada visualmente del headline ── */}
      <div
        className="relative z-10 w-full"
        style={{
          borderTop: "1px solid var(--border)",
          background: "rgba(246,235,217,.45)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="container-yla py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-semibold mb-0.5"
                  style={{
                    color: "var(--gold-deep)",
                    fontFamily: "var(--font-title)",
                  }}
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
      </div>
    </section>
  );
}
