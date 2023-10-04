"use client";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaDribbble } from "react-icons/fa";
import Link from "next/link";
import { navLinks } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, footerVariants } from "@/utils/motion";

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="p-[15px] md:p-[25px] overflow-hidden"
    >
      <div className="relative section_padding bg-[#133474] h-fit sm:h-[80vh] flex flex-col justify-evenly rounded-lg sm:rounded-3xl text-white">
        <motion.div
          variants={staggerContainer(1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col gap-8 sm:flex-row justify-center sm:justify-between [&>*]:mb-8 [&>*]:sm:mb-0"
        >
          {/* ADDRESS */}
          <motion.div
            variants={fadeIn("right", "spring", 0.3, 0.75)}
            className="flex flex-col gap-4 text-[13px] sm:text-[16px] [&>*]:w-[90%]"
          >
            <h2 className="text-[20px] sm:text-3xl font-bold">
              fullstack3dSTUDIOS
            </h2>
            <p className="uppercase">Suite #BSH335</p>
            <p className="uppercase">444 Alaska Avenue</p>
            <p className="uppercase">Torrance, CA 90503 USA</p>
            <p>+18169193500</p>
            <p className="mb-0 uppercase">fullstack3dstudios@gmail.com</p>
          </motion.div>
          {/* ABOUT */} {/* For lg screens */}
          <motion.div
            variants={fadeIn("right", "spring", 0.4, 0.75)}
            className="hidden lg:block w-[100%] xl:w-[60%] text-justify text-[15px] sm:text-[18px]"
          >
            <span className="underline">Fullstack3D Studios</span> is a leading
            design agency specializing in 3D design, animation, graphics, and
            web development. We pride ourselves on creating visually captivating
            experiences that leave a lasting impression. Contact us today to
            bring your ideas to life!
          </motion.div>
          {/* LINKS */}
          <motion.div
            variants={fadeIn("right", "spring", 0.6, 0.75)}
            className="flex flex-col justify-between"
          >
            <div className="flex gap-4 items-center text-[30.97px] font-medium leading-[47.54px]">
              Links <HiOutlineArrowNarrowRight />
            </div>
            <ul className="text-[18px]">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.route}>{link.name}</Link>
                </li>
              ))}
              {/* <li>Services</li> */}
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 0.9, 0.75)}
          className="flex justify-center gap-4 [&>*]:h-[30px] [&>*]:w-[30px] mb-8 sm:mb-0"
        >
          <AiFillFacebook />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiFillLinkedin />
          <FaDribbble />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 1, 0.75)}
          className="text-center"
        >
          © 2023 <span className="underline">Fullstack3D Studios</span>. All
          rights reserved. | Privacy Policy | Terms of Service | Careers | Blog
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 1.4, 0.75)}
          className="absolute uppercase text-center left-[10%] -bottom-[120px] text-[190px] font-semibold text-white"
        >
          <div className="opacity-5">Fullstack3D</div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
