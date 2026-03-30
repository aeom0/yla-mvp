"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const mainNav = [
  { href: "/", label: "Inicio", match: "exact" },
  { href: "/#programas", label: "Programas", match: "hash" },
  { href: "/membresia", label: "Membresía", match: "path" },
  { href: "/#tienda", label: "Tienda", match: "hash" },
  { href: "/faq", label: "FAQ", match: "path" },
] as const;

export function Header() {
  const pathname = usePathname();

  function isActive(href: string, match: string) {
    if (match === "exact") return pathname === "/";
    if (match === "path") return pathname === href;
    return false;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur">
      <div className="container-yla h-14 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="title text-base md:text-lg tracking-tight shrink-0 min-w-0 truncate" style={{ color: "var(--accent)" }}>
          Yoga con Lógica y Alma
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {mainNav.map((item) => {
            const active = isActive(item.href, item.match);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-2xl transition-soft ${
                  active
                    ? "bg-[var(--card)] border border-[var(--border)] text-[var(--accent)]"
                    : "hover:opacity-75"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/dashboard"
            className={`px-3 py-1.5 rounded-2xl transition-soft ${
              pathname.startsWith("/dashboard")
                ? "bg-[var(--card)] border border-[var(--border)] text-[var(--accent)]"
                : "hover:opacity-75"
            }`}
          >
            Acceso alumnas
          </Link>
          <ThemeToggle />
        </nav>

        {/* CTA derecha — morado, sin gold */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/membresia"
            className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-xs sm:text-sm font-semibold transition-soft hover:opacity-90 min-h-[40px] text-white"
            style={{ background: "var(--purple)", boxShadow: "var(--shadow-purple)" }}
          >
            Empezar aquí
          </Link>
          <div className="lg:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
