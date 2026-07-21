"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export interface BackToTopProps {
  className?: string;
  /** Scroll offset in pixels after which the button appears. */
  threshold?: number;
}

/** Floating button that smooth-scrolls back to the top of the page. */
const BackToTop = ({ className, threshold = 300 }: BackToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > threshold);
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-18 right-8 z-999">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={cn(
          "flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg bg-blacksection text-white shadow-md transition duration-300 ease-in-out hover:opacity-90 dark:bg-blackho",
          className,
        )}
      >
        <ArrowUpIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default BackToTop;
