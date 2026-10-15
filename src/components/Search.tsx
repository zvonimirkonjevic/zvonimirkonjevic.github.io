"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Search as SearchIcon, X as XIcon, ArrowRight } from "lucide-react";
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
                className="group flex items-center justify-between w-full sm:w-64 px-3 py-2 rounded-lg text-sm text-text-muted hover:text-text bg-surface transition-colors duration-200"
                aria-label="Search posts"
            >
                <div className="flex items-center gap-2">
                    <SearchIcon className="w-4 h-4" />
                    <span>Search posts...</span>
                </div>
                <kbd className="hidden sm:inline-flex h-5 items-center gap-0.5 rounded border border-border px-1.5 font-mono text-[10px] font-medium text-text-muted">
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
                    className="w-full max-w-2xl overflow-hidden rounded-2xl bg-bg border border-border shadow-2xl animate-in zoom-in-[0.98] duration-300"
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
                            className="absolute right-3 p-1 text-text-muted hover:text-text transition-colors duration-200"
                            aria-label="Close search"
                        >
                            <XIcon className="w-4 h-4" />
                        </button>
                    </div>
                    <Command.List className="search-list max-h-[300px] overflow-y-auto p-2">
                        <Command.Empty className="py-6 text-center text-sm text-text-muted">
                            No results found.
                        </Command.Empty>

                        <Command.Group heading="Posts" className="label px-2 py-1.5">
                            {posts.map((post) => (
                                <Command.Item
                                    key={post.slug}
                                    value={post.title}
                                    onSelect={() => runCommand(() => router.push(`/blog/${post.slug}`))}
                                    className="group cursor-pointer select-none px-4 py-3 text-text-secondary aria-selected:text-text transition-[color,opacity] duration-200 ease-out"
                                >
                                    <div className="text-base font-medium leading-snug">
                                        {post.title}
                                        <ArrowRight
                                            aria-hidden="true"
                                            className="inline-block w-4 h-4 ml-1.5 align-[-0.125em] opacity-0 -translate-x-1 transition-[opacity,translate] duration-200 ease-out group-aria-selected:opacity-100 group-aria-selected:translate-x-0"
                                        />
                                    </div>
                                    {post.description && (
                                        <div className="mt-1 text-sm text-text-muted line-clamp-1 group-aria-selected:text-text-secondary transition-colors duration-200">
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

