import React from 'react';
import ImagePlaceholder from "@/components/Placeholder/Image";
import { cn } from "@/lib/utils";
import { PriceStatus, Pricing } from "@/types/pricing";
import { ReactNode } from "react";

const PriceCard = ({ className, status, children }: { className?: string, status?: PriceStatus, children?: ReactNode }) => {
  return (
    <>
      {/* <!-- ===== Pricing Card Start ===== --> */}
      <div className={cn("animate_top group relative rounded-lg border border-stroke bg-white mt-10 p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full", className)}>
        <div className={`absolute px-4.5 py-1.5 right-0 shadow-md
          ${status === "new" ? "top-4" : ""} ${status === "popular" ? "top-7.5" : ""} ${status === "sale" ? "top-4" : ""}
          -rotate-90 rounded-bl-full rounded-tl-full ${status === "new" ? "bg-lime-500" : ""} ${status === "popular" ? "bg-primary" : ""} ${status === "sale" ? "bg-red-500" : ""}  text-metatitle font-medium uppercase text-white`}>
          {status === "new" ? "New" : ""}
          {status === "popular" ? "Popular" : ""}
          {status === "sale" ? "Sale" : ""}
        </div>
        {/* <!-- ===== Content could be:
          - PriceCardHeader
          - PriceCardContent
          or personal nodes
        ===== --> */}
        {children}
      </div>
      {/* <!-- ===== Pricing Card End ===== --> */}
    </>
  );
};

const PriceCardContent = ({ className, conf, children }: { className?: string, conf: Pricing, children?: ReactNode }) => {
  return (
      <>
          <h4 className={cn("mb-2.5 text-para2 font-medium text-black dark:text-white",className)}>
              {conf.title}
          </h4>
          <p>{conf.description}</p>
          {children}
          {conf?.priceButton !== undefined ? (
              <a href={conf?.priceButton?.link}
                  aria-label="Get the Plan button"
                  className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary pt-10">
                  <span className="duration-300 group-hover/btn:pr-2">
                      {conf?.priceButton?.text}
                  </span>
                  <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                          d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                          fill="currentColor"
                      />
                  </svg>
              </a>) : ""}
      </>
  );
};


const PriceCardHeader = ({ className, children }: { className?: string, children?: ReactNode }) => {
  return (

        <h3 className={cn("mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3", className)}>
          { children === undefined ? <ImagePlaceholder className="h-52 w-full mx-auto"/> : children }
        </h3>
  );
};

export { PriceCard,
         PriceCardContent,
         PriceCardHeader }
