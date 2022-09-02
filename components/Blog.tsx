import React from "react";
import { useHorizontalScroll } from "./useSideScroll";

type Props = {
  blogs: any;
};

export const Blog = ({ blogs }: Props) => {
  const scrollRef: any = useHorizontalScroll();
  return (
    <div className=" background h-auto">
      <h1 className="text-4xl md:text-6xl text-brandTextPrimary text-center pt-36">
        Blogs
      </h1>
      <div
        ref={scrollRef}
        className=" flex flex-row overflow-x-auto h-80 mt-12 space-x-8 ml-8"
      >
        {blogs.map((blog: any, index: number) => (
          <a key={index} href={blog?.blogLink} target="_blank" rel="noreferrer">
            <img
              src={blog?.image}
              alt="blog image"
              className="contain-image h-72"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
