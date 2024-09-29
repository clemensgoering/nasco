import * as react from 'react';
import { ReactNode } from 'react';

type Pricing = {
    price: String;
    period?: String;
    title?: String;
    description?: String;
    items: String[];
    priceButton?: PriceButton;
    status?: PriceStatus;
};
type PriceStatus = "new" | "popular" | "sale";
type PriceButton = {
    link?: string;
    text?: string;
};

declare const PriceCard: ({ className, status, children }: {
    className?: string;
    status?: PriceStatus;
    children?: ReactNode;
}) => react.JSX.Element;
declare const PriceCardContent: ({ className, conf, children }: {
    className?: string;
    conf: Pricing;
    children?: ReactNode;
}) => react.JSX.Element;
declare const PriceCardHeader: ({ className, children }: {
    className?: string;
    children?: ReactNode;
}) => react.JSX.Element;

type CSSBtnConfig = {
    visibility: String;
    selected: Boolean;
};

export { type CSSBtnConfig, PriceCard, PriceCardContent, PriceCardHeader };
