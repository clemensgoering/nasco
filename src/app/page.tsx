import React from "react";
import { Metadata } from "next";
import Pricing from "./test/pricing";
import Sections from "./test/section";
import Rating from "./test/rating";
import Card from "./test/card";
import Code from "./test/showcode";
import HeroSection from "./test/hero";
import Brands from "./test/brand";
import Testimonial from "./test/testimonial";

export const metadata: Metadata = {
    title: "Home - Nasco",
    description: "Testing Components",
    // other metadata
};

export default function Home() {
    return (
        <main>
            <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
                {<HeroSection />} {/** Contains HeroSimple and HeroImage */}
                {<Brands />}
                {<Sections />}
                {<Pricing />}
                {<Rating />}
                {<Card />}
                {<Code />}
                {<Testimonial/>}
            </section>
        </main>
    );
}


