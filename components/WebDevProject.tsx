import { motion } from "framer-motion";
import Image from "next/image";
import mujc from "../public/mujconnect.png";

type Props = {
  id: number;
  name: string;
  description: string;
  image: any;
  url: string;
};

export const WebDevProject = ({ id, name, description, image, url }: Props) => {
  return (
    <div className="bg-3 bg-brandPrimary">
      <div className="background">
        <div className=" border-b border-brandTextPrimary border-opacity-50 pt-20 mx-2 lg:mx-16" />
        <div className=" grid grid-flow-row grid-cols-2 md:flex md:flex-row md:justify-between mx-4 pt-8">
          <p className=" text-xl md:text-3xl lg:text-5xl font-brandPrimary text-brandTextSecondary lg:pl-20">
            {id + 1}
          </p>
          <p className=" text-md md:text-lg lg:text-xl font-brandSecondary font-semibold text-brandTextSecondary lg:pr-20 lg:w-1/4 mb-8">
            {description}
          </p>
        </div>
        <div className=" text-center">
          <p className=" text-4xl md:text-6xl font-brandSecondary opacity-30 text-brandTextSecondary font-extrabold lg:mt-16">
            {name}
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="pt-8 md:pt-16 px-2 lg:px-16 pb-8"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 1, y: 50 },
          }}
        >
          <Image
            src={image}
            height={743}
            width={1321}
            sizes="100vw"
            className="w-full h-auto object-contain"
            alt="my photo"
          />
        </motion.div>
      </div>
    </div>
  );
};
