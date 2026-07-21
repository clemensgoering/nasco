import { StaticImageData } from "next/image";

/** Data describing one testimonial, consumed by the testimonial components. */
export type Testimonial = {
  /** Unique id, used as React key in grids and sliders. */
  id: number;
  /** Author name. */
  name: string;
  /** Author role or affiliation, e.g. "Founder @democompany". */
  designation: string;
  /** Quote text. */
  content: string;
  /** Optional headline, shown by the grid layout. */
  title?: string;
  /** Author avatar; falls back to a placeholder when omitted. */
  image?: StaticImageData | string;
};
