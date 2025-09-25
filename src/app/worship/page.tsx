import Link from "next/link";

export default function WorshipPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 bg-white/60 dark:bg-black/30 backdrop-blur">
        <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--brand-red)" }}>Worship</h1>
        <div className="space-y-4 text-sm">
          <div>
            <div className="uppercase tracking-wide text-xs text-black/60 dark:text-white/60">Service Times</div>
            <ul className="mt-2 space-y-2 list-disc pl-5">
              <li><span className="font-medium">9:00 a.m.</span> – Contemporary worship with our praise band (Awesome Worship Experience).</li>
              <li><span className="font-medium">10:00 a.m.</span> – Sunday School for all ages; nursery provided.</li>
              <li><span className="font-medium">11:00 a.m.</span> – Traditional Protestant worship with hymns and contemporary music, communal and private prayers, Scripture reading, and a sermon connecting God's Word to daily life. Warm and welcoming.</li>
            </ul>
          </div>

          <div>
            <div className="uppercase tracking-wide text-xs text-black/60 dark:text-white/60">Join Online</div>
            <p className="mt-2">
              We live-stream and upload all services to our public Facebook page. Join from anywhere, anytime: {" "}
              <Link href="https://www.facebook.com/GraceUMCGreer/" className="hover:underline" style={{ color: "var(--brand-blue)" }}>facebook.com/GraceUMCGreer</Link>
            </p>
          </div>

          <div>
            <div className="uppercase tracking-wide text-xs text-black/60 dark:text-white/60">Children & Nursery</div>
              <p className="mt-2">
                A nursery is provided with a nursery worker and volunteers during both worship services and Sunday School. As part of the United Methodist Church, we practice &ldquo;Safe Sanctuaries&rdquo; to protect all children from any form of abuse. Parents are always welcome to visit the nursery.
              </p>
              <p className="mt-2">
                Children are always welcome in worship! Coloring and activity pages related to the day&apos;s theme are available at the back of the sanctuary.
              </p>
          </div>

          <div>
            <div className="uppercase tracking-wide text-xs text-black/60 dark:text-white/60">Holy Communion</div>
            <p className="mt-2">
              We celebrate Holy Communion on the first Sunday of each month. We practice an &ldquo;open table&rdquo; — all are invited to partake as you feel comfortable. Membership is not required. We serve grape juice. Receive the bread and cup as signs of God&apos;s love and forgiveness.
            </p>
          </div>

          <div>
            <div className="uppercase tracking-wide text-xs text-black/60 dark:text-white/60">Accessibility & Parking</div>
            <p className="mt-2">
              Handicap parking is clearly marked next to the main sanctuary entrance. Visitor parking is available anywhere on campus.
            </p>
          </div>

          <div>
            <div className="uppercase tracking-wide text-xs text-black/60 dark:text-white/60">Dress</div>
            <p className="mt-2">
              There’s no dress code. You’ll see everything from casual to dressy — come as you are.
            </p>
          </div>

          <div>
            <div className="uppercase tracking-wide text-xs text-black/60 dark:text-white/60">Hearing Help</div>
            <p className="mt-2">
              Hearing assist devices are available. Ask a greeter and we’ll be glad to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

