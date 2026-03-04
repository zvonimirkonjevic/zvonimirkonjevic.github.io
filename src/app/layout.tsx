import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
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
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="max-w-4xl mx-auto px-6 md:px-8 pb-24">{children}</main>
      </body>
    </html>
  );
}
