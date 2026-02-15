"use client";

import { Home, BookOpen, Sparkles, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", icon: Home, label: "Inicio" },
  { href: "/ritual", icon: Sparkles, label: "Ritual" },
  { href: "/bitacora", icon: BookOpen, label: "Bitácora" },
  { href: "/perfil", icon: User, label: "Perfil" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-40 border-t border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur md:hidden">
      <ul className="container-yla flex justify-around py-2">
        {items.map(({ href, icon: Icon, label }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex flex-col items-center gap-0.5 text-xs transition-soft ${
                  active
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
