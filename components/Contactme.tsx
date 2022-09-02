import Image from "next/image";
import React from "react";
import github from "../public/github2.png";
import linkedin from "../public/linkedin2.png";
import twitter from "../public/twitter2.png";
import mail from "../public/mail2.png";
import hn from "../public/hashnode2.png";

export const Contactme = () => {
  return (
    <div className="background pb-4">
      <h1 className=" text-4xl md:text-6xl font-brandSecondary text-brandTextSecondary font-extrabold text-center pt-20">
        Let's Connect!
      </h1>
      <ul className=" flex flex-row pt-16 px-4 text-center md:mt-8 md:gap-8 max-w-screen-md mx-auto">
        <li className=" w-1/12 md:w-1/12 object-contain mx-auto hover:scale-105">
          <a href="https://linktr.ee/arjunaghera">
            <Image
              src={github}
              className=" cursor-pointer"
              objectFit="contain"
              alt="Github link"
            />
          </a>
        </li>
        <li className=" w-1/12 md:w-1/12 object-contain mx-auto hover:scale-105">
          <a
            href="https://www.linkedin.com/in/arjun-aghera-585525190/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={linkedin}
              className=" cursor-pointer"
              objectFit="contain"
              alt="Linkedin link"
            />
          </a>
        </li>
        <li className=" w-1/12 md:w-1/12 object-contain mx-auto hover:scale-105">
          <a
            href="https://twitter.com/arjun_aghera"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={twitter}
              className=" cursor-pointer"
              objectFit="contain"
              alt="Twitter link"
            />
          </a>
        </li>
        <li className=" w-1/12 md:w-1/12 object-contain mx-auto hover:scale-105">
          <a href=" mailto: agheraarjun23@gmail.com">
            <Image
              src={mail}
              className=" cursor-pointer"
              objectFit="contain"
              alt="Email Address"
            />
          </a>
        </li>
        <li className=" w-1/12 md:w-1/12 object-contain mx-auto hover:scale-105">
          <a
            href="https://blogs.arjunaghera.com"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={hn}
              className=" cursor-pointer"
              objectFit="contain"
              alt="Email Address"
            />
          </a>
        </li>
      </ul>
      <a
        href="https://calendly.com/arjunagheraa/meeting-scheduled-through-portfolio"
        target="_blank"
        rel="noreferrer"
      >
        <p className=" max-w-screen-md mx-4 lg:mx-auto rounded-xl font-medium background mt-12 py-2 font-brandSecondary text-brandTextSecondary text-sm md:text-lg lg:text-xl text-center">
          Schedule a meeting
        </p>
      </a>
      <footer className="text-brandTextSecondary font-brandSecondary pt-16 text-center">
        Developed and Designed by{" "}
        <a href="https://github.com/ArjunAghera" className="font-semibold">
          Arjun Aghera
        </a>
      </footer>
    </div>
  );
};
