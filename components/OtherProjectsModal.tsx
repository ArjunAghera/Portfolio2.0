import React from "react";

type Props = {
  _showModal: boolean;
  setShowModal: (active: boolean) => void;
  modalTitle: string;
};

export const OtherProjectsModal = ({
  _showModal: _showModal,
  setShowModal: setShowModal,
  modalTitle: modalTitle,
}: Props) => {
  const handleClose = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div className=" relative w-4/5 h-3/4 rounded-2xl background-modal shadow-xl overflow-y-scroll">
      <ul className="flex flex-row justify-evenly w-28 fixed top-4 left-0 right-0">
        <li
          className=" h-4 w-4 cursor-pointer bg-red-700 rounded-full"
          onClick={handleClose}
        ></li>
        <li className=" h-4 w-4 cursor-pointer bg-yellow-500 rounded-full"></li>
        <li className=" h-4 w-4 cursor-pointer bg-green-600 rounded-full"></li>
      </ul>
      <h1 className=" text-4xl md:text-6xl font-brandSecondary font-extrabold text-brandTextSecondary text-center pt-20">
        {modalTitle}
      </h1>
    </div>
  );
};
