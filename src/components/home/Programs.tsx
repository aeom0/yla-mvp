"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { lucideBrand } from "@/lib/lucideBrand";
import { CheckCircle2, CircleCheck } from "lucide-react";

const accentColor = {
  lavender: "var(--purple-soft)",
  gold: "var(--gold)",
};

const achievements = [
  "Mejorar postura y liberar tensiones",
  "Abrir pecho y fortalecer espalda",
  "Adaptar el yoga a tu ritmo real",
  "Sentirte más cómoda en tu cuerpo",
];

const forYouIf = [
  "Pasas mucho tiempo de pie o con dolor",
  "Sientes rigidez o poca movilidad",
  "Estás cansada pero quieres cuidarte",
  "Necesitas algo adaptado a ti",
];

const howItWorks = [
  { step: "1", label: "Me cuentas sobre ti" },
  { step: "2", label: "Diseño tu práctica" },
  { step: "3", label: "Comenzamos" },
];

export function Programs() {
  const { programs, classes } = siteContent;

  function scrollToTienda() {
    document.getElementById("tienda")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Section id="programas">
      <SectionHeader
        title={programs.title}
        subtitle="Cada programa es una forma de volver a tu centro, a tu ritmo."
        centered
      />

      <div className="grid md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto items-stretch">
        {programs.items.map((program, i) => {
          const color =
            accentColor[
              (program.accent as keyof typeof accentColor) ?? "lavender"
            ];
          const btnColor = ["#5B3A8E", "#7B5AB0", "#9E82C8"][i] ?? "#5B3A8E";
          return (
            <Card
              key={i}
              className="hover:scale-[1.02] transition-soft flex flex-col h-full"
              style={{ borderTop: `3px solid ${color}` }}
            >
              <CardBody className="flex flex-col flex-1">
                <div
                  className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold mb-4 self-start"
                  style={{
                    background: `color-mix(in srgb, ${color} 15%, transparent)`,
                    color: color,
                  }}
                >
                  {program.duration}
                </div>
                <h3 className="title text-2xl mb-2">{program.title}</h3>
                <p className="mb-6" style={{ color: "var(--muted)" }}>
                  {program.description}
                </p>
                <div className="space-y-2 mb-6 flex-1">
                  {program.stages.map((stage, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CircleCheck
                        {...lucideBrand}
                        size={18}
                        className="mt-0.5 shrink-0"
                        style={{ color: color }}
                        aria-hidden
                      />
                      <span className="text-sm">{stage}</span>
                    </div>
                  ))}
                </div>
                <p
                  className="text-xs mb-3 text-center"
                  style={{ color: "var(--muted)" }}
                >
                  {programs.cardMicrocopy}
                </p>
                <button
                  className="w-full mt-auto min-h-12 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-medium transition-soft text-white hover:opacity-90 active:scale-[.98]"
                  style={{
                    background: btnColor,
                    boxShadow: "var(--shadow-purple)",
                  }}
                  onClick={scrollToTienda}
                >
                  {programs.cardCta}
                </button>
              </CardBody>
            </Card>
          );
        })}
      </div>

      {/* Clases personalizadas — rediseño completo */}
      <div className="max-w-3xl mx-auto mt-14">
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1.5px solid var(--purple-soft)",
            boxShadow: "0 4px 32px rgba(91,58,142,0.10)",
          }}
        >
          {/* Header de la card */}
          <div
            className="px-6 sm:px-10 pt-8 pb-6 text-center"
            style={{ background: "var(--purple-mist)" }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: "var(--purple)" }}
            >
              {classes.personalized.subtitle}
            </p>
            <h3 className="title text-2xl sm:text-3xl mb-2">
              {classes.personalized.title}
            </h3>
            <p
              style={{ color: "var(--muted)" }}
              className="text-sm leading-relaxed"
            >
              No todos los cuerpos necesitan lo mismo…{" "}
              <span className="italic">
                por eso tu práctica tampoco debería ser igual a la de todos.
              </span>
            </p>
          </div>

          {/* Cuerpo */}
          <div className="px-6 sm:px-10 py-8 bg-white">
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              {/* Qué vas a lograr */}
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "var(--purple)" }}
                >
                  Qué vas a lograr
                </p>
                <ul className="space-y-2">
                  {achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        {...lucideBrand}
                        size={16}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--purple)" }}
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Para ti si */}
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "var(--purple)" }}
                >
                  Para ti si…
                </p>
                <ul className="space-y-2">
                  {forYouIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span
                        className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--purple-soft)" }}
                        aria-hidden
                      />
                      <span style={{ color: "var(--muted)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cita Yube */}
            <blockquote
              className="text-sm italic text-center leading-relaxed mb-8 px-4"
              style={{ color: "var(--purple)", borderLeft: "none" }}
            >
              &ldquo;Integro técnica, conciencia corporal y conexión emocional…
              para que no solo practiques, sino que te entiendas.&rdquo;
            </blockquote>

            {/* Cómo funciona */}
            <div className="mb-8">
              <p
                className="text-xs font-bold tracking-widest uppercase mb-5 text-center"
                style={{ color: "var(--muted)" }}
              >
                ¿Cómo funciona?
              </p>
              <div className="flex items-center justify-center gap-2 sm:gap-4">
                {howItWorks.map((step, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <div className="flex flex-col items-center gap-1">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                        style={{ background: "var(--purple)" }}
                      >
                        {step.step}
                      </div>
                      <span
                        className="text-xs text-center max-w-20 leading-tight"
                        style={{ color: "var(--muted)" }}
                      >
                        {step.label}
                      </span>
                    </div>
                    {i < howItWorks.length - 1 && (
                      <div
                        className="w-8 sm:w-12 h-px mb-5"
                        style={{ background: "var(--purple-soft)" }}
                        aria-hidden
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                variant="primary"
                className="min-h-13 px-8 text-base hover:brightness-110 active:scale-95 transition-all duration-200"
                onClick={() => window.open(classes.personalized.href, "_blank")}
              >
                {classes.personalized.ctaPrimary}
              </Button>
              <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>
                Clases online • adaptadas a ti
              </p>
              <p
                className="text-xs mt-1 italic"
                style={{ color: "var(--purple-soft)" }}
              >
                En cada sesión conectarás mejor con tu cuerpo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
