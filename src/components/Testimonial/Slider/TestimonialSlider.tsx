"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SingleTestimonial from "../SingleTestimonial";
import { Reveal } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Testimonial } from "@/types/testimonial";

export interface TestimonialSliderProps {
  /** Testimonials rendered as slides. */
  items: Testimonial[];
  /** Slides shown at once on desktop. Defaults to 2 (1 on mobile). */
  slidesPerView?: number;
  className?: string;
  /** Extra classes applied to each testimonial card inside the slider. */
  classNameCard?: string;
}

/**
 * Autoplaying testimonial carousel based on Swiper, with clickable pagination.
 *
 * @example
 * <TestimonialSlider items={testimonials} slidesPerView={2} />
 */
const TestimonialSlider = ({
  items,
  slidesPerView = 2,
  className,
  classNameCard,
}: TestimonialSliderProps) => (
  <section>
    <Reveal className={cn(className)}>
      <div className="swiper mb-20 pb-22.5">
        <Swiper
          spaceBetween={50}
          slidesPerView={slidesPerView}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView },
          }}
        >
          {items.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <SingleTestimonial testimonial={testimonial} className={classNameCard} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Reveal>
  </section>
);

export default TestimonialSlider;
