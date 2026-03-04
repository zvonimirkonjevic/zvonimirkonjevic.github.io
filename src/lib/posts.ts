import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    readingTime: string;
}

export interface Post extends PostMeta {
    content: string;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts(): PostMeta[] {
    if (!fs.existsSync(postsDirectory)) return [];

    const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

    const posts = files.map((filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        const stats = readingTime(content);

        return {
            slug,
            title: data.title || slug,
            date: data.date || new Date().toISOString(),
            description: data.description || "",
            tags: data.tags || [],
            readingTime: stats.text,
        };
    });

    return posts.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(slug: string): Post | null {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const stats = readingTime(content);

    return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        description: data.description || "",
        tags: data.tags || [],
        readingTime: stats.text,
        content,
    };
}

export function getAllSlugs(): string[] {
    if (!fs.existsSync(postsDirectory)) return [];

    return fs
        .readdirSync(postsDirectory)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => f.replace(/\.mdx$/, ""));
}
