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
        <div className=" lg:pr-20 lg:-ml-16 md:px-40 lg:px-0 text-xs text-center md:text-left md:text-sm lg:text-xl">
          <p className=" px-2 pt-28 font-brandSecondary text-brandTextSecondary">
            Hi, I'm Arjun Aghera, and I am a final year B.Tech student of
            Computer Science and doing my internship from Philips. My passion
            for technology and innovation has driven me to develop expertise in
            a wide range of technologies, including C#, Java, JavaScript,
            TypeScript, HTML, CSS, React.js, Node.js, Express.js, Next.js,
            Nest.js, PostgreSQL, MongoDB, MySQL, and various ORMs.
            <br />
            <br /> Throughout my academic journey, I have worked on several
            projects that have enabled me to apply my skills and knowledge to
            real-world challenges. These projects have helped me develop strong
            problem-solving skills, a results-driven approach, and an ability to
            work collaboratively in a team.
            <br /> <br /> I am a fast learner, always up for a challenge, and
            dedicated to delivering results that exceed expectations. I have a
            keen eye for detail, and I take pride in my ability to create
            elegant and efficient solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BriefAbout;
