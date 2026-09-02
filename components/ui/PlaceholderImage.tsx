import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

interface PlaceholderImageProps {
  label: string;                            // e.g. "Hero Event Photo"
  ratio?: "1/1" | "4/3" | "16/9" | "3/1" | "3/2" | "2/3";
  className?: string;
  animate?: boolean;
}

const ratioMap: Record<string, string> = {
  "1/1":  "aspect-square",
  "4/3":  "aspect-[4/3]",
  "16/9": "aspect-video",
  "3/1":  "aspect-[3/1]",
  "3/2":  "aspect-[3/2]",
  "2/3":  "aspect-[2/3]",
};

/**
 * Placeholder component for images, logos, and mascots.
 * Visually styled with brand colors and a label indicating what goes here.
 * Replace with <Image src="..." /> when the actual asset is ready.
 *
 * @example
 * <PlaceholderImage label="Hero Event Photo" ratio="16/9" />
 */
export default function PlaceholderImage({
  label,
  ratio = "4/3",
  className,
  animate = false,
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        ratioMap[ratio],
        "relative flex flex-col items-center justify-center gap-3 rounded-[var(--radius-lg)]",
        "border-2 border-dashed overflow-hidden",
        "transition-all duration-300",
        animate && "animate-float",
        className
      )}
      style={{
        backgroundColor: "var(--placeholder-bg)",
        borderColor: "var(--placeholder-border)",
      }}
    >
      {/* Gradient shimmer background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(135deg, rgba(82,42,146,0.15) 0%, rgba(210,10,129,0.1) 50%, rgba(42,130,231,0.1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-2 p-4 text-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(82,42,146,0.2)" }}
        >
          <Icon
            name="image-placeholder"
            size={20}
            style={{ color: "var(--placeholder-text)" }}
          />
        </div>
        <p
          className="text-xs font-medium leading-snug max-w-[140px]"
          style={{
            fontFamily: "var(--font-label)",
            color: "var(--placeholder-text)",
            letterSpacing: "0.03em",
          }}
        >
          Replace with:
          <br />
          <span style={{ color: "rgba(185,195,255,0.6)" }}>{label}</span>
        </p>
      </div>
    </div>
  );
}
