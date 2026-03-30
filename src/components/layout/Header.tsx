"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { siteContent } from "@/data/content";

type NavItem =
  | { href: string; label: string; external: true }
  | {
      href: string;
      label: string;
      activeMatch: "home" | "homeHash" | "membresia";
    };

const mainNav: NavItem[] = [
  { href: "/", label: "Inicio", activeMatch: "home" },
  { href: "/#programas", label: "Programas", activeMatch: "homeHash" },
  { href: "/membresia", label: "Membresía", activeMatch: "membresia" },
  { href: "/#tienda", label: "Tienda", activeMatch: "homeHash" },
  {
    href: siteContent.blog.href,
    label: siteContent.blog.label,
    external: true,
  },
];

function isActive(pathname: string, item: NavItem): boolean {
  if (!("activeMatch" in item)) return false;
  if (item.activeMatch === "home") return pathname === "/";
  if (item.activeMatch === "membresia") return pathname === "/membresia";
  if (item.activeMatch === "homeHash") return pathname === "/";
  return false;
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur">
      <div className="container-yla h-14 flex items-center justify-between gap-3">
        <Link href="/" className="title text-base md:text-lg tracking-tight shrink-0 min-w-0 truncate">
          Yoga con Lógica y Alma
        </Link>
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {mainNav.map((item) => {
            const active = isActive(pathname, item);
            const activeClass = active
              ? "bg-[var(--card)] border border-[var(--border)]"
              : "hover:opacity-80";

            if ("external" in item && item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1.5 rounded-2xl transition-soft ${activeClass}`}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1.5 rounded-2xl transition-soft ${activeClass}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/dashboard"
            className={`px-3 py-1.5 rounded-2xl transition-soft ${
              pathname.startsWith("/dashboard")
                ? "bg-[var(--card)] border border-[var(--border)]"
                : "hover:opacity-80"
            }`}
          >
            Acceso alumnas
          </Link>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/membresia"
            className="inline-flex items-center justify-center rounded-2xl px-3 py-2 text-xs sm:text-sm font-semibold transition-soft hover:opacity-95 shadow-soft min-h-[40px]"
            style={{
              background: "var(--gold)",
              color: "var(--ink)",
              border: "1px solid var(--gold-deep)",
            }}
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
