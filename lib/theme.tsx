"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
export type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

// ─── Context ──────────────────────────────────────────────────────────────────
const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
  isDark: true,
});

// ─── Provider ────────────────────────────────────────────────────────────────
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  // Sync with DOM data-theme on mount (set by anti-flash script)
  useEffect(() => {
    const root = document.documentElement;
    const currentTheme = (root.getAttribute("data-theme") as Theme) ?? "dark";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("creanomic-theme", next);
    } catch {
      // localStorage might be unavailable in some environments
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ─── Hook ────────────────────────────────────────────────────────────────────
export function useTheme() {
  return useContext(ThemeContext);
}

// ─── Anti-Flash Script (embed in <head> before hydration) ─────────────────────
/**
 * This script string should be injected via <script dangerouslySetInnerHTML>
 * in the <head> of layout.tsx to set data-theme BEFORE React hydrates.
 * Prevents the light/dark flash on page load.
 */
export const THEME_INIT_SCRIPT = `
(function() {
  document.documentElement.setAttribute('data-theme', 'dark');
})();
`.trim();
