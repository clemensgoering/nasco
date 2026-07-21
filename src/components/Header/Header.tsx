"use client";

import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ThemeToggler from "./ThemeToggler";
import { MenuItem } from "@/types/menu";
import { cn } from "@/lib/utils";

export interface HeaderProps {
  /** Top level navigation entries. */
  menu: MenuItem[];
  /** Element rendered as the home link, e.g. a logo. */
  logo?: ReactNode;
  /** Destination of the logo link. Defaults to "/". */
  logoHref?: string;
  /** Renders the built-in light/dark toggle. */
  themeToggler?: boolean;
  className?: string;
  /** Extra content on the right side, e.g. a call-to-action button. */
  children?: ReactNode;
}

/**
 * Fixed top navigation with responsive mobile menu, dropdown submenus,
 * sticky background on scroll and an optional built-in theme toggler.
 * Switches to the desktop layout at the `lg` breakpoint (1024px).
 *
 * @example
 * <Header menu={menuItems} logo={<Logo />} themeToggler>
 *   <Button variant="link" href="https://github.com/...">Repo</Button>
 * </Header>
 */
const Header = ({ menu, logo, logoHref = "/", themeToggler, className, children }: HeaderProps) => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  useEffect(() => {
    const handleStickyMenu = () => setStickyMenu(window.scrollY >= 80);
    handleStickyMenu();
    window.addEventListener("scroll", handleStickyMenu, { passive: true });
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  // Close the mobile navigation and any open submenu after a route change.
  useEffect(() => {
    setNavigationOpen(false);
    setOpenSubmenu(null);
  }, [pathUrl]);

  const closeNavigation = () => {
    setNavigationOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-99999 w-full py-4",
        stickyMenu ? "bg-white shadow transition duration-100 dark:bg-black" : "bg-transparent",
        className,
      )}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 lg:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between lg:w-1/4">
          <Link href={logoHref} onClick={closeNavigation} className="my-auto flex">
            {logo}
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={navigationOpen}
            className="block lg:hidden"
            onClick={() => setNavigationOpen((open) => !open)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={cn(
                    "relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black duration-200 ease-in-out dark:bg-white",
                    !navigationOpen ? "!w-full delay-300" : "w-0",
                  )}
                />
                <span
                  className={cn(
                    "relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white",
                    !navigationOpen ? "delay-400 !w-full" : "w-0",
                  )}
                />
                <span
                  className={cn(
                    "relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white",
                    !navigationOpen ? "!w-full delay-500" : "w-0",
                  )}
                />
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={cn(
                    "absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white",
                    !navigationOpen ? "!h-0" : "h-full",
                  )}
                />
                <span
                  className={cn(
                    "delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white",
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5",
                  )}
                />
              </span>
            </span>
          </button>
        </div>

        <div
          className={cn(
            "invisible h-0 w-full items-center justify-between lg:visible lg:flex lg:h-auto lg:w-full",
            navigationOpen &&
              "!visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection lg:h-auto lg:p-0 lg:shadow-none lg:dark:bg-transparent",
          )}
        >
          <nav>
            <ul className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
              {menu.map((menuItem) => (
                <li key={menuItem.id} className={cn(menuItem.submenu && "group relative")}>
                  {menuItem.submenu ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={openSubmenu === menuItem.id}
                        onClick={() =>
                          setOpenSubmenu((open) => (open === menuItem.id ? null : menuItem.id))
                        }
                        className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary"
                      >
                        {menuItem.title}
                        <svg
                          className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                        >
                          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                      </button>

                      {openSubmenu === menuItem.id && (
                        <ul className="mt-2 flex flex-col gap-2 rounded-md p-2.5 lg:absolute lg:mt-4 lg:min-w-[180px] lg:bg-white lg:p-4 lg:shadow-solid-13 lg:dark:bg-blacksection">
                          {menuItem.submenu.map((item) => (
                            <li key={item.id}>
                              <Link
                                href={item.path || "#"}
                                target={item.newTab ? "_blank" : undefined}
                                onClick={closeNavigation}
                                className="hover:text-primary"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={menuItem.path || "#"}
                      target={menuItem.newTab ? "_blank" : undefined}
                      onClick={closeNavigation}
                      className={
                        pathUrl === menuItem.path
                          ? "text-blacksection dark:text-white"
                          : "hover:font-medium hover:text-blacksection dark:hover:text-white"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-7 flex items-center gap-6 lg:mt-0">
            {children}
            {themeToggler && <ThemeToggler />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
