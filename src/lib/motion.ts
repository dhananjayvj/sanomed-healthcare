export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

export const revealTransition = {
  duration: 0.46,
  ease: EASE_OUT,
} as const;

export const springSoft = {
  type: "spring",
  stiffness: 220,
  damping: 24,
  mass: 0.9,
} as const;
