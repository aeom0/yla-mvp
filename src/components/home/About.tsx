import { Section } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { Award, BookOpen, Briefcase } from "lucide-react";

export function About() {
  const { about } = siteContent;
  const videoId = about.welcomeVideoYoutubeId?.trim();

  return (
    <Section id="sobre-mi" style={{ background: "var(--section-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-start">

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
            ) : (
              <div
                className="aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden max-w-md mx-auto md:max-w-none"
                style={{
                  background: "linear-gradient(135deg, var(--purple-mist) 0%, var(--gold-pale) 100%)",
                  border: "1px solid var(--border)",
                }}
              >
                <Award size={80} style={{ color: "var(--purple-soft)", opacity: 0.5 }} aria-hidden />
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: "var(--purple)" }}
                />
                <div
                  className="absolute bottom-5 left-4 right-4 text-center text-xs px-2"
                  style={{ color: "var(--muted)" }}
                >
                  Próximamente: video de bienvenida
                </div>
              </div>
            )}
          </div>

          {/* Texto */}
          <div className="order-1 md:order-2 space-y-5">
            <div>
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                style={{
                  background: "var(--purple-mist)",
                  color: "var(--purple)",
                  border: "1px solid var(--border)",
                }}
              >
                Sobre mí
              </span>
              <h2 className="title text-3xl md:text-4xl" style={{ color: "var(--accent)" }}>
                {about.title}
              </h2>
            </div>

            <p className="text-sm font-semibold leading-relaxed" style={{ color: "var(--purple)" }}>
              {about.credential}
            </p>

            <p className="text-sm leading-relaxed" style={{ color: "var(--text)", opacity: 0.9 }}>
              {about.description}
            </p>

            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {about.extended}
            </p>

            <div className="space-y-3 pt-1">
              {[
                { icon: <Briefcase size={15} />, text: "Ingeniera industrial de profesión" },
                { icon: <Award size={15} />, text: "Instructora de yoga y meditación — 500 h certificadas" },
                { icon: <BookOpen size={15} />, text: "Metodología propia: lógica aplicada al bienestar" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--purple-mist)", color: "var(--purple)" }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm" style={{ color: "var(--text)" }}>{item.text}</span>
                </div>
              ))}
            </div>

            <blockquote
              className="border-l-4 pl-4 italic text-sm leading-relaxed"
              style={{ borderColor: "var(--gold)", color: "var(--muted)" }}
            >
              {about.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
}
