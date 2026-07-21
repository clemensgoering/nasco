"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "bg-slate-500 text-neutral-50 shadow hover:bg-slate-500/90 dark:bg-slate-600 dark:text-neutral-100 dark:hover:bg-black dark:hover:text-neutral-500",
        outlined:
          "border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-blacksection dark:hover:bg-blackho dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:bg-blue-200 dark:text-neutral-50 dark:hover:bg-blue-400",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Renders the button as an anchor pointing to this URL, keeping the button
   * styling. Use for navigation; use `onClick` for actions.
   */
  href?: string;
}

/**
 * Button (or link styled as one) in three variants and three sizes.
 * All native button attributes are forwarded.
 *
 * @example
 * <Button variant="outlined" size="lg" href="/docs">Get started</Button>
 * <Button onClick={save}>Save</Button>
 */
const Button = ({ className, variant, size, href, children, ...props }: ButtonProps) => {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
export { buttonVariants };
