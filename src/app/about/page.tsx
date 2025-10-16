import Image from "next/image";
import Link from "next/link";
import emblem from "../../../img/cross_and_flame.jpg";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 bg-black/[.04] dark:bg-white/[.06]">
        <h1 className="text-3xl font-bold mb-4" style={{ color: "var(--brand-red)" }}>About Us</h1>
        <div className="space-y-4 text-sm">
          <p>
            Founded in 1959, Grace is a special treasure: a country church just
            moments from “town.” Located just moments from Wade Hampton Boulevard
            and downtown Greer, the warm, welcoming hearts of Grace and the
            meaningful worship experiences make this a special place. Visitors are
            enthusiastically welcomed and every effort is made to help them feel at
            home.             Both worship services have professional worship directors who are
            incredibly talented and highly dedicated to doing their best for our Lord!
          </p>
          <div className="mt-6 space-y-3">
            <div
              className="text-lg font-semibold tracking-tight leading-tight bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
              style={{ backgroundImage: "linear-gradient(90deg, var(--brand-red), var(--brand-blue))" }}
            >
              Welcoming Love
            </div>
            <p className="text-sm ml-4">
              We welcome visitors and family with warmth, openness and a sense of belonging.
            </p>
            
            <div
              className="text-lg font-semibold tracking-tight leading-tight bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
              style={{ backgroundImage: "linear-gradient(90deg, var(--brand-blue), var(--brand-red))" }}
            >
              Sharing Hope
            </div>
            <p className="text-sm ml-4">
              We provide encouragement and nurture faith through sharing God's word.
            </p>
            
            <div
              className="text-lg font-semibold tracking-tight leading-tight bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
              style={{ backgroundImage: "linear-gradient(90deg, var(--brand-red), var(--brand-blue))" }}
            >
              Serving with Compassion
            </div>
            <p className="text-sm ml-4">
              We give generously of our love, gifts, and talents as we serve others.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 bg-white/60 dark:bg-black/30 backdrop-blur">
            <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--brand-red)" }}>About United Methodists</h2>
            <div className="space-y-4 text-sm">
              <p>
                With over 11 million members world-wide, the United Methodist Church
                is the largest Protestant Denomination of the Christian faith.
              </p>
              <p>
                The United Methodist Church today is a merger of the original English
                speaking Methodist Church, and the originally German speaking Evangelical
                United Brethren. The two churches joined together in 1968, forming the
                United Methodist Church. Both churches shared a common belief system and
                structure, just different languages. When the “EUB’s” no longer spoke
                German, but now spoke English, the two churches felt it was time to unify
                into a single denomination.
              </p>
              <p>
                The cross and flame emblem logo of the United Methodist Church represents
                that union, with the cross representing Jesus Christ, and the two tongues
                of flame representing the Holy Spirit in the two churches joining together.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 bg-black/[.04] dark:bg-white/[.06]">
            <h2 className="text-xl font-semibold mb-3" style={{ color: "var(--brand-red)" }}>So, what are United Methodists about?</h2>
            <p className="text-sm">What are we known for? The most common answer is three things:</p>
            <ul className="mt-3 space-y-2 list-decimal pl-5 text-sm">
              <li>
                Trying to make a difference in the world. Methodists have a long history
                of ministry helping make society a better place for all people.
              </li>
              <li>
                A deep spirituality that translates faith into daily living with God.
              </li>
              <li>
                Our connectedness to each other — we call it “the Connection.” Each
                United Methodist congregation is tied to all the others through common
                beliefs and shared structure. We join together to accomplish ministry in
                ways single congregations might not be able to do otherwise.
              </li>
            </ul>
            <p className="mt-4 text-sm">
              For more information go to {" "}
              <Link href="https://www.umc.org" className="hover:underline" style={{ color: "var(--brand-blue)" }}>umc.org</Link>.
            </p>
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-2xl border border-black/[.08] dark:border-white/[.145] bg-white/60 dark:bg-black/30">
          <Image src={emblem} alt="United Methodist cross and flame emblem" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

