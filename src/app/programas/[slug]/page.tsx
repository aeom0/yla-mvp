import { notFound } from "next/navigation";
import Link from "next/link";
import { siteContent } from "@/data/content";
import { Check, MessageCircle } from "lucide-react";

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return siteContent.programs.items.map((p) => ({ slug: p.id }));
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = siteContent.programs.items.find((p) => p.id === slug);
  if (!program) notFound();

  const accentHex = program.accent === "gold" ? "#c9a96e" : "#B497D6";

  return (
    <main className="min-h-screen py-20 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto">
        <Link
          href="/#programas"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-soft hover:opacity-70"
          style={{ color: "var(--muted)" }}
        >
          ← Volver a programas
        </Link>

        <div className="mb-10">
          <span
            className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{
              background: `color-mix(in srgb, ${accentHex} 15%, transparent)`,
              color: accentHex,
            }}
          >
            {program.duration}
          </span>
          <h1 className="title text-4xl md:text-5xl mb-3" style={{ color: "var(--accent)" }}>
            {program.title}
          </h1>
          <p className="text-xl italic" style={{ color: "var(--muted)" }}>
            {program.detail.tagline}
          </p>
        </div>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="title text-xl mb-3" style={{ color: accentHex }}>
            ¿Para quién es?
          </h2>
          <p style={{ color: "var(--text)" }}>{program.detail.forWho}</p>
        </div>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="title text-xl mb-4" style={{ color: accentHex }}>
            Las 4 etapas
          </h2>
          <div className="space-y-3">
            {program.stages.map((stage, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 text-white"
                  style={{ background: accentHex }}
                >
                  {i + 1}
                </span>
                <span>{stage}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="title text-xl mb-4" style={{ color: accentHex }}>
            ¿Qué incluye?
          </h2>
          <div className="space-y-2">
            {program.detail.includes.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <Check
                  size={16}
                  className="mt-0.5 shrink-0"
                  style={{ color: accentHex }}
                  aria-hidden
                />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-2xl p-8 text-center"
          style={{
            background: `color-mix(in srgb, ${accentHex} 8%, transparent)`,
            border: `1.5px solid ${accentHex}`,
          }}
        >
          <p className="title text-2xl mb-2" style={{ color: "var(--text)" }}>
            {program.detail.price}
          </p>
          <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
            Duración: {program.duration} · Acompañamiento personalizado
          </p>
          <a
            href={program.detail.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-soft hover:opacity-90"
            style={{ background: accentHex }}
          >
            <MessageCircle size={18} aria-hidden />
            {program.detail.ctaLabel}
          </a>
        </div>
      </div>
    </main>
  );
}
