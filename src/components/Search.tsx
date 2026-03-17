"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Search as SearchIcon, X as XIcon, FileText as FileTextIcon } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

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
                className="group flex items-center justify-between w-full sm:w-64 px-3 py-2 rounded-lg text-sm text-text-muted hover:text-text bg-gray-100 dark:bg-white/[0.04] hover:bg-gray-200 dark:hover:bg-white/[0.08] transition-all duration-300 ease-out border border-transparent dark:border-white/[0.04] shadow-sm"
                aria-label="Search posts"
            >
                <div className="flex items-center gap-2">
                    <SearchIcon className="w-4 h-4" />
                    <span className="font-medium">Search posts...</span>
                </div>
                <kbd className="hidden sm:inline-flex h-5 items-center gap-0.5 rounded border border-border/50 bg-black/[0.04] dark:bg-white/[0.04] px-1.5 font-mono text-[10px] font-medium text-text-muted">
                    <span>⌘</span>K
                </kbd>
            </button>

            <Command.Dialog
                open={open}
                onOpenChange={setOpen}
                label="Global Command Menu"
                className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 sm:px-0 bg-black/40 backdrop-blur-sm transition-all duration-300 animate-in fade-in"
                onClick={() => setOpen(false)}
            >
                <div
                    className="w-full max-w-2xl overflow-hidden rounded-xl bg-bg border border-border/50 shadow-2xl ring-1 ring-border/50 animate-in zoom-in-[0.98] duration-300"
                    onClick={(e) => e.stopPropagation()}
                >
                    <DialogTitle className="sr-only">Search Blog Posts</DialogTitle>
                    <div className="relative flex items-center border-b border-border">
                        <SearchIcon className="absolute left-4 w-4 h-4 text-text-muted" />
                        <Command.Input
                            placeholder="Type to search..."
                            className="w-full bg-bg py-4 pl-12 pr-12 text-base outline-none placeholder:text-text-muted"
                        />
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-3 p-1 rounded-md text-text-muted hover:text-text hover:bg-gray-100 dark:hover:bg-white/[0.06] transition-all duration-300 ease-out"
                            aria-label="Close search"
                        >
                            <XIcon className="w-4 h-4" />
                        </button>
                    </div>
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
                                    className="cursor-pointer select-none rounded-lg px-4 py-3 text-sm aria-selected:bg-gray-200 dark:aria-selected:bg-white/[0.12] hover:bg-gray-100 dark:hover:bg-white/[0.06] aria-selected:text-text flex items-start gap-3 group transition-colors duration-200"
                                >
                                    <FileTextIcon className="w-5 h-5 text-text-muted group-aria-selected:text-text group-hover:text-text mt-0.5 shrink-0 transition-colors duration-200" />
                                    <div className="flex flex-col gap-1">
                                        <div className="font-medium group-hover:text-text">{post.title}</div>
                                        {post.description && (
                                            <div className="text-xs text-text-secondary line-clamp-1 group-aria-selected:text-text/80 group-hover:text-text/80 transition-colors duration-200">
                                                {post.description}
                                            </div>
                                        )}
                                    </div>
                                </Command.Item>
                            ))}
                        </Command.Group>
                    </Command.List>
                </div>
            </Command.Dialog>
        </>
    );
}

