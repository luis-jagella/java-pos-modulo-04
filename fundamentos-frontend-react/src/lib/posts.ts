export type Post = {
  id: number;
  title: string;
  body: string;
};

export async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4", {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Could not load posts: ${response.status}`);
  }

  return response.json();
}
