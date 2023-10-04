"use client";
import { BsArrowUpRight } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import { WorkProps } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";

interface WorkComponentProps {
  data: WorkProps;
  index: number;
}

const Work = ({ data, index }: WorkComponentProps) => {
  const { id, name, baseUrl, hashtags } = data;
  const [showArr, setShowArr] = useState(false);
  return (
    <motion.div
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      key={index}
      className="w-full h-fit lg:h-[500px] flex flex-col lg:flex-row items-center lg:items-stretch gap-[50px] border-b-[2px] py-8 mb-8 last-of-type:mb-0"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.3, 0.75)}
        className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[40%] h-[250px] sm:h-[400px] lg:h-full "
      >
        <Image
          height={400}
          width={400}
          src={baseUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[60%] flex flex-col justify-between">
        <div>
          <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
            <Link
              href={`/our-work/${id}`}
              onMouseEnter={() => setShowArr(true)}
              onMouseLeave={() => setShowArr(false)}
              className="text-[#171717] text-3xl md:text-5xl w-fit font-semibold mb-4 flex items-center gap-2 hover:underline hover:text-[31px] hover:lg:text-[49px] "
            >
              {name}

              {showArr && (
                <BsArrowUpRight size={40} className="font-semibold" />
              )}
            </Link>
          </motion.div>
          <motion.p
            variants={fadeIn("right", "spring", 0.6, 0.75)}
            className="text-[18px] md:text-xl w-[100%] lg:w-[80%] mb-4 lg:mb-0"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ex perspiciatis molestiae corrupti magnam quod distinctio
            accusantium nobis! Adipisci minima dolorem laborum voluptas
            voluptate suscipit, vero maxime consectetur obcaecati blanditiis?
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("right", "spring", 0.7, 0.75)}
          className="flex gap-3 flex-wrap"
        >
          {hashtags.map((tag, i) => (
            <div
              key={i}
              className="border-[2px] border-[#393939] rounded-full py-2 px-4 uppercase text-[13px] lg:text-[16px] hover:bg-[#393939] hover:text-white"
            >
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Work;
