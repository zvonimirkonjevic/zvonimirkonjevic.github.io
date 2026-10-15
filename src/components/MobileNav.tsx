"use client";

import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X as XIcon } from "lucide-react";

interface MobileNavProps {
    links: { href: string; label: string }[];
    pathname: string;
}

export function MobileNav({ links, pathname }: MobileNavProps) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <button
                    className="sm:hidden -mr-2 p-2 text-text-secondary hover:text-text transition-colors duration-200"
                    aria-label="Open menu"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="mobile-nav-overlay fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm" />
                <Dialog.Content
                    className="mobile-nav fixed inset-y-0 right-0 z-[100] w-72 max-w-[80vw] flex flex-col bg-bg border-l border-border px-6"
                    aria-describedby={undefined}
                >
                    <div className="h-14 flex items-center justify-between">
                        <Dialog.Title className="label">Menu</Dialog.Title>
                        <Dialog.Close asChild>
                            <button
                                className="-mr-2 p-2 text-text-secondary hover:text-text transition-colors duration-200"
                                aria-label="Close menu"
                            >
                                <XIcon className="w-5 h-5" />
                            </button>
                        </Dialog.Close>
                    </div>

                    <nav className="mt-4">
                        <ul className="space-y-1">
                            {links.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        onClick={() => setOpen(false)}
                                        className={`block py-2 text-lg font-medium lowercase transition-colors duration-200 ${
                                            pathname.startsWith(href) ? "text-text" : "text-text-secondary hover:text-text"
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
