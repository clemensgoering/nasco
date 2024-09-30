import { Pricing } from "@/types/pricing";

const pricingData: Pricing[] = [
    {
        price: "12 Euro",
        period: "/month",
        title: "Small",
        description: "Lorem ipsum dolor sit amet, consec adipisicing elit.",
        items: ["300 GB Storage", "Unlimited Photos and Videos", "Exclusive Support", "Custom Branding Strategy"],
        status:"sale"
      },
      {
        price: "12 Euro",
        period: "/month",
        title: "Medium",
        description: "Lorem ipsum dolor sit amet, consec adipisicing elit.",
        items: ["300 GB Storage", "Unlimited Photos and Videos", "Exclusive Support", "Custom Branding Strategy"],
        status:"new"
      },
      {
        price: "12 Euro",
        period: "/month",
        title: "Small",
        description: "Lorem ipsum dolor sit amet, consec adipisicing elit.",
        items: ["300 GB Storage", "Unlimited Photos and Videos", "Exclusive Support", "Custom Branding Strategy"],
        status: "popular",
      }
];

export default pricingData;

