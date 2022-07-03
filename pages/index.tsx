import Head from "next/head";
import BriefAbout from "../components/BriefAbout";
import Hero from "../components/Hero";
import WebDevProjects from "../components/WebDevProjects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arjun Aghera's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-1">
        <Hero />
      </div>
      <div className="bg-2">
        <BriefAbout />
      </div>
      <div className="bg-3">
        <WebDevProjects />
      </div>
      {/* <OtherProjects /> */}
    </>
  );
}
