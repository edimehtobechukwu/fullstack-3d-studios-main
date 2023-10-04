"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { homepageWorks } from "@/constants";
import { Work, CustomButton } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";

const Works = () => {
  const { push } = useRouter();
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="section_margin_block section_padding_inline w-[100%] flex flex-col relative"
    >
      <motion.h1
        variants={fadeIn("up", "spring", 0.3, 0.5)}
        className="heading_hero text-[#171717] text-center lg:text-start font-semibold"
      >
        Here’s some of{" "}
        <span className="border-b-[7px] border-b-[#133474] inline-block">
          our work.
        </span>
      </motion.h1>

      <motion.div
        variants={fadeIn("left", "spring", 0, 0.5)}
        className="hidden lg:block absolute right-[-5%] top-[-20%] w-[350px] h-fit"
      >
        <Image
          height={350}
          width={350}
          src="/squiggle-4.png"
          alt="squiggle icon"
          className="w-full object-cover"
        />
      </motion.div>
      <div className="w-[100%] z-20">
        {homepageWorks.map((content, i) => (
          <Work data={content} index={i} />
        ))}
      </div>

      <CustomButton
        title="See all our work"
        animation={fadeIn("up", "spring", 0.9, 0.6)}
        handleClick={() => push("/our-work")}
        containerStyles="bg-[#ff3333] h-[50px] md:h-[70px] mt-[30px] md:mt-[90px] py-[3px] px-4 md:py-[16px] md:px-[32px] self-center flex justify-between items-center text-[15px] md:text-[18px] gap-4"
        textStyles="uppercase text-white"
        rightIcon={true}
      />
    </motion.section>
  );
};

export default Works;
