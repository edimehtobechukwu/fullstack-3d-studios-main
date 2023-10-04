"use client";
import Image from "next/image";
import { FaPeopleArrows } from "react-icons/fa";
import { MdAssuredWorkload } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { Projects } from "@/components";
import { services, serviceBenefits } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";

interface ServicePageProps {
  params: { service: string };
}

const ServicePage = ({ params }: ServicePageProps) => {
  const { service } = params;
  const serviceArr = services.filter(
    (serviceItem) => serviceItem.serviceLink == service
  );
  const { title, desc, adHeader, adBody, adUrl, hashtags } = serviceArr[0];

  return (
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <motion.section
        variants={staggerContainer(0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-wrap-reverse h-fit lg:h-[88vh] mt-[60px] lg:mt-[12vh]"
      >
        <div className="w-[100%] lg:w-[50%] lg:h-full flex flex-col justify-center mb-4 lg:mb-0 section_padding">
          <motion.h4
            variants={fadeIn("up", "spring", 0.4, 0.75)}
            className="text-[17px] sm:text-2xl uppercase text-[#ff3333]"
          >
            services
          </motion.h4>
          <motion.h1
            variants={fadeIn("up", "spring", 0.6, 0.75)}
            className="text-4xl md:text-[64.08px] text-zinc-700 font-bold sm:leading-[73.62px] capitalize"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn("right", "spring", 0.9, 0.75)}
            className="mt-8 text-xl"
          >
            {desc}
          </motion.p>
          <motion.div
            variants={fadeIn("up", "spring", 1.1, 0.75)}
            className="flex flex-wrap mt-[80px] gap-3"
          >
            {hashtags.map((tag, i) => (
              <div
                key={i}
                className="border-[2px] border-[#393939] rounded-full py-1 px-2 uppercase text-[12px] lg:text-[14px] hover:bg-[#393939] hover:text-white"
              >
                {tag}
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="w-[100%] lg:w-[50%] lg:h-full bg-[#393939]"
        >
          <Image
            width={1080}
            height={1080}
            src={adUrl}
            alt={title}
            className="w-full h-full"
          />
        </motion.div>
      </motion.section>

      {/* SERVICE BENEFITS */}
      <motion.section
        variants={staggerContainer(0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="section_padding_inline py-[50px] flex flex-wrap [&>*]:h-full justify-evenly lg:justify-between bg-[#133474] text-white text-center"
      >
        {serviceBenefits.map((benefit, index) => (
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.75)}
            key={index}
            className="w-[320px] md:w-[80%] lg:w-[25%] flex flex-col items-center mb-[80px] lg:mb-0"
          >
            {index === 0 && <FaPeopleArrows size={60} />}
            {index === 1 && <MdAssuredWorkload size={60} />}
            {index === 2 && <ImProfile size={60} />}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold my-3">
                {benefit.title}
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[18px]">
                {benefit.body}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* AD SECTION */}
      <motion.section
        variants={staggerContainer(0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="section_margin_block section_padding flex flex-wrap-reverse justify-evenly lg:justify-between relative"
      >
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          className="w-[100%] md:w-[90%] lg:w-[50%] h-[300px] md:h-[540px] bg-[#393939]"
        >
          <Image
            width={1080}
            height={1080}
            src={adUrl}
            alt={title}
            className="w-full h-full"
          />
        </motion.div>
        <div className="w-[100%] md:w-[90%] lg:w-[45%] flex flex-col justify-center mb-5 lg:mb-0">
          <motion.h2
            variants={fadeIn("up", "spring", 0.4, 0.75)}
            className="text-3xl md:text-4xl lg:text-[55.08px] text-zinc-700 font-semibold lg:leading-[63.62px] mb-4 lg:mb-8"
          >
            {adHeader}
          </motion.h2>
          <motion.p
            variants={fadeIn("right", "spring", 0.6, 0.75)}
            className="text-[15px] md:text-[18px]"
          >
            {adBody}
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("left", "spring", 0.8, 0.75)}
          className="absolute right-[-5px] top-[-220px] md:top-[-240px] w-[100px] md:w-[150px] lg:w-[250px] h-[250px] lg:h-[400px]"
        >
          <Image
            width={327}
            height={515}
            src="/squiggle-2.png"
            alt="squiggle 2"
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.section>

      {/* SERVICE PROJECTS */}
      <Projects title="Projects" projectsType={service} />
    </main>
  );
};

export default ServicePage;
