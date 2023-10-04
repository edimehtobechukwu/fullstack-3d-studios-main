"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { mainWorkContent, studioImages } from "@/constants";
import { Projects } from "@/components";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";

const WorkPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < 4) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  useEffect(() => {
    /* Start the slider timer when the component mounts */
    const sliderTimer = setInterval(() => {
      nextSlide();
    }, 7000);

    /* Clean up the slider timer when the component unmounts*/
    return () => {
      clearInterval(sliderTimer);
    };
  }, [currentSlide]);

  return (
    <main>
      {/* HERO SECTION */}
      <motion.section
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative h-[88vh] mt-[60px] sm:mt-[12vh] overflow-hidden"
      >
        <div className="absolute w-full h-full text-white flex flex-col justify-center items-center">
          <div className="z-20 w-[93%] md:mt-[64px] lg:mt-0 lg:w-[60%] text-center">
            <motion.h1
              variants={fadeIn("down", "spring", 0.4, 0.75)}
              className="text-[30px] md:text-[80px] lg:text-9xl font-normal leading-[150px] lg:leading-[224px] uppercase"
            >
              Our{" "}
              <span className="underline decoration-[8px] md:decoration-[16px] decoration-rose-400">
                Work
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "spring", 0.7, 0.75)}
              className="text-[14px] md:text-[18px] 2xl:text-[22px]"
            >
              Our work touches the lives of millions of people every day. Our
              digital footprint and user-centric designs can be found in many
              interfaces – from Fortune 500 corporations, and innovative
              startups to the world’s leading organizations – we design and
              build accessible and usable design language systems that people
              love to use.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("up", "spring", 1, 0.75)}
            className="absolute bottom-5 z-20"
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{
                y: [0, -30, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="text-white mt-10"
            >
              <IoIosArrowDown
                size={60}
                className="drop-shadow-lg cursor-pointer"
              />
            </motion.div>
          </motion.div>
          <div className="absolute z-10 top-0 w-full h-full bg-black opacity-70" />
        </div>

        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          // whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="w-full h-full"
        >
          <Image
            height={5120}
            width={2880}
            src={studioImages[currentSlide]}
            alt="studio images"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* FEATURED PROJECTS (MAIN) */}
      <section className="md:px-[30px] lg:px-[65px] mb-[120px] relative">
        <Image
          height={470}
          width={470}
          src="/squiggle-4.png"
          alt="squiggle icon"
          className="absolute z-10 right-0 -bottom-[200px] lg:-bottom-[390px]"
        />

        <div
          id="main-work-content"
          className="bg-indigo-50 p-[20px] md:p-[50px] flex flex-col items-center"
        >
          {mainWorkContent.map((work, index) => (
            <motion.div
              variants={staggerContainer(1, 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              key={index}
              className="h-[500px] md:h-[700px] lg:h-[550px] 3xl:h-[650px] max-w-[1600px] relative z-20 flex flex-col lg:flex-row mb-[55px] last-of-type:mb-0"
            >
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    variants={fadeIn("left", "spring", 0.4, 0.75)}
                    className="w-[100%] lg:w-[50%] h-[250px] md:h-[450px] lg:h-auto bg-white flex flex-col justify-center p-[20px] lg:p-[40px]"
                  >
                    <motion.h2
                      variants={fadeIn("up", "spring", 0.8, 0.75)}
                      className="text-[18px] md:text-4xl lg:text-5xl font-semibold mb-3 lg:mb-8"
                    >
                      <Link
                        href={`/our-work/${work.id}`}
                        className="hover:underline"
                      >
                        {work.name}
                      </Link>
                    </motion.h2>
                    <motion.p
                      variants={fadeIn("up", "spring", 1, 0.75)}
                      className="text-[12px] md:text-[17px] lg:text-xl 2xl:text-[24px]"
                    >
                      {work.desc}
                    </motion.p>
                  </motion.div>

                  {/* IMAGE URL */}
                  <motion.div
                    variants={fadeIn("left", "spring", 0.6, 0.75)}
                    className="w-[100%] lg:w-[50%] h-[250px] md:h-[450px] lg:h-full bg-zinc-300"
                  >
                    <Image
                      height={1080}
                      width={1920}
                      src={work.url}
                      alt={work.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  {/* IMAGE URL */}
                  <motion.div
                    variants={fadeIn("right", "spring", 0.6, 0.75)}
                    className="w-[100%] lg:w-[50%] h-[250px] md:h-[450px] lg:h-full bg-zinc-300"
                  >
                    <Image
                      height={1024}
                      width={1920}
                      src={work.url}
                      alt={work.name}
                      className="w-full h-full"
                    />
                  </motion.div>
                  <motion.div
                    variants={fadeIn("right", "spring", 0.4, 0.75)}
                    className="w-[100%] lg:w-[50%] h-[250px] md:h-[450px] lg:h-auto bg-white flex flex-col justify-center p-[20px] lg:p-[40px]"
                  >
                    <motion.h2
                      variants={fadeIn("up", "spring", 0.8, 0.75)}
                      className="text-[18px] md:text-4xl lg:text-5xl font-semibold mb-3 lg:mb-8"
                    >
                      <Link
                        href={`/our-work/${work.id}`}
                        className="hover:underline"
                      >
                        {work.name}
                      </Link>
                    </motion.h2>
                    <motion.p
                      variants={fadeIn("up", "spring", 1, 0.75)}
                      className="text-[12px] md:text-[17px] lg:text-xl 2xl:text-[24px]"
                    >
                      {work.desc}
                    </motion.p>
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS (MORE) */}
      <Projects title="More Projects" />
    </main>
  );
};

export default WorkPage;
