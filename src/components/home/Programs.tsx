"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { lucideBrand } from "@/lib/lucideBrand";
import { CircleCheck } from "lucide-react";

const accentColor = {
  lavender: "var(--purple-soft)",
  gold: "var(--gold)",
};

export function Programs() {
  const { programs, classes } = siteContent;

  function scrollToTienda() {
    document.getElementById("tienda")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Section id="programas">
      <SectionHeader title={programs.title} centered />

      <div className="grid md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">
        {programs.items.map((program, i) => {
          const color =
            accentColor[(program.accent as keyof typeof accentColor) ?? "lavender"];
          return (
            <Card
              key={i}
              className="hover:scale-[1.02] transition-soft flex flex-col"
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
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: color }}
                        aria-hidden
                      />
                      <span className="text-sm">{stage}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs mb-3 text-center" style={{ color: "var(--muted)" }}>
                  {programs.cardMicrocopy}
                </p>
                <Button variant="primary" className="w-full mt-auto min-h-[48px]" onClick={scrollToTienda}>
                  {programs.cardCta}
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </div>

      {/* Clases personalizadas — espaciado ajustado, un solo CTA */}
      <div className="max-w-2xl mx-auto mt-12 mb-0">
        <Card
          className="transition-soft hover:shadow-lg"
          style={{ borderTop: "3px solid var(--gold)" }}
        >
          <CardBody className="py-8 px-6 md:px-10 text-center">
            <h3 className="title text-2xl mb-3">{classes.personalized.title}</h3>
            <p className="mb-6 leading-relaxed" style={{ color: "var(--muted)" }}>
              {classes.personalized.description}
            </p>
            <Button
              variant="primary"
              className="min-h-[48px]"
              onClick={() => window.open(classes.personalized.href, "_blank")}
            >
              {classes.personalized.ctaPrimary}
            </Button>
          </CardBody>
        </Card>
      </div>
    </Section>
  );
}
