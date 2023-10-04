"use client";
import { BsArrowUpRight } from "react-icons/bs";
import { CustomButtonProps } from "@/types";
import { motion } from "framer-motion";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  animation,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <motion.button
      disabled={false}
      type={btnType || "button"}
      className={` ${containerStyles}`}
      variants={animation}
      onClick={handleClick}
    >
      <span className={`${textStyles}`}>{title}</span>
      {rightIcon && <BsArrowUpRight size={24} color="white" />}
    </motion.button>
  );
};

export default CustomButton;
