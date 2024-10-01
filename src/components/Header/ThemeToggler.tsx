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
      className={clsx("bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static",className)}
    >
      <MoonIcon className="dark:hidden"/>
      <SunIcon className="hidden dark:block"/>
    </button>
  );
};

export default ThemeToggler;
