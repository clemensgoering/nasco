import React from 'react';
import { useTheme } from "next-themes";
import { clsx } from "clsx";
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

const ThemeToggler = ({className} : {className?:String}) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={clsx("bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-blackho p-2 text-black dark:text-white lg:static",className)}
    >
      <MoonIcon className="dark:hidden h-5 w-5"/>
      <SunIcon className="hidden dark:block h-5 w-5"/>
    </button>
  );
};

export default ThemeToggler;
