import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { Flower2, Lightbulb, MoonStar } from "lucide-react";
import Link from "next/link";

const iconMap = { Flower2, Lightbulb, MoonStar };

const pillarConfig = [
  {
    cta: "Comenzar mi práctica",
    subtext: "Acceso inmediato • a tu ritmo",
    href: "https://youtube.com/@yogaconlogicayalma",
    external: true,
  },
  {
    cta: "Explorar contenido",
    subtext: "Tests para descubrir más sobre ti",
    href: "/tests",
    external: false,
  },
  {
    cta: "Reencontrarme",
    subtext: "Blog + reflexiones",
    href: "/blog",
    external: false,
  },
];

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
          const config = pillarConfig[i];

          return (
            <div
              key={i}
              className="group relative rounded-2xl bg-white p-6 sm:p-7 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                borderTop: "3px solid var(--accent)",
                boxShadow:
                  "0 2px 12px color-mix(in srgb, var(--accent) 7%, transparent)",
              }}
            >
              {/* Icono — centrado y grande */}
              <div className="flex justify-center mb-5">
                <div
                  className="flex items-center justify-center rounded-full w-20 h-20 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "color-mix(in srgb, var(--accent) 8%, transparent)",
                  }}
                >
                  <Icon size={40} style={{ color: "var(--accent)" }} />
                </div>
              </div>

              {/* Título — centrado */}
              <h3 className="title text-xl mb-2 text-center">{pillar.title}</h3>

              {/* Descripción — centrada */}
              <p
                className="text-sm leading-relaxed mb-5 flex-1 text-center"
                style={{ color: "var(--muted)" }}
              >
                {pillar.description}
              </p>

              {/* Botón — color sólido morado uniforme, sin degradado */}
              {config.external ? (
                <a
                  href={config.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-sm font-medium tracking-wide text-center transition-all duration-200 active:scale-95 hover:opacity-90 text-white block"
                  style={{ background: "var(--accent)" }}
                >
                  {config.cta}
                </a>
              ) : (
                <Link
                  href={config.href}
                  className="w-full py-2.5 px-4 rounded-xl text-sm font-medium tracking-wide text-center transition-all duration-200 active:scale-95 hover:opacity-90 text-white block"
                  style={{ background: "var(--accent)" }}
                >
                  {config.cta}
                </Link>
              )}

              {/* Sub-texto */}
              <p
                className="text-xs mt-2 text-center tracking-wide"
                style={{ color: "var(--muted)" }}
              >
                {config.subtext}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
