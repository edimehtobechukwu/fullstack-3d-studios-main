"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navVariants, navVariants2 } from "@/utils/motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  const currPath = pathName.split("/")[1];

  const [openNav, setOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    setActiveLink(currPath);
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero") as HTMLElement;
      const navbar = document.querySelector(".navbar");

      // Check if the user has scrolled past the hero section
      if (window.scrollY > heroSection?.offsetHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {openNav ? (
        // WHEN THE NAVBAR IS ACTIVE
        <motion.nav
          key="openNav"
          variants={navVariants2}
          initial="hidden"
          whileInView="show"
          className="h-[100vh] w-[100%] flex fixed top-0 gap-8 z-40 bg-white p-5"
        >
          <div className="hidden md:block w-[52%] h-full">
            <div className="relative w-full h-full bg-rose-500 flex items-center justify-center [&>*]:lg:scale-[1.6]">
              <div className="absolute w-[200px] h-[200px] rounded-full border-[10px] border-white" />
              <div className="w-[240px] h-[80px] z-20 bg-rose-500 flex justify-center items-center">
                <Image
                  width={218.52}
                  height={40}
                  src="/logo-bw.png"
                  alt="fs3d logo"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[100%] md:w-[48%] lg:mx-5 p-0 md:px-5 md:py-5">
            <div className="flex flex-col uppercase">
              <div className="self-end mb-8 flex gap-4 items-center">
                close
                <div
                  className="[&>*]:border-black cursor-pointer flex flex-col gap-2 py-1 hover:gap-[5px] transition-all"
                  onClick={() => setOpenNav(false)}
                >
                  <div className="w-[40px] border-[1px]" />
                  <div className="w-[40px] border-[1px]" />
                </div>
              </div>

              {navLinks.map((link, i) => (
                <div
                  key={i}
                  onClick={() => setActiveLink(link.name)}
                  className={`text-4xl md:text-5xl mb-9 ${
                    activeLink !== link.name && "text-[#5a5a5a]"
                  } font-extralight last-of-type:mb-0 cursor-pointer flex justify-between md:justify-normal w-full md:w-fit items-start`}
                >
                  <Link
                    onClick={() => setOpenNav(false)}
                    href={link.name === "Home" ? "/" : `${link.route}`}
                  >
                    {link.name}
                  </Link>
                  {link.name == activeLink && (
                    <HiOutlineArrowNarrowRight className="ml-9" />
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-3 justify-between text-[15px] flex-wrap">
                <div className="uppercase w-fit lg:w-[50%]">
                  <p>Suite #BSH335</p>
                  <p>444 Alaska Avenue </p>
                  <p>Torrance, CA 90503 USA</p>
                </div>
                <div className="uppercase">
                  <p>+18169193500</p>
                  <p>fullstack3dstudios@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-[20px] lg:gap-[50px] items-center flex-wrap-reverse justify-between text-[#5a5a5a]">
                <div className="lg:w-[50%] mt-3 md:mt-0">English</div>
                <div className="flex justify-start gap-[20px] lg:gap-[50px]">
                  <div>Instagram</div>
                  <div>LinkedIn</div>
                  <div>Twitter</div>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      ) : pathName !== "/" ? (
        <motion.nav
          key="closedNav"
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className="fixed top-0 bg-white shadow z-50 w-[100%] h-[60px] lg:h-[12vh] section_padding_inline py-[5px] sm:py-[33px] flex justify-between items-center"
        >
          <Link href="/">
            <Image
              height={609}
              width={33270}
              src="/logo.png"
              alt="Fullstack-3d Logo"
              className="h-[20px] sm:h-[30px] w-[100px] sm:w-[150px]"
            />
          </Link>
          <div className="flex gap-4 items-center text-black">
            <div className="hidden sm:block">MENU</div>
            <div
              className="[&>*]:border-black cursor-pointer flex flex-col py-1 gap-2 hover:gap-[5px] transition-all"
              onClick={() => setOpenNav(true)}
            >
              <div className="w-[40px] border-[1px]" />
              <div className="w-[40px] border-[1px]" />
              <div className="w-[40px] border-[1px]" />
            </div>
          </div>
        </motion.nav>
      ) : (
        <motion.nav
          key="closedNav"
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={`${
            isSticky ? "fixed bg-white shadow" : "absolute top-0 bg-transparent"
          } navbar z-50 w-[100%] h-[60px] lg:h-[12vh] ${
            isSticky
              ? "section_padding_inline"
              : "section_padding_inline lg:pl-[180px] lg:pr-[75px]"
          } py-[33px] flex justify-between items-center`}
        >
          <Link href="/">
            <Image
              height={609}
              width={33270}
              src={isSticky ? "/logo.png" : "/logo-bw.png"}
              alt="Fullstack-3d Logo"
              className="h-[30px] w-[150px]"
            />
          </Link>
          <div
            className={`flex gap-4 items-center ${
              isSticky ? "text-black" : "text-white"
            }`}
          >
            <div className="hidden sm:block">MENU</div>
            <div
              className={`${
                isSticky ? "[&>*]:border-black" : "[&>*]:bg-white"
              } cursor-pointer flex flex-col py-1 gap-2 hover:gap-[5px] transition-all`}
              onClick={() => setOpenNav(true)}
            >
              <div className="w-[40px] border-[1px]" />
              <div className="w-[40px] border-[1px]" />
              <div className="w-[40px] border-[1px]" />
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default NavBar;
