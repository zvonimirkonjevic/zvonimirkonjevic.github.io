import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-border mt-32">
            <div className="max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <Link
                            href="/"
                            className="font-heading text-xl tracking-tight text-text-primary hover:text-accent transition-colors duration-300"
                        >
                            ZK<span className="text-accent">.</span>
                        </Link>
                        <p className="text-text-muted text-sm mt-2 max-w-xs">
                            Thoughts on software engineering, technology, and building things.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        {[
                            { href: "https://github.com/zvonimirkonjevic", label: "GitHub" },
                            {
                                href: "https://linkedin.com/in/zvonimirkonjevic",
                                label: "LinkedIn",
                            },
                            { href: "https://twitter.com/zvonimirk", label: "X" },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-text-muted hover:text-accent transition-colors duration-300 tracking-wide"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-xs tracking-wide">
                        © {new Date().getFullYear()} Zvonimir Konjević. All rights reserved.
                    </p>
                    <p className="text-text-muted text-xs tracking-wide">
                        Built with Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
