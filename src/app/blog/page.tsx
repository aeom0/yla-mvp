import Link from "next/link";
import { siteContent } from "@/data/content";
import { BookOpen } from "lucide-react";

export default function BlogPage() {
  const { blogPage } = siteContent;
  return (
    <main
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-24"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
        style={{
          background: "rgba(180,151,214,.15)",
          border: "1px solid var(--lavender)",
        }}
      >
        <BookOpen size={14} style={{ color: "var(--lavender)" }} aria-hidden />
        <span
          className="text-sm font-semibold"
          style={{ color: "var(--lavender)" }}
        >
          Próximamente
        </span>
      </div>
      <h1
        className="title text-4xl md:text-5xl mb-4"
        style={{ color: "var(--accent)" }}
      >
        {blogPage.title}
      </h1>
      <p className="text-lg max-w-xl mb-3" style={{ color: "var(--muted)" }}>
        {blogPage.subtitle}
      </p>
      <p className="text-sm italic mb-10" style={{ color: "var(--muted)" }}>
        {blogPage.comingSoon}
      </p>
      <Link
        href="/#filosofia"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-semibold transition-soft hover:opacity-80"
        style={{
          border: "1.5px solid var(--lavender)",
          color: "var(--lavender)",
        }}
      >
        ← Volver
      </Link>
    </main>
  );
}
