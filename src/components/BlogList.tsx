import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import { ArrowRight } from "lucide-react";

interface BlogListProps {
    posts: PostMeta[];
    revealOffset?: number;
}

export default function BlogList({ posts, revealOffset = 0 }: BlogListProps) {
    return (
        <section className="post-list">
            {posts.map((post, index) => (
                <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="post-item reveal group block py-3 transition-opacity duration-200 ease-out"
                    style={{ "--reveal-i": revealOffset + index } as React.CSSProperties}
                >
                    <time dateTime={post.date} className="block font-mono text-xs text-text-muted group-hover:text-text-secondary transition-colors duration-200 mb-1">
                        {new Date(post.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            timeZone: "UTC",
                        })}
                    </time>
                    <h3 className="text-base md:text-lg font-medium leading-snug">
                        {post.title}
                        <ArrowRight
                            aria-hidden="true"
                            className="inline-block w-4 h-4 ml-1.5 align-[-0.125em] opacity-0 -translate-x-1 transition-[opacity,translate] duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
                        />
                    </h3>
                </Link>
            ))}
        </section>
    );
}
