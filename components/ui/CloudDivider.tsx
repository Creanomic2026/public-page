import { cn } from "@/lib/utils";

interface CloudDividerProps {
  flip?: boolean;      // flip vertically
  color?: string;      // fill color (Tailwind hex or class-compatible)
  className?: string;
}

/**
 * Ornamental cloud border SVG divider inspired by traditional Megamendung motif.
 * Used between sections to create a cohesive Indonesian cultural aesthetic.
 */
export default function CloudDivider({
  flip = false,
  color = "#7B1C2B",
  className,
}: CloudDividerProps) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden leading-none",
        flip && "rotate-180",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-20"
      >
        {/* Megamendung-inspired cloud wave divider */}
        <path
          d="M0,40
            C60,10 120,70 180,40
            C240,10 300,70 360,40
            C420,10 480,70 540,40
            C600,10 660,70 720,40
            C780,10 840,70 900,40
            C960,10 1020,70 1080,40
            C1140,10 1200,70 1260,40
            C1320,10 1380,70 1440,40
            L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
