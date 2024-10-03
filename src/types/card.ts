import { ReactNode } from "react";

export type CardBadge = {
    style: "default" | "red" | "green",
    text: string
  }

export type CardConfig = {
    title?: String;
    variant?: Variant;
    menuItems?: Array<ReactNode>;
    badge?: CardBadge
};

export type Variant = "default" | "minimal";

