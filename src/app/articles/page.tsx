import Link from "next/link";
import { getAllArticles } from "../../lib/articles";

export default function ArticlesIndexPage() {
  const posts = getAllArticles();
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-6 bg-white/60 dark:bg-black/30 backdrop-blur">
        <h1 className="text-3xl font-bold" style={{ color: "var(--brand-red)" }}>All News Articles</h1>
        <p className="mt-2 text-sm text-black/70 dark:text-white/70">Browse all announcements and stories. Click any title to read the full article.</p>
      </div>

      <div className="rounded-2xl border border-black/[.08] dark:border-white/[.145] p-2 sm:p-4 bg-black/[.04] dark:bg-white/[.06]">
        <ul className="divide-y divide-black/[.08] dark:divide-white/[.145]">
          {posts.map((post) => (
            <li key={post.slug} className="px-4 py-4 sm:px-6 hover:bg-white/60 dark:hover:bg-black/20 transition-colors">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <Link href={`/articles/${post.slug}`} className="hover:underline" style={{ color: "var(--brand-red)" }}>
                    <span className="font-semibold">{post.title}</span>
                  </Link>
                  <div className="text-xs text-black/60 dark:text-white/60 mt-1">
                    {post.displayDate ?? new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <Link href={`/articles/${post.slug}`} className="text-sm shrink-0 hover:underline" style={{ color: "var(--brand-blue)" }}>Read →</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


