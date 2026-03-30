"use client";

import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { siteContent } from "@/data/content";
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
        <Link
          href="/"
          className="title min-w-0 flex-1 pr-1 tracking-tight hover:opacity-90 transition-opacity sm:flex-initial sm:max-w-none md:text-base lg:text-lg"
          style={{ color: "var(--accent)" }}
        >
          {/* Dos líneas solo en móvil angosto: más legible que truncate */}
          <span className="flex flex-col leading-[1.12] text-[11px] sm:hidden">
            <span>{brandLine1}</span>
            <span>{brandLine2}</span>
          </span>
          <span className="hidden sm:inline text-sm md:text-base truncate sm:max-w-[min(100%,11rem)] md:max-w-[13.5rem] lg:max-w-none">
            {header.brand.full}
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

        {/* CTA principal — morado, sin gold */}
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
