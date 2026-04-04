import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { lucideBrand } from "@/lib/lucideBrand";
import { Flower2, Lightbulb, MoonStar } from "lucide-react";

const iconMap = { Flower2, Lightbulb, MoonStar };

const pillarConfig: {
  btnColor: string;
  cta: string;
  subtext: string;
}[] = [
  {
    btnColor: "#5B3A8E",
    cta: "Comenzar mi práctica",
    subtext: "Acceso inmediato • a tu ritmo",
  },
  {
    btnColor: "#7B5AB0",
    cta: "Explorar contenido",
    subtext: "Blog + YouTube + reflexiones",
  },
  {
    btnColor: "#9E82C8",
    cta: "Reencontrarme",
    subtext: "Cartas + Journaling + conexión",
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
              className="group relative rounded-2xl bg-white p-6 sm:p-7 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              style={{
                borderTop: `3px solid ${config.btnColor}`,
                boxShadow: "0 2px 12px rgba(91,58,142,0.07)",
              }}
            >
              {/* Icono */}
              <div
                className="inline-flex items-center justify-center rounded-full w-14 h-14 mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--purple-mist)" }}
              >
                <Icon
                  {...lucideBrand}
                  size={26}
                  style={{ color: config.btnColor }}
                />
              </div>

              {/* Título */}
              <h3 className="title text-xl mb-2">{pillar.title}</h3>

              {/* Descripción */}
              <p
                className="text-sm leading-relaxed mb-5 flex-1"
                style={{ color: "var(--muted)" }}
              >
                {pillar.description}
              </p>

              {/* Botón */}
              <button
                className="w-full py-2.5 px-4 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 active:scale-95 hover:opacity-90 text-white"
                style={{
                  background: config.btnColor,
                  boxShadow: "0 2px 8px rgba(91,58,142,0.18)",
                }}
              >
                {config.cta}
              </button>

              {/* Sub-texto */}
              <p
                className="text-xs mt-2 text-center tracking-wide"
                style={{ color: "var(--purple-soft)" }}
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

