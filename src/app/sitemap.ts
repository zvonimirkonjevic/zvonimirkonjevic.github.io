import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/blog` },
    { url: `${SITE_URL}/projects` },
    { url: `${SITE_URL}/about` },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
