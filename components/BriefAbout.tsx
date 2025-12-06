import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import myPhoto from "../public/1.png";

const BriefAbout = ({ isAboutPage }: { isAboutPage: boolean }) => {
  return (
    <div className=" background min-h-screen ">
      <div>
        {isAboutPage && (
          <Link href="/#about">
            <p className=" font-mono text-brandTextSecondary float-left text-2xl md:text-4xl p-4 cursor-pointer">{`<--`}</p>
          </Link>
        )}
        <h1 className="text-4xl md:text-6xl text-brandTextPrimary font-brandSecondary font-extrabold text-center pt-16">
          About Me
        </h1>
      </div>
      <div className=" grid grid-flow-row grid-cols-1 lg:grid-cols-2 mx-auto pb-8 max-w-7xl">
        <motion.div
          className=" mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          //   zIndex={5}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 10 },
          }}
        >
          <Image
            src={myPhoto}
            height={650}
            objectFit="contain"
            alt="my photo"
          />
        </motion.div>
        <div className=" lg:pr-20 lg:-ml-16 md:px-40 lg:px-0 text-xs text-center md:text-left md:text-sm lg:text-xl">
          <p className=" px-2 pt-28 font-brandSecondary text-brandTextSecondary">
            Hi, I&apos;m Arjun Aghera,a software engineer who enjoys building reliable backend systems, automating the boring parts, 
            and making complex workflows simpler for both developers and end users. I’ve worked across a mix of areas including backend 
            development, authentication, installation tooling, environment setup, debugging distributed components, and improving 
            developer experience with automation and clean documentation.
            <br />
            <br />
            I like understanding how things work end to end, whether it’s designing a secure server-to-server flow with OIDC, 
            improving deployment logic, or writing tools that make setup predictable. I’ve also spent time contributing to 
            components across teams, supporting integrations, learning new technologies on the go, and helping others understand system behavior.
            <br />
            <br />
            Outside of work, I enjoy exploring new ideas through side projects like Spends, where I’ve worked with cloud functions, 
            Gmail Pub/Sub notifications, data encryption, and mobile development. I’m always learning, experimenting, and trying to build things 
            that are both practical and enjoyable to use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BriefAbout;
