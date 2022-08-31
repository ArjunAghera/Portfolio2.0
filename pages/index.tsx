import Head from "next/head";
import { Blog } from "../components/Blog";
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
        <link rel="preload" href="/Cover-1.jpg" />
        <link rel="preload" href="/Cover-2.jpg" />
        <link rel="preload" href="/Cover-3.jpg" />
        <link rel="preload" href="/Cover-4.jpg" />
        <link rel="preload" href="/Cover-5.jpg" />
      </Head>
      <div className=" bg-brandPrimary bg-1">
        <img src="/Cover-1.jpg" className=" hidden" />
        <Hero />
      </div>
      <div className=" bg-2 bg-brandPrimary">
        <img src="/Cover-2.jpg" className=" hidden" />
        <BriefAbout isAboutPage={isAboutPage} />
      </div>
      <div className=" bg-brandPrimary">
        <img src="/Cover-3.jpg" className=" hidden" />
        <WebDevProjects projects={projects} />
      </div>
      <div className="bg-4 bg-brandPrimary">
        <img src="/Cover-4.jpg" className=" hidden" />
        <OtherProjects photography={photography} photoshop={photoshop} />
      </div>
      <div className="bg-5 bg-brandPrimary">
        <img src="/Cover-5.jpg" className=" hidden" />
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
