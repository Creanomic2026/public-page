import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "innovation" | "creative" | "outline" | "default";
  children: React.ReactNode;
}

/**
 * Vibrant Kinetic Badge / Chip.
 * - innovation: Sky Blue — for innovation/tech/business tags
 * - creative:   Magenta — for creative/art/culture tags
 * - outline:    Subtle border-only
 * - default:    Neutral surface
 */
export default function Badge({ variant = "default", className, children, ...props }: BadgeProps) {
  const variantStyles: Record<string, string> = {
    innovation: "text-[var(--brand-sky-blue)] border-[rgba(42,130,231,0.5)] bg-[rgba(42,130,231,0.12)]",
    creative:   "text-[var(--brand-magenta)] border-[rgba(210,10,129,0.5)] bg-[rgba(210,10,129,0.12)]",
    outline:    "text-[var(--on-surface-variant)] border-[var(--outline-variant)] bg-transparent",
    default:    "text-[var(--on-surface-variant)] border-[var(--outline-variant)] bg-[var(--surface-container)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 rounded-full border",
        "text-[11px] font-semibold uppercase tracking-[0.05em] leading-none",
        variantStyles[variant],
        className
      )}
      style={{ fontFamily: "var(--font-label)" }}
      {...props}
    >
      {children}
    </span>
  );
}
