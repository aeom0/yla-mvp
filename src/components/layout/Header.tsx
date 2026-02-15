"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur">
      <div className="container-yla flex items-center justify-between h-14">
        <span className="title text-lg tracking-tight">YLA</span>

        <button
          aria-label="Cambiar tema"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full p-2 hover:bg-[var(--accent)]/20 transition-soft"
        >
          <Sun className="h-5 w-5 hidden dark:block" />
          <Moon className="h-5 w-5 block dark:hidden" />
        </button>
      </div>
    </header>
  );
}
