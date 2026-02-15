"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-2xl border border-border px-3 py-1.5 bg-card hover:shadow-soft transition-[box-shadow,transform] ease-[cubic-bezier(.22,.61,.36,1)] active:scale-[.98]"
      aria-label="Alternar tema"
      title="Alternar tema"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="text-sm">{isDark ? "Claro" : "Oscuro"}</span>
    </button>
  );
}