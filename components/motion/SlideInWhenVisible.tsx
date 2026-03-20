"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SlideInWhenVisibleProps = {
  children: ReactNode;
  direction?: "left" | "right";
  className?: string;
  delay?: number;
};

const SLIDE_OFFSET = 48;

/**
 * Why: Alternating slide-in from left/right gives a Lovable-style, catchy entrance for grids (e.g. document cards).
 * What: Wraps children in a motion.div that slides in from the given horizontal direction when the block enters the viewport.
 * Where: Used in DocumentsSection and any section that wants directional entrance rather than fade-up.
 * When: Triggers on scroll via whileInView; runs once.
 * Who: Client components that need horizontal entrance animation.
 * How: Framer Motion with initial x ± offset and opacity 0; animates to x 0, opacity 1; respects reduced motion.
 */
export function SlideInWhenVisible({
  children,
  direction = "left",
  className,
  delay = 0,
}: SlideInWhenVisibleProps) {
  const reduceMotion = useReducedMotion();
  const x = direction === "left" ? -SLIDE_OFFSET : SLIDE_OFFSET;

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
