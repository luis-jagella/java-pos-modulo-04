import Link from "next/link";
import { PostList } from "@/components/PostList";
import { getPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default async function ServerSidePostsPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-blue-700">← Voltar</Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">API example</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Posts carregados no servidor</h1>
        <p className="mt-3 text-slate-600">A página aguarda o fetch no Server Component antes de renderizar a lista.</p>
        <PostList posts={posts} />
      </section>
    </main>
  );
}
