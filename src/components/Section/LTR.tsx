import React, { ReactNode } from "react";
import ImagePlaceholder from "../Placeholder/Image";
import ArrowLink from "../shared/ArrowLink";
import { SectionButton } from "@/types/section";
import { cn } from "@/lib/utils";

export interface SectionProps {
  className?: string;
  /** Small uppercase line above the title. */
  topTitle?: ReactNode;
  title?: ReactNode;
  /** Highlighted part of the title (rendered with a marker background). */
  subTitle?: ReactNode;
  content?: ReactNode;
  /** Arrow-styled call-to-action link below the content. */
  button?: SectionButton;
  /** Image side of the section. Falls back to a placeholder. */
  image?: ReactNode;
  backgroundImage?: ReactNode;
  children?: ReactNode;
}

/**
 * Split section with content on the left and an image on the right.
 * See RTL for the mirrored layout; both share these props.
 *
 * @example
 * <LTR
 *   topTitle="Features"
 *   title="Build "
 *   subTitle="faster"
 *   content={<p>...</p>}
 *   button={{ link: "/docs", text: "Learn More" }}
 * />
 */
const LTR = ({
  className,
  topTitle,
  title,
  subTitle,
  content,
  button,
  image,
  backgroundImage,
  children,
}: SectionProps) => (
  <div className={cn("overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46", className)}>
    {backgroundImage && (
      <div className="absolute bottom-10 -z-1 mx-auto h-[80%] w-[70%]">{backgroundImage}</div>
    )}
    <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
      <div className="flex items-center gap-8 lg:gap-32.5">
        <div className="md:w-1/2">
          {topTitle && (
            <h4 className="font-medium uppercase text-black dark:text-white">{topTitle}</h4>
          )}
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            {title}
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
              {subTitle}
            </span>
          </h2>
          <div className="py-4">{content}</div>
          <div>
            {button && (
              <ArrowLink href={button.link} className="mt-7.5 font-normal">
                {button.text}
              </ArrowLink>
            )}
            <div className="w-full">{children}</div>
          </div>
        </div>
        <div className="relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2">
          {image ?? <ImagePlaceholder />}
        </div>
      </div>
    </div>
  </div>
);

export default LTR;
