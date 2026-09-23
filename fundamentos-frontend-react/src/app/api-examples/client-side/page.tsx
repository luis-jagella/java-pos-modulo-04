import { Suspense } from "react";
import Link from "next/link";
import { Posts } from "@/components/Posts";
import { getPosts } from "@/lib/posts";

export const dynamic = "force-dynamic";

export default function ClientSidePostsPage() {
  const postsPromise = getPosts();

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <section className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-blue-700">← Voltar</Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">API example</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Posts com Suspense</h1>
        <p className="mt-3 text-slate-600">A Promise é passada ao Client Component e resolvida com a API use do React.</p>
        <Suspense fallback={<p className="mt-6 rounded-xl bg-blue-50 p-5 text-blue-950">Carregando posts...</p>}>
          <Posts postsPromise={postsPromise} />
        </Suspense>
      </section>
    </main>
  );
}
