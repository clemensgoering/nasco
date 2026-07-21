import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  href?: string;
  className?: string;
  ariaLabel?: string;
  children?: ReactNode;
}

/** Text link with the shared arrow affordance used across sections and pricing. */
const ArrowLink = ({ href, className, ariaLabel, children }: ArrowLinkProps) => (
  <a
    href={href}
    aria-label={ariaLabel}
    className={cn(
      "group/arrow inline-flex items-center gap-2.5 font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary",
      className,
    )}
  >
    <span className="duration-300 group-hover/arrow:pr-2">{children}</span>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
    </svg>
  </a>
);

export default ArrowLink;
