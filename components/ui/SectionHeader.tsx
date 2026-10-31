"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Y2K Pop Art SectionHeader — Ribbon Trapezoid style.
 * Uses filter: drop-shadow for clean rendering with clip-path.
 * Ribbon masuk dengan spring "pop" supaya terasa playful.
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
  const reduceMotion = useReducedMotion();

  const textSizeClass =
    size === "lg"
      ? "text-2xl sm:text-3xl md:text-4xl"
      : size === "md"
      ? "text-xl sm:text-2xl md:text-3xl"
      : "text-lg sm:text-xl";

  return (
    <div className={`flex flex-col items-center justify-center text-center gap-3 w-full mx-auto ${className}`}>
      {/* Yellow trapezoid ribbon with drop-shadow wrapper */}
      <motion.div
        className="ribbon-trapezoid-wrapper mx-auto"
        initial={reduceMotion ? false : { opacity: 0, y: -18, scale: 0.9, rotate: -1.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ type: "spring", stiffness: 210, damping: 14 }}
      >
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
      </motion.div>

      {subtitle && (
        <motion.p
          className="text-sm md:text-base text-center max-w-xl font-semibold mt-1"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
          style={{
            fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)",
            color: "#0B0F19",
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
