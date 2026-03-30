import { Card, CardBody } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { Activity, Brain, Sparkles } from "lucide-react";

const iconMap = { Activity, Brain, Sparkles };

export function Philosophy() {
  const { philosophy, copyDual } = siteContent;

  return (
    // Sección con fondo lila muy suave — contrasta con el beige del Hero
    <Section id="filosofia" style={{ background: "var(--section-alt)" }}>
      <SectionHeader
        title={philosophy.title}
        subtitle={philosophy.description}
        centered
      />

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
        <div
          className="rounded-2xl p-5 text-sm leading-relaxed border"
          style={{ borderColor: "var(--border)", background: "var(--card)" }}
        >
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--gold-deep)" }}>
            Lógica
          </span>
          <p className="mt-2" style={{ color: "var(--muted)" }}>
            {copyDual.logicExample}
          </p>
        </div>
        <div
          className="rounded-2xl p-5 text-sm leading-relaxed border"
          style={{ borderColor: "var(--border)", background: "var(--card)" }}
        >
          <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--lavender-deep)" }}>
            Alma
          </span>
          <p className="mt-2" style={{ color: "var(--muted)" }}>
            {copyDual.soulExample}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {philosophy.pillars.map((pillar, i) => {
          const Icon = iconMap[pillar.icon as keyof typeof iconMap];
          return (
            <Card
              key={i}
              className="hover:shadow-lg transition-soft"
              style={{ borderTop: "3px solid var(--lavender)" }}
            >
              <CardBody className="text-center">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
                  style={{ background: "rgba(180,151,214,.15)" }}
                >
                  <Icon size={28} style={{ color: "var(--lavender)" }} />
                </div>
                <h3 className="title text-xl mb-2">{pillar.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {pillar.description}
                </p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
