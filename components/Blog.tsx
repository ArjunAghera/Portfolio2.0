import Image from "next/image";
import React from "react";
import { useHorizontalScroll } from "./useSideScroll";

export const Blog = () => {
  const scrollRef: any = useHorizontalScroll();
  return (
    <div className=" background h-auto">
      <h1 className="text-4xl md:text-6xl text-brandTextPrimary text-center pt-36">
        Blogs
      </h1>
      <div
        ref={scrollRef}
        className=" flex flex-row overflow-x-auto h-80 mt-8 space-x-8 ml-8"
      >
        <img src="/Blog1.png" loading="lazy" alt="blog image" />
        <img src="/Blog1.png" loading="lazy" alt="blog image" />
        <img src="/Blog1.png" loading="lazy" alt="blog image" />
        <img src="/Blog1.png" loading="lazy" alt="blog image" />
        <img src="/Blog1.png" loading="lazy" alt="blog image" />
      </div>
    </div>
  );
};
