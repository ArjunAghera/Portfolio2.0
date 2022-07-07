import React from "react";

export const Experience = () => {
  return (
    <div className="background min-h-screen">
      <h1 className="text-4xl md:text-6xl text-brandTextPrimary text-center pt-20">
        Experience
      </h1>
      <div className=" mt-28 w-10/12 md:w-2/5 mx-auto">
        <div className="  grid grid-flow-col">
          <div className=" mx-auto">
            <div className="mx-auto w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 to-orange-500 opacity-30 backdrop-blur-3xl "></div>
            <div className="mx-auto h-52 w-0.5 bg-gradient-to-tr from-purple-500 to-orange-500 opacity-30 backdrop-blur-3xl"></div>
          </div>
          <div data-aos="fade-left" className=" mt-8 mx-auto ml-8">
            <p className=" text-xl md:text-2xl lg:text-3xl font-brandSecondary font-medium text-brandTextSecondary">
              QnC at Manipal University Jaipur
            </p>
            <p className=" text-lg md:text-xl lg:text-2xl font-light text-brandTextSecondary font-brandSecondary">
              Full stack Developer
            </p>
            <p className=" text-md md:text-lg lg:text-xl italic font-light text-brandTextSecondary font-brandSecondary">
              Sept 2021 - Jul 2022
            </p>
            <div className=" text-lg font-light font-brandSecondary text-brandTextSecondary"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
