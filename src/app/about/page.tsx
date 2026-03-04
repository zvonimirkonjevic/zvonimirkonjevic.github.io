export default function About() {
    return (
        <div className="pt-12 md:pt-16">
            <h1 className="font-heading text-4xl md:text-5xl font-normal tracking-tight mb-10 md:mb-12">
                About
            </h1>

            <div className="space-y-5 text-[1.0625rem] leading-[1.85]">
                <p>
                    Hi, I&apos;m <strong className="font-semibold">Zvonimir Konjević</strong> — a
                    software engineer passionate about building elegant, performant
                    solutions to complex problems.
                </p>
                <p>
                    I specialize in full-stack development with a focus on modern web
                    technologies, cloud architecture, and developer experience.
                    Currently exploring the intersection of AI and software engineering.
                </p>
                <p>
                    This blog is where I share my thoughts, experiments, and lessons
                    learned along the way. Topics range from TypeScript and React to
                    system design and machine learning.
                </p>
                <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                    contributing to open source, or enjoying the outdoors.
                </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
                <h2 className="text-lg font-semibold tracking-tight mb-4">Connect</h2>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {[
                        { href: "https://github.com/zvonimirkonjevic", label: "GitHub" },
                        { href: "https://linkedin.com/in/zvonimirkonjevic", label: "LinkedIn" },
                        { href: "https://twitter.com/zvonimirk", label: "X" },
                    ].map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-text-secondary underline underline-offset-2 decoration-text-muted hover:text-text hover:decoration-text transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
