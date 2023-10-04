import { Variants } from "framer-motion";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  isDisabled?: boolean;
  animation?: Variants;
}

export interface WorkProps {
  id: string;
  name: string;
  baseUrl: string;
  serviceLink?: string;
  hashtags: string[];
}

export interface ServiceProps {
  serviceLink: string;
  title: string;
  desc: string;
  adHeader?: string;
  adBody?: string;
  adImg?: string;
  homeUrl: string;
  hashtags?: string[];
}

export interface ProjectProps {
  id: string;
  name: string;
  baseUrl: string;
  desc: string;
  images?:
    | {
        title: string;
        url: string;
      }[]
    | [];
  serviceLink: string;
  hashtags: string[];
  animations?: string[];
}

export interface TestimonialProps {
  name: string;
  message: string;
  position: string;
  img: string;
}

export interface FaqProps {
  question: string;
  answer: string;
  animateDelay: number;
}
