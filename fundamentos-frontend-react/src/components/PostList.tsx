import type { Post } from "@/lib/posts";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="mt-6 grid gap-4">
      {posts.map((post) => (
        <li key={post.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="font-semibold capitalize text-slate-900">{post.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
