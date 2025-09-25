import Link from "next/link";
import { getAllArticles } from "../lib/articles";
import Hero from "./components/Hero";

export default function Home() {
  const posts = getAllArticles();
  return (
    <div className="space-y-10">
      <Hero />
      <section>
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <Link href="/articles" className="text-sm hover:underline" style={{ color: "var(--brand-blue)" }}>View all</Link>
        </div>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <li key={post.slug} className="rounded-xl border border-black/[.08] dark:border-white/[.145] bg-white/60 dark:bg-black/30 backdrop-blur p-6 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold" style={{ color: "var(--brand-red)" }}>
                <Link href={`/articles/${post.slug}`} className="hover:underline" style={{ color: "var(--brand-red)" }}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-xs text-black/60 dark:text-white/60 mt-1">{post.displayDate ?? new Date(post.date).toLocaleDateString()}</p>
              <p className="mt-3 text-sm">{post.excerpt}</p>
              <div className="mt-4">
                <Link href={`/articles/${post.slug}`} className="text-sm hover:underline" style={{ color: "var(--brand-blue)" }}>Read more →</Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
