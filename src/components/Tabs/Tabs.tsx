"use client";

import React, { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

/** One tab of the Tabs component. */
export type TabItem = {
  /** Unique id, referenced by `defaultTab` and `onTabChange`. */
  id: string;
  /** Tab button content; icons and text are laid out in a row. */
  label: ReactNode;
  /** Panel content shown while this tab is active. */
  content: ReactNode;
};

export interface TabsProps {
  items: TabItem[];
  /** Id of the initially active tab. Defaults to the first item. */
  defaultTab?: string;
  /** Extra controls rendered on the right side of the tab bar. */
  actions?: ReactNode;
  className?: string;
  contentClassName?: string;
  onTabChange?: (id: string) => void;
}

/**
 * Bordered tab panel with a tab bar, content area and optional action slot.
 *
 * @example
 * <Tabs
 *   items={[{ id: "a", label: "Overview", content: <p>...</p> }]}
 *   actions={<button>Copy</button>}
 * />
 */
const Tabs = ({ items, defaultTab, actions, className, contentClassName, onTabChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab ?? items[0]?.id);
  const active = items.find((item) => item.id === activeTab) ?? items[0];

  const select = (id: string) => {
    setActiveTab(id);
    onTabChange?.(id);
  };

  return (
    <div
      className={cn(
        "w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-600 dark:bg-blacksection",
        className,
      )}
    >
      <div
        className="flex flex-wrap rounded-t-lg border-b border-gray-200 bg-gray-50 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:bg-blacksection dark:text-gray-400"
        role="tablist"
      >
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeTab === item.id}
            onClick={() => select(item.id)}
            className={cn(
              "flex items-center gap-2 p-4 hover:bg-gray-100 dark:hover:bg-gray-700",
              activeTab === item.id
                ? "font-bold text-blacksection dark:text-white"
                : "dark:hover:text-gray-300",
            )}
          >
            {item.label}
          </button>
        ))}
        <div className="flex-1" />
        {actions}
      </div>

      <div
        className={cn("rounded-b-lg bg-white p-4 dark:bg-gray-800 md:p-8", contentClassName)}
        role="tabpanel"
      >
        {active?.content}
      </div>
    </div>
  );
};

export default Tabs;
