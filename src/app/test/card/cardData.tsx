import { CardProps } from "@/components/Card/Card";
import React from "react";

const menuLinkClasses =
  "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white";

const cardData: CardProps[] = [
  {
    title: "First Card",
    variant: "default",
    menuItems: [
      <a key="edit" href="#" className={menuLinkClasses}>Edit</a>,
      <a key="new" href="#" className={menuLinkClasses}>New</a>,
      <a key="delete" href="#" className={menuLinkClasses}>Delete</a>,
    ],
    badge: { style: "default", text: "Default" },
  },
  {
    title: "Second Card",
    variant: "default",
    badge: { style: "red", text: "Red" },
  },
  {
    title: "Third Card",
    variant: "minimal",
    menuItems: [
      <a key="edit" href="#" className={menuLinkClasses}>Edit</a>,
      <a key="new" href="#" className={menuLinkClasses}>New</a>,
      <a key="delete" href="#" className={menuLinkClasses}>Delete</a>,
    ],
    badge: { style: "green", text: "Green" },
  },
];

export default cardData;
