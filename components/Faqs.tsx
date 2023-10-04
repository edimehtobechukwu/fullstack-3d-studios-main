"use client";
import { faqs } from "@/constants";
import { CustomFaq } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";

const Faqs = () => {
  return (
    <section className="section_margin_block p-[20px] md:p-[50px] lg:p-[100px] flex justify-center text-white bg-black">
      <motion.div
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-[100%] lg:w-[80%]"
      >
        <motion.h1
          variants={textVariant(0.2)}
          className="text-3xl lg:text-7xl font-semibold capitalize mb-10"
        >
          Frequently Asked <span className="block">Questions</span>
        </motion.h1>

        <div className="[&>*]:mb-8">
          {faqs.map((faq, i) => (
            <CustomFaq faq={faq} key={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Faqs;
