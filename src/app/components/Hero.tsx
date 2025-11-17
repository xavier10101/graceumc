import Link from "next/link";
import Image from "next/image";
import bgImage from "../../../img/GraceUMC_Outside.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.145] bg-[radial-gradient(circle_at_20%_10%,rgba(193,18,31,0.12),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(29,78,216,0.12),transparent_40%)] min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
      <Image
        src={bgImage}
        alt="Grace UMC exterior"
        fill
        priority
        className="absolute inset-0 -z-10 object-cover opacity-95 brightness-110"
      />
      <div className="relative flex flex-col h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        {/* Semi-transparent backdrop for better text readability */}
        <div className="absolute inset-0 bg-black/15 dark:bg-black/30 rounded-2xl -z-10"></div>
        
        {/* Text content at top */}
        <div className="px-8 pt-10 sm:px-12 sm:pt-12 md:px-16 md:pt-14 flex-1">
          <div className="space-y-2 sm:space-y-3 mt-[10px]">
            <span
              className="block text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              Welcoming Love
            </span>
            <span
              className="block text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              Sharing Hope
            </span>
            <span
              className="block text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
            >
              Serving with Compassion
            </span>
          </div>
        </div>
        
        {/* Buttons at bottom */}
        <div className="px-8 pb-8 sm:px-12 sm:pb-10 md:px-16 md:pb-12 flex gap-4">
          <Link href="/worship" className="inline-flex items-center rounded-lg px-5 py-3 text-white shadow-lg font-medium" style={{ backgroundColor: "var(--brand-red)" }}>Plan a Visit</Link>
          <Link href="/about" className="inline-flex items-center rounded-lg px-5 py-3 border shadow-lg bg-white/95 backdrop-blur-sm font-medium" style={{ borderColor: "var(--brand-blue)", color: "var(--brand-blue)" }}>Learn More</Link>
        </div>
      </div>
    </section>
  );
}

