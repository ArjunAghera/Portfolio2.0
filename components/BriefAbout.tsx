import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import myPhoto from "../public/myImg.jpg";

const BriefAbout = () => {
  return (
    <div className=" background h-screen">
      <div className=" grid grid-flow-row grid-cols-1 lg:grid-cols-2 mx-auto pb-8 ">
        <motion.div
          className=" pl-16 mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          //   zIndex={5}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 10 },
          }}
        >
          <Image
            src={myPhoto}
            width={800}
            height={600}
            objectFit="contain"
            objectPosition="left"
            alt="my photo"
          />
        </motion.div>
        <div className=" lg:pr-20 lg:-ml-16  text-xs text-center md:text-left md:text-sm lg:text-xl">
          <p className=" px-2 pt-24 text-brandTextSecondary">
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
          <Link href="/about">
            <a className=" px-2 text-brandTextSecondary hover:underline underline-offset-2 items-center font-brandSecondary text-2xl font-semibold cursor-pointer italic ">
              Know me More
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BriefAbout;
