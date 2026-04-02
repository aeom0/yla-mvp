import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { lucideBrand } from "@/lib/lucideBrand";
import { Flower2, Lightbulb, MoonStar } from "lucide-react";

const iconMap = { Flower2, Lightbulb, MoonStar };

type PillarVariant = "primary" | "outline" | "soft";

const pillarConfig: {
  variant: PillarVariant;
  cta: string;
  subtext: string;
  prominent?: boolean;
}[] = [
  {
    variant: "primary",
    cta: "Comenzar mi práctica",
    subtext: "Acceso inmediato • a tu ritmo",
    prominent: true,
  },
  {
    variant: "outline",
    cta: "Explorar contenido",
    subtext: "Blog + YouTube + reflexiones",
  },
  {
    variant: "soft",
    cta: "Quiero habitarme",
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
      <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto items-start">
        {philosophy.pillars.map((pillar, i) => {
          const Icon = iconMap[pillar.icon as keyof typeof iconMap];
          const config = pillarConfig[i];

          return (
            <div
              key={i}
              className={`
                group relative rounded-2xl bg-white transition-all duration-300
                hover:shadow-xl hover:-translate-y-1 cursor-pointer
                ${config.prominent ? "p-7 sm:p-8" : "p-5 sm:p-6"}
              `}
              style={{
                borderTop: config.prominent
                  ? "4px solid var(--purple)"
                  : "3px solid var(--purple-soft)",
                boxShadow: config.prominent
                  ? "0 4px 24px rgba(91,58,142,0.10)"
                  : "0 2px 12px rgba(91,58,142,0.06)",
              }}
            >
              {/* Icono */}
              <div
                className={`
                  inline-flex items-center justify-center rounded-full mb-4
                  transition-transform duration-300 group-hover:scale-110
                  ${config.prominent ? "w-16 h-16 sm:w-18 sm:h-18" : "w-13 h-13 sm:w-14 sm:h-14"}
                `}
                style={{
                  background: config.prominent
                    ? "var(--purple-pale)"
                    : "var(--purple-mist)",
                }}
              >
                <Icon
                  {...lucideBrand}
                  size={config.prominent ? 30 : 24}
                  style={{ color: "var(--purple)" }}
                />
              </div>

              {/* Título */}
              <h3
                className={`title mb-2 ${config.prominent ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}
              >
                {pillar.title}
              </h3>

              {/* Descripción */}
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--muted)" }}
              >
                {pillar.description}
              </p>

              {/* Botón */}
              <PillarButton variant={config.variant} cta={config.cta} />

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

function PillarButton({
  variant,
  cta,
}: {
  variant: PillarVariant;
  cta: string;
}) {
  const base =
    "w-full py-2.5 px-4 rounded-xl text-sm font-medium tracking-wide transition-all duration-200 active:scale-95";

  if (variant === "primary") {
    return (
      <button
        className={`${base} hover:brightness-110 hover:shadow-md`}
        style={{
          background: "var(--purple)",
          color: "#fff",
          boxShadow: "0 2px 8px rgba(91,58,142,0.25)",
        }}
      >
        {cta}
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        className={`${base} bg-white hover:bg-purple-50`}
        style={{
          border: "1.5px solid var(--purple)",
          color: "var(--purple)",
        }}
      >
        {cta}
      </button>
    );
  }

  // soft / lavanda
  return (
    <button
      className={`${base} hover:brightness-95`}
      style={{
        background: "var(--purple-mist)",
        color: "var(--purple)",
        border: "1px solid var(--purple-soft)",
      }}
    >
      {cta}
    </button>
  );
}
