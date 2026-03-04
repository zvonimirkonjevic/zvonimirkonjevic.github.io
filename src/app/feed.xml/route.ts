import { Feed } from "feed";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export async function GET() {
    const posts = getAllPosts();
    const site_url = "https://zvonimirkonjevic.github.io/"; // Replace with true deployed URL or logic

    const feedOptions = {
        title: "Zvonimir Konjević Blog",
        description: "Thoughts on software engineering, technology, and building things.",
        id: site_url,
        link: site_url,
        image: `${site_url}favicon.ico`,
        favicon: `${site_url}favicon.ico`,
        copyright: `All rights reserved ${new Date().getFullYear()}, Zvonimir Konjević`,
        generator: "Feed for Node.js",
        feedLinks: {
            rss2: `${site_url}feed.xml`,
        },
        author: {
            name: "Zvonimir Konjević",
            email: "zvonimirk@example.com", // Adjust as necessary
            link: site_url,
        },
    };

    const feed = new Feed(feedOptions);

    posts.forEach((post) => {
        feed.addItem({
            title: post.title,
            id: `${site_url}blog/${post.slug}`,
            link: `${site_url}blog/${post.slug}`,
            description: post.description,
            date: new Date(post.date),
            author: [feedOptions.author],
        });
    });

    return new Response(feed.rss2(), {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "s-maxage=86400, stale-while-revalidate",
        },
    });
}
