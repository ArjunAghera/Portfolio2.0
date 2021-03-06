import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className=" background h-auto">
      <div>
        <h1 className=" text-lg lg:text-3xl float-left text-brandTextPrimary pl-16 pt-8 cursor-vertical-text">
          ArjunAghera
        </h1>
      </div>
      <div className=" pt-96  md:pt-96 space-y-6">
        {/* <p className=" text-center text-md lg:text-xl text-brandSecondary font-brandSecondary lg:float-left  p-4 cursor-default">
          A Masterpiece of Masterpieces.
        </p> */}
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
          <h1 className=" text-center text-4xl md:text-6xl lg:text-9xl font-brandPrimary lg:ml-64 text-brandTextSecondary cursor-default">
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
          <h1 className=" text-center text-4xl md:text-6xl lg:text-9xl font-brandPrimary lg:pl-16 text-brandTextPrimary cursor-default pb-72">
            Coffee and Code
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
