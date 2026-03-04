export default function Marquee() {
    const items = [
        "Software Engineering",
        "TypeScript",
        "React",
        "Next.js",
        "Cloud Architecture",
        "System Design",
        "Machine Learning",
        "Open Source",
        "Web Performance",
        "Developer Experience",
    ];

    const separator = (
        <span className="text-accent mx-4 md:mx-6 text-lg">✦</span>
    );

    return (
        <div className="relative py-8 md:py-12 overflow-hidden border-y border-border my-16 md:my-24">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-bg-primary to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-bg-primary to-transparent z-10" />

            {/* Row 1 */}
            <div className="flex animate-marquee whitespace-nowrap mb-4">
                {[...items, ...items].map((item, i) => (
                    <span key={i} className="inline-flex items-center">
                        <span className="text-sm md:text-base tracking-widest uppercase text-text-muted font-body select-none">
                            {item}
                        </span>
                        {separator}
                    </span>
                ))}
            </div>

            {/* Row 2 — reverse */}
            <div className="flex animate-marquee-reverse whitespace-nowrap">
                {[...items.reverse(), ...items].map((item, i) => (
                    <span key={i} className="inline-flex items-center">
                        <span className="text-sm md:text-base tracking-widest uppercase text-text-muted/60 font-body select-none">
                            {item}
                        </span>
                        {separator}
                    </span>
                ))}
            </div>
        </div>
    );
}
