import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 transition-soft";
  const styles =
    variant === "primary"
      ? "bg-lavender text-white hover:opacity-90 shadow-soft"
      : "bg-card border border-border hover:shadow-soft";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
