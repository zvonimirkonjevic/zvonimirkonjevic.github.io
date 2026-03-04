import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

const components = {
    h1: (props: React.ComponentProps<"h1">) => (
        <h1 className="text-2xl font-semibold tracking-tight mb-5 mt-0" {...props} />
    ),
    h2: (props: React.ComponentProps<"h2">) => (
        <h2 className="text-xl font-semibold tracking-tight mt-10 mb-3" {...props} />
    ),
    h3: (props: React.ComponentProps<"h3">) => (
        <h3 className="text-lg font-semibold tracking-tight mt-8 mb-2" {...props} />
    ),
    p: (props: React.ComponentProps<"p">) => (
        <p className="text-[1.0625rem] leading-[1.85] mb-5" {...props} />
    ),
    a: (props: React.ComponentProps<"a">) => (
        <a
            className="underline underline-offset-2 decoration-text-muted hover:decoration-text transition-all duration-200"
            target={props.href?.startsWith("http") ? "_blank" : undefined}
            rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
            {...props}
        />
    ),
    blockquote: (props: React.ComponentProps<"blockquote">) => (
        <blockquote
            className="border-l-2 border-text pl-5 my-6 text-text-secondary italic"
            {...props}
        />
    ),
    ul: (props: React.ComponentProps<"ul">) => (
        <ul className="list-disc pl-6 mb-5 space-y-1.5" {...props} />
    ),
    ol: (props: React.ComponentProps<"ol">) => (
        <ol className="list-decimal pl-6 mb-5 space-y-1.5" {...props} />
    ),
    li: (props: React.ComponentProps<"li">) => (
        <li className="text-[1.0625rem] leading-[1.85]" {...props} />
    ),
    code: (props: React.ComponentProps<"code">) => (
        <code className="bg-[#f3f4f6] px-1.5 py-0.5 rounded text-[0.875em] font-mono" {...props} />
    ),
    pre: (props: React.ComponentProps<"pre">) => (
        <pre
            className="bg-[#f9fafb] border border-border rounded-md p-5 overflow-x-auto my-6 text-sm"
            {...props}
        />
    ),
    hr: () => <hr className="border-border my-10" />,
    img: (props: React.ComponentProps<"img">) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="rounded-md border border-border my-6 w-full" alt={props.alt || ""} {...props} />
    ),
    strong: (props: React.ComponentProps<"strong">) => (
        <strong className="font-semibold" {...props} />
    ),
    table: (props: React.ComponentProps<"table">) => (
        <div className="overflow-x-auto my-6">
            <table className="w-full text-[0.9375rem]" {...props} />
        </div>
    ),
    th: (props: React.ComponentProps<"th">) => (
        <th className="text-left font-semibold pb-2 pr-4 border-b-2 border-text" {...props} />
    ),
    td: (props: React.ComponentProps<"td">) => (
        <td className="py-2 pr-4 border-b border-border" {...props} />
    ),
};

interface PostBodyProps {
    content: string;
}

export default function PostBody({ content }: PostBodyProps) {
    return (
        <article className="prose">
            <MDXRemote
                source={content}
                components={components}
                options={{
                    mdxOptions: {
                        rehypePlugins: [
                            rehypeSlug,
                            [
                                rehypePrettyCode,
                                {
                                    theme: {
                                        light: "github-light",
                                        dark: "github-dark-dimmed",
                                    },
                                    keepBackground: false,
                                },
                            ],
                        ],
                    },
                }}
            />
        </article>
    );
}
