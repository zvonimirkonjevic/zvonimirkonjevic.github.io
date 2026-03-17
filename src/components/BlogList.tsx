import Link from "next/link";
import { PostMeta } from "@/lib/posts";
import { FileText } from "lucide-react";

interface BlogListProps {
    posts: PostMeta[];
}

export default function BlogList({ posts }: BlogListProps) {
    return (
        <section>
            <div className="space-y-1">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-3 group -mx-3 px-3 py-2 rounded-lg transition-all duration-300 ease-out hover:bg-gray-100 dark:hover:bg-white/[0.05] hover:translate-x-1"
                    >
                        <FileText className="w-4 h-4 text-text-muted transition-colors duration-300 shrink-0 group-hover:text-text" />
                        <h3 className="text-[15px] font-medium text-text-secondary transition-colors duration-300 truncate group-hover:text-text">
                            {post.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}
