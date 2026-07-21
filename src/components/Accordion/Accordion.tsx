"use client";

import React, { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  id?: string | number;
  title: ReactNode;
  content: ReactNode;
};

export interface AccordionProps {
  items: AccordionItem[];
  /** Allows several items to stay open at once. Defaults to one at a time. */
  allowMultiple?: boolean;
  /** Ids (or indices, when no ids are set) of initially open items. */
  defaultOpen?: (string | number)[];
  className?: string;
}

/**
 * Animated expand/collapse list, e.g. for FAQ sections.
 *
 * @example
 * <Accordion
 *   defaultOpen={[0]}
 *   items={[{ title: "Question?", content: "Answer." }]}
 * />
 */
const Accordion = ({ items, allowMultiple = false, defaultOpen = [], className }: AccordionProps) => {
  const [open, setOpen] = useState<(string | number)[]>(defaultOpen);

  const keyOf = (item: AccordionItem, index: number) => item.id ?? index;

  const toggle = (key: string | number) => {
    setOpen((current) =>
      current.includes(key)
        ? current.filter((k) => k !== key)
        : allowMultiple
          ? [...current, key]
          : [key],
    );
  };

  return (
    <div className={cn("w-full", className)}>
      {items.map((item, index) => {
        const key = keyOf(item, index);
        const isOpen = open.includes(key);

        return (
          <div key={key} className="border-b border-stroke dark:border-strokedark">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(key)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-black transition-colors hover:text-primary dark:text-white dark:hover:text-primary"
            >
              {item.title}
              <ChevronDownIcon
                className={cn(
                  "h-5 w-5 shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 text-waterloo dark:text-manatee">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
