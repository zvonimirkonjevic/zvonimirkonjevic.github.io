"use client";

import * as React from "react";
import { Contrast, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const options = [
    { value: "system", label: "System theme", Icon: Contrast },
    { value: "light", label: "Light theme", Icon: Sun },
    { value: "dark", label: "Dark theme", Icon: Moon },
] as const;

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-[94px] h-[34px] ml-2" />; // Placeholder with same dimensions
    }

    return (
        <div
            role="radiogroup"
            aria-label="Theme"
            className="flex items-center gap-0.5 rounded-full border border-border p-0.5 ml-2"
        >
            {options.map(({ value, label, Icon }) => {
                const active = theme === value;
                return (
                    <button
                        key={value}
                        role="radio"
                        aria-checked={active}
                        aria-label={label}
                        onClick={() => setTheme(value)}
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${
                            active ? "bg-surface text-text" : "text-text-secondary hover:text-text"
                        }`}
                    >
                        <Icon className="w-4 h-4" />
                    </button>
                );
            })}
        </div>
    );
}
