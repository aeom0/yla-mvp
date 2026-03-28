import { Section } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { BookOpen, Heart, Layers } from "lucide-react";

export function About() {
  const { about } = siteContent;

  return (
    // Fondo lila suave — alterna con el beige de Programs
    <Section id="sobre-mi" style={{ background: "var(--section-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Imagen placeholder */}
          <div className="order-2 md:order-1">
            <div
              className="aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(180,151,214,.25) 0%, rgba(232,211,163,.20) 100%)",
                border: "1px solid var(--border)",
              }}
            >
              <Heart size={80} style={{ color: "var(--lavender)", opacity: 0.4 }} />
              {/* Franja dorada inferior */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: "var(--gold-deep)" }}
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 md:order-2 space-y-6">
            {/* Credential badge — gold */}
            <div>
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                style={{
                  background: "rgba(201,169,110,.18)",
                  color: "var(--gold-deep)",
                  border: "1px solid var(--gold-deep)",
                }}
              >
                Sobre mí
              </span>
              <h2 className="title text-3xl md:text-4xl" style={{ color: "var(--accent)" }}>
                {about.title}
              </h2>
            </div>

            {/* Credential line */}
            <p className="text-base font-semibold" style={{ color: "var(--gold-deep)" }}>
              {about.credential}
            </p>

            <p className="leading-relaxed" style={{ color: "var(--text)", opacity: 0.85 }}>
              {about.description}
            </p>

            {/* Pillars */}
            <div className="space-y-3">
              {[
                { icon: <Layers size={16} />, text: "Estructura con propósito" },
                { icon: <Heart size={16} />, text: "Práctica con intención" },
                { icon: <BookOpen size={16} />, text: "Herramientas que transforman" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--lavender)", color: "#fff" }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="border-l-4 pl-4 italic text-sm leading-relaxed"
              style={{ borderColor: "var(--gold-deep)", color: "var(--muted)" }}
            >
              {about.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
}
