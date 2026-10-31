/**
 * Y2K Pop Art SectionHeader — Ribbon Trapezoid style.
 * Uses filter: drop-shadow for clean rendering with clip-path.
 */
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function SectionHeader({
  title,
  subtitle,
  className = "",
  size = "lg",
}: SectionHeaderProps) {
  const textSizeClass =
    size === "lg"
      ? "text-2xl sm:text-3xl md:text-4xl"
      : size === "md"
      ? "text-xl sm:text-2xl md:text-3xl"
      : "text-lg sm:text-xl";

  return (
    <div className={`flex flex-col items-center justify-center text-center gap-3 w-full mx-auto ${className}`}>
      {/* Yellow trapezoid ribbon with drop-shadow wrapper */}
      <div className="ribbon-trapezoid-wrapper mx-auto">
        <div className="ribbon-trapezoid">
          <h2
            className={`font-normal text-center leading-tight uppercase ${textSizeClass}`}
            style={{
              fontFamily: "var(--font-slackey, 'Slackey', cursive)",
              color: "#0B24F3",
              textShadow:
                "2px 2px 0px #FFFFFF, 3px 3px 0px #0B0F19",
              letterSpacing: "0.04em",
            }}
          >
            {title}
          </h2>
        </div>
      </div>

      {subtitle && (
        <p
          className="text-sm md:text-base text-center max-w-xl font-semibold mt-1"
          style={{
            fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)",
            color: "#0B0F19",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
