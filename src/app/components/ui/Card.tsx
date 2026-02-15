import { ReactNode } from "react";

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-card border border-border rounded-2xl shadow-soft ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`p-5 ${className}`}>{children}</div>;
}

export function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="title text-xl mb-1">{children}</h3>;
}

export function Stat({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 text-center">
      <div className="text-3xl font-semibold text-accent">{value}</div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
}
