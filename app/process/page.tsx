"use client";
import { CustomButton } from "@/components";
import { processes } from "@/constants";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, zoomIn } from "@/utils/motion";

const ProcessPage = () => {
  const { push } = useRouter();
  return (
    <main>
      <section className="relative h-[50%] lg:h-[88vh] mt-[60px] sm:mt-[12vh] overflow-hidden">
        {/* Video for tabs */}
        <video
          src="/2270-4359-83ee-838300e7b8c1.mp4"
          className="hidden sm:block w-full h-fit object-cover"
          autoPlay
          loop
          muted
        ></video>

        {/* Image for mobile */}
        <video
          src="/2270-4359-83ee-838300e7b8c1.mp4"
          className=" sm:hidden w-full h-fit object-contain sm:object-cover"
        ></video>
        <div className="absolute top-0 z-10 w-full h-full bg-[#091b2c] opacity-40" />
        <div className="absolute top-0 z-20 w-full h-full flex justify-center items-center">
          <h1 className="text-white text-[30px] md:text-[80px] lg:text-[140px] font-black leading-12 sm:leading-[250px] px-2 sm:px-[30px] border-[4px] border-white">
            OUR PROCESS
          </h1>
        </div>
      </section>

      <section className="section_padding_inline section_margin_block">
        {processes.map((process, i) => (
          <motion.div
            variants={staggerContainer(0.5, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={i}
            className="mb-[80px] last-of-type:mb-0"
          >
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.75)}
              className="border-neutral-500 border-[2px] p-[20px] sm:px-[60px] sm:py-[30px]"
            >
              <motion.div
                variants={zoomIn(0.3, 0.5)}
                className="w-[40px] sm:w-[120px] h-[40px] sm:h-[120px] rounded-full bg-[#091b2c] mb-[15px] sm:mb-[40px]"
              />

              <div className="mb-[20px] sm:mb-[60px]">
                <motion.h3
                  variants={fadeIn("up", "spring", 0.6, 0.75)}
                  className="text-[20px] sm:text-[40px] font-bold leading-[30px] sm:leading-[48px] mb-2 sm:mb-4"
                >
                  {process.title}
                </motion.h3>
                <motion.div
                  variants={fadeIn("right", "spring", 0.7, 0.75)}
                  className="[&>*]:mb-2 [&>*]:sm:mb-4 text-opacity-50 text-[13px] sm:text-[18px] font-medium leading-[20px] sm:leading-[30px]"
                >
                  <article>
                    Viverra ut potenti aliquam feugiat dui imperdiet laoreet
                    tempus sed. Elit cursus est lorem in est id nec. Quis diam
                    posuere at nisl eget turpis sagittis nunc. Aliquet et
                    ultrices purus, id. Sagittis erat nunc in parturient.
                  </article>
                  <article>
                    Viverra ut potenti aliquam feugiat dui imperdiet laoreet
                    tempus sed. Elit cursus est lorem in est id nec. Quis diam
                    posuere at nisl eget turpis sagittis nunc. Aliquet et
                    ultrices purus, id. Sagittis erat nunc in parturient.
                  </article>
                  <article>
                    Viverra ut potenti aliquam feugiat dui imperdiet laoreet
                    tempus sed. Elit cursus est lorem in est id nec. Quis diam
                    posuere at nisl eget turpis sagittis nunc. Aliquet et
                    ultrices purus, id. Sagittis erat nunc in parturient.
                  </article>
                </motion.div>
              </div>

              <div className="flex gap-4 sm:gap-8">
                <CustomButton
                  title="Connect"
                  handleClick={() => push("/contact")}
                  animation={fadeIn("up", "spring", 0.8, 0.75)}
                  containerStyles="bg-[#ff3333] py-[1px] px-4 sm:py-[16px] sm:px-[82px]"
                  textStyles="text-white text-[12px] sm:text-[17px] font-semibold"
                />
                <CustomButton
                  title="Our Works"
                  handleClick={() => push("/our-work")}
                  animation={fadeIn("up", "spring", 0.8, 0.75)}
                  containerStyles="border-[#ff3333] border-[1px] sm:border-[3px] py-[1px] px-4 sm:py-[16px] sm:px-[82px]"
                  textStyles="text-[#ff3333] text-[12px] sm:text-[17px] font-semibold"
                />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </section>
    </main>
  );
};

export default ProcessPage;
