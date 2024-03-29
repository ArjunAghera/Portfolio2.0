import Head from "next/head";
import BriefAbout from "../components/BriefAbout";
import { Contactme } from "../components/Contactme";
import Hero from "../components/Hero";
import { OtherProjects } from "../components/OtherProjects";
import WebDevProjects from "../components/WebDevProjects";
import fsPromises from "fs/promises";
import path from "path";
import { Experience } from "../components/Experience";

type Props = {
  projects: Array<any>;
  photography: Array<any>;
  photoshop: Array<any>;
  blogs: Array<any>;
};

export default function Home({ projects, photography, photoshop }: Props) {
  const isAboutPage: boolean = false;
  return (
    <>
      <Head>
        <title>{`Arjun Aghera's Portfolio`}</title>
        <meta property="og:image" content="/ogimg.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta
          name="description"
          content="Hi I am Arjun Aghera. I developed this site to showcase my skills."
        />
        <meta
          name="description"
          content="Hi I am Arjun Aghera I am final year student of Manipal University Jaipur pursuing Computer Science Engineering "
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/Cover-1.jpg" />
        <link rel="preload" href="/Cover-2.jpg" />
        <link rel="preload" href="/Cover-3.jpg" />
        <link rel="preload" href="/Cover-4.jpg" />
        <link rel="preload" href="/Cover-5.jpg" />
      </Head>
      <div className=" bg-brandPrimary bg-1">
        <img src="/cover-1.jpg" className=" hidden" />
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
      {/* <div className=" bg-brandPrimary">
        <Blog blogs={blogs} />
      </div> */}
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
  const webprojectsPath = path.join(
    process.cwd(),
    "data",
    "webDevProjects.json"
  );
  const photographyPath = path.join(process.cwd(), "data", "photography.json");
  const photoshopPath = path.join(process.cwd(), "data", "photoshop.json");

  const webprojectsData = await fsPromises.readFile(webprojectsPath);
  const photographyData = await fsPromises.readFile(photographyPath);
  const photoshopData = await fsPromises.readFile(photoshopPath);

  const projects: object = JSON.parse(webprojectsData.toString());
  const photography: Array<object> = JSON.parse(photographyData.toString());
  const photoshop: Array<object> = JSON.parse(photoshopData.toString());
  return { props: { projects, photography, photoshop } };
}
