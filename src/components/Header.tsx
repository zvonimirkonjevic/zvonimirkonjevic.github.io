"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
    return (
        <header className="border-b border-border">
            <nav className="w-full px-8 md:px-12 h-14 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-sm font-medium tracking-wider uppercase text-text hover:opacity-60 transition-opacity duration-200"
                >
                    Zvonimir Konjević
                </Link>

                <div className="flex items-center gap-6">
                    {[
                        { href: "/", label: "Blog" },
                        { href: "/about", label: "About" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium tracking-wider uppercase text-text-secondary hover:text-text transition-colors duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="md:ml-2">
                        <ThemeToggle />
                    </div>
                </div>
            </nav>
        </header>
    );
}
