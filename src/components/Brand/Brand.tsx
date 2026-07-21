"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeDown } from "@/lib/motion";
import ImagePlaceholder from "../Placeholder/Image";
import { BrandConfig } from "@/types/brand";

export interface BrandProps {
  className?: string;
  brand: BrandConfig;
}

/** Single brand logo with a staggered reveal animation. */
const Brand = ({ className, brand }: BrandProps) => (
  <motion.a
    variants={fadeDown}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 1, delay: brand.delay ?? brand.id * 0.15 }}
    viewport={{ once: true }}
    href={brand.href}
    className={cn("relative block h-10 w-[98px] max-w-full", className)}
  >
    {brand.image ? (
      <Image
        className="opacity-65 transition-all duration-300 hover:opacity-100"
        src={brand.image}
        alt={brand.name}
        fill
      />
    ) : (
      <ImagePlaceholder />
    )}
  </motion.a>
);

export default Brand;
