"use client"
import React from 'react';
import { cn } from "@/lib/utils";
import { Pricing } from "@/types/pricing";
import { ReactNode } from "react";

const PriceBanner = ({className, conf, children }: { className?: string, conf: Pricing, children?: ReactNode }) => {
    return (
        <>
            {/* <!-- ===== Pricing Table Start ===== --> */}
            <div className={cn("animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none w-full", className)}>
                <div className={`absolute px-4.5 py-1.5 right-0 shadow-md
          ${conf.status === "new" ? "top-4" : ""} ${conf.status === "popular" ? "top-7.5" : ""} ${conf.status === "sale" ? "top-4" : ""}
          -rotate-90 rounded-bl-full rounded-tl-full ${conf.status === "new" ? "bg-lime-500" : ""} ${conf.status === "popular" ? "bg-primary" : ""} ${conf.status === "sale" ? "bg-red-500" : ""}  text-metatitle font-medium uppercase text-white`}>
                    {conf.status === "new" ? "New" : ""}
                    {conf.status === "popular" ? "Popular" : ""}
                    {conf.status === "sale" ? "Sale" : ""}
                </div>

                <h3 className="mb-7.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                    {conf.price}
                    <span className="text-regular text-waterloo dark:text-manatee">
                        {conf.period}
                    </span>
                </h3>
                <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                    {conf.title}
                </h4>
                <p>{conf.description}</p>

                <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                    <ul>
                        {conf.items.map((item, key) => (
                            <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                {conf?.priceButton !== undefined ? (
                    <a href={conf?.priceButton?.link}
                        aria-label="Get the Plan button"
                        className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
                    >
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
                    </a>
                ) : ""}
                <div className="w-full">{children}</div>
            </div>
            {/* <!-- ===== Pricing Table End ===== --> */}
        </>
    );
};

export default PriceBanner;
