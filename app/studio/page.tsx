"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";

const StudioPage = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <motion.section
        variants={staggerContainer(0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative h-[88vh] mt-[12vh] overflow-hidden"
      >
        <div className="absolute w-full h-full text-white flex flex-col justify-center items-center">
          <div className="z-20 w-[60%] text-center">
            <motion.h1
              variants={fadeIn("down", "spring", 0.2, 0.75)}
              className="text-8xl uppercase font-semibold"
            >
              FS3D Studio
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "spring", 0.4, 0.75)}
              className="text-[20px] mt-6"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
              expedita cum ea nostrum dolorum velit sit, accusantium temporibus
              assumenda, architecto ipsa et harum nihil voluptatum quia
              perspiciatis eaque nobis recusandae?
            </motion.p>
          </div>
          {/* <motion.div
            variants={fadeIn("up", "spring", 0.8, 0.75)}
            className="absolute bottom-5 z-20 flex gap-4 [&>*]:cursor-pointer"
          >
            <div
              onClick={() => setCurrentSlide(0)}
              className={`w-[30px] h-[6px] rounded-sm ${
                currentSlide == 0 ? "bg-[#ff3333]" : "bg-white"
              }`}
            />
            <div
              onClick={() => setCurrentSlide(1)}
              className={`w-[30px] h-[6px] rounded-sm ${
                currentSlide == 1 ? "bg-[#ff3333]" : "bg-white"
              }`}
            />
            <div
              onClick={() => setCurrentSlide(2)}
              className={`w-[30px] h-[6px] rounded-sm ${
                currentSlide == 2 ? "bg-[#ff3333]" : "bg-white"
              }`}
            />
          </motion.div> */}
          <div className="absolute z-10 top-0 w-full h-full bg-black opacity-90" />
        </div>

        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 2, delay: 1, ease: "easeIn" }}
          // whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="w-full h-full"
        >
          <Image
            height={3000}
            width={2000}
            src={`/hfh-e3241595385.jpg`}
            alt="studio images"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default StudioPage;
