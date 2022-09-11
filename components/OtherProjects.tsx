import React, { useState } from "react";
import { OtherProjectsModal } from "./OtherProjectsModal";

type Props = {
  photography: Array<Object>;
  photoshop: Array<Object>;
};

export const OtherProjects = ({ photography, photoshop }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [photos, setPhotos] = useState<Array<any>>(photography);
  const handlePhotography = () => {
    setShowModal(true);
    setModalTitle("Photography");
    setPhotos(photography);
    document.body.style.overflow = "hidden";
  };
  const handlePhotoshop = () => {
    setShowModal(true);
    setModalTitle("Photoshop Artworks");
    setPhotos(photoshop);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      <div className=" background min-h-screen">
        <h1 className=" text-4xl md:text-6xl font-brandSecondary font-extrabold text-brandTextPrimary text-center pt-36">
          Not just a boring Developer
        </h1>
        <p className=" font-brandSecondary text-brandTextSecondary text-lg md:text-2xl text-center pt-14">
          I am a hobbyist Photographer as well as Photoshop Artist.
        </p>
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 justify-evenly max-w-7xl mx-auto pt-20 gap-16 pb-16">
          <h5
            className=" w-72 background font-brandSecondary font-thin bg-transparent text-center py-16 items-center text-4xl text-brandTextPrimary mx-auto border-gradient border-gradient-purple cursor-pointer"
            onClick={handlePhotography}
          >
            Photography
          </h5>
          <h5
            className=" w-72 background font-brandSecondary font-thin bg-transparent text-center py-12 items-center text-4xl text-brandTextPrimary border-gradient mx-auto border-gradient-purple cursor-pointer"
            onClick={handlePhotoshop}
          >
            Photoshop Artwork
          </h5>
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
            photos={photos}
          />
        </div>
      </div>
    </>
  );
};
