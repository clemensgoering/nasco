import React from 'react';
import { ReactNode, useState } from "react";
import { CardConfig } from "@/types/card";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const Card = ({ className, config, children }: { className?: string, config?: CardConfig, children?: ReactNode }) => {


  const [menustatus, setMenu] = useState("hidden");

  const variants =
  {
    default: "flex relative rounded-lg border border-stroke bg-white mt-10 p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full",
    minimal: "flex relative rounded-xl border border-neutral-200 mt-10 p-7.5 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-blacksection dark:text-gray-200 w-full"
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

  function toggleMenu() {
    menustatus === "hidden" ? setMenu("block") : setMenu("hidden");
  }

  return (
    <>
      {/* <!-- =====  Card Start ===== --> */}
      <div className={cn(getVariant(config?.variant),className)}>
        <div className="flex-1 w-full">
          {config?.title !== undefined ? (
            <h3 className="relative mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              {config?.title}
            </h3>) : ""}
        </div>
        {/* <!-- =====  Menu Start ===== --> */}
        {config?.menuItems?.length !== undefined && config?.menuItems?.length > 0 ? (
          <div className="flex-none justify-end ">
            <button id="dropdownButton" onClick={() => toggleMenu()} data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-1.5" type="button">
              <span className="sr-only">Open dropdown</span>
              <DotsVerticalIcon />
            </button>
            <div id="dropdown" className={`absolute right-2 top-15 shadow-md border z-10 text-base list-none ${menustatus} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  {config?.menuItems?.map((node, key) => (
                    node
                  ))}
                </li>
              </ul>
            </div>
          </div>
        ) : ""}
        {/* <!-- =====  Menu End ===== --> */}

        {children}
      </div>
      {/* <!-- ===== Card End ===== --> */}
    </>
  );
};

export default Card;
