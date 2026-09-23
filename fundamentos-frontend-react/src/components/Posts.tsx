"use client";

import { use } from "react";
import type { Post } from "@/lib/posts";
import { PostList } from "./PostList";

export function Posts({ postsPromise }: { postsPromise: Promise<Post[]> }) {
  const posts = use(postsPromise);

  return <PostList posts={posts} />;
}
