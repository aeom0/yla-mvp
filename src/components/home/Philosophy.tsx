import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { Flower2, Lightbulb, MoonStar } from "lucide-react";
import Link from "next/link";

const iconMap = { Flower2, Lightbulb, MoonStar };

type PillarAction =
  | { type: "external"; href: string; label: string }
  | { type: "internal"; href: string; label: string }
  | { type: "dual"; primary: { href: string; label: string; external?: boolean }; secondary: { href: string; label: string; external?: boolean } };

const pillarActions: PillarAction[] = [
  {
    type: "external",
    href: "https://www.youtube.com/@yube.karinag",
    label: "Ver clases en YouTube",
  },
  {
    type: "internal",
    href: "/tests",
    label: "Tests para descubrir más sobre ti",
  },
  {
    type: "dual",
    primary: {
      href: "https://www.youtube.com/@yube.karinag",
      label: "Ver en YouTube",
      external: true,
    },
    secondary: {
      href: "/blog",
      label: "Leer el Blog",
    },
  },
];

const accentColors = ["#5B3A8E", "#7B5AB0", "#9E82C8"];

export function Philosophy() {
  const { philosophy } = siteContent;

  return (
    <Section id="filosofia" style={{ background: "var(--section-alt)" }}>
      <SectionHeader
        title={philosophy.title}
        subtitle={philosophy.description}
        centered
      />

      <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto items-stretch">
        {philosophy.pillars.map((pillar, i) => {
          const Icon = iconMap[pillar.icon as keyof typeof iconMap];
          const action = pillarActions[i];
          const accent = accentColors[i];

          return (
            <div
              key={i}
              className="group relative rounded-2xl bg-white p-6 sm:p-7 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                borderTop: `3px solid ${accent}`,
                boxShadow: "0 2px 12px rgba(91,58,142,0.07)",
              }}
            >
              {/* Icono */}
              <div
                className="inline-flex items-center justify-center rounded-full w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "rgba(91,58,142,0.08)" }}
              >
                <Icon size={26} style={{ color: accent }} />
              </div>

              {/* Título */}
              <h3 className="title text-xl mb-2">{pillar.title}</h3>

              {/* Descripción */}
              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: "var(--muted)" }}
              >
                {pillar.description}
              </p>

              {/* CTA por pilar */}
              {action.type === "external" && (
                <a
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-center transition-all duration-200 hover:opacity-90 active:scale-95 text-white block"
                  style={{ background: accent }}
                >
                  {action.label}
                </a>
              )}

              {action.type === "internal" && (
                <>
                  <Link
                    href={action.href}
                    className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-center transition-all duration-200 hover:opacity-90 active:scale-95 text-white block"
                    style={{ background: accent }}
                  >
                    Ir a los tests
                  </Link>
                  <p
                    className="text-xs mt-2 text-center"
                    style={{ color: "var(--muted)" }}
                  >
                    {action.label}
                  </p>
                </>
              )}

              {action.type === "dual" && (
                <div className="flex flex-col gap-2">
                  <a
                    href={action.primary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-center transition-all duration-200 hover:opacity-90 active:scale-95 text-white block"
                    style={{ background: accent }}
                  >
                    {action.primary.label}
                  </a>
                  <Link
                    href={action.secondary.href}
                    className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-center transition-all duration-200 hover:opacity-90 active:scale-95 block"
                    style={{
                      border: `1.5px solid ${accent}`,
                      color: accent,
                      background: "transparent",
                    }}
                  >
                    {action.secondary.label}
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
