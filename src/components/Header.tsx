"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Search, SearchPost } from "./Search";

export default function Header({ searchPosts = [] }: { searchPosts?: SearchPost[] }) {
    const pathname = usePathname();

    return (
        <header className="border-b border-border">
            <nav className="w-full px-8 md:px-12 h-14 flex items-center justify-between">
                {pathname.startsWith("/blog/") ? (
                    (() => {
                        const slug = pathname.replace("/blog/", "");
                        const post = searchPosts?.find((p) => p.slug === slug);

                        return (
                            <div className="flex items-center text-sm font-medium flex-1 min-w-0 pr-4">
                                <Link
                                    href="/"
                                    className="lowercase text-text-secondary hover:text-text transition-colors duration-200 shrink-0"
                                >
                                    zvonimir konjevic
                                </Link>
                                <span className="mx-2 text-text-muted shrink-0 font-light">/</span>
                                <span className="lowercase text-text cursor-default truncate max-w-[250px] md:max-w-md">
                                    {post ? post.title : slug}
                                </span>
                            </div>
                        );
                    })()
                ) : (
                    <Link
                        href="/"
                        className="text-sm font-medium lowercase text-text hover:text-text-secondary transition-colors duration-200 shrink-0"
                    >
                        zvonimir konjevic
                    </Link>
                )}

                <div className="flex items-center gap-4">
                    <Search posts={searchPosts} />
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}

