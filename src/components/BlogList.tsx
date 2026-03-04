import Link from "next/link";
import { PostMeta } from "@/lib/posts";

interface BlogListProps {
    posts: PostMeta[];
}

export default function BlogList({ posts }: BlogListProps) {
    // Group posts by "Year Month" (e.g. "2026 March")
    const grouped = posts.reduce<Record<string, PostMeta[]>>((acc, post) => {
        const d = new Date(post.date);
        const key = `${d.getFullYear()} ${d.toLocaleDateString("en-US", { month: "long" })}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(post);
        return acc;
    }, {});

    const groups = Object.entries(grouped);

    return (
        <section>
            {groups.map(([group, groupPosts]) => (
                <div
                    key={group}
                    className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-x-12 gap-y-2 py-8 first:pt-0"
                >
                    {/* Month-Year label */}
                    <div className="text-sm text-text-secondary font-medium pt-1 md:pt-0.5">
                        {group}
                    </div>

                    {/* Posts */}
                    <div className="space-y-6">
                        {groupPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="block group"
                            >
                                <h3 className="text-base font-semibold text-text group-hover:underline underline-offset-2 decoration-text-muted transition-all duration-200">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-text-secondary mt-1">
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                    {post.tags.length > 0 && (
                                        <>
                                            {" — "}
                                            {post.tags.join(", ")}
                                        </>
                                    )}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
