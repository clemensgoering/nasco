export type Pricing = {
    price: String;
    period?: String;
    title?: String;
    description?: String;
    items: String[];
    status?: "new" | "popular" | "sale";
    priceButton?: PriceButton;
  };

  export type PriceButton = {
    link?: string;
    text?: string;
  };
  