import React from "react";
import { cn } from "@/lib/utils";
import { PriceStatus } from "@/types/pricing";

const ribbonStyles: Record<PriceStatus, string> = {
  new: "top-4 bg-lime-500",
  popular: "top-7.5 bg-primary",
  sale: "top-4 bg-red-500",
};

const ribbonLabels: Record<PriceStatus, string> = {
  new: "New",
  popular: "Popular",
  sale: "Sale",
};

/** Rotated corner ribbon shown on pricing components. */
const StatusRibbon = ({ status }: { status?: PriceStatus }) => {
  if (!status) return null;

  return (
    <div
      className={cn(
        "absolute right-0 -rotate-90 rounded-bl-full rounded-tl-full px-4.5 py-1.5 text-metatitle font-medium uppercase text-white shadow-md",
        ribbonStyles[status],
      )}
    >
      {ribbonLabels[status]}
    </div>
  );
};

export default StatusRibbon;
