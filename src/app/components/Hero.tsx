import Link from "next/link";
import Image from "next/image";
import bgImage from "../../../img/GraceUMC_Outside.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.145] bg-[radial-gradient(circle_at_20%_10%,rgba(193,18,31,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(29,78,216,0.12),transparent_40%)]">
      <Image
        src={bgImage}
        alt="Grace UMC exterior"
        fill
        priority
        className="absolute inset-0 -z-10 object-cover opacity-75"
      />
      <div className="px-8 pt-10 pb-16 sm:px-12 sm:pt-12 sm:pb-20 md:px-16 md:pt-14 md:pb-24">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Welcome to <span style={{ color: "var(--brand-red)" }}>Grace UMC Greer</span>
        </h1>
        <div className="mt-8 space-y-2 sm:space-y-3">
          <span
            className="block text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
            style={{ backgroundImage: "linear-gradient(90deg, var(--brand-red), var(--brand-blue))" }}
          >
            Welcoming Love
          </span>
          <span
            className="block text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
            style={{ backgroundImage: "linear-gradient(90deg, var(--brand-blue), var(--brand-red))" }}
          >
            Sharing Hope
          </span>
          <span
            className="block text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
            style={{ backgroundImage: "linear-gradient(90deg, var(--brand-red), var(--brand-blue))" }}
          >
            Serving with Compassion
          </span>
        </div>
        <div className="mt-8 flex gap-4">
          <Link href="/worship" className="inline-flex items-center rounded-lg px-5 py-3 text-white" style={{ backgroundColor: "var(--brand-red)" }}>Plan a Visit</Link>
          <Link href="/about" className="inline-flex items-center rounded-lg px-5 py-3 border" style={{ borderColor: "var(--brand-blue)", color: "var(--brand-blue)" }}>Learn More</Link>
        </div>
      </div>
    </section>
  );
}

