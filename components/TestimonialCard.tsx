import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Image from "next/image";
import { TestimonialProps } from "@/types";

interface TestimonialComponentProps {
  index: number;
  testimonial: TestimonialProps;
}

const TestimonialCard = ({ index, testimonial }: TestimonialComponentProps) => {
  const { name, position, message, img } = testimonial;
  return (
    <div key={index} className="h-[100%] w-[100%] flex justify-center">
      <article className="bg-[#f5a0a0] h-full w-[88%] md:w-[80%] rounded-3xl top-0 py-2 md:py-10 px-4 md:px-[40px] lg:px-[60px] [&>*]:mb-4">
        <BiSolidQuoteAltLeft
          color="#ff3333"
          className="text-[30px] md:text-[60px]"
        />

        <div className="flex items-center justify-between">
          <p className="text-[16px] md:text-[26px] w-[100%] lg:w-[70%]">
            {message}
          </p>
          <Image
            width={1920}
            height={2800}
            src={img}
            alt={name}
            className="hidden lg:block w-[230px] h-[230px] rounded-full object-cover"
          />
        </div>

        {/* sm, md responsive component */}
        <div className="flex items-center text-[13px] md:text-[20px]">
          <Image
            width={1920}
            height={2800}
            src={img}
            alt={name}
            className="lg:hidden w-[50px] md:w-[90px] h-[50px] md:h-[90px] rounded-full object-cover mr-4"
          />
          <p className="text-[#ff3333] md:text-[19px] font-semibold mr-2">
            {name}
          </p>{" "}
          – {position}
        </div>
      </article>
    </div>
  );
};

export default TestimonialCard;
