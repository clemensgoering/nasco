export type Pricing = {
    price: String;
    period?: String;
    title?: String;
    description?: String;
    items: String[];
    priceButton?: PriceButton;
    status?: PriceStatus;
  };

  export type PriceStatus = "new" | "popular" | "sale";
  

  export type PriceButton = {
    link?: string;
    text?: string;
  };
  