import BlogList from "@/components/BlogList";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="pt-12 md:pt-16">
      <h1 className="font-heading text-4xl md:text-5xl font-normal tracking-tight mb-12 md:mb-16">
        Index
      </h1>
      <BlogList posts={posts} />
    </div>
  );
}
