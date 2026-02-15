export default function Home() {
  return (
    <main className="min-h-screen bg-beige text-ink">
      <section className="mx-auto max-w-5xl px-4 py-10">
        {/* Título principal */}
        <h1 className="title text-4xl md:text-5xl mb-2 text-lavender">
          Yoga con Lógica y Alma
        </h1>
        <p className="text-lg text-ink/80">
          Organizamos el bienestar, ritualizamos la estructura.
        </p>

        {/* Hero Section: Alma */}
        <div className="mt-8 rounded-2xl p-6 bg-white shadow-sm border border-smoke/50">
          <h2 className="title text-2xl mb-1">
            Bonjour, hoy es un buen día para volver a ti
          </h2>
          <p className="text-ink/70">
            Intención del día: claridad + suavidad ✨
          </p>
        </div>

        {/* Métricas: Lógica */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Rituales esta semana', value: 3 },
            { label: 'Clases tomadas', value: 2 },
            { label: 'Entradas bitácora', value: 5 },
            { label: 'Racha (días)', value: 4 },
          ].map((m, i) => (
            <div
              key={i}
              className="rounded-xl bg-white border border-smoke/50 p-4 text-center"
            >
              <div className="text-3xl font-semibold text-lavender">{m.value}</div>
              <div className="text-sm text-ink/70">{m.label}</div>
            </div>
          ))}
        </div>

        {/* CTA principal */}
        <div className="mt-8">
          <a
            href="/ritual"
            className="inline-flex items-center gap-2 rounded-xl bg-lavender text-white px-5 py-3 hover:opacity-90 transition"
          >
            Iniciar Modo Ritual
          </a>
        </div>
      </section>
    </main>
  );
}
