import Image from "next/image";
import React from "react";
import ourStoryImg from "@/assets/couple_story.svg";
// import { Badge } from "../ui/badge";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";

function Story() {
  return (
    <article className="flex items-center justify-around container md:h-[30rem] md:w-[80rem] h-[25rem] w-[30rem] md:py-28 py-4 md:px-16 px-4 sm:py-14 sm:px-8 mx-auto rounded-xl shadow-md dark:shadow-black my-10">
      <div className="leading-loose md:text-xl  md:basis-1/2 flex flex-col md:justify-center justify-center text-wrap">
        <h1 className="md:text-3xl text-xl sm:text-2xl block mb-6">
          <span
            className="inline-block animate-wave cursor-default"
            role="img"
            aria-label="Waving hand"
          >
            👋🏼
          </span>{" "}
          Hi, Welcome to TechTandem!
        </h1>
        <div className="md:text-justify text-balance">
          <span className="pl-12">We are </span>
          <span className="font-bold">Sarath </span>and{" "}
          <span className="font-bold">Anjaly</span>, a tech duo in web
          development and software engineering.
          <span className="font-bold"> TechTandem </span> is a place we showcase
          our skills and projects.
          {/* <HoverCard>
            <HoverCardTrigger>
              <Badge variant="secondary" className="cursor-pointer">
                Read more ...
              </Badge>
            </HoverCardTrigger>
            <HoverCardContent className="w-[40vw] bg-muted/40 backdrop-blur-lg text-foreground">
              <div className="p-2">
                <p>
                  <span className="pl-8"></span>Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Iusto beatae magni incidunt
                  minima asperiores sit vitae nam corrupti, quae error nostrum
                  est! Repellat cumque dicta libero quis ut blanditiis molestiae
                  magni dignissimos, fuga maiores recusandae repellendus
                  adipisci tenetur ab quae quod illum sint dolor culpa? Nam
                  ratione accusamus et, explicabo iusto, magni nisi consequuntur
                  beatae sunt velit, quia aperiam dolor!
                </p>
              </div>
            </HoverCardContent>
          </HoverCard> */}
        </div>
      </div>
      <div>
        <Image src={ourStoryImg} alt="our-story.svg" width={400} height={600} />
      </div>
    </article>
  );
}

export default Story;
