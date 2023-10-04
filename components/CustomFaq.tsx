"use client";
import { FaqProps } from "@/types";
import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { PiMinusCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

interface CustomFaqProps {
  key: number;
  faq: FaqProps;
}

const CustomFaq = ({ faq, key }: CustomFaqProps) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <motion.article
      variants={fadeIn("up", "spring", faq.animateDelay, 0.5)}
      key={key}
      className={`border-b-[1px]  py-4 relative transition-all overflow-hidden ${
        isActive ? "h-full border-b-[#ff3333]" : "h-[70px] border-b-white"
      }`}
    >
      <div className="flex justify-between items-center pb-3">
        <p
          className={`text-[15px] lg:text-[24px] ${
            isActive && "text-[#ff3333]"
          }`}
        >
          {faq.question}
        </p>
        {isActive ? (
          <PiMinusCircle
            size={40}
            onClick={() => setIsActive(false)}
            color="#ff3333"
            className="cursor-pointer transition-all"
          />
        ) : (
          <IoAddCircleOutline
            size={40}
            onClick={() => setIsActive(true)}
            className="cursor-pointer transition-all"
          />
        )}
      </div>
      <p className="text-[14px] lg:text-[20px] w-[97%] lg:w-[80%]">
        {faq.answer}
      </p>
    </motion.article>
  );
};

export default CustomFaq;
