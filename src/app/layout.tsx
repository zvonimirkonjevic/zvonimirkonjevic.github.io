import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL, AUTHOR_NAME } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "building agentic systems @ intelligentia. deep dives into llm inference, agents and distributed systems, sharing interesting stuff I learn along the way.";

export const metadata: Metadata = {
  // Lets relative canonical, Open Graph and image URLs resolve to absolute ones, which crawlers require
  metadataBase: new URL(SITE_URL),
  title: "hi, i'm zvonimir konjevic! - zvonimir konjevic",
  description,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  // ThemeProvider swaps the favicon client-side, but crawlers only see what's in the static HTML
  icons: { icon: "/icon-light.svg" },
  openGraph: {
    title: "zvonimir konjevic blog",
    description,
    type: "website",
    siteName: "zvonimir konjevic",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = getAllPosts().map(p => ({
    title: p.title,
    slug: p.slug,
    description: p.description
  }));

  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`} suppressHydrationWarning>
      {/* Not in metadata.alternates, since each page's canonical would replace it */}
      <head>
        <link rel="alternate" type="application/rss+xml" title="zvonimir konjevic blog" href="/feed.xml" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header searchPosts={posts} />
          <main className="flex-grow w-full pb-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
