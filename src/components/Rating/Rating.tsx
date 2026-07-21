import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { RatingData } from "@/types/rating";
import Star from "./Star";

const MAX_STARS = 5;

export interface RatingProps {
  className?: string;
  /** The review to display: author, date, stars, title and comment. */
  rating: RatingData;
  /** Footer content, e.g. helpful-links or actions. */
  children?: ReactNode;
}

/**
 * Star-based review card with author, date, headline and comment.
 *
 * @example
 * <Rating rating={{ id: 1, user: "Jane", date: "2026-05-12", stars: 4, title: "Great", comment: "..." }}>
 *   <a href="#">Helpful?</a>
 * </Rating>
 */
const Rating = ({ className, rating, children }: RatingProps) => {
  const filled = Math.max(0, Math.min(MAX_STARS, Math.round(rating.stars)));

  return (
    <div
      className={cn(
        "group relative mt-10 w-full rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none",
        className,
      )}
    >
      <article>
        <div className="mb-4 flex items-center">
          <div className="font-medium dark:text-white">
            <div className="py-4">
              {rating.user}
              <time className="block text-sm text-gray-500 dark:text-gray-400">{rating.date}</time>
            </div>
          </div>
        </div>
        <div
          className="mb-1 flex items-center space-x-1 rtl:space-x-reverse"
          role="img"
          aria-label={`${filled} out of ${MAX_STARS} stars`}
        >
          {Array.from({ length: MAX_STARS }, (_, i) => (
            <Star key={i} filled={i < filled} />
          ))}
        </div>
        <h3 className="py-4 text-sm font-semibold text-gray-900 dark:text-white">{rating.title}</h3>
        <p className="mb-2 text-gray-500 dark:text-gray-400">{rating.comment}</p>
        {children && (
          <aside>
            <div className="mt-3 flex items-center">{children}</div>
          </aside>
        )}
      </article>
    </div>
  );
};

export default Rating;
