"use client";
import { cn } from "@/lib/utils";
import { TimelineItem } from "@/types/timeline";
import React from "react";

interface TimelineProps {
    items: TimelineItem[],
    className?: string
}

const Timeline = ({ items, className }: TimelineProps) => {
    return (
        <>
            {/* <!-- ===== Timeline Start ===== --> */}

            <ol className={cn("relative border-s border-gray-200 dark:border-gray-700",className)}>
                {items.map((item, key) => (
                    <li key={key} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.date}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
                    </li>
                ))}
            </ol>
            {/* <!-- ===== Timeline End ===== --> */}
        </>
    );
};


export default Timeline;
