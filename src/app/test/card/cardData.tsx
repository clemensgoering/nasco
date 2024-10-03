import { CardConfig } from "@/types/card";
import React from "react";

const pricingData: CardConfig[] = [
  {
    title: "First Card",
    variant: "default",
    menuItems: [<a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>,
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">New</a>,
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
    ],
    badge: { style: "default", text: "Default"}
  },
  {
    title: "Second Card",
    variant: "default",
    badge: { style: "red", text: "Red"}
  },
  {
    title: "Third Card",
    variant: "minimal",
    menuItems: [<><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">New</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a></>
    ],
    badge: { style: "green", text: "Green"}
  }
];

export default pricingData;

