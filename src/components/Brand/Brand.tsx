import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ImagePlaceholder from "../Placeholder/Image";
import { BrandConfig } from "@/types/brand";

const Brand = ({ className, brand }: { className?: string, brand: BrandConfig }) => {


  return (
    <>
      <motion.a
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
        transition={{ duration: 1, delay: brand.id }}
        viewport={{ once: true }}
        href={brand.href}
        className={cn("animate_top mx-w-full relative block h-10 w-[98px]", className)}
      > 
      {brand.image ? (
        <Image
          className="opacity-65 transition-all duration-300 hover:opacity-100"
          src={brand.image}
          alt={brand.name}
          fill
        />) : <ImagePlaceholder/>}
      </motion.a>
    </>
  );
};

export default Brand;
