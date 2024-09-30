import * as react from 'react';
import react__default, { ReactNode } from 'react';
import { BundledLanguage } from 'shiki';

type CardConfig = {
    title?: String;
    variant?: Variant;
    menuItems?: Array<ReactNode>;
};
type Variant = "default" | "minimal";

declare const Card: ({ className, config, children }: {
    className?: string;
    config?: CardConfig;
    children?: ReactNode;
}) => react.JSX.Element;

declare const ImagePlaceholder: ({ className, gradient }: {
    className?: String;
    gradient?: "top" | "right";
}) => react.JSX.Element;

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

declare const PriceBanner: ({ className, conf, children }: {
    className?: string;
    conf: Pricing;
    children?: ReactNode;
}) => react.JSX.Element;

type Rating = {
    _id: number;
    user: string;
    date: string;
    stars: number;
    title: string;
    comment: string;
    publishedAt?: string;
};

declare const UserRating: ({ className, rating, children }: {
    className?: string;
    rating: Rating;
    children?: ReactNode;
}) => react__default.JSX.Element;

type SectionConfig = {
    showBackgroundImage?: Boolean;
    topTitle?: string;
    title?: string;
    subTitle?: string;
    content?: string;
    buttonConfig?: SectionButton;
    Image?: any;
};
type SectionButton = {
    link?: string;
    text?: string;
};

declare const RTL: ({ className, config, children }: {
    className?: string;
    config: SectionConfig;
    children?: ReactNode;
}) => react.JSX.Element;

declare const LTR: ({ className, config, children }: {
    className?: string;
    config: SectionConfig;
    children?: ReactNode;
}) => react.JSX.Element;

declare const ShowCode: ({ className, descriptionNode, code, language }: {
    className?: string;
    descriptionNode: ReactNode;
    code: string;
    language: BundledLanguage;
}) => react.JSX.Element;

export { Card, ImagePlaceholder as Image, LTR, PriceBanner, PriceCard, PriceCardContent, PriceCardHeader, RTL, UserRating as Rating, ShowCode };
