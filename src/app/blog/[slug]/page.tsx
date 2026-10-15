import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import PostBody from "@/components/PostBody";
import { TOC, SideTOC } from "@/components/TOC";
import { ScrollProgress } from "@/components/ScrollProgress";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    if (slugs.length === 0) {
        // Return a placeholder to satisfy Next.js static export requirement
        // when no posts exist. This path will be handled in the component.
        return [{ slug: 'placeholder' }];
    }
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.title} — zvonimir konjevic blog`,
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
    
    // Handle the placeholder case or missing posts
    if (slug === 'placeholder') notFound();
    
    const post = getPostBySlug(slug);

    if (!post) notFound();

    return (
        <>
            <ScrollProgress />
            <div className="max-w-[70rem] mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-8 lg:gap-16">

                <article className="pt-12 md:pt-16 flex-1 min-w-0 max-w-3xl">
                    {/* Post header */}
                    <header className="mb-10 md:mb-12">
                        <div className="reveal label font-mono text-xs mb-4" style={{ "--reveal-i": 0 } as React.CSSProperties}>
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                timeZone: "UTC",
                            })}
                            {" · "}
                            {post.readingTime}
                        </div>

                        <h1
                            className="reveal font-heading text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-5"
                            style={{ "--reveal-i": 1 } as React.CSSProperties}
                        >
                            {post.title}
                        </h1>

                        {post.description && (
                            <p
                                className="reveal text-text-secondary text-base md:text-lg leading-relaxed mb-5 max-w-2xl"
                                style={{ "--reveal-i": 2 } as React.CSSProperties}
                            >
                                {post.description}
                            </p>
                        )}

                        {post.tags.length > 0 && (
                            <div
                                className="reveal flex flex-wrap gap-2 text-xs text-text-secondary"
                                style={{ "--reveal-i": 3 } as React.CSSProperties}
                            >
                                {post.tags.map((tag) => (
                                    <span key={tag} className="px-2.5 py-1 rounded-full bg-surface">{tag.toLowerCase()}</span>
                                ))}
                            </div>
                        )}

                        {post.cover && (
                            <figure
                                className="reveal mt-10 overflow-hidden rounded-2xl border border-border"
                                style={{ "--reveal-i": 4 } as React.CSSProperties}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={post.cover} alt="" className="block aspect-video w-full object-cover" />
                            </figure>
                        )}
                    </header>

                    {/* Mobile inline TOC */}
                    <TOC source={post.content} />

                    {/* Post body */}
                    <PostBody content={post.content} />

                </article>

                {/* Desktop Side TOC */}
                <aside className="hidden md:block w-56 shrink-0 pt-16">
                    <SideTOC source={post.content} />
                </aside>

            </div>
        </>
    );
}
