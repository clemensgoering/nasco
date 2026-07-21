import { ReactNode } from "react";

/** Corner ribbon shown on pricing components. */
export type PriceStatus = "new" | "popular" | "sale";

/** Call-to-action link of a pricing plan, rendered as an arrow link. */
export type PriceButton = {
  /** Link target. */
  link?: string;
  /** Link text, e.g. "Get the plan". */
  text?: string;
};

/** Data describing one pricing plan, consumed by PriceBanner. */
export type Pricing = {
  /** Price display value, e.g. "12 Euro". */
  price: string;
  /** Billing period appended after the price, e.g. "/month". */
  period?: string;
  /** Plan name. */
  title?: string;
  /** Short plan description. */
  description?: ReactNode;
  /** Feature bullet points of the plan. */
  items: ReactNode[];
  /** Optional call-to-action link below the feature list. */
  priceButton?: PriceButton;
  /** Optional corner ribbon (new / popular / sale). */
  status?: PriceStatus;
};
