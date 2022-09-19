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
            height={800}
            objectFit="contain"
            alt="my photo"
          />
        </motion.div>
        <div className=" lg:pr-20 lg:-ml-16 md:px-40 lg:px-0  text-xs text-center md:text-left md:text-sm lg:text-xl">
          <p className=" px-2 pt-28 font-brandSecondary text-brandTextSecondary">
            Hi, I’m Arjun Aghera!
            <br />
            <br />
            Currently in my final year at Manipal University Jaipur pursuing
            Computer Science Engineering. I am a full stack developer with
            specialization in developing web apps using JavaScript/TypeScript
            Frameworks/Libraries like React, Node.js, Express.js, Next.js, and
            Nest.js.
            <br />
            <br />
            I am looking for Full-time roles as a Software Developer.
            <br />
            <br />I am passionate about learning new things and having new
            experiences while working on a project that will help me grow in my
            career as well as help the organization.
            {/* <br />
            <br />
            Currently, I am looking for a summer internship for two to three
            months so that I have prior knowledge and experience of the
            professional field I will be working in after my studies. */}
          </p>
          <br />
          {/* {!isAboutPage && (
            <Link href="/about">
              <a
                id="about"
                className=" px-2 text-brandTextSecondary hover:underline underline-offset-2 items-center font-brandSecondary text-2xl font-semibold cursor-pointer underline"
              >
                Know me More
              </a>
            </Link>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default BriefAbout;
