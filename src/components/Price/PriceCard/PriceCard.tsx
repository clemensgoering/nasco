import React, { ReactNode } from "react";
import ImagePlaceholder from "@/components/Placeholder/Image";
import ArrowLink from "@/components/shared/ArrowLink";
import StatusRibbon from "@/components/shared/StatusRibbon";
import { cn } from "@/lib/utils";
import { PriceButton, PriceStatus } from "@/types/pricing";

export interface PriceCardProps {
  className?: string;
  /** Optional corner ribbon (new / popular / sale). */
  status?: PriceStatus;
  /** Card content, typically PriceCardHeader followed by PriceCardContent. */
  children?: ReactNode;
}

/**
 * Pricing card shell; compose with PriceCardHeader and PriceCardContent.
 *
 * @example
 * <PriceCard status="popular">
 *   <PriceCardHeader><Image ... /></PriceCardHeader>
 *   <PriceCardContent title="Medium" description="..." button={{ link: "#", text: "Buy" }} />
 * </PriceCard>
 */
const PriceCard = ({ className, status, children }: PriceCardProps) => (
  <div
    className={cn(
      "group relative mt-10 w-full rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none",
      className,
    )}
  >
    <StatusRibbon status={status} />
    {children}
  </div>
);

export interface PriceCardContentProps {
  className?: string;
  /** Plan name. */
  title?: ReactNode;
  /** Short plan description. */
  description?: ReactNode;
  /** Call-to-action link rendered below the content. */
  button?: PriceButton;
  /** Extra content between description and call-to-action. */
  children?: ReactNode;
}

const PriceCardContent = ({ className, title, description, button, children }: PriceCardContentProps) => (
  <>
    <h4 className={cn("mb-2.5 text-para2 font-medium text-black dark:text-white", className)}>
      {title}
    </h4>
    <div className="py-4">{description}</div>
    {children}
    {button && (
      <ArrowLink
        href={button.link}
        ariaLabel="Get the plan"
        className="pt-10 text-primary hover:text-primary dark:hover:text-primary"
      >
        {button.text}
      </ArrowLink>
    )}
  </>
);

const PriceCardHeader = ({ className, children }: { className?: string; children?: ReactNode }) => (
  <div className={cn("mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3", className)}>
    {children ?? <ImagePlaceholder className="mx-auto h-52 w-full" />}
  </div>
);

export { PriceCard, PriceCardContent, PriceCardHeader };
