"use client";
import { useState } from "react";
import Image from "next/image";
import { ServiceProps } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";

interface ServiceComponentProps {
  data: ServiceProps;
  index: number;
}

const Service = ({ data, index }: ServiceComponentProps) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { title, serviceLink, desc, homeUrl } = data;
  return (
    <motion.article
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      key={index}
      className="h-[350px] md:h-[450px] w-[100%] sm:w-[90%] lg:w-[46%] relative overflow-hidden rounded-2xl transition-all"
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      <Image
        width={1920}
        height={1280}
        src={homeUrl}
        alt={title}
        className={`${
          showOverlay && "animate_zoom_in"
        } w-full h-full object-cover`}
      />
      <div className="bg-black opacity-40 w-full h-full absolute top-0" />
      <div className="absolute h-full top-0 p-6 flex flex-col justify-end">
        {/* Title */}
        <motion.h1
          variants={fadeIn("up", "spring", 0.9, 0.75)}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 hover:underline"
        >
          <Link href={`/services/${serviceLink}`}>{title}</Link>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeIn("right", "spring", 1.1, 0.75)}
          className="text-white text-[17px] sm:text-[18px] lg:text-start w-[100%] lg:w-[90%]"
        >
          {desc}
        </motion.p>
      </div>
    </motion.article>
  );
};

export default Service;
