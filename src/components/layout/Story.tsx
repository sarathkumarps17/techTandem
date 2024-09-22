import Image from "next/image";
import React from "react";
import ourStoryImg from "@/assets/couple_story.svg";

function Story() {
  return (
    <article className="flex flex-col md:flex-row items-center md:justify-around  justify-evenly container h-[75vh] w-96 md:w-[60rem] mx-auto my-auto rounded-xl shadow-md dark:shadow-black">
      <div className="md:leading-loose md:text-xl md:basis-1/2 flex flex-col justify-center text-wrap text-center">
        <h1 className="md:text-3xl text-xl sm:text-2xl block mb-2 md:mb-4">
          <span
            className="inline-block animate-wave cursor-default"
            role="img"
            aria-label="Waving hand"
          >
            👋🏼
          </span>{" "}
          Hi, Welcome to TechTandem!
        </h1>
        <div className="text-justify container mx-auto p-4">
          <p className="text-lg leading-relaxed">
            We are <span className="font-bold">Sarath</span> and{" "}
            <span className="font-bold">Anjaly</span>, a tech duo in web
            development and software engineering.
            <span className="font-bold"> TechTandem</span> is a place we
            showcase our skills and projects.
          </p>
        </div>
      </div>
      <div>
        <Image
          src={ourStoryImg}
          alt="our-story.svg"
          layout="intrinsic"
          width={250}
          height={200}
        />
      </div>
    </article>
  );
}

export default Story;
