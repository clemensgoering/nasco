import React from 'react';
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type ButtonConfig = {
    style?: "default" | "outlined" | "link",
    size?: "default" | "sm" | "lg"
}

const Button = ({ className, config, children }: { className?: String, config?: ButtonConfig, children?: ReactNode }) => {

    const btnCSS = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300";

    const style =
    {
        default: "bg-slate-500 text-neutral-50 shadow hover:bg-slate-500/90 dark:bg-slate-600 dark:text-neutral-100 dark:hover:bg-black dark:hover:text-neutral-500",
        outlined: "border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-blacksection dark:hover:bg-blackho dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:bg-blue-200 dark:hover:bg-blue-400 dark:text-neutral-50"
    }
    const size =
    {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
    }

    function getStyle(s?: string) {
        switch (s) {
            case 'default':
                return style.default;
                break;
            case 'outlined':
                return style.outlined;
                break;
            case 'link':
                return style.link;
                break;
            default:
                return style.default;
        }
    }
    function getSize(s?: string) {
        switch (s) {
            case 'default':
                return size.default;
                break;
            case 'sm':
                return size.sm;
                break;
            case 'lg':
                return size.lg;
                break;
            default:
                return size.default;
        }
    }


    return <button className={cn(btnCSS, getStyle(config?.style), getSize(config?.size), className)}>{children}</button>;
};

export default Button;


