"use client";

import { useEffect, useState } from "react";

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

export function TOC({ source }: { source: string }) {
    const [headings, setHeadings] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        // Parse markdown headings (h2 and h3)
        const headingLines = source.split("\n").filter((line) => line.match(/^#{2,3}\s/));

        const tocItems = headingLines.map((line) => {
            const level = line.match(/^#+/)?.[0].length || 2;
            const text = line.replace(/^#+\s/, "").replace(/[^\w\s-]/g, "").trim();
            // This needs to match how rehype-slug generates IDs
            const id = text
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");

            return { id, text, level };
        });

        setHeadings(tocItems);

        // Set up intersection observer to highlight active heading
        const callback = (entries: IntersectionObserverEntry[]) => {
            // Find the most visible heading
            const visibleEntries = entries.filter((entry) => entry.isIntersecting);
            if (visibleEntries.length > 0) {
                setActiveId(visibleEntries[0].target.id);
            }
        };

        const observer = new IntersectionObserver(callback, {
            rootMargin: "0px 0px -80% 0px", // Trigger when heading passes top 20%
        });

        tocItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [source]);

    if (headings.length === 0) return null;

    return (
        <nav className="mb-12 md:hidden">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-3">
                Table of Contents
            </h2>
            <ul className="space-y-2 text-sm">
                {headings.map((heading, index) => (
                    <li
                        key={index}
                        className={`${heading.level === 3 ? "ml-4" : ""} ${activeId === heading.id ? "text-text font-medium" : "text-text-secondary"
                            } transition-colors duration-200`}
                    >
                        <a href={`#${heading.id}`} className="hover:text-text hover:underline decoration-text-muted underline-offset-2">
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

// Side TOC for desktop view
export function SideTOC({ source }: { source: string }) {
    const [headings, setHeadings] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const headingLines = source.split("\n").filter((line) => line.match(/^#{2,3}\s/)); // h2, h3 only

        const tocItems = headingLines.map((line) => {
            const level = line.match(/^#+/)?.[0].length || 2;
            const text = line.replace(/^#+\s/, "")
                // Remove some common markdown characters for the id (simplified version of githubslugger)
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // link text
                .replace(/[*_~`]/g, '');

            // Simplistic slugify corresponding to github-slugger which rehype-slug uses
            const id = text
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w-]/g, "");

            return { id, text: text.trim(), level };
        });

        setHeadings(tocItems);

        const headingElements = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);

        const handleScroll = () => {
            if (headingElements.length === 0) return;
            // Find the heading closest to the top of the viewport
            let currentActive = headingElements[0]?.id || "";
            for (const el of headingElements) {
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // If element is near top, make it active
                    if (rect.top <= 120) {
                        currentActive = el.id;
                    }
                }
            }
            setActiveId(currentActive);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Trigger once on load
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [source]);

    if (headings.length === 0) return null;

    return (
        <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto hidden md:block w-52 pl-4 border-l border-border mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-4">
                On this page
            </h2>
            <ul className="space-y-2.5 text-sm">
                {headings.map((heading, index) => (
                    <li
                        key={index}
                        className={`${heading.level === 3 ? "ml-3 border-l pl-2 border-border/50 text-[13px]" : ""} transition-colors duration-200`}
                    >
                        <a
                            href={`#${heading.id}`}
                            className={`block leading-snug hover:text-text transition-colors duration-200 ${activeId === heading.id ? "text-text font-medium" : "text-text-muted"
                                }`}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
