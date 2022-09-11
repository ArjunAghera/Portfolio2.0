const Hero = () => {
  return (
    <div className=" background h-screen">
      <div>
        {/* <h1 className=" text-lg lg:text-3xl float-left text-brandTextPrimary pl-16 pt-8 cursor-vertical-text">
          Arjun Aghera
        </h1> */}
      </div>
      <div className="pt-48 space-y-6">
        <div className=" max-w-screen-lg text-center mx-auto">
          <p className=" text-brandTextPrimary text-2xl font-brandSecondary font-medium">
            Hi, I am
          </p>
          <h1 className=" text-brandTextSecondary text-7xl font-black font-brandSecondary pt-4">
            Arjun Aghera
          </h1>
          <h2 className=" text-brandTextSecondary text-3xl font-bold opacity-20 font-brandSecondary pt-4">
            Software Developer; currently exploring DevOps & Web3.0
          </h2>
          {/* <a
            href="https://calendly.com/arjunagheraa/meeting-scheduled-through-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <p className=" max-w-screen-md mx-4 lg:mx-auto rounded-xl font-medium background mt-12 py-2 font-brandSecondary text-brandTextSecondary text-sm md:text-lg lg:text-xl text-center">
              Resume
            </p>
          </a> */}
          <p>
            <div className=" max-w-screen-md mx-auto justify-center flex flex-row space-x-4">
              <a
                href="https://drive.google.com/file/d/1b7sXIpfvM1_olcHW92AN2PyxH-BF7BoZ/view?usp=sharing"
                target="_blank"
                rel="noopener"
                className=" w-1/2"
              >
                <p className=" rounded-xl font-medium background mt-12 py-2 font-brandSecondary text-brandTextSecondary text-sm md:text-lg lg:text-xl text-center">
                  View Resume
                </p>
              </a>
              <a
                href="https://calendly.com/arjunagheraa/meeting-scheduled-through-portfolio"
                target="_blank"
                rel="noopener"
                className="w-1/2"
              >
                <p className=" rounded-xl font-medium background mt-12 py-2 font-brandSecondary text-brandTextSecondary text-sm md:text-lg lg:text-xl text-center">
                  Schedule a meeting
                </p>
              </a>
            </div>
          </p>
        </div>
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;
