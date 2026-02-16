import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { Check } from "lucide-react";

export function Programs() {
  const { programs } = siteContent;

  return (
    <Section id="programas">
      <SectionHeader
        title={programs.title}
        subtitle={programs.subtitle}
        centered
      />

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {programs.items.map((program, i) => (
          <Card key={i} className="hover:scale-[1.02] transition-soft">
            <CardBody>
              {/* Badge duración */}
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm text-accent mb-4">
                {program.duration}
              </div>

              {/* Título */}
              <h3 className="title text-2xl mb-2">{program.title}</h3>

              {/* Descripción */}
              <p className="text-muted mb-6">{program.description}</p>

              {/* Etapas */}
              <div className="space-y-2 mb-6">
                {program.stages.map((stage, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <Check
                      size={18}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm">{stage}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="ghost" className="w-full">
                Conocer más
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
}
