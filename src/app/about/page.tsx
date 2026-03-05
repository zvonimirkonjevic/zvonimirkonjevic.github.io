export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-6 md:px-8">
            <div className="pt-12 md:pt-16 pb-16">
                <h1 className="font-heading text-4xl md:text-5xl font-normal tracking-tight mb-10 md:mb-12">
                    About
                </h1>

                {/* Bio paragraphs */}
                <div className="space-y-5 text-[1.0625rem] leading-[1.85] mb-14">
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

                {/* Technologies */}
                <section>
                    <h2 className="font-heading text-2xl font-normal tracking-tight mb-5">
                        Technologies
                    </h2>
                    <p className="text-text-secondary text-[0.9375rem] mb-5">
                        A selection of tools, frameworks, and languages I regularly work with.
                        For a broader view, check out my{" "}
                        <a
                            href="https://github.com/zvonimirkonjevic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text underline underline-offset-2 decoration-text-muted hover:decoration-text transition-colors duration-200"
                        >
                            GitHub
                        </a>
                        .
                    </p>

                    <div className="space-y-3 text-[0.9375rem]">
                        <div className="flex gap-3">
                            <span className="shrink-0">🌐</span>
                            <div>
                                <span className="font-semibold text-text">Frontend</span>
                                <span className="text-text-secondary">
                                    {" "}Next.js, React, TypeScript, Tailwind CSS, React Query.
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0">⚙️</span>
                            <div>
                                <span className="font-semibold text-text">Backend</span>
                                <span className="text-text-secondary">
                                    {" "}Python, FastAPI, Supabase, PostgreSQL, Stripe, Streamlit.
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0">☁️</span>
                            <div>
                                <span className="font-semibold text-text">Cloud &amp; Infra</span>
                                <span className="text-text-secondary">
                                    {" "}AWS, Terraform, Docker.
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0">🤖</span>
                            <div>
                                <span className="font-semibold text-text">AI / ML</span>
                                <span className="text-text-secondary">
                                    {" "}LangChain, Gemini, OpenAI, Claude, XGBoost, mechanistic interpretability.
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
