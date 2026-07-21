/** Pill-shaped announcement link rendered above a hero title. */
export type HeroJumbotron = {
  /** Link target of the announcement pill. */
  link: string;
  /** Announcement text, e.g. "New Features". */
  text: string;
};

/** @deprecated Use `HeroJumbotron` instead. */
export type HeroBtn = HeroJumbotron;
