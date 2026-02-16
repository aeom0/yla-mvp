import { Card, CardBody } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { Atom, Brain, Sparkles } from "lucide-react";

const iconMap = {
  Atom,
  Brain,
  Sparkles,
};

export function Philosophy() {
  const { philosophy } = siteContent;

  return (
    <Section id="filosofia" className="bg-card/50">
      <SectionHeader
        title={philosophy.title}
        subtitle={philosophy.description}
        centered
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {philosophy.pillars.map((pillar, i) => {
          const Icon = iconMap[pillar.icon as keyof typeof iconMap];
          return (
            <Card key={i} className="hover:shadow-lg transition-soft">
              <CardBody className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-4">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="title text-xl mb-2">{pillar.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
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
