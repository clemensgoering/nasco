/** Visual style of the Card component: bordered default or flat minimal look. */
export type CardVariant = "default" | "minimal";

/** Badge shown centered on the top edge of a Card. */
export type CardBadge = {
  /** Color variant, mapped to the standalone Badge component. */
  style: "default" | "red" | "green";
  /** Badge label. */
  text: string;
};

/** @deprecated Use `CardVariant` instead. */
export type Variant = CardVariant;
