"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Jeda antar anak (detik). */
  gap?: number;
  once?: boolean;
  amount?: number;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 26, rotate: -1.2 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 140, damping: 16 },
  },
};

/**
 * Stagger — bikin anak-anaknya muncul bergantian (satu per satu) saat masuk
 * viewport. Cocok untuk grid card, logo sponsor, dan daftar sosial media.
 */
export function Stagger({
  children,
  className,
  gap = 0.08,
  once = true,
  amount = 0.15,
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: 0.05 } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem — anak dari <Stagger />. Akan otomatis ikut animasi induknya.
 */
export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
