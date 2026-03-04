"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Search as SearchIcon } from "lucide-react";

export interface SearchPost {
    title: string;
    slug: string;
    description?: string;
}

export function Search({ posts }: { posts: SearchPost[] }) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="group flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors duration-200"
                aria-label="Search"
            >
                <SearchIcon className="w-4 h-4" />
                <span className="hidden sm:inline-block text-xs uppercase tracking-wider font-medium">Search</span>
                <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-bg-secondary px-1.5 font-mono text-[10px] font-medium text-text-muted opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            <Command.Dialog
                open={open}
                onOpenChange={setOpen}
                label="Global Command Menu"
                className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 sm:px-0 bg-bg-primary/80 backdrop-blur-sm"
            >
                <div className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-bg-primary shadow-2xl">
                    <Command.Input
                        placeholder="Search posts..."
                        className="w-full border-b border-border bg-transparent px-4 py-4 text-base outline-none placeholder:text-text-muted"
                    />
                    <Command.List className="max-h-[300px] overflow-y-auto p-2">
                        <Command.Empty className="py-6 text-center text-sm text-text-muted">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="Posts" className="text-xs font-medium text-text-muted px-2 py-1.5">
                            {posts.map((post) => (
                                <Command.Item
                                    key={post.slug}
                                    value={post.title}
                                    onSelect={() => runCommand(() => router.push(`/blog/${post.slug}`))}
                                    className="cursor-pointer select-none rounded-md px-3 py-3 text-sm aria-selected:bg-bg-secondary aria-selected:text-text"
                                >
                                    <div className="font-medium">{post.title}</div>
                                    {post.description && (
                                        <div className="mt-1 text-xs text-text-secondary line-clamp-1">
                                            {post.description}
                                        </div>
                                    )}
                                </Command.Item>
                            ))}
                        </Command.Group>
                    </Command.List>
                </div>
            </Command.Dialog>
        </>
    );
}

