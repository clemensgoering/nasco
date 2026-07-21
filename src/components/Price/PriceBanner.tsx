import React, { ReactNode } from "react";
import ArrowLink from "../shared/ArrowLink";
import StatusRibbon from "../shared/StatusRibbon";
import { cn } from "@/lib/utils";
import { Pricing } from "@/types/pricing";

export interface PriceBannerProps {
  className?: string;
  /** The pricing plan to display. */
  plan: Pricing;
  /** Extra content below the call-to-action link. */
  children?: ReactNode;
}

/**
 * Extended pricing banner with price, feature list and call-to-action.
 * For a composable alternative see PriceCard.
 *
 * @example
 * <PriceBanner plan={{ price: "12 Euro", period: "/month", title: "Small", items: [...] }} />
 */
const PriceBanner = ({ className, plan, children }: PriceBannerProps) => (
  <div
    className={cn(
      "group relative w-full rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none",
      className,
    )}
  >
    <StatusRibbon status={plan.status} />

    <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
      {plan.price}
      <span className="text-regular text-waterloo dark:text-manatee">{plan.period}</span>
    </h3>
    <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">{plan.title}</h4>
    <div className="py-4">{plan.description}</div>

    <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
      <ul>
        {plan.items.map((item, key) => (
          <li key={key} className="mb-4 text-black last:mb-0 dark:text-manatee">
            {item}
          </li>
        ))}
      </ul>
    </div>
    {plan.priceButton && (
      <ArrowLink
        href={plan.priceButton.link}
        ariaLabel="Get the plan"
        className="text-primary hover:text-primary dark:hover:text-primary"
      >
        {plan.priceButton.text}
      </ArrowLink>
    )}
    <div className="w-full">{children}</div>
  </div>
);

export default PriceBanner;
