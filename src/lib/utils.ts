import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with conflict resolution.
 *
 * Combines `clsx` (conditional classes) with `tailwind-merge`, so a class
 * passed later wins over a conflicting earlier one — this is what makes
 * `className` overrides on every nasco component behave predictably.
 *
 * @example
 * cn("p-4 text-black", isActive && "text-primary", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
