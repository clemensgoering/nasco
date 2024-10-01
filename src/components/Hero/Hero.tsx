"use client"
import React from 'react';
import { cn } from "@/lib/utils";
import { HeroConfig } from "@/types/hero";
import { ReactNode } from "react";


const HeroSimple = ({ className, config, children }: { className?: string, config: HeroConfig, children?: ReactNode }) => {

  return (
    <>
      <section className={cn("bg-white h-screen dark:bg-gray-900", className)}>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
          {config?.jumbotron !== undefined ? (
            <a href={config.jumbotron.link} className="mt-[15%] p-2 px-6 inline-flex justify-between items-center mb-7 text-sm text-blue-700 bg-slate-100 rounded-full dark:bg-blacksection dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
              <span className="text-sm font-medium">{config.jumbotron.text}</span>
              <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
            </a>
          ) : ""}
          <h1 className="pt-15 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{config?.title}</h1>
          <div className="pt-10 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">{config?.subTitle}</div>
          <div className="pt-10 w-full max-w-md mx-auto">
            {children}
          </div>
        </div>
      </section>

    </>
  );
};



const HeroImage = ({ className, config, children }: { className?: string, config: HeroConfig, children?: ReactNode }) => {

  return (
    <>
      <section className={cn("overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46", className)}>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">

              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  {config.title}
                </span>
              </h1>
              <p>
                {config?.subTitle}
              </p>

              {config?.jumbotron !== undefined ? (
                <a href={config.jumbotron.link} className="mt-[15%] p-2 px-6 inline-flex justify-between items-center mb-7 text-sm text-blue-700 bg-slate-100 rounded-full dark:bg-blacksection dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                  <span className="text-sm font-medium">{config.jumbotron.text}</span>
                  <svg className="w-2.5 h-2.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                  </svg>
                </a>
              ) : ""}
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                {children}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};


export {
  HeroSimple,
  HeroImage
};
