"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/lib/motion";

export type Feature = {
  id?: string | number;
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
};

const columnClasses: Record<2 | 3 | 4, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

export interface FeatureGridProps {
  features: Feature[];
  /** Columns on large screens (2-4). Defaults to 3. */
  columns?: 2 | 3 | 4;
  /** Staggered reveal animation on scroll. Defaults to true. */
  animated?: boolean;
  className?: string;
}

/**
 * Responsive icon + title + text grid for feature sections.
 *
 * @example
 * <FeatureGrid
 *   columns={3}
 *   features={[{ id: 1, icon: <RocketIcon />, title: "Fast", description: "..." }]}
 * />
 */
const FeatureGrid = ({ features, columns = 3, animated = true, className }: FeatureGridProps) => (
  <div className={cn("grid grid-cols-1 gap-7.5", columnClasses[columns], className)}>
    {features.map((feature, index) => {
      const card = (
        <div className="h-full rounded-lg border border-stroke bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark">
          {feature.icon && (
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-zumthor text-primary dark:bg-btndark dark:text-white">
              {feature.icon}
            </div>
          )}
          <h3 className="mb-4 text-metatitle2 font-semibold text-black dark:text-white">
            {feature.title}
          </h3>
          {feature.description && (
            <div className="text-waterloo dark:text-manatee">{feature.description}</div>
          )}
        </div>
      );

      const key = feature.id ?? index;
      return animated ? (
        <Reveal key={key} delay={0.1 + index * 0.1} duration={0.6} className="h-full">
          {card}
        </Reveal>
      ) : (
        <React.Fragment key={key}>{card}</React.Fragment>
      );
    })}
  </div>
);

export default FeatureGrid;
