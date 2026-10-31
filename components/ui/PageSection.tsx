import type { ReactNode } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * PageSection — wrapper section standar homepage.
 * - Dot-grid putih + padding vertikal 64px
 * - Header ribbon kuning (SectionHeader) opsional, jarak 64px ke konten
 */
interface PageSectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  width?: "narrow" | "default" | "wide";
  paddingTop?: number;
}

const WIDTHS = {
  narrow: "max-w-[860px]",
  default: "max-w-[1180px]",
  wide: "max-w-[1280px]",
} as const;

export default function PageSection({
  id,
  title,
  subtitle,
  children,
  className = "",
  width = "default",
  paddingTop = 64,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={`dot-grid-bg relative w-full overflow-hidden ${className}`}
      style={{ paddingTop, paddingBottom: "64px" }}
    >
      <div
        className={`relative z-10 mx-auto w-full px-4 sm:px-6 md:px-8 ${WIDTHS[width]}`}
      >
        {title && (
          <div className="mb-14 flex justify-center text-center sm:mb-16 md:mb-20">
            <SectionHeader title={title} subtitle={subtitle} />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
