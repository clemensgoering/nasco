import { StaticImageData } from "next/image";

/** Data describing one brand logo, consumed by Brand and BrandList. */
export type BrandConfig = {
  /** Unique id; also drives the default reveal-animation stagger. */
  id: number;
  /** Brand name, used as image alt text. */
  name: string;
  /** Link target when the logo is clicked. */
  href: string;
  /** Logo image; falls back to a placeholder when omitted. */
  image?: StaticImageData | string;
  /** Reveal animation delay in seconds. Defaults to a stagger based on `id`. */
  delay?: number;
};
