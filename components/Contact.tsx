"use client";
import React from "react";
import CustomButton from "./CustomButton";
import { motion } from "framer-motion";
import {
  staggerContainer,
  textContainer,
  textVariant2,
  fadeIn,
} from "@/utils/motion";

const Contact = () => {
  /* CONTACT SECTION */
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section_margin_block section_padding bg-[#fcfcf] flex items-center flex-col lg:flex-row lg:justify-between"
    >
      <div className="w-[90%] lg:w-[40%]">
        <motion.h4
          variants={textContainer}
          className="text-4xl text-center lg:text-start font-semibold mb-10 text-[#133474]"
        >
          {Array.from("Contact us").map((letter, index) => {
            return (
              <motion.span
                variants={textVariant2}
                className={`${letter === "u" && "text-[#ff3333]"} ${
                  letter === "s" && "text-[#ff3333]"
                }`}
                key={index}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            );
          })}
        </motion.h4>
        <motion.h2
          variants={fadeIn("up", "spring", 0, 0.75)}
          className="hidden lg:block sm:text-8xl sm:font-medium sm:mb-7"
        >
          We're here
          <br /> to help
        </motion.h2>
        <motion.p
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          className="hidden lg:block sm:text-[20px]"
        >
          From strategy to execution, we're here to <br /> help you achieve your
          branding goals.
        </motion.p>
      </div>
      <motion.div
        variants={fadeIn("right", "spring", 0.8, 0.75)}
        className="w-[100%] lg:w-[45%] h-fit flex justify-center"
      >
        <form className="w-full lg:[90%] flex flex-col lg:block p-4 sm:p-8 border-[#133474] text-[18px] border-[1px] [&>*]:mb-6">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input className="input_style" type="text" name="name" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input className="input_style" type="text" name="email" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              className="input_style"
              name="message"
              id=""
              cols={2}
              rows={2}
            ></textarea>
          </div>
          <div className="flex gap-4 items-center">
            <input type="checkbox" name="newletter" />
            <p className="text-[14px] sm:text-[18px]">
              I would like to receive newsletters.
            </p>
          </div>
          <CustomButton
            containerStyles="bg-[#ff3333] self-center py-[10px] px-[60px] sm:py-[20px] sm:w-[80%] lg:w-fit lg:py-[16px] lg:px-[82px]"
            textStyles="text-white"
            title="Submit"
          />
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
