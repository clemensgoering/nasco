import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** One entry of the Steps component. */
export type StepItem = {
  /** Step headline. */
  title: ReactNode;
  /** Free-form step body: text, code snippets, images, ... */
  content?: ReactNode;
};

export interface StepsProps {
  /** Steps rendered top to bottom; numbering is automatic. */
  items: StepItem[];
  className?: string;
}

/**
 * Numbered vertical steps for "how it works", onboarding or setup guides.
 * A connector line ties consecutive steps together.
 *
 * @example
 * <Steps items={[{ title: "Sign up", content: "No credit card required." }]} />
 */
const Steps = ({ items, className }: StepsProps) => (
  <ol className={cn("space-y-8", className)}>
    {items.map((item, index) => (
      <li key={index} className="relative flex gap-4">
        {index < items.length - 1 && (
          <span
            aria-hidden="true"
            className="absolute left-4 top-9 h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-stroke dark:bg-strokedark"
          />
        )}
        <div className="z-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
          {index + 1}
        </div>
        <div className="min-w-0 flex-1 pb-1">
          <h4 className="mb-2 font-semibold text-black dark:text-white">{item.title}</h4>
          {item.content && <div className="text-waterloo dark:text-manatee">{item.content}</div>}
        </div>
      </li>
    ))}
  </ol>
);

export default Steps;
