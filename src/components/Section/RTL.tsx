import React from 'react';
import Image from "next/image";
import ImagePlaceholder from "../Placeholder/Image";
import { SectionConfig } from "@/types/section";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const RTL = ({ className, config, children }: { className?: string, config: SectionConfig, children?: ReactNode }) => {

    return (
        <>
            {/* <!-- ===== About Start ===== --> */}
            <section className={cn("overflow-hidden pb-20 lg:pb-25 xl:pb-30",className)}>
                <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
                        {config.showBackgroundImage ? (
                            <>
                                <Image
                                    fill
                                    className="dark:hidden"
                                    src="/images/shape/shape-dotted-light.svg"
                                    alt="Dotted Shape"
                                />
                                <Image
                                    fill
                                    className="hidden dark:block"
                                    src="/images/shape/shape-dotted-dark.svg"
                                    alt="Dotted Shape"
                                />
                            </>
                        ) : ""}
                    </div>
                    <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                        <div className="flex items-center gap-8 lg:gap-32.5">
                            <div className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2">
                                {config?.Image === undefined ? <ImagePlaceholder /> : config?.Image}
                            </div>
                            <div className="animate_right md:w-1/2">
                                <h4 className="font-medium uppercase text-black dark:text-white">
                                    {config?.topTitle}
                                </h4>
                                <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                                    {config?.title}
                                    <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                                        {config?.subTitle}
                                    </span>
                                </h2>
                                <div className="py-4">
                                    {config?.content}
                                </div>
                                <div>
                                    {config?.buttonConfig !== undefined ?
                                        (
                                            <a href={config?.buttonConfig?.link} className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary" >
                                                <span className="duration-300 group-hover:pr-2">
                                                    {config?.buttonConfig?.text}
                                                </span>
                                                <svg
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 14 14"
                                                    fill="currentColor"
                                                >
                                                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                                                </svg>
                                            </a>
                                        ) : ""}
                                        <div className="w-full">{children}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ===== About End ===== --> */}
        </>
    )


};

export default RTL;
