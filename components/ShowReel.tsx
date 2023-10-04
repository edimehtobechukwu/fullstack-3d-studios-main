"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, showReelText } from "@/utils/motion";

const ShowReel = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="section_margin_block section_padding_inline relative w-[100%] flex justify-end h-fit lg:h-[85vh]"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.2, 0.75)}
        className="absolute left-0 md:top-[-10px] lg:top-[-80px] hidden md:block w-[215px] lg:w-[350px] h-[350px] lg:h-[590px]"
      >
        <Image
          height={415}
          width={415}
          src="/squiggle-3.png"
          alt="squiggle icon"
          className="w-full h-full"
        />
      </motion.div>

      <div className="flex relative justify-end w-[100%] md:w-[80%] h-[200px] md:h-[85%]">
        <motion.div
          variants={fadeIn("left", "spring", 0.6, 0.75)}
          className="hidden md:flex flex-col w-[60px] uppercase sticky left-[24%]"
        >
          <div className="w-0 h-[40%] border border-rose-500" />
          <motion.div
            variants={showReelText("spring", 0.9, 1)}
            className="text-3xl lg:text-4xl w-[260px] absolute top-[40%] left-[-220%] text-center bg-white z-10 text-rose-500 rotate-[-90deg]"
          >
            show reel
          </motion.div>
          <div className="w-[0px] h-[60%] border border-rose-500" />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.4, 0.75)}
          className="h-full w-[100%] md:w-[80%]"
        >
          <Image
            height={700}
            width={800}
            src="/reel-image.png"
            alt="squiggle icon"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ShowReel;
