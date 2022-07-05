import { off } from "process";
import React, { useState } from "react";
import { PhotographyModal } from "./PhotographyModal";
import { PhotoshopModal } from "./PhotoshopModal";

export const OtherProjects = () => {
  const [isPhotography, setIsPhotography] = useState<boolean>(false);
  const [isPhotoshop, setIsPhotoshop] = useState<boolean>(false);
  const handlePhotography = () => {
    setIsPhotography(true);
    document.body.style.overflow = "hidden";
  };
  const handlePhotoshop = () => {
    setIsPhotoshop(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      <div className=" background min-h-screen">
        <h1 className=" text-4xl md:text-6xl text-brandTextPrimary text-center pt-36">
          Not just a boring Developer
        </h1>
        <p className=" font-brandSecondary text-brandTextSecondary text-lg md:text-2xl text-center pt-14">
          I am a hobbyist Photographer as well as Photoshop Artist.
        </p>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 justify-evenly max-w-7xl mx-auto pt-20 gap-16 pb-16">
          <h1
            className=" w-72 background bg-transparent text-center py-16 items-center text-4xl text-brandTextPrimary mx-auto border-gradient border-gradient-purple cursor-pointer"
            onClick={handlePhotography}
          >
            Photography
          </h1>
          <h1
            className=" w-72 background bg-transparent text-center py-16 items-center text-4xl text-brandTextPrimary border-gradient mx-auto border-gradient-purple cursor-pointer"
            onClick={handlePhotoshop}
          >
            Photoshop Artwork
          </h1>
        </div>
      </div>
      <div className="">
        <div
          className={
            isPhotography
              ? `fixed inset-0 flex justify-center items-center z-10 bg-opacity-30 bg-black backdrop-blur-sm`
              : `hidden`
          }
        >
          <PhotographyModal
            isPhotography={isPhotography}
            setIsPhotography={setIsPhotography}
          />
        </div>
        <div
          className={
            isPhotoshop
              ? `fixed inset-0 flex justify-center items-center z-10 bg-opacity-30 bg-black backdrop-blur-sm`
              : `hidden`
          }
        >
          <PhotoshopModal
            isPhotoshop={isPhotoshop}
            setIsPhotoshop={setIsPhotoshop}
          />
        </div>
      </div>
    </>
  );
};
