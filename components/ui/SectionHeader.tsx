import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  titleGradient?: boolean;
  className?: string;
}

/**
 * Vibrant Kinetic Section Header.
 * - Eyebrow: Montserrat label-md, Magenta accent bar
 * - Title:   Oswald, gradient Purple→Magenta (optional)
 * - Subtitle: Noto Sans body-md, muted color
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  titleGradient = true,
  className,
}: SectionHeaderProps) {
  const alignClass: Record<string, string> = {
    left:   "items-start text-left",
    center: "items-center text-center",
    right:  "items-end text-right",
  };

  return (
    <div className={cn("flex flex-col gap-4", alignClass[align], className)}>
      {eyebrow && (
        <div className={cn("flex items-center gap-3", align === "center" && "justify-center", align === "right" && "justify-end")}>
          {/* Left accent line */}
          {align !== "right" && (
            <span
              className="block h-px w-8 shrink-0"
              style={{ background: "var(--brand-magenta)" }}
            />
          )}
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.12em]"
            style={{ fontFamily: "var(--font-label)", color: "var(--brand-magenta)" }}
          >
            {eyebrow}
          </span>
          {/* Right accent line */}
          {align !== "left" && (
            <span
              className="block h-px w-8 shrink-0"
              style={{ background: "var(--brand-magenta)" }}
            />
          )}
        </div>
      )}

      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
          titleGradient && "text-gradient"
        )}
        style={{
          fontFamily: "var(--font-display)",
          color: titleGradient ? undefined : "var(--on-surface)",
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="text-base md:text-lg max-w-2xl leading-relaxed"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
