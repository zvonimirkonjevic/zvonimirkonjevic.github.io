"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";

function FaviconSwitcher() {
    const { resolvedTheme } = useTheme();

    React.useEffect(() => {
        if (!resolvedTheme) return;

        const isDark = resolvedTheme === "dark";
        const iconPath = isDark ? "/icon-dark.svg" : "/icon-light.svg";

        let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
        }
        link.href = iconPath;
    }, [resolvedTheme]);

    return null;
}

export function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider {...props}>
            <FaviconSwitcher />
            {children}
        </NextThemesProvider>
    );
}
