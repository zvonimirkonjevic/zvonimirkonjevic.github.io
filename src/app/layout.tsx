import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getAllPosts } from "@/lib/posts";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zvonimir Konjević",
  description:
    "Personal blog of Zvonimir Konjević. Thoughts on software engineering, technology, and building things.",
  openGraph: {
    title: "Zvonimir Konjević",
    description:
      "Personal blog of Zvonimir Konjević. Thoughts on software engineering, technology, and building things.",
    type: "website",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
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
