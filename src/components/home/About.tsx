import { Section } from "@/components/ui/Section";
import type { SiteContent } from "@/data/content";
import { siteContent } from "@/data/content";
import { lucideBrand } from "@/lib/lucideBrand";
import { BadgeCheck, Compass, Gem, NotebookPen } from "lucide-react";
import Image from "next/image";

type AboutProps = {
  about?: SiteContent["about"];
};

export function About({ about: aboutProp }: AboutProps) {
  const about = aboutProp ?? siteContent.about;
  const videoId = about.welcomeVideoYoutubeId?.trim();
  const hasPhoto = !!about.yubeFoto;

  return (
    <Section id="sobre-mi" style={{ background: "var(--section-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Imagen / Video */}
          <div className="order-2 md:order-1">
            {videoId ? (
              <div
                className="aspect-video rounded-2xl overflow-hidden border"
                style={{ borderColor: "var(--border)" }}
              >
                <iframe
                  title="Video de bienvenida — Yube Karina"
                  src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : hasPhoto ? (
              <div
                className="relative rounded-2xl overflow-hidden max-w-md mx-auto md:max-w-none"
                style={{ border: "1px solid var(--border)" }}
              >
                <Image
                  src={about.yubeFoto}
                  alt="Yube Karina — Instructora de Yoga con Lógica y Alma"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "3/4", objectPosition: "top center" }}
                  priority
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-3"
                  style={{
                    background: "linear-gradient(to top, rgba(22,18,31,.85) 0%, transparent 100%)",
                  }}
                >
                  <p
                    className="text-xs italic text-center"
                    style={{ color: "rgba(237,232,245,.75)" }}
                  >
                    &ldquo;Aquí todo nace desde el alma.&rdquo;
                  </p>
                </div>
              </div>
            ) : (
              <div
                className="aspect-square rounded-2xl flex flex-col items-center justify-center relative overflow-hidden max-w-md mx-auto md:max-w-none gap-3"
                style={{
                  background: "var(--lavender-mist)",
                  border: "1px solid var(--border)",
                }}
              >
                <Gem
                  {...lucideBrand}
                  size={72}
                  style={{ color: "var(--accent-soft)", opacity: 0.45 }}
                  aria-hidden
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: "var(--accent)" }}
                />
                <p
                  className="absolute bottom-5 text-xs px-4 text-center"
                  style={{ color: "var(--muted)" }}
                >
                  Próximamente: foto de Yube
                </p>
              </div>
            )}
          </div>

          {/* Texto */}
          <div className="order-1 md:order-2 space-y-5">
            <div>
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                style={{
                  background: "var(--lavender-mist)",
                  color: "var(--accent)",
                  border: "1px solid var(--border)",
                }}
              >
                Sobre mí
              </span>
              <h2
                className="title text-2xl sm:text-3xl md:text-4xl"
                style={{ color: "var(--accent)" }}
              >
                {about.title}
              </h2>
            </div>

            {/* Credential con sage */}
            <p
              className="text-sm font-semibold leading-relaxed"
              style={{ color: "var(--sage-deep)" }}
            >
              {about.credential}
            </p>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text)", opacity: 0.9 }}
            >
              {about.description}
            </p>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {about.extended}
            </p>

            {/* Pillares con colores alternados */}
            <div className="space-y-3 pt-1">
              {[
                {
                  icon: <Compass {...lucideBrand} size={16} />,
                  text: "Ingeniera industrial de profesión",
                  color: "var(--accent)",
                  bg: "var(--lavender-mist)",
                },
                {
                  icon: <BadgeCheck {...lucideBrand} size={16} />,
                  text: "Instructora de yoga y meditación — 500 h certificadas",
                  color: "var(--sage-deep)",
                  bg: "rgba(107,158,138,.10)",
                },
                {
                  icon: <NotebookPen {...lucideBrand} size={16} />,
                  text: "Metodología propia: lógica aplicada al bienestar",
                  color: "var(--rose-deep)",
                  bg: "rgba(200,146,143,.10)",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: item.bg, color: item.color }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm" style={{ color: "var(--text)" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Blockquote con borde sage */}
            <blockquote
              className="border-l-4 pl-4 italic text-sm leading-relaxed"
              style={{ borderColor: "var(--sage-deep)", color: "var(--muted)" }}
            >
              {about.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
}
