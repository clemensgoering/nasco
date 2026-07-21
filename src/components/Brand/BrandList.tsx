"use client";

import React from "react";
import Brand from "./Brand";
import { BrandConfig } from "@/types/brand";
import { cn } from "@/lib/utils";

/*
 * Tailwind can only ship classes it sees verbatim, so the column counts are
 * mapped statically instead of interpolated.
 */
const smColsMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
};

const lgColsMap: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
};

const clampCols = (map: Record<number, string>, value: number) => {
  const keys = Object.keys(map).map(Number);
  return map[Math.max(Math.min(value, Math.max(...keys)), Math.min(...keys))];
};

export interface BrandListProps {
  className?: string;
  brands: BrandConfig[];
  /** Columns on small screens (1-6). Defaults to 2. */
  smColumns?: number;
  /** Columns on large screens (1-8). Defaults to one per brand. */
  lgColumns?: number;
}

/**
 * Responsive grid of brand logos on a subtle banded background.
 * Hidden below the `md` breakpoint by design.
 *
 * @example
 * <BrandList brands={brands} lgColumns={4} />
 */
const BrandList = ({ className, brands, smColumns = 2, lgColumns }: BrandListProps) => (
  <section
    className={cn(
      "relative hidden border border-x-0 border-y-stroke bg-alabaster py-20 dark:border-y-strokedark dark:bg-blackho md:block",
      className,
    )}
  >
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      <div
        className={cn(
          "mx-auto grid items-center justify-center gap-12",
          clampCols(smColsMap, smColumns),
          clampCols(lgColsMap, lgColumns ?? brands.length),
        )}
      >
        {brands.map((brand) => (
          <Brand brand={brand} key={brand.id} className="mx-auto" />
        ))}
      </div>
    </div>
  </section>
);

export default BrandList;
