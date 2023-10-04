"use client";
import { useState, useEffect } from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaDribbble } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { heroContent } from "@/constants";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

const Header = () => {
  const { mainContent, timerContent } = heroContent;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    /* Start the timer when the component mounts */

    console.log(mainContent[index].mediaLength / 1000);

    // MainContent Timer based of the medialength
    const mainContentTimer = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex == 3 ? (prevIndex = 0) : prevIndex + 1
      );
    }, mainContent[index].mediaLength);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(mainContentTimer);
    };
  }, [index]);

  return (
    <header className="hero relative h-[100svh] font-thin flex flex-col justify-center">
      <video
        src={mainContent[index].media}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      ></video>

      <motion.div
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="absolute top-0 w-full h-full flex items-center"
      >
        <div className="absolute top-0 w-full h-full bg-black opacity-70" />
        {/* Links, discover */}
        <div className="hidden lg:block h-full w-[90px] z-10">
          <motion.div
            variants={fadeIn("down", "spring", 0.5, 0.75)}
            className="w-full h-[70%] flex flex-col justify-center items-center bg-white [&>*]:text-[#272827] [&>*]:hover:text-black [&>*]:w-[30px] [&>*]:h-[40px] [&>*]:mb-6 last:mb-0 [&>*]:cursor-pointer"
          >
            <AiFillFacebook />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <AiFillLinkedin />
            <FaDribbble />
          </motion.div>
          <motion.div
            variants={fadeIn("down", "spring", 1.4, 1)}
            className="text-white h-[30%] flex flex-col items-center justify-around"
          >
            <div className="-rotate-90 w-[120px] text-[18px] flex items-center hover:last:underline">
              <HiArrowLeft className="mr-[10px]" />
              <div>DISCOVER</div>
            </div>
          </motion.div>
        </div>

        <div className="w-[90%] lg:w-[80%] absolute bottom-[4%] lg:left-[180px] z-10 ml-5 left-[15px] mr-5 md:left-[30px] mt-5">
          {/* Main Hero Section  */}
          <div className=" text-white w-[100%] lg:w-[80%] mb-[120px] lg:mb-[90px]">
            <motion.h1
              variants={fadeIn("down", "spring", 0.7, 0.75)}
              className="text-4xl sm:text-[37px] font-bold md:text-[45px] lg:text-[60px] leading-[40px] lg:leading-[70px] mb-[40px]"
            >
              {mainContent[index].heading}
            </motion.h1>
            <motion.p
              variants={fadeIn("down", "spring", 0.7, 0.75)}
              className="text-2xl sm:text-3xl"
            >
              {mainContent[index].sub}
            </motion.p>
          </div>

          {/* Sub Section (Timer) for tab & big screens */}
          <div className="hidden sm:flex sm:flex-wrap justify-between gap-8">
            {timerContent.map((content, i) => (
              <motion.div
                variants={fadeIn(
                  "right",
                  "spring",
                  content.animationDelay,
                  0.75
                )}
                key={i}
                className="text-white w-[45%] lg:w-[20%]"
              >
                <div className="w-[100%] mb-2">
                  {index == i && (
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: mainContent[index].mediaLength / 1000,
                      }}
                      className={`w-[0%] h-[2px] bg-white`}
                    />
                  )}
                  <div className="w-full h-[0.5px] bg-white" />
                </div>
                <div>
                  <h3 className="uppercase text-[13px] lg:text-[15px] font-semibold">
                    {content.heading}
                  </h3>
                  {/* <p className="text-[15px] mt-4 lg:text-[20px] font-semibold">
                    {content.sub}
                  </p> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sub Section (Timer) for only mobile devices */}
          <div className="sm:hidden">
            <motion.div
              variants={fadeIn("right", "spring", 0.9, 0.75)}
              className="text-white w-[90%]"
            >
              <div className="w-[100%] mb-2">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: mainContent[index].mediaLength / 1000,
                    repeat: Infinity,
                  }}
                  className={`w-[0%] h-[2px] bg-white`}
                />
                <div className="w-full h-[0.5px] bg-white" />
              </div>
              <div>
                <h3 className="uppercase text-[15px] sm:text-[13px] lg:text-[15px] font-semibold">
                  {timerContent[index].heading}
                </h3>
                {/* <p className="text-[18px] sm:text-[15px] lg:text-[20px] ">
                  {timerContent[index].sub}
                </p> */}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
