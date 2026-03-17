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
