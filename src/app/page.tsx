import BlogList from "@/components/BlogList";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-[70rem] mx-auto px-6 md:px-8">
      <div className="md:px-4 lg:px-8 pt-24 md:pt-32">
        <header className="mb-20 max-w-2xl">
          <h1
            className="reveal font-heading text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-4"
            style={{ "--reveal-i": 0 } as React.CSSProperties}
          >
            zvonimir konjevic
          </h1>
          <p
            className="reveal text-text-secondary text-base md:text-lg leading-relaxed"
            style={{ "--reveal-i": 1 } as React.CSSProperties}
          >
            building agentic systems @ <strong className="font-medium text-text">intelligentia</strong>, mostly llm agents, document processing and evaluation pipelines. previously real-time computer vision on edge hardware @ <strong className="font-medium text-text">vegvisir</strong>. in free time tinkering with scalability, distributed systems & ai research, and sharing interesting stuff I learn along the way.
          </p>
        </header>

        <h2 className="reveal label mb-3" style={{ "--reveal-i": 2 } as React.CSSProperties}>
          Writing
        </h2>
        <BlogList posts={posts} revealOffset={3} />
      </div>
    </div>
  );
}
