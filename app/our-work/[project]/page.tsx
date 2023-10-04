"use client";
import Image from "next/image";
import { Projects } from "@/components";
import { projects } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";

interface ProjectPageProps {
  params: { project: string };
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const { project } = params;

  const projectArr = projects?.filter(
    (projectItem) => projectItem.id == project
  );

  const { name, baseUrl, serviceLink, images, hashtags } = projectArr[0];

  return (
    <main>
      <motion.section
        variants={staggerContainer(1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="section_padding_inline section_margin_block mx-[10px] lg:mx-[30px] mt-[12vh] flex flex-col lg:flex-row justify-around items-center"
      >
        <motion.div
          variants={fadeIn("up", "spring", 1, 0.2)}
          className="w-[100%] lg:w-[45%] h-[70vh] flex flex-col justify-between border-[10px] md:border-[18px] border-rose-300 p-[10px] lg:p-[20px]"
        >
          <div>
            <h2 className="text-[30px] md:text-5xl font-semibold mb-3 md:mb-5">
              {name}
            </h2>
            <p className="text-[14px] md:text-[18px] leading-[22px]">
              When Mush approached Fullstack3D for assistance in revamping their
              UI screens for their innovative mushroom cultivation platform, our
              team was thrilled to take on the challenge and embarked on an
              exciting journey to enhance the user experience.
            </p>
          </div>

          <div className="flex flex-wrap mt-4 gap-3">
            {hashtags?.map((tag, i) => (
              <div
                key={i}
                className="border-[2px] border-[#393939] rounded-full py-1 px-2 uppercase text-[12px] lg:text-[14px] hover:bg-[#393939] hover:text-white"
              >
                {tag}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "spring", 1, 0.2)}
          className="w-[100%] lg:w-[55%] h-[300px] lg:h-[70svh] border-[10px] md:border-[18px] border-orange-300"
        >
          <Image
            width={1920}
            height={1199}
            src={baseUrl}
            alt="project-image"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* IMAGES SECTION */}
      {images && images?.length > 0 && (
        <motion.section
          variants={staggerContainer(1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="section_padding_inline section_margin_block [&>*]:mb-[70px]"
        >
          <motion.div
            variants={fadeIn("up", "spring", 1, 0.2)}
            className="text-neutral-600 text-[40px] border-b-[1px] border-solid border-neutral-600 pb-4 font-bold leading-[41.31px] mb-4"
          >
            Images
          </motion.div>

          <article className="text-justify">
            Our work touches the lives of millions of people every day. Our
            digital footprint and user-centric designs can be found in many
            interfaces – from Fortune 500 corporations, and innovative startups
            to the world’s leading organizations – we design and build
            accessible and usable design language systems that people love to
            use. Our work touches the lives of millions of people every day. Our
            digital footprint and user-centric designs can be found in many
            interfaces – from Fortune 500 corporations, and innovative startups
            to the world’s leading organizations – we design and build
            accessible and usable design language systems that people love to
            use. Our work touches the lives of millions of people every day. Our
            digital footprint and user-centric designs can be found in many
            interfaces – from Fortune 500 corporations, and innovative startups
            to the world’s leading organizations – we design and build
            accessible and usable design language systems that people love to
            use.
          </article>

          {/* Images */}
          <motion.div
            variants={fadeIn("up", "spring", 1, 0.4)}
            className={`flex gap-8 ${
              images?.length <= 2 ? "justify-normal" : "justify-evenly"
            } flex-wrap`}
          >
            {images?.map((img, i) => (
              <motion.div
                variants={fadeIn("up", "spring", 1, 0.5)}
                className="w-[400px] h-[300px] md:w-[350px] md:h-[250px] lg:w-[400px] lg:h-[300px] mb-10 z-20"
              >
                <div key={i} className="w-full h-full">
                  <Image
                    width={1920}
                    height={1080}
                    src={img.url}
                    alt={img.title || name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {img.title && (
                  <p className="text-2xl w-fit font-semibold mt-4">
                    {img.title}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* SIMILAR PROJECTS */}
      <Projects
        title="Similar Projects"
        projectsType={serviceLink}
        singleProjectPage={name}
      />
    </main>
  );
};

export default ProjectPage;
