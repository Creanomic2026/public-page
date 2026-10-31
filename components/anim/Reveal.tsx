"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Detik keterlambatan sebelum animasi mulai. */
  delay?: number;
  /** Jarak naik saat masuk (px). */
  y?: number;
  /** Skala awal. */
  scale?: number;
  /** Putaran awal (deg), bikin kesan "sticker". */
  rotate?: number;
  once?: boolean;
  amount?: number;
}

/**
 * Reveal — animasi masuk ala Y2K pop-art: muncul dengan spring yang sedikit
 * memantul. Dipakai untuk header gambar, card, dan blok konten.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  scale = 1,
  rotate = 0,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale, rotate }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once, amount }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 18,
        mass: 0.7,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
