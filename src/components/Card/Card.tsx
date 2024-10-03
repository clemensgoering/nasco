"use client"

import React from 'react';
import { ReactNode, useState } from "react";
import { CardConfig } from "@/types/card";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export type CardBadge = {
  style: "default" | "red" | "green",
  text: string
}

interface CardProps {
  className?: string,
  config?: CardConfig,
  children?: ReactNode
}


const Card = ({ className, config, children }: CardProps) => {


  const [menustatus, setMenu] = useState("hidden");

  const variants =
  {
    default: "relative rounded-lg border border-stroke bg-white mt-10 p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full",
    minimal: "relative rounded-xl border border-neutral-200 mt-10 p-7.5 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-blacksection dark:text-gray-200 w-full"
  }

  const badgeColors =
  {
    default: "bg-blacksection text-white dark:bg-blackho",
    red: "bg-red-300 text-black-700 dark:bg-red-900 dark:text-red-300",
    green: "bg-green-400 text-black-700 dark:bg-green-900 dark:text-green-300"
  }

  function getVariant(variant?: string) {
    switch (variant) {
      case 'default':
        return variants.default;
        break;
      case 'minimal':
        return variants.minimal;
        break;
      default:
        return variants.default;
    }
  }

  function getBadge(badge?: CardBadge) {
    let defaultStyles = "text-xs dark:border dark:border-white font-medium me-2 px-4 py-0.5 rounded-full";
    switch (badge?.style) {
      case 'default':
        return <span className={cn(defaultStyles, badgeColors.default)}>{badge.text}</span>;
        break;
      case 'red':
        return <span className={cn(defaultStyles, badgeColors.red)}>{badge.text}</span>;;
        break;
      case 'green':
        return <span className={cn(defaultStyles, badgeColors.green)}>{badge.text}</span>;;
        break;
      default:
        return "";
    }
  }



  function toggleMenu() {
    menustatus === "hidden" ? setMenu("block") : setMenu("hidden");
  }

  return (
    <>
      {/* <!-- =====  Card Start ===== --> */}
      <div className={cn(getVariant(config?.variant), className)}>
        <div className="absolute -top-3 mx-auto">{getBadge(config?.badge)}</div>
        <div className="flex">

          <div className="flex-1 w-full">
            {config?.title !== undefined ? (
              <h3 className="relative mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                {config?.title}
              </h3>) : ""}
          </div>
          {/* <!-- =====  Menu Start ===== --> */}
          {config?.menuItems?.length !== undefined && config?.menuItems?.length > 0 ? (
            <div className="relative flex-none justify-end ">
              <button id="dropdownButton" onClick={() => toggleMenu()} data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span className="sr-only">Open dropdown</span>
                <DotsVerticalIcon />
              </button>
              <div id="dropdown" className={`absolute -right-2 top-7 shadow-md border z-10 text-base list-none ${menustatus} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                    {config?.menuItems?.map((node, key) => (
                      <div key={key}>{node}</div>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          ) : ""}
          {/* <!-- =====  Menu End ===== --> */}
        </div>
        {children}
      </div>
      {/* <!-- ===== Card End ===== --> */}
    </>
  );
};

export default Card;
