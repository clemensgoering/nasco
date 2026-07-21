import React from "react";
import TestimonialCard from "./TestimonialCard";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/types/testimonial";

export interface TestimonialGridProps {
  /** Testimonials rendered as grid cells. */
  items: Testimonial[];
  className?: string;
}

/**
 * Minimalistic testimonial grid (single column on mobile, two from `md` up).
 *
 * @example
 * <TestimonialGrid items={testimonials} />
 */
const TestimonialGrid = ({ items, className }: TestimonialGridProps) => (
  <section>
    <div
      className={cn(
        "mb-8 grid grid-cols-1 rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 md:mb-12 md:grid-cols-2",
        className,
      )}
    >
      {items.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  </section>
);

export default TestimonialGrid;
