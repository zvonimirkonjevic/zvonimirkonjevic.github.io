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
                        Hello, my name is Zvonimir. I am a <strong className="font-semibold">Machine Learning Engineer</strong> at{" "}
                        <strong className="font-semibold">Intelligentia</strong> in Osijek, Croatia, where I build
                        managed LLM chains and AI agents for natural language processing.
                    </p>
                    <p>
                        At Intelligentia, I design and build LangGraph-based agents that translate natural language
                        into structured database queries. I also lead fine-tuning efforts for domain-specific LLMs
                        and oversee data pipelines for agents that automate document processing — from annotation
                        through to production deployment.
                    </p>
                    <p>
                        Before Intelligentia, I worked at Vegvisir on Computer Vision solutions. Outside of work
                        I build full-stack AI web applications, end-to-end ML pipelines on AWS, and have shipped
                        projects across the stack — from mobile apps in Kotlin and Swift to cloud infrastructure
                        with Terraform and SageMaker.
                    </p>
                    <p>
                        I am pursuing an M.Eng. in Computer Science at FERIT Osijek (B.S. 2025) and hold
                        AWS certifications as Solutions Architect, Developer, and Cloud Practitioner.
                        On this blog I share what I build and learn — mostly around AI agents, LLMs, and cloud engineering.
                    </p>
                </div>

                {/* Technologies */}
                <section>
                    <h2 className="font-heading text-2xl font-normal tracking-tight mb-5">
                        Technologies
                    </h2>
                    <p className="text-text-secondary text-[0.9375rem] mb-5">
                        A selection of tools, frameworks, and languages I regularly work with.
                    </p>

                    <div className="space-y-3 text-[0.9375rem]">
                        <div className="flex gap-3">
                            <span className="shrink-0">🤖</span>
                            <div>
                                <span className="font-semibold text-text">AI / LLMs</span>
                                <span className="text-text-secondary">
                                    {" "}LangChain, LangGraph, LangSmith, OpenAI, Gemini, Claude, RAG, fine-tuning.
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0">⚙️</span>
                            <div>
                                <span className="font-semibold text-text">Backend</span>
                                <span className="text-text-secondary">
                                    {" "}Python, FastAPI, Streamlit, PostgreSQL, ClickHouse, SQL.
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0">☁️</span>
                            <div>
                                <span className="font-semibold text-text">Cloud &amp; Infra</span>
                                <span className="text-text-secondary">
                                    {" "}AWS (SageMaker, Lambda, ECS, API Gateway), Terraform, Docker.
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0">🌐</span>
                            <div>
                                <span className="font-semibold text-text">Frontend</span>
                                <span className="text-text-secondary">
                                    {" "}Next.js, React, TypeScript, Tailwind CSS.
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="shrink-0">📱</span>
                            <div>
                                <span className="font-semibold text-text">Mobile</span>
                                <span className="text-text-secondary">
                                    {" "}Kotlin, Jetpack Compose (Android), Swift (iOS).
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

