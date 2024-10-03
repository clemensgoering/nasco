"use client";
import React from "react";
import brandData from "./brandData";
import BrandList from "@/components/Brand/BrandList";

const Brands = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <BrandList brands={brandData} />
      </section>
    </>
  );
};

export default Brands;
