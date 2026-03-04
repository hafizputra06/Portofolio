"use client";

import {
    createContext,
    useContext,
    useSyncExternalStore,
    type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const defaultContext: ThemeContextType = {
    theme: "dark",
    toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

function getThemeFromStorage(): Theme {
    if (typeof window === "undefined") {
        return "dark";
    }
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
        return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

let currentTheme: Theme = "dark";

const themeStore = {
    subscribe: (callback: () => void) => {
        window.addEventListener("storage", callback);
        window.addEventListener("theme-change", callback);
        return () => {
            window.removeEventListener("storage", callback);
            window.removeEventListener("theme-change", callback);
        };
    },
    getSnapshot: (): Theme => {
        if (typeof window !== "undefined") {
            currentTheme = getThemeFromStorage();
            const root = document.documentElement;
            root.classList.remove("light", "dark");
            root.classList.add(currentTheme);
        }
        return currentTheme;
    },
    getServerSnapshot: (): Theme => {
        return "dark";
    },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
    const theme = useSyncExternalStore(themeStore.subscribe, themeStore.getSnapshot, themeStore.getServerSnapshot);

    const toggleTheme = () => {
        const newTheme: Theme = currentTheme === "dark" ? "light" : "dark";
        currentTheme = newTheme;
        localStorage.setItem("theme", newTheme);
        window.dispatchEvent(new Event("theme-change"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
