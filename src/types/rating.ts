/** Data describing one user review, consumed by the Rating component. */
export type RatingData = {
  /** Unique id, useful as React key when rendering lists. */
  id: number;
  /** Display name of the reviewer. */
  user: string;
  /** Review date shown below the reviewer name. */
  date: string;
  /** Number of filled stars, 0-5. Values outside the range are clamped. */
  stars: number;
  /** Review headline. */
  title: string;
  /** Review body text. */
  comment: string;
  /** Optional original publication date. */
  publishedAt?: string;
};

/** @deprecated Use `RatingData` instead. */
export type Rating = RatingData;
