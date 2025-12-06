const Hero = () => {
  return (
    <div className=" background h-screen ">
      <div></div>
      <div className="pt-48 space-y-6 mx-4 md:mx-0">
        <div className=" max-w-screen-lg text-center mx-auto">
          <p className=" text-brandTextPrimary text-2xl font-brandSecondary font-medium">
            Hi, I am
          </p>
          <h1 className=" text-brandTextSecondary text-7xl font-black font-brandSecondary pt-4">
            Arjun Aghera
          </h1>
          <h2 className=" text-brandTextSecondary text-3xl font-bold opacity-20 font-brandSecondary pt-4">
            Software Developer; exploring System Design & building Spends
          </h2>
          <div className=" max-w-screen-md mx-auto justify-center flex flex-row space-x-4">
              <a
                href="https://drive.google.com/file/d/1b7sXIpfvM1_olcHW92AN2PyxH-BF7BoZ/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className=" w-1/2"
              >
                <p className=" rounded-xl font-medium background mt-12 py-2 font-brandSecondary text-brandTextSecondary text-sm md:text-lg lg:text-xl text-center">
                  View Resume
                </p>
              </a>
              <a
                href="https://calendly.com/arjunagheraa/meeting-scheduled-through-portfolio"
                target="_blank"
                rel="noreferrer"
                className="w-1/2"
              >
                <p className=" rounded-xl font-medium background mt-12 py-2 font-brandSecondary text-brandTextSecondary text-sm md:text-lg lg:text-xl text-center">
                  Schedule a meeting
                </p>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
