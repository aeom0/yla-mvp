export function SocialProofStrip() {
  const stats = [
    { value: "3", label: "Programas" },
    { value: "100+", label: "Alumnas" },
    { value: "8+", label: "Clases/mes" },
    { value: "20+", label: "Productos" },
  ];

  return (
    <div className="container-yla py-10">
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-px max-w-2xl mx-auto rounded-2xl overflow-hidden"
        style={{ background: "var(--border)", boxShadow: "0 2px 16px rgba(0,0,0,.06)" }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="text-center py-5 px-4"
            style={{ background: "var(--card)" }}
          >
            <div
              className="text-3xl md:text-4xl font-semibold mb-0.5"
              style={{ color: "var(--accent)", fontFamily: "var(--font-title)" }}
            >
              {stat.value}
            </div>
            <div className="text-xs uppercase tracking-wide" style={{ color: "var(--muted)" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
