"use client";

import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

/** Light/dark mode switch backed by next-themes. */
const ThemeToggler = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full p-2 text-black hover:bg-slate-200 dark:text-white dark:hover:bg-blackho lg:static",
        className,
      )}
    >
      <MoonIcon className="h-5 w-5 dark:hidden" />
      <SunIcon className="hidden h-5 w-5 dark:block" />
    </button>
  );
};

export default ThemeToggler;
