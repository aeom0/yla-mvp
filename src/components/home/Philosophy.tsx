import { Card, CardBody } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { lucideBrand } from "@/lib/lucideBrand";
import { Flower2, Lightbulb, MoonStar } from "lucide-react";

const iconMap = { Flower2, Lightbulb, MoonStar };

export function Philosophy() {
  const { philosophy } = siteContent;

  return (
    <Section id="filosofia" style={{ background: "var(--section-alt)" }}>
      <SectionHeader
        title={philosophy.title}
        subtitle={philosophy.description}
        centered
      />
      <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {philosophy.pillars.map((pillar, i) => {
          const Icon = iconMap[pillar.icon as keyof typeof iconMap];
          return (
            <Card
              key={i}
              className="hover:shadow-lg transition-soft"
              style={{ borderTop: "3px solid var(--purple)" }}
            >
              <CardBody className="text-center">
                <div
                  className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full mb-4"
                  style={{ background: "var(--purple-mist)" }}
                >
                  <Icon {...lucideBrand} size={26} style={{ color: "var(--purple)" }} />
                </div>
                <h3 className="title text-lg sm:text-xl mb-2">{pillar.title}</h3>
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
