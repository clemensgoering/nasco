"use client"
import React from 'react';
import { useTheme } from "next-themes";
import Image from "next/image";
import { clsx } from "clsx";

import moon from '@/images/icon/icon-moon.svg';
import sun from '@/images/icon/icon-sun.svg';

const ThemeToggler = ({className} : {className?:String}) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={clsx("bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static",className)}
    >
      <Image
        src={moon}
        alt="logo"
        width={21}
        height={21}
        className="dark:hidden"
      />

      <Image
        src={sun}
        alt="logo"
        width={22}
        height={22}
        className="hidden dark:block"
      />
    </button>
  );
};

export default ThemeToggler;
