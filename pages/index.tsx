import Head from "next/head";
import BriefAbout from "../components/BriefAbout";
import { Contactme } from "../components/Contactme";
import Hero from "../components/Hero";
import { OtherProjects } from "../components/OtherProjects";
import WebDevProjects from "../components/WebDevProjects";

type Props = {
  projects: Array<Object>;
  photography: Array<Object>;
  photoshop: Array<Object>;
};

export default function Home({ projects, photography, photoshop }: Props) {
  const isAboutPage: boolean = false;
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
        <BriefAbout isAboutPage={isAboutPage} />
      </div>
      <WebDevProjects projects={projects} />
      <div className="bg-4">
        <OtherProjects photography={photography} photoshop={photoshop} />
      </div>
      <div className="bg-5">
        <Contactme />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const projects = await fetch(
    "https://arjun-portfolio-2-0.herokuapp.com/web-projects"
  ).then((res) => res.json());
  const photography = await fetch(
    "https://arjun-portfolio-2-0.herokuapp.com/photography"
  ).then((res) => res.json());
  const photoshop = await fetch(
    "https://arjun-portfolio-2-0.herokuapp.com/photoshop"
  ).then((res) => res.json());
  return { props: { projects, photography, photoshop } };
}
