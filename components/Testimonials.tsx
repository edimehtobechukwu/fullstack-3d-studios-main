"use client";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { testimonials } from "@/constants";
import TestimonialCard from "../components/TestimonialCard";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, A11y, Autoplay, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CustomSlider = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* SLIDER HEAD */}
      <div className="flex justify-center items-center mb-[80px] section_padding">
        {/* Heading */}
        <motion.h1
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="capitalize text-[#171717] text-3xl sm:text-5xl font-semibold text-center"
        >
          What our{" "}
          <span className="sm:border-b-[7px] sm:border-b-[#ff3333]">
            clients
          </span>
          <span className="block sm:inline"> say about us</span>
        </motion.h1>
      </div>

      {/* SLIDER CONTAINER */}
      <motion.div variants={fadeIn("up", "spring", 0.5, 0.5)}>
        <Swiper
          modules={[Autoplay, Navigation, A11y]}
          spaceBetween={20}
          // slidesPerView={isSmallScreen ? 1 : 1.8}
          navigation
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          className="flex flex-row gap-[40px]"
        >
          {/* CONTENT */}
          {testimonials.map((testimonial, i) => (
            <SwiperSlide
              key={i}
              className="flex flex-col gap-[24px] max-lg:gap-[30px]"
            >
              <TestimonialCard index={i} testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default CustomSlider;
