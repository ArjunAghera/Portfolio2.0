import Head from "next/head";
import React from "react";
import BriefAbout from "../components/BriefAbout";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";

export default function about() {
  const isAboutPage: boolean = true;
  return (
    <>
      <Head>
        <title>{`About: Arjun Aghera`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-2">
        <BriefAbout isAboutPage={isAboutPage} />
      </div>
      <div className="bg-4">
        <Skills />
      </div>
      <div className="bg-5">
        <Experience />
      </div>
    </>
  );
}
