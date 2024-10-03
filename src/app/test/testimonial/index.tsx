
import TestimonialSlider from "@/components/Testimonial/Slider/TestimonialSlider";
import React from "react";
import { testimonialData } from "./testimonialData";
import TestimonialGrid from "@/components/Testimonial/Grid/TestimonialGrid";
export default function Testimonial() {


    return (
        <>
            <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
                <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
                    <TestimonialSlider data={testimonialData} />

                    <TestimonialGrid data={testimonialData} />
                </div>
            </section>
        </>
    );
}


