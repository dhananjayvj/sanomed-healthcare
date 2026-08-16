"use client";

import { motion, useReducedMotion } from "framer-motion";
import { revealTransition } from "@/lib/motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Scroll-triggered entrance. Animates once, respects prefers-reduced-motion,
 * and degrades to a plain wrapper when motion is suppressed.
 */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={reduced ? false : { opacity: 0, y, scale: 0.985, filter: "blur(6px)" }}
      whileInView={
        reduced
          ? undefined
          : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </Component>
  );
}
