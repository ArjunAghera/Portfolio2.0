import { motion } from "framer-motion";

const WebDevProjects = () => {
  return (
    <div className=" background h-auto">
      <div className=" border-b border-brandTextPrimary border-opacity-50 pt-48 mx-2 lg:mx-16" />
      <div className=" grid grid-flow-row grid-cols-2 md:flex md:flex-row md:justify-between mx-4 pt-8">
        <p className=" text-xl md:text-3xl lg:text-5xl font-brandPrimary text-brandTextSecondary lg:pl-20">
          1
        </p>
        <p className=" text-md md:text-lg lg:text-xl font-brandSecondary font-semibold text-brandTextSecondary lg:pr-20 lg:w-1/4 mb-8">
          A chat app to connect to the students of our university.
        </p>
      </div>
      <div className=" text-center">
        <a
          href="https://mujconnect.co"
          target="_blank"
          rel="noreferrer"
          className=" text-4xl md:text-6xl font-brandSecondary text-brandTextSecondary font-extrabold lg:mt-16"
        >
          MUJ-Connect
        </a>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        // zIndex={5}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 1, y: 50 },
        }}
      >
        <embed
          src="https://mujconnect.co"
          className=" h-xl w-4/5 mx-auto mt-10 pb-16"
        />
      </motion.div>
      <div className=" border-b border-brandTextPrimary border-opacity-50 mx-16" />
    </div>
  );
};

export default WebDevProjects;
