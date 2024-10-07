"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export type Links = {
    text: string;
    href: string;
}
export type LeftMenu = {
    title: string;
    description: string;
    contact?: string;
}

export type FooterMenu = {
    title: string;
    links: Links[];
}



export type BottomLinks = {
    links: Links[]
}

interface FooterProps {
    className?: string
    leftMenu: LeftMenu,
    midMenu?: FooterMenu
    rightMenu?: FooterMenu,
    bottomLinks?: BottomLinks,
    bottomRight?: ReactNode
}

const Footer = ({ className, leftMenu, midMenu, rightMenu, bottomLinks, bottomRight }: FooterProps) => {
    return (
        <>
            <footer className={cn("border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection", className)}>
                <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                    {/* <!-- Footer Top --> */}
                    <div className="py-20 lg:py-25">
                        <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
                            <motion.div
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: -20,
                                    },

                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                transition={{ duration: 1, delay: 1.5 }}
                                viewport={{ once: true }}
                                className="animate_top w-1/2"
                            >
                                <a href="/" className="relative">
                                    <div className="hidden w-full dark:block">{leftMenu?.title}</div>
                                    <div className="w-full dark:hidden">{leftMenu?.title}</div>
                                </a>

                                <p className="mb-10 mt-5">
                                    {leftMenu?.description}
                                </p>
                                {leftMenu?.contact !== undefined ? (
                                    <>
                                        <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                                            Contact
                                        </p>
                                        <a
                                            href={`mailto:${leftMenu?.contact}`}
                                            className="text-itemtitle font-medium text-black dark:text-white"
                                        >
                                            {leftMenu?.contact}
                                        </a>
                                    </>
                                ) : ("")}
                            </motion.div>

                            <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-0 w-1/3">
                                <motion.div
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            y: -20,
                                        },

                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                        },
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 1, delay: 1.1 }}
                                    viewport={{ once: true }}
                                    className="animate_top"
                                >
                                    {midMenu !== undefined ? (
                                        <>
                                            <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                                                {midMenu?.title}
                                            </h4>

                                            <ul>
                                                {midMenu?.links.map((link, key) => (
                                                    <li key={key}>
                                                        <a
                                                            href={link.href}
                                                            className="mb-3 inline-block hover:text-primary"
                                                        >
                                                            {link.text}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : ("")}
                                </motion.div>

                                <motion.div
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            y: -20,
                                        },

                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                        },
                                    }}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ duration: 1, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="animate_top"
                                >
                                    {rightMenu !== undefined ? (
                                        <>
                                            <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                                                {rightMenu?.title}
                                            </h4>

                                            <ul>
                                                {rightMenu?.links.map((link, key) => (
                                                    <li key={key}>
                                                        <a
                                                            href={link.href}
                                                            className="mb-3 inline-block hover:text-primary"
                                                        >
                                                            {link.text}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : ("")}
                                </motion.div>


                            </div>
                        </div>
                    </div>
                    {/* <!-- Footer Top --> */}

                    {/* <!-- Footer Bottom --> */}
                    <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: -20,
                                },

                                visible: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="animate_top"
                        >
                            {bottomLinks !== undefined ? (
                                <ul className="flex items-center gap-8">
                                    {bottomLinks?.links.map((link, key) => (
                                        <li key={key}>
                                            <a href={link.href} className="hover:text-primary">
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            ) : ("")}
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: -20,
                                },

                                visible: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="animate_top"
                        >
                            <p>
                                &copy; {new Date().getFullYear()} Solid. All rights reserved
                            </p>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    y: -20,
                                },

                                visible: {
                                    opacity: 1,
                                    y: 0,
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="animate_top"
                        >
                        {bottomRight}
                        </motion.div>
                    </div>
                    {/* <!-- Footer Bottom --> */}
                </div>
            </footer>
        </>
    );
};

export default Footer;
