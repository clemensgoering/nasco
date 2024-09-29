"use client";

import { Pricing } from "@/types/pricing";
import { ReactNode } from "react";


const PriceCardContent = ({ conf, children }: { conf: Pricing, children?: ReactNode }) => {
    return (
        <>
            <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
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

export default PriceCardContent;
