import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import PostBody from "@/components/PostBody";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.title} — Zvonimir Konjević`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
        },
    };
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    return (
        <article className="pt-12 md:pt-16">
            {/* Post header */}
            <header className="mb-10 md:mb-12">
                <Link
                    href="/"
                    className="inline-block text-sm text-text-secondary hover:text-text transition-colors duration-200 mb-8"
                >
                    ← Back
                </Link>

                <h1 className="font-heading text-3xl md:text-4xl font-normal tracking-tight leading-[1.15] mb-4">
                    {post.title}
                </h1>

                {post.description && (
                    <p className="text-text-secondary text-lg leading-relaxed mb-4">
                        {post.description}
                    </p>
                )}

                <div className="text-sm text-text-secondary">
                    {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                    {" — "}
                    {post.readingTime}
                    {post.tags.length > 0 && (
                        <>
                            {" — "}
                            {post.tags.join(", ")}
                        </>
                    )}
                </div>
            </header>

            {/* Post body */}
            <PostBody content={post.content} />

            {/* Post footer */}
            <footer className="mt-16 pt-8 border-t border-border">
                <Link
                    href="/"
                    className="text-sm text-text-secondary hover:text-text transition-colors duration-200"
                >
                    ← Back to all posts
                </Link>
            </footer>
        </article>
    );
}
