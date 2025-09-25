import Link from "next/link";

export default function MinistryOpportunitiesPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 bg-white/60 dark:bg-black/30 backdrop-blur">
        <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--brand-red)" }}>Ministry Opportunities</h1>
        <p className="text-sm">
          Grace United Methodist Church offers a wide variety of opportunities to share in ministry together,
          both within the congregation and to the world outside our doors; in Greer, South Carolina, the
          United States and around the globe.
        </p>
      </div>

      <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 bg-black/[.04] dark:bg-white/[.06]">
        <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--brand-red)" }}>Organized Units of United Methodist Agencies</h2>
        <ul className="space-y-2 list-disc pl-5 text-sm">
          <li>
            <Link href="https://www.umcsc.org/women/" className="hover:underline" style={{ color: "var(--brand-blue)" }}>
              The United Methodist Women
            </Link>
          </li>
          <li>
            <Link href="https://mennministrysc.org/" className="hover:underline" style={{ color: "var(--brand-blue)" }}>
              The United Methodist Men
            </Link>
          </li>
        </ul>
        <p className="mt-3 text-sm">Click on the agencies above to learn more.</p>
      </div>
    </div>
  );
}

