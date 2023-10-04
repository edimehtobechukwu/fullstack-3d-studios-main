"use client";
import {
  Header,
  Stories,
  ShowReel,
  Services,
  Works,
  Benefits,
  Clients,
  Testimonials,
  Faqs,
} from "@/components";
import { quickVision } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />

      {/* QUICK-VISION SECTION */}
      <motion.section
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="section_padding h-[200px] lg:h-[50vh] flex justify-center items-center bg-[#171717]"
      >
        <motion.h1
          variants={textVariant(0.6)}
          className="text-[18px] sm:text-[20px] md:text-2xl lg:text-5xl text-center lg:text-start leading-[30px] lg:leading-[60px] text-white"
        >
          {quickVision}
        </motion.h1>
      </motion.section>

      <Stories />
      <ShowReel />
      <Services />
      <Works />
      <Benefits />
      <Clients />
      <Testimonials />
      <Faqs />
    </main>
  );
}
