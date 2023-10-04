"use client";
import Image from "next/image";
import { PiSealCheckFill } from "react-icons/pi";
import { benefits } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";

const Benefits = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="h-[500px] lg:h-[80vh] hidden sm:flex"
    >
      {/* Left Content */}
      <motion.div
        variants={fadeIn("right", "spring", 0.2, 0.75)}
        className="hidden lg:block relative w-[55%]"
      >
        {/* Background Image Backdrop */}
        <div className="absolute w-full h-full top-0">
          <Image
            width={5647}
            height={3770}
            src="/9bd10657643aaa345942jigoa177cd181b.jpg"
            alt="process bg"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full bg-black opacity-40 absolute z-10 top-0" />
        </div>

        {/* lg text content */}
        <div className="absolute z-20 w-full h-full text-white flex flex-col items-center justify-center">
          <div>
            <motion.h2
              variants={fadeIn("up", "spring", 0.6, 0.75)}
              className="text-4xl mb-6 font-semibold"
            >
              Dedicated to the success{" "}
              <span className="block">of your digital product.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "spring", 0.7, 0.75)}
              className="text-2xl mb-6"
            >
              We create modern and customized websites for
              <span className="block">
                your business growth. Lorem ipsum dolor sit amet.
              </span>
            </motion.p>

            <div>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("right", "spring", 0.9, 0.93)}
                  className="flex gap-4 items-center text-[18px] my-3"
                >
                  <PiSealCheckFill />
                  {benefit}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        variants={fadeIn("right", "spring", 0.4, 0.75)}
        className="w-[100%] h-full lg:w-[45%] relative"
      >
        <Image
          width={3000}
          height={2000}
          src="/hfh-e3241595385.jpg"
          alt="process image"
          className="w-full h-full object-cover"
        />

        <div className="lg:hidden w-full h-full bg-black opacity-70 absolute z-10 top-0" />

        {/* sm, md text content */}
        <div className="lg:hidden absolute w-full top-0 z-20 px-[24px] md:px-[60px] h-full text-white flex flex-col justify-center">
          <h2 className="text-3xl mb-4 font-semibold">
            Dedicated to the success{" "}
            <span className="block">of your digital product.</span>
          </h2>
          <p className="text-[18px] mb-6">
            We create modern and customized websites for your business growth.
            <span className="md:block">Lorem ipsum dolor sit amet.</span>
          </p>

          <div>
            {benefits.map((benefit) => (
              <div className="flex gap-3 items-center my-2">
                <PiSealCheckFill size={20} />
                <p className="text-[16px]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Benefits;
