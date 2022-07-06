import React, { useState } from "react";
import { OtherProjectsModal } from "./OtherProjectsModal";

export const OtherProjects = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const handlePhotography = () => {
    setShowModal(true);
    setModalTitle("Photography");
    document.body.style.overflow = "hidden";
  };
  const handlePhotoshop = () => {
    setShowModal(true);
    setModalTitle("Photoshop Artworks");
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
            showModal
              ? `fixed inset-0 flex justify-center items-center z-10 bg-opacity-30 bg-black backdrop-blur-sm`
              : `hidden`
          }
        >
          <OtherProjectsModal
            _showModal={showModal}
            setShowModal={setShowModal}
            modalTitle={modalTitle}
          />
        </div>
      </div>
    </>
  );
};
