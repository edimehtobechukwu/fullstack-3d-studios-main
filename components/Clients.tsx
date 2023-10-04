"use client";
import Image from "next/image";
import { clientLogos } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "@/utils/motion";

const Clients = () => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section_margin_block section_padding_inline"
    >
      <motion.h1
        variants={textVariant(0.3)}
        className="text-[#171717] text-3xl sm:text-5xl font-semibold text-center mb-7  md:mb-12 lg:mb-24"
      >
        Clients
      </motion.h1>

      <motion.div
        variants={fadeIn("up", "spring", 0.6, 0.75)}
        className="flex flex-wrap gap-7 justify-evenly"
      >
        {clientLogos.map((client, index) => (
          <div
            key={index}
            className="w-[300px] h-[150px] flex justify-center items-center"
          >
            <Image
              width={680}
              height={124}
              src={client.url}
              alt={`${client.company} logo`}
              className="w-[80%] object-cover"
            />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Clients;
