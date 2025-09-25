import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "../../../lib/articles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllArticles();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function ArticlePage(props: PageProps) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }
  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-black/60 dark:text-white/60 mb-6">{new Date(article.date).toLocaleDateString()}</p>
      <div className="prose prose-invert max-w-none">
        <p>{article.content}</p>
      </div>
    </article>
  );
}

