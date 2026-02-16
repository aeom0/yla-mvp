import { Section } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { Heart } from "lucide-react";

export function About() {
  const { about } = siteContent;

  return (
    <Section id="sobre-mi" className="bg-card/50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen placeholder - Yube puede reemplazar con su foto */}
          <div className="order-2 md:order-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-border flex items-center justify-center">
              <Heart size={80} className="text-accent/40" />
            </div>
          </div>

          {/* Contenido */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="title text-3xl md:text-4xl text-accent">
              {about.title}
            </h2>

            <p className="text-lg leading-relaxed">{about.description}</p>

            <ul className="space-y-2">
              {about.highlights.map((highlight, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-muted">{highlight}</span>
                </li>
              ))}
            </ul>

            <blockquote className="border-l-4 border-accent pl-4 italic text-muted">
              {about.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
}
