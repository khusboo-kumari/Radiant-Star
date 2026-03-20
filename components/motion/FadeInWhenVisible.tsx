"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInWhenVisibleProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Why: Scroll-triggered motion makes long homepages feel premium without hurting readability when reduced motion is preferred.
 * What: Wraps children in a `motion.div` that fades/slides in once the block enters the viewport.
 * Where: Used across homepage sections (`components/home/*`) for consistent entrance animation.
 * When: After mount, whenever the element intersects the viewport (with `once: true` so it does not repeat).
 * Who: Client-only; imported by section components that opt into animation.
 * How: `framer-motion` + `IntersectionObserver` via `whileInView`; respects `prefers-reduced-motion`.
 */
export function FadeInWhenVisible({
  children,
  className,
  delay = 0,
}: FadeInWhenVisibleProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
