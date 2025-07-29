"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    }, []);
    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);
    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        localStorage.setItem("theme", next ? "dark" : "light");

        document.documentElement.classList.toggle("dark", next);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded border text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle dark mode"
        >
            {isDark ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
                <MoonIcon className="w-5 h-5 text-gray-800" />
            )}
        </button>
    );
}
