import { useState } from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { projects } from "@/constants";

interface ProjectsProps {
  title: string;
  projectsType?: string;
  singleProjectPage?: string;
}

const Projects = ({
  title,
  projectsType,
  singleProjectPage,
}: ProjectsProps) => {
  const [showArr, setShowArr] = useState({ bool: false, id: Infinity });

  let selectedProjects;
  // single project page case
  if (singleProjectPage) {
    selectedProjects = projects
      .filter((project) => project.serviceLink === projectsType)
      .filter((ptype) => ptype.name !== singleProjectPage);
  }
  // type of project based on the service
  else if (projectsType) {
    selectedProjects = projects.filter(
      (project) => project.serviceLink === projectsType
    );
  }
  // All projects
  else {
    selectedProjects = projects;
  }
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      className="section_padding_inline section_margin_block"
    >
      <motion.h2
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        className="text-[24px] md:text-4xl lg:text-5xl z-20 font-semibold mb-[30px] lg:mb-[60px]"
      >
        {title}
      </motion.h2>

      <div className="flex gap-4 lg:gap-8 justify-evenly lg:justify-between flex-wrap">
        {selectedProjects.map((project, index) => (
          <motion.div
            variants={staggerContainer(1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            key={index}
            className="w-[400px] md:w-[350px] lg:w-[400px] z-20"
          >
            <motion.div
              variants={fadeIn("up", "spring", 0.6, 0.75)}
              className="w-full h-[320px] md:h-[250px] lg:h-[350px] bg-zinc-300"
            >
              <Image
                height={1080}
                width={1920}
                src={project.baseUrl}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div>
              <motion.h3
                variants={fadeIn("up", "spring", 0.8, 0.75)}
                className=""
              >
                <Link
                  href={`/our-work/${project.id}`}
                  onMouseEnter={() => setShowArr({ bool: true, id: index })}
                  onMouseLeave={() => setShowArr({ bool: false, id: Infinity })}
                  className="text-2xl flex gap-2 w-fit items-center font-semibold mt-4 hover:underline hover:text-[25px]"
                >
                  {project.name}
                  {showArr.id === index && <BsArrowUpRight size={19} />}
                </Link>
              </motion.h3>

              <motion.div
                variants={fadeIn("right", "spring", 1, 0.75)}
                className="flex flex-wrap mt-2 gap-3"
              >
                {project.hashtags.map((tag, i) => (
                  <div
                    key={i}
                    className="border-[2px] border-[#393939] rounded-full py-1 px-2 uppercase text-[12px] lg:text-[14px] hover:bg-[#393939] hover:text-white"
                  >
                    {tag}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
