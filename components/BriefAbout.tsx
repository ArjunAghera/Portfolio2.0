import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import myPhoto from "../public/1.png";

const BriefAbout = ({ isAboutPage }: { isAboutPage: boolean }) => {
  return (
    <div className=" background min-h-screen">
      <div>
        {isAboutPage && (
          <Link href="/#about">
            <p className=" font-mono text-brandTextSecondary float-left text-2xl md:text-4xl p-4 cursor-pointer">{`<--`}</p>
          </Link>
        )}
        <h1 className="text-4xl md:text-6xl text-brandTextPrimary text-center pt-16">
          About Me
        </h1>
      </div>
      <div className=" grid grid-flow-row grid-cols-1 lg:grid-cols-2 mx-auto pb-8 max-w-7xl ">
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
          <p className=" px-2 pt-24 font-brandSecondary text-brandTextSecondary">
            Hi! I am an undergraduate student from Manipal University Jaipur. I
            love making Web-apps, Mobile-apps, Static websites, Designing UI/UX
            for the website or mobile app. In my free time, I do Photography and
            design some posters, and manipulate some photos in Photoshop.
            <br />
            <br />
            Currently, I am looking for a summer internship for two to three
            months so that I have prior knowledge and experience of the
            professional field I will be working in after my studies.
          </p>
          <br />
          {!isAboutPage && (
            <Link href="/about">
              <a
                id="about"
                className=" px-2 text-brandTextSecondary hover:underline underline-offset-2 items-center font-brandSecondary text-2xl font-semibold cursor-pointer underline"
              >
                Know me More
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BriefAbout;
