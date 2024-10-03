"use client";
import React from "react";
import Brand from "@/components/Brand/Brand";
import { BrandConfig } from "@/types/brand";
import { cn } from "@/lib/utils";


interface BrandListProps  {
  className?: string,
  brands : BrandConfig[]
  smScale?: number,
  lgScale?: number
}

const BrandList = ( { className, brands, smScale, lgScale } : BrandListProps) => {

  const getSmallScale = () =>{
    let scale = "grid-cols-2";
    if(smScale !== undefined) {
      scale = `grid-cols-${smScale}`;
    }
    return scale;
  }

  const getLargeScale = () =>{
    let scale = `lg:grid-cols-${brands.length}`;
    if(lgScale !== undefined) {
      scale = `lg:grid-cols-${lgScale}`;
    }
    return scale;
  }

  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className={cn("hidden md:block relative border border-x-0 border-y-stroke bg-alabaster py-20 dark:border-y-strokedark dark:bg-blackho", className)}>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className={` grid ${getSmallScale()} items-center justify-center ${getLargeScale()} gap-12 mx-auto`}>
            {brands.map((brand, key) => (
              <Brand brand={brand} key={key} className={"mx-auto"} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};


export default BrandList;
