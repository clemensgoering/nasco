import { ReactNode } from "react";

export type CardConfig = {
    title?: String;
    variant?: Variant;
    menuItems?: Array<ReactNode>;
};

export type Variant = "default" | "minimal";

