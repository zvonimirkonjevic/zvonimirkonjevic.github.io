import BlogList from "@/components/BlogList";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-[70rem] mx-auto px-6 md:px-8">
      <div className="md:px-4 lg:px-8">
        <div className="pt-24 md:pt-32 mb-16 max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            zvonimir konjevic
          </h1>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            Hello, my name is Zvonimir. I am a <strong className="font-semibold">Machine Learning Engineer</strong> at <strong className="font-semibold">Intelligentia</strong>, building LLM-based systems, AI agents, and end-to-end ML pipelines for production environments. Before this, I worked on Computer Vision at Vegvisir. On this blog, I write about building AI agents, LLMs, and MLOps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Posts Column spanning full width */}
          <div className="md:col-span-4">
            <h2 className="text-2xl font-bold tracking-tight mb-4">posts</h2>
            <BlogList posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
}
