// Components
export {
  default as Accordion,
  type AccordionItem,
  type AccordionProps,
} from "./components/Accordion/Accordion";
export { default as BackToTop, type BackToTopProps } from "./components/BackToTop/BackToTop";
export { default as Badge, type BadgeProps, type BadgeVariant } from "./components/Badge/Badge";
export { default as Brand, type BrandProps } from "./components/Brand/Brand";
export { default as BrandList, type BrandListProps } from "./components/Brand/BrandList";
export { default as Button, buttonVariants, type ButtonProps } from "./components/Button/Button";
export { default as Card, type CardProps } from "./components/Card/Card";
export { default as CTA, type CTAProps, type CTAVariant } from "./components/CTA/CTA";
export {
  default as FeatureGrid,
  type Feature,
  type FeatureGridProps,
} from "./components/FeatureGrid/FeatureGrid";
export { default as Footer, type FooterProps } from "./components/Footer/Footer";
export {
  Input,
  Textarea,
  Label,
  type InputProps,
  type TextareaProps,
  type LabelProps,
} from "./components/Form/Form";
export { default as Header, type HeaderProps } from "./components/Header/Header";
export { default as ThemeToggler } from "./components/Header/ThemeToggler";
export { HeroImage, HeroSimple, type HeroProps } from "./components/Hero/Hero";
export {
  default as ImagePlaceholder,
  type ImagePlaceholderProps,
} from "./components/Placeholder/Image";
export { default as PriceBanner, type PriceBannerProps } from "./components/Price/PriceBanner";
export {
  PriceCard,
  PriceCardContent,
  PriceCardHeader,
  type PriceCardProps,
  type PriceCardContentProps,
} from "./components/Price/PriceCard/PriceCard";
export { default as Rating, type RatingProps } from "./components/Rating/Rating";
export { default as LTR, type SectionProps } from "./components/Section/LTR";
export { default as RTL } from "./components/Section/RTL";
export { default as ShowCode, type ShowCodeProps } from "./components/ShowCode/ShowCode";
export { default as Steps, type StepItem, type StepsProps } from "./components/Steps/Steps";
export { default as Tabs, type TabItem, type TabsProps } from "./components/Tabs/Tabs";
export {
  default as SingleTestimonial,
  type SingleTestimonialProps,
} from "./components/Testimonial/SingleTestimonial";
export {
  default as TestimonialGrid,
  type TestimonialGridProps,
} from "./components/Testimonial/Grid/TestimonialGrid";
export {
  default as TestimonialSlider,
  type TestimonialSliderProps,
} from "./components/Testimonial/Slider/TestimonialSlider";
export { default as Timeline, type TimelineProps } from "./components/Timeline/Timeline";

// Utilities
export { cn } from "./lib/utils";
export { Reveal, fadeDown } from "./lib/motion";

// Types
export type { BrandConfig } from "./types/brand";
export type { CardBadge, CardVariant, Variant } from "./types/card";
export type { FooterIntro, FooterLink, FooterMenu } from "./components/Footer/Footer";
export type { HeroJumbotron, HeroBtn } from "./types/hero";
export type { Menu, MenuItem } from "./types/menu";
export type { PriceButton, PriceStatus, Pricing } from "./types/pricing";
export type { Rating as RatingType, RatingData } from "./types/rating";
export type { SectionButton } from "./types/section";
export type { Testimonial } from "./types/testimonial";
export type { TimelineItem } from "./types/timeline";
