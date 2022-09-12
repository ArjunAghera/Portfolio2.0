import React from "react";

export const Skills = () => {
  return (
    <div className="background min-h-screen pb-8">
      <h1 className="text-4xl md:text-6xl font-brandSecondary text-brandTextPrimary text-center pt-20">
        Skills
      </h1>
      <div className=" relative w-4/5 h-88 pb-8 mx-auto mt-20 rounded-2xl background-modal shadow-xl overflow-y-scroll overflow-x-auto">
        <ul className="flex flex-row justify-evenly w-28 fixed top-4 left-0 right-0">
          <li className=" h-4 w-4 cursor-pointer bg-red-700 rounded-full"></li>
          <li className=" h-4 w-4 cursor-pointer bg-yellow-500 rounded-full"></li>
          <li className=" h-4 w-4 cursor-pointer bg-green-600 rounded-full"></li>
        </ul>
        <p className=" mt-12 mb-2 mx-4 md:mx-16 lg:mx-24 font-mono text-brandTextPrimary text-md md:text-xl lg:text-xl">
          {`const knownLanguages: string[] =
          ["Java","JavaScript","TypeScript","C","HTML","CSS"];`}
        </p>
        <p className="mb-2 mx-4 md:mx-16 lg:mx-24 font-mono text-brandTextPrimary text-md md:text-xl lg:text-xl">
          {`const knownDBs: string[] = ["PostgreSQL", "MongoDB", "MySQL"];`}
        </p>
        <p className="mb-2 mx-4 md:mx-16 lg:mx-24 font-mono text-brandTextPrimary text-md md:text-xl lg:text-xl">
          {`const knownFrameworksOrLibs: string[] = ["React.js", "Node.js",
          "Next.js", "Express.js", "Passport.js", "TypeORM", "Mongoose",
          "TailwindCSS", "Bootstrap"];`}
        </p>
        <p className="mb-2 mx-4 md:mx-16 lg:mx-24 font-mono text-brandTextPrimary text-md md:text-xl lg:text-xl">
          {`const exploring: string[] = ["Web3", "Blockchain development", "Smart
          Contracts", "Solidity","Nest.js"];`}
        </p>
        <p className="mb-2 mx-4 md:mx-16 lg:mx-24 font-mono text-brandTextPrimary text-md md:text-xl lg:text-xl">
          {`const otherSkills: string[] = ["Photoshop", "Figma", "Premiere Pro",
          "After Effects", "Lightroom"];`}
        </p>
      </div>
    </div>
  );
};
