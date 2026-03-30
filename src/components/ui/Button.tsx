import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

/*
  Botones YLA:
  primary → morado sólido #5B3A8E, texto blanco
  ghost   → contorno morado, fondo transparente

  SIN gold en botones. El dorado es solo para detalles decorativos.
*/
export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-medium transition-soft";

  if (variant === "primary") {
    return (
      <button
        className={`${base} text-white hover:opacity-90 active:scale-[.98] ${className}`}
        style={{
          background: "var(--purple)",
          boxShadow: "var(--shadow-purple)",
        }}
        {...props}
      />
    );
  }

  return (
    <button
      className={`${base} hover:bg-[var(--purple-mist)] active:scale-[.98] ${className}`}
      style={{
        background: "transparent",
        border: "1.5px solid var(--purple)",
        color: "var(--purple)",
      }}
      {...props}
    />
  );
}
