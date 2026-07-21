"use client";

import React, { ReactNode, useState } from "react";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Badge from "../Badge/Badge";
import { CardBadge, CardVariant } from "@/types/card";

const cardVariants: Record<CardVariant, string> = {
  default:
    "relative mt-10 w-full rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none",
  minimal:
    "relative mt-10 w-full rounded-xl border border-neutral-200 bg-white p-7.5 text-neutral-950 shadow dark:border-neutral-800 dark:bg-blacksection dark:text-gray-200",
};

export interface CardProps {
  className?: string;
  /** Heading rendered at the top of the card. */
  title?: ReactNode;
  /** Visual style. Defaults to "default" (bordered with shadow). */
  variant?: CardVariant;
  /** Badge centered on the card's top edge. */
  badge?: CardBadge;
  /** Entries rendered inside the card's kebab dropdown menu. */
  menuItems?: ReactNode[];
  /** Card body content. */
  children?: ReactNode;
}

/**
 * Content card with optional title, top-edge badge and kebab dropdown menu.
 *
 * @example
 * <Card title="First Card" badge={{ style: "green", text: "New" }}>
 *   <p>Card content</p>
 * </Card>
 */
const Card = ({ className, title, variant = "default", badge, menuItems, children }: CardProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={cn(cardVariants[variant], className)}>
      {badge && (
        <div className="absolute -top-3 mx-auto">
          <Badge variant={badge.style} className="me-2">
            {badge.text}
          </Badge>
        </div>
      )}
      <div className="flex">
        <div className="w-full flex-1">
          {title !== undefined && (
            <h3 className="relative mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              {title}
            </h3>
          )}
        </div>
        {menuItems && menuItems.length > 0 && (
          <div className="relative flex-none justify-end">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-block rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <span className="sr-only">Open menu</span>
              <DotsVerticalIcon />
            </button>
            {menuOpen && (
              <div className="absolute -right-2 top-7 z-10 w-44 divide-y divide-gray-100 rounded-lg border bg-white text-base shadow-md dark:bg-gray-700">
                <ul className="py-2" role="menu">
                  {menuItems.map((node, key) => (
                    <li key={key} role="menuitem">
                      {node}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default Card;
