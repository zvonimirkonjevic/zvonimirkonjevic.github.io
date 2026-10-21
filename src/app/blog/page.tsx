import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, PostMeta } from "@/lib/posts";

export const metadata: Metadata = {
  title: "posts - zvonimir konjevic",
  description: "All posts by Zvonimir Konjevic, Machine Learning Engineer.",
};

// UTC so a post dated at midnight doesn't slip into the previous month on build machines west of Greenwich
function groupByMonth(posts: PostMeta[]) {
  const groups: { label: string; posts: PostMeta[] }[] = [];

  for (const post of posts) {
    const label = new Date(post.date).toLocaleDateString("en-GB", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
    const last = groups[groups.length - 1];
    // Posts arrive sorted newest first, so a month boundary is just a label change
    if (last?.label === label) last.posts.push(post);
    else groups.push({ label, posts: [post] });
  }

  return groups;
}

export default function Posts() {
  const groups = groupByMonth(getAllPosts());
  let revealIndex = 1;

  return (
    <div className="max-w-[70rem] mx-auto px-6 md:px-8">
      <div className="md:px-4 lg:px-8 pt-24 md:pt-32 pb-16">
        <h1
          className="reveal font-heading text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-16"
          style={{ "--reveal-i": 0 } as React.CSSProperties}
        >
          posts
        </h1>

        <div className="post-list max-w-3xl space-y-10">
          {groups.map(({ label, posts }) => (
            <section key={label}>
              <h2 className="reveal label mb-3" style={{ "--reveal-i": revealIndex++ } as React.CSSProperties}>
                {label}
              </h2>
              <ul>
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="post-item reveal block py-2 text-base md:text-lg font-medium leading-snug transition-opacity duration-200 ease-out"
                      style={{ "--reveal-i": revealIndex++ } as React.CSSProperties}
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
