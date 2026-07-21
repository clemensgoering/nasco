"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

interface RevealProps {
  className?: string;
  delay?: number;
  duration?: number;
  children?: ReactNode;
}

/** Fades content in from above once it scrolls into view. */
const Reveal = ({ className, delay = 0.1, duration = 1, children }: RevealProps) => (
  <motion.div
    variants={fadeDown}
    initial="hidden"
    whileInView="visible"
    transition={{ duration, delay }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

export { Reveal, fadeDown };
