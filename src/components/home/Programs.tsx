import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { Check } from "lucide-react";

const accentColor = {
  lavender: "var(--lavender)",
  gold: "var(--gold-deep)",
};

export function Programs() {
  const { programs } = siteContent;

  return (
    // Fondo beige base — contrasta con el lila de Philosophy
    <Section id="programas">
      <SectionHeader
        title={programs.title}
        subtitle={programs.subtitle}
        centered
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                {/* Badge duración */}
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
                      <Check
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: color }}
                      />
                      <span className="text-sm">{stage}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full mt-auto">
                  Conocer más
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
