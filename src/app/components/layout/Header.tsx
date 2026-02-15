"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const links = [
  { href: "/agenda", label: "Agenda" },
  { href: "/bitacora", label: "Bitácora" },
  { href: "/tienda", label: "Tienda" },
  { href: "/dashboard", label: "Dashboard" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <div className="container-yla h-14 flex items-center justify-between">
        <Link href="/" className="title text-lg md:text-xl tracking-tight">
          Yoga con Lógica y Alma
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-2xl transition-soft ${
                  active ? "bg-card border border-border shadow-soft" : "hover:opacity-80"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}