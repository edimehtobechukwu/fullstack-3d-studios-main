"use client";
import { services } from "@/constants";
import { Service } from "@/components";
import { motion } from "framer-motion";
import {
  staggerContainer,
  textContainer,
  textVariant2,
  fadeIn,
} from "@/utils/motion";

const Services = () => {
  return (
    <section>
      {/* Backdrop */}
      <motion.div
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="w-[100%] relative rounded-3xl services-img"
      >
        <div className="bg-black z-10 opacity-90 w-full h-full absolute top-0" />

        <motion.div className="relative z-20 section_padding">
          <motion.h4 variants={textContainer} className="uppercase text-white">
            {Array.from("services").map((letter, index) => (
              <motion.span variants={textVariant2} key={index}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h4>
          <div className="text-white flex lg:justify-between items-center mb-8 lg:mb-12">
            <motion.h1
              variants={fadeIn("up", "spring", 0.2, 0.75)}
              className="text-4xl lg:text-6xl font-semibold"
            >
              Our Fundamental <span className="lg:block">Expertise</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("right", "spring", 0.4, 0.75)}
              className="hidden lg:block w-[40%] text-[20px]"
            >
              With a deep understanding of cutting-edge technologies, market
              trends and user behaviour. We craft digital products that are
              built to scale.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("up", "spring", 0.6, 0.75)}
            className="flex gap-14 sm:justify-center lg:justify-between flex-wrap"
          >
            {services.map((service, i) => (
              <Service data={service} index={i} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
