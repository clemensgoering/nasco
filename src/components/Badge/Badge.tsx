import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "red" | "green";

const badgeVariants: Record<BadgeVariant, string> = {
  default: "bg-blacksection text-white dark:bg-blackho",
  red: "bg-red-300 text-black dark:bg-red-900 dark:text-red-300",
  green: "bg-green-400 text-black dark:bg-green-900 dark:text-green-300",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

/**
 * Small rounded status label, e.g. on cards or list items.
 *
 * @example
 * <Badge variant="green">New</Badge>
 */
const Badge = ({ className, variant = "default", children, ...props }: BadgeProps) => (
  <span
    className={cn(
      "rounded-full px-4 py-0.5 text-xs font-medium dark:border dark:border-white",
      badgeVariants[variant],
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

export default Badge;
