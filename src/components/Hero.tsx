"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const line1Ref = useRef<HTMLDivElement>(null);
    const line2Ref = useRef<HTMLDivElement>(null);
    const line3Ref = useRef<HTMLDivElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const dividerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.from(line1Ref.current, {
                y: 120,
                opacity: 0,
                duration: 1.2,
                delay: 0.3,
            })
                .from(
                    line2Ref.current,
                    {
                        y: 120,
                        opacity: 0,
                        duration: 1.2,
                    },
                    "-=0.9"
                )
                .from(
                    line3Ref.current,
                    {
                        y: 120,
                        opacity: 0,
                        duration: 1.2,
                    },
                    "-=0.9"
                )
                .from(
                    subtitleRef.current,
                    {
                        y: 40,
                        opacity: 0,
                        duration: 1,
                    },
                    "-=0.6"
                )
                .from(
                    dividerRef.current,
                    {
                        scaleX: 0,
                        duration: 1.2,
                        ease: "power2.inOut",
                    },
                    "-=0.8"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="min-h-[85vh] flex flex-col justify-center pt-20 md:pt-0"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-8 w-full">
                <div className="space-y-2 md:space-y-4">
                    <div className="overflow-hidden">
                        <div ref={line1Ref}>
                            <span className="block font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-text-primary">
                                Zvonimir
                            </span>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div ref={line2Ref}>
                            <span className="block font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.9] text-text-primary italic">
                                Konjević
                            </span>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <div ref={line3Ref}>
                            <span className="block font-heading text-lg sm:text-xl md:text-2xl tracking-wide text-accent mt-4 md:mt-6">
                                — Blog
                            </span>
                        </div>
                    </div>
                </div>

                <p
                    ref={subtitleRef}
                    className="text-text-secondary text-base md:text-lg max-w-lg mt-8 md:mt-12 leading-relaxed"
                >
                    Exploring software engineering, technology, and the art of building
                    things that matter. A collection of thoughts, experiments, and lessons
                    learned.
                </p>

                <div
                    ref={dividerRef}
                    className="h-px bg-gradient-to-r from-accent via-border-light to-transparent mt-12 md:mt-16 origin-left"
                />
            </div>
        </section>
    );
}
