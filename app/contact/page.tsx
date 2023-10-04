"use client";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { CustomButton, DynamicMap } from "@/components";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeIn,
  textVariant2,
  textContainer,
} from "@/utils/motion";

const ContactPage = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <motion.section
        variants={staggerContainer(0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="h-[88vh] mt-[60px] sm:mt-[12vh] overflow-hidden text-black text-center md:text-start section_padding flex flex-col justify-center md:justify-start relative"
      >
        <motion.h1
          variants={textContainer}
          className="text-5xl sm:text-[64.08px] font-bold sm:leading-[83.62px] mb-4 md:mb-8 text-[#133474]"
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
        </motion.h1>
        <div className="flex items-center">
          <motion.div
            variants={fadeIn("right", "string", 0.2, 0.5)}
            className="hidden sm:block w-[70px] h-[1px] bg-black mr-8"
          />
          <motion.p
            variants={fadeIn("right", "string", 0.4, 0.5)}
            className="text-[16px] sm:text-[20px]"
          >
            <span className="sm:hidden">&mdash;</span> From strategy to
            execution, Fullstack3D is here to help you achieve your branding
            goals.
          </motion.p>
        </div>
        <motion.h3
          variants={fadeIn("up", "string", 0.5, 0.5)}
          className="text-2xl sm:text-4xl font-semibold mt-8"
        >
          You are one step closer to <br /> building your perfect product.
        </motion.h3>
        <motion.div
          variants={fadeIn("up", "string", 0.6, 0.5)}
          className="uppercase flex items-center absolute bottom-4 right-[20px] md:right-[30px] lg:right-[65px] text-[14px] sm:text-[20px]"
        >
          <div className="hidden sm:block w-[30px] h-[1px] bg-black mr-5" />
          <span className="sm:hidden">&mdash; </span> <p>get in touch</p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "string", 0.8, 0.5)}
          className="hidden md:block w-[300px] h-[600px] absolute md:bottom-[10%] lg:top-[2%] right-0"
        >
          <Image
            width={522}
            height={1028}
            src="/squiggle-4.png"
            alt="squiggle 4"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* SUB-CONTACT INFO */}
      <motion.section
        variants={staggerContainer(0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="h-[350px] md:h-[550px] text-white relative"
      >
        <div className="w-full h-full bg-black opacity-50 absolute z-10" />
        <Image
          width={3936}
          height={2624}
          src="/3bcfea077431034472624d410f48194e.jpg"
          alt="contact background"
          className="w-full h-full object-cover"
        />
        <motion.div
          variants={fadeIn("up", "string", 0.2, 0.5)}
          className="hidden h-[200px] w-[280px] md:h-[350px] md:w-[400px] bg-[#133474] absolute z-20 top-[-10%] left-[20px] md:left-[30px] lg:left-[65px] p-4 sm:p-8 sm:flex flex-col justify-between"
        >
          <p className="uppercase text-[13px] md:text-[17px]">
            contact information
          </p>
          <div className="text-[13px] md:text-xl">
            <h1 className="text-[15px] md:text-3xl font-semibold mb-3">
              Fullstack3D Studios
            </h1>
            <p className="uppercase">Suite #BSH335</p>
            <p className="uppercase">444 Alaska Avenue</p>
            <p className="uppercase">Torrance, CA 90503 USA</p>
            <p>+18169193500</p>
            <p className="mb-0 uppercase">fullstack3dstudios@gmail.com</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("down", "string", 0.4, 0.5)}
          className="h-[120px] md:h-[250px] w-[250px] md:w-[550px] bg-[#133474] absolute z-20 bottom-[-15%] md:bottom-[-25%] right-[20px] md:right-[30px] lg:right-[65px] p-4 sm:p-8 flex flex-col gap-2 md:gap-8"
        >
          <p className="ml-auto text-[13px] md:text-xl font-semibold flex items-center">
            <MdLocationOn /> CA, USA.
          </p>
          <p className="text-[12px] md:text-3xl">
            Located in beautiful and creative city delivering quality products
            that satisfy our customer's needs.
          </p>
        </motion.div>
      </motion.section>

      {/* FORM & MAP SECTION */}
      <motion.section
        variants={staggerContainer(0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-black section_padding flex items-center md:justify-center lg:justify-between flex-wrap"
      >
        <div className="w-[100%] md:w-[80%] lg:w-[45%] mt-[70px] md:mt-[180px] lg:mt-0">
          <motion.div
            variants={fadeIn("up", "string", 0.2, 0.5)}
            className="flex items-center"
          >
            <div className="w-[50px] h-[1px] bg-black mr-6" />
            <h4 className="uppercase text-[#ff3333]">send a message</h4>
          </motion.div>
          <motion.h1
            variants={fadeIn("up", "string", 0.4, 0.5)}
            className="text-3xl md:text-[55.08px] font-semibold md:leading-[63.62px] mb-8"
          >
            Have a project?
            <br />
            Let’s discuss!{" "}
          </motion.h1>
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-full h-fit flex justify-center"
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
                <label htmlFor="country">Country</label>
                <select name="country" className="input_style" id="country">
                  <option value=""></option>
                  <option value="">Nigeria</option>
                  <option value="">Canada</option>
                  <option value="">Ghana</option>
                </select>
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
        </div>

        <motion.div
          variants={fadeIn("right", "string", 0.7, 0.5)}
          className="bg-[#1e1e1e] w-[100%] lg:w-[45%] my-12 h-[640px] self-end relative"
        >
          {/* <Image
            width={1920}
            height={915}
            src="/map.png"
            alt="contact-map"
            className="w-full h-full object-cover"
          />

          <Image
            width={96}
            height={98}
            src="/location-icon.svg"
            alt="contact-map"
            className="absolute top-[30%] left-[35%] w-[60px] h-[58px]"
          /> */}

          <DynamicMap />
        </motion.div>
      </motion.section>
    </main>
  );
};

export default ContactPage;
