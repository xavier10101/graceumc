export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.145] bg-[radial-gradient(circle_at_20%_10%,rgba(193,18,31,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(29,78,216,0.12),transparent_40%)]">
      <div className="px-8 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Welcome to <span style={{ color: "var(--brand-red)" }}>Grace UMC Greer</span>
        </h1>
        <p className="mt-4 text-lg text-black/70 dark:text-white/70 max-w-2xl">
          A church family in Greer pursuing Christ together in worship,
          discipleship, and service.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="/worship" className="inline-flex items-center rounded-lg px-5 py-3 text-white" style={{ backgroundColor: "var(--brand-red)" }}>Plan a Visit</a>
          <a href="/about" className="inline-flex items-center rounded-lg px-5 py-3 border" style={{ borderColor: "var(--brand-blue)", color: "var(--brand-blue)" }}>Learn More</a>
        </div>
      </div>
    </section>
  );
}

