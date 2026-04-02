"use client";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { siteContent } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const { header } = siteContent;
  const [brandLine1, brandLine2] = header.brand.compactLines;

  function isActive(href: string, match: "exact" | "path" | "hash") {
    if (match === "exact") return pathname === "/";
    if (match === "path") return pathname === href;
    return false;
  }

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur"
      style={{
        borderBottom: "1px solid var(--border)",
        background: "rgba(250, 247, 242, 0.88)",
      }}
    >
      <div className="container-yla h-14 flex items-center justify-between gap-2 sm:gap-3 min-w-0">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 min-w-0 flex-1 pr-1 hover:opacity-90 transition-opacity sm:flex-initial"
          aria-label="Yoga con Lógica y Alma — Inicio"
        >
          {/* Logo imagen — se oculta si no existe, el texto toma el relevo */}
          <Image
            src="/logo.png"
            alt="Yoga con Lógica y Alma logo"
            width={120}
            height={36}
            className="hidden sm:block h-8 w-auto object-contain"
            priority
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
          {/* Fallback texto: visible siempre en móvil angosto, en desktop solo si el logo falla */}
          <span
            className="title tracking-tight sm:hidden"
            style={{ color: "var(--accent)", fontSize: "clamp(0.65rem, 3.5vw, 0.85rem)", lineHeight: 1.15 }}
          >
            <span className="block">{brandLine1}</span>
            <span className="block">{brandLine2}</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {header.nav.map((item) => {
            const active = isActive(item.href, item.match);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-xl transition-soft"
                style={{
                  background: active ? "var(--purple-mist)" : "transparent",
                  color: active ? "var(--purple)" : "var(--text)",
                  fontWeight: active ? 600 : 400,
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={header.accesoAlumnasHref}
            className="px-3 py-1.5 rounded-xl transition-soft"
            style={{
              background: pathname.startsWith(header.accesoAlumnasHref)
                ? "var(--purple-mist)"
                : "transparent",
              color: pathname.startsWith(header.accesoAlumnasHref) ? "var(--purple)" : "var(--text)",
            }}
          >
            {header.accesoAlumnas}
          </Link>
          <ThemeToggle />
        </nav>

        {/* CTA principal */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Link
            href="/membresia"
            className="inline-flex items-center justify-center rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white transition-soft hover:opacity-90 min-h-[40px] whitespace-nowrap"
            style={{
              background: "var(--purple)",
              boxShadow: "var(--shadow-purple)",
            }}
          >
            {header.ctaMembresia}
          </Link>
          <div className="lg:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
