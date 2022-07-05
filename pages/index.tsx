import Head from "next/head";
import BriefAbout from "../components/BriefAbout";
import { Contactme } from "../components/Contactme";
import Hero from "../components/Hero";
import { OtherProjects } from "../components/OtherProjects";
import WebDevProjects from "../components/WebDevProjects";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Arjun Aghera's Portfolio`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-1">
        <Hero />
      </div>
      <div className="bg-2">
        <BriefAbout />
      </div>
      <WebDevProjects />
      <div className="bg-4">
        <OtherProjects />
      </div>
      <div className="bg-5">
        <Contactme />
      </div>
    </>
  );
}
