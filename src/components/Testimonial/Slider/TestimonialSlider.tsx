"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import SingleTestimonial from "@/components/Testimonial/SingleTestimonial";
import { Testimonial } from "@/types/testimonial";
import { cn } from "@/lib/utils";

const TestimonialSlider = ({ data, slidesPerView, className, classNameCard } : { data : Testimonial[],  slidesPerView?: number, className?: string, classNameCard?: string } ) => {
  return (
    <>
      <section>
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
          className={cn("animate_top",className)}
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper mb-20 pb-22.5">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={slidesPerView ? slidesPerView : 2}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {data.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SingleTestimonial review={review} className={classNameCard}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default TestimonialSlider;
