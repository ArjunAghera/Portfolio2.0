import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" background h-screen">
      <div>
        {/* <motion.h2
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              rotate: [0, 360, 360, 360],
              opacity: 1,
              transition: { delay: 0.5, duration: 2 },
            },
          }}
          className=" text-5xl lg:text-7xl float-left text-brandSecondary pl-16 pt-8 cursor-vertical-text"
        >
          AA
        </motion.h2> */}
      </div>
      <div className=" pt-96 md:pt-96 lg:ml-48">
        <p className=" text-center text-md md:text-lg lg:text-xl text-brandSecondary font-brandSecondary lg:float-left lg:mt-10 lg:ml-60 p-4">
          A Masterpiece of Masterpieces.
        </p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { x: 5, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { delay: 0.5, duration: 2 },
            },
          }}
        >
          <h1 className=" text-center lg:text-left text-4xl md:text-6xl lg:text-9xl font-brandPrimary text-brandTextSecondary">
            Made with
          </h1>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { x: -5, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { delay: 0.5, duration: 2 },
            },
          }}
        >
          <h1 className=" text-center lg:text-left text-4xl md:text-6xl lg:text-9xl font-brandPrimary lg:pl-16 text-brandTextPrimary">
            Coffee And Code
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
