import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "ghost" | "glow-magenta" | "glow-purple";
  hover?: boolean;
  children: React.ReactNode;
}

/**
 * Vibrant Kinetic Card.
 * - default:       Deep Navy bg, subtle purple border, backdrop-blur
 * - elevated:      Slightly lighter navy, stronger border
 * - ghost:         Transparent with thin outline-variant border
 * - glow-magenta:  Magenta inner glow on hover
 * - glow-purple:   Purple inner glow on hover
 */
export default function Card({ variant = "default", hover = false, className, children, ...props }: CardProps) {
  const base = "rounded-[var(--radius-lg)] transition-all duration-300 backdrop-blur-[10px]";

  const variantClass: Record<string, string> = {
    default:
      "border",
    elevated:
      "border shadow-lg",
    ghost:
      "bg-transparent border border-[var(--outline-variant)]",
    "glow-magenta":
      "border",
    "glow-purple":
      "border",
  };

  const hoverClass =
    hover
      ? variant === "glow-magenta"
        ? "hover:border-[var(--brand-magenta)] hover:shadow-[var(--glow-magenta)] cursor-pointer"
        : variant === "glow-purple"
        ? "hover:border-[var(--brand-purple)] hover:shadow-[var(--glow-purple)] cursor-pointer"
        : "hover:border-[var(--card-border-hover)] hover:shadow-[var(--glow-purple)] cursor-pointer hover:-translate-y-1"
      : "";

  return (
    <div
      className={cn(base, variantClass[variant], hoverClass, "p-6", className)}
      style={{
        backgroundColor: variant === "ghost" ? "transparent" : "var(--card-bg-subtle)",
        borderColor: "var(--card-border)",
      }}
      {...props}
    >
      {children}
    </div>
  );
}
