import Image from "next/image";
import ContactForm from "../components/ContactForm";
import churchImage from "../../../img/Grace_UMC.jpg";

export default function ContactPage() {
  const address = "627 Taylor Road, Greer, SC 29651";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div className="relative w-full overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.145] bg-white/60 dark:bg-black/30">
        <Image
          src={churchImage}
          alt="Grace UMC Greer building exterior"
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 bg-white/60 dark:bg-black/30 backdrop-blur">
        <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--brand-red)" }}>Contact Us</h1>

        <div className="space-y-5 text-sm">
          <div>
            <div className="uppercase tracking-wide text-xs text-black/60 dark:text-white/60">Address</div>
            <p className="mt-1">627 Taylor Road<br />Greer, SC 29651</p>
            <a href={mapsUrl} className="mt-2 inline-block hover:underline" style={{ color: "var(--brand-blue)" }} target="_blank" rel="noopener noreferrer">Click here for a map</a>
          </div>

          <div>
            <div className="uppercase tracking-wide text-xs text-black/60 dark:text-white/60">Email</div>
            <a href="mailto:graceumcgreer@gmail.com" className="mt-1 inline-block hover:underline" style={{ color: "var(--brand-red)" }}>graceumcgreer@gmail.com</a>
          </div>

          <div>
            <div className="uppercase tracking-wide text-xs text-black/60 dark:text-white/60">Phone</div>
            <a href="tel:18648777015" className="mt-1 inline-block hover:underline" style={{ color: "var(--brand-red)" }}>864-877-7015</a>
          </div>
        </div>
      </div>

      <div className="md:col-span-2">
        <ContactForm />
      </div>
    </div>
  );
}

