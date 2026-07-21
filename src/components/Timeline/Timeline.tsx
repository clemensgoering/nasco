import React from "react";
import { cn } from "@/lib/utils";
import { TimelineItem } from "@/types/timeline";

export interface TimelineProps {
  className?: string;
  /** Entries rendered top to bottom, each with date, title and description. */
  items: TimelineItem[];
}

/**
 * Vertical timeline for chronological content such as CVs or milestones.
 *
 * @example
 * <Timeline items={[{ date: "01.01.2026", title: "Kickoff", description: "..." }]} />
 */
const Timeline = ({ items, className }: TimelineProps) => (
  <ol className={cn("relative border-s border-gray-200 dark:border-gray-700", className)}>
    {items.map((item, key) => (
      <li key={key} className="mb-10 ms-4">
        <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {item.date}
        </time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
        <div className="text-base font-normal text-gray-500 dark:text-gray-400">
          {item.description}
        </div>
      </li>
    ))}
  </ol>
);

export default Timeline;
