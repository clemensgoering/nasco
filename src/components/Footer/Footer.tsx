"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/lib/motion";

/** A single link in a footer column or the bottom bar. */
export type FooterLink = {
  /** Visible link text. */
  text: string;
  /** Link target. */
  href: string;
};

/** Brand block on the left side of the footer. */
export type FooterIntro = {
  /** Brand name or logo; also used in the default copyright note. */
  title: ReactNode;
  /** Short description below the title. */
  description?: ReactNode;
  /** Contact mail address, rendered as a mailto link. */
  contact?: string;
};

/** A titled link column of the footer. */
export type FooterMenu = {
  /** Column heading. */
  title: string;
  /** Links listed in the column. */
  links: FooterLink[];
};

/** @deprecated Use `FooterLink` instead. */
export type Links = FooterLink;
/** @deprecated Use `FooterIntro` instead. */
export type LeftMenu = FooterIntro;
/** @deprecated Use `{ links: FooterLink[] }` instead. */
export type BottomLinks = { links: FooterLink[] };

const FooterLinkList = ({ menu }: { menu?: FooterMenu }) => {
  if (!menu) return null;
  return (
    <>
      <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">{menu.title}</h4>
      <ul>
        {menu.links.map((link, key) => (
          <li key={key}>
            <a href={link.href} className="mb-3 inline-block hover:text-primary">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export interface FooterProps {
  className?: string;
  /** Brand block: title/logo, description and optional contact address. */
  leftMenu: FooterIntro;
  midMenu?: FooterMenu;
  rightMenu?: FooterMenu;
  bottomLinks?: { links: FooterLink[] };
  /** Copyright note in the bottom bar. Defaults to the current year and the intro title. */
  copyright?: ReactNode;
  bottomRight?: ReactNode;
}

/**
 * Multi-column page footer with brand/contact block, up to two link columns
 * and a bottom bar with links, copyright and a free slot.
 *
 * @example
 * <Footer
 *   leftMenu={{ title: "Nasco", description: "...", contact: "mail@nasco.com" }}
 *   midMenu={{ title: "News", links: [{ href: "/blog", text: "Blog" }] }}
 *   bottomLinks={{ links: [{ href: "/imprint", text: "Imprint" }] }}
 * />
 */
const Footer = ({
  className,
  leftMenu,
  midMenu,
  rightMenu,
  bottomLinks,
  copyright,
  bottomRight,
}: FooterProps) => (
  <footer
    className={cn(
      "border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection",
      className,
    )}
  >
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      <div className="py-20 lg:py-25">
        <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
          <Reveal delay={1.5} className="w-1/2">
            <a href="/" className="relative">
              <div className="w-full">{leftMenu.title}</div>
            </a>

            <p className="mb-10 mt-5">{leftMenu.description}</p>
            {leftMenu.contact && (
              <>
                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">Contact</p>
                <a
                  href={`mailto:${leftMenu.contact}`}
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  {leftMenu.contact}
                </a>
              </>
            )}
          </Reveal>

          <div className="flex w-1/3 flex-col gap-8 md:flex-row md:justify-between md:gap-0">
            <Reveal delay={1.1}>
              <FooterLinkList menu={midMenu} />
            </Reveal>
            <Reveal delay={0.1}>
              <FooterLinkList menu={rightMenu} />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
        <Reveal>
          {bottomLinks && (
            <ul className="flex items-center gap-8">
              {bottomLinks.links.map((link, key) => (
                <li key={key}>
                  <a href={link.href} className="hover:text-primary">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </Reveal>

        <Reveal>
          <p>
            {copyright ?? (
              <>
                &copy; {new Date().getFullYear()} {leftMenu.title}. All rights reserved
              </>
            )}
          </p>
        </Reveal>

        <Reveal>{bottomRight}</Reveal>
      </div>
    </div>
  </footer>
);

export default Footer;
