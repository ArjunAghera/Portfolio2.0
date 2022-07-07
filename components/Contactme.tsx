import Image from "next/image";
import React, { useEffect } from "react";
import github from "../public/github2.png";
import linkedin from "../public/linkedin2.png";
import twitter from "../public/twitter2.png";
import mail from "../public/mail2.png";
import axios from "axios";

export const Contactme = () => {
  const [quote, setQuote] = React.useState<string>("");
  const options = {
    method: "GET",
    url: "https://quotes15.p.rapidapi.com/quotes/random/",
    headers: {
      "X-RapidAPI-Key": "d9abacb397msh8dde119110be782p16bf6ajsnc91b63b13039",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setQuote(response?.data?.content);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [options]);
  return (
    <div className="background min-h-screen pb-16">
      <h1 className=" text-4xl md:text-6xl font-brandSecondary text-brandTextSecondary font-extrabold text-center pt-20">
        Want to Connect?
      </h1>
      <div className=" max-w-7xl grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-8 mx-auto pt-16 px-1">
        <div>
          <h2 className="font-brandSecondary text-center text-brandTextPrimary font-light text-lg md:text-3xl">
            Send me a message
            <br /> using smart contract
          </h2>
          <p className=" font-brandSecondary text-brandTextSecondary font-extralight mt-12 px-12 md:px-12 text-sm md:text-lg">
            <span className="font-bold">{`Plesae note:`}</span>{" "}
            {`Smart Contract is
            deployed on a testnet so don't use your mainnet account to send a
            message!`}
            <br />
            {`So please switch your Metamask network from mainnet account to
            Rinkeby testnet.`}
          </p>
          <form>
            <textarea
              name="message"
              placeholder="Type your message here..."
              id="message"
              className="mx-8 md:mx-12 h-32 w-5/6 md:h-60 mt-4 text-sm md:text-xl pt-3 pl-4 font-brandSecondary text-brandTextSecondary rounded-2xl background-modal shadow-xl outline-none"
            />
            <button className="mx-8 md:mx-12 font-brandSecondary w-5/6 text-brandTextSecondary text-sm md:text-xl font-medium bg-gradient-to-tr from-pink-500 to-orange-500 px-8 py-1 rounded-xl mt-4 hover:scale-105 transition-transform shadow-xl">
              Send Message
            </button>
          </form>
        </div>
        <div className=" md:border-l border-brandTextSecondary border-spacing-4">
          <h2 className="font-brandSecondary text-center text-brandTextPrimary font-light text-lg md:text-3xl">
            Connect on my socials
          </h2>
          <ul className=" flex flex-row pt-6 text-center md:mt-8 md:gap-8 min-w-fit">
            <li className=" w-1/6 md:w-1/12 object-contain mx-auto">
              <a
                href="https://github.com/ArjunAghera"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={github}
                  className=" cursor-pointer"
                  objectFit="contain"
                  alt="Github link"
                />
              </a>
            </li>
            <li className=" w-1/6 md:w-1/12 object-contain mx-auto">
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
            <li className=" w-1/6 md:w-1/12 object-contain mx-auto">
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
            <li className=" w-1/6 md:w-1/12 object-contain mx-auto">
              <a href=" mailto: agheraarjun23@gmail.com">
                <Image
                  src={mail}
                  className=" cursor-pointer"
                  objectFit="contain"
                  alt="Email Address"
                />
              </a>
            </li>
          </ul>
          <div className=" hidden md:block font-brandSecondary px-12 mt-20 text-brandTextSecondary">
            <h3 className=" text-2xl font-medium">A random quote for you:</h3>
            <p className=" pt-2 text-lg font-light">
              {`"`}
              {quote}
              {`"`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
