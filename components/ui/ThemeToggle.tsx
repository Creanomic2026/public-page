"use client";

import { useTheme } from "@/lib/theme";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

/**
 * Dark/Light mode toggle button with Sun/Moon SVG icons.
 * Animates smoothly between states.
 */
export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cn(
        "relative w-9 h-9 rounded-full flex items-center justify-center",
        "border transition-all duration-300",
        isDark
          ? "border-[var(--outline-variant)] text-[var(--on-surface-variant)] hover:border-[var(--brand-sky-blue)] hover:text-[var(--brand-sky-blue)]"
          : "border-[var(--outline-variant)] text-[var(--on-surface-variant)] hover:border-[var(--brand-magenta)] hover:text-[var(--brand-magenta)]",
        "hover:bg-[var(--surface-container)] hover:shadow-[var(--glow-sky)]",
        className
      )}
    >
      <span
        className="transition-all duration-300"
        style={{
          opacity: 1,
          transform: "rotate(0deg) scale(1)",
        }}
      >
        {isDark ? (
          <Icon name="sun" size={16} />
        ) : (
          <Icon name="moon" size={16} />
        )}
      </span>
    </button>
  );
}
