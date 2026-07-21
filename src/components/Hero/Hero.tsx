import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HeroJumbotron } from "@/types/hero";

interface JumbotronLinkProps {
  jumbotron: HeroJumbotron;
}

const JumbotronLink = ({ jumbotron }: JumbotronLinkProps) => (
  <a
    href={jumbotron.link}
    className="mb-7 mt-[15%] inline-flex items-center justify-between rounded-full bg-slate-100 p-2 px-6 text-sm text-blue-700 hover:bg-blue-200 dark:bg-blacksection dark:text-blue-300 dark:hover:bg-blue-800"
  >
    <span className="text-sm font-medium">{jumbotron.text}</span>
    <svg
      className="ms-2 h-2.5 w-2.5 rtl:rotate-180"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 6 10"
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
    </svg>
  </a>
);

export interface HeroProps {
  className?: string;
  /** Optional pill-shaped announcement link above the title. */
  jumbotron?: HeroJumbotron;
  /** Main headline. Accepts rich markup, e.g. a styled h2 with highlights. */
  title: ReactNode;
  /** Supporting text below the title. */
  subTitle?: ReactNode;
  /**
   * Extra content slot: below the text in HeroSimple (e.g. buttons),
   * the image side in HeroImage.
   */
  children?: ReactNode;
}

/**
 * Minimalistic centered hero with a single content slot below the text.
 *
 * @example
 * <HeroSimple title="Build faster" subTitle="Prestyled components for Next.js">
 *   <Button size="lg" href="/docs">Get started</Button>
 * </HeroSimple>
 */
const HeroSimple = ({ className, jumbotron, title, subTitle, children }: HeroProps) => (
  <section className={cn("h-screen bg-transparent", className)}>
    <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16">
      {jumbotron && <JumbotronLink jumbotron={jumbotron} />}
      <div className="mb-4 pt-15 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        {title}
      </div>
      <div className="mb-8 pt-10 text-lg font-normal text-gray-500 dark:text-gray-200 sm:px-16 lg:px-48 lg:text-xl">
        {subTitle}
      </div>
      <div className="mx-auto w-full max-w-md pt-10">{children}</div>
    </div>
  </section>
);

/**
 * Hero with separated text and image areas; place the image via children.
 *
 * @example
 * <HeroImage title="Nasco" subTitle="Component library for Next.js">
 *   <Image src={shot} alt="Screenshot" />
 * </HeroImage>
 */
const HeroImage = ({ className, jumbotron, title, subTitle, children }: HeroProps) => (
  <section className={cn("overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46", className)}>
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
        <div className="md:w-1/2">
          <div className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
              {title}
            </span>
          </div>
          <div className="py-4">{subTitle}</div>
          {jumbotron && <JumbotronLink jumbotron={jumbotron} />}
        </div>

        <div className="hidden md:w-1/2 lg:block">
          <div className="relative 2xl:-mr-7.5">{children}</div>
        </div>
      </div>
    </div>
  </section>
);

export { HeroSimple, HeroImage };
