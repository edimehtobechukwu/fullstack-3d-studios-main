"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { stories, storiesAvatars } from "@/constants";
import {
  staggerContainer,
  fadeIn,
  textVariant,
  slideIn,
  zoomIn,
} from "@/utils/motion";

const Stories = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section_margin_block section_padding_inline flex flex-wrap lg:flex-nowrap items-center relative"
    >
      <div className="w-[100%] lg:w-[60%] mb-8 lg:mb-0">
        <motion.h1
          variants={textVariant(0.2)}
          className="text-4xl text-[#171717] font-semibold lg:text-6xl leading-[40px] lg:leading-[70px] mb-[20px] lg:mb-[40px]"
        >
          Human stories that
          <span className="block">connect us all.</span>
        </motion.h1>

        {/* For sm, md screens */}
        <motion.p
          variants={fadeIn("right", "spring", 0.4, 0.6)}
          className="lg:hidden w-[100%] text-justify lg:text-start lg:w-[82%]"
        >
          {stories.storySmMd}
        </motion.p>

        {/* For lg screens */}
        <motion.p
          variants={fadeIn("right", "spring", 0.4, 0.6)}
          className="hidden lg:block w-[100%] text-justify lg:text-start lg:w-[82%]"
        >
          {stories.storyLg}
        </motion.p>
      </div>

      <div className="flex justify-center lg:justify-normal w-full lg:w-[40%] self-end gap-8 pb-2 [&>*]:w-[90px] [&>*]:sm:w-[120px] [&>*]:lg:w-[30%] [&>*]:h-[90px] [&>*]:sm:h-[120px] [&>*]:lg:h-[30%]">
        {storiesAvatars.map((avatar, index) => (
          <motion.div
            variants={fadeIn(
              "right",
              "spring",
              avatar.avatarAnimateDelay,
              0.75
            )}
          >
            <Image
              height={218}
              width={218}
              src={`/${avatar.img}.svg`}
              alt={avatar.img}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={fadeIn("left", "spring", 0, 0.75)}
        className="absolute h-[150px] md:h-[190px] lg:h-[300px] w-[100px] md:w-[190px] lg:w-[300px] right-[-2%] top-[-140px] lg:top-[-250px]"
      >
        <Image
          height={250}
          width={250}
          src="/squiggle-2.png"
          alt="squiggle icon"
          className="h-full w-full"
        />
      </motion.div>
    </motion.section>
  );
};

export default Stories;
