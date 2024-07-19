import Carousel from "@/components/Carousel";
import { IMAGES, LOGO } from "@/libs/constant/image.constant";
import Image from "next/image";
import React from "react";
const Home = () => {
  return (
    <section className="px-3">
      {/* Hero section starts */}
      <div className="my-3 max-w-[1500px] bg-red-50 mx-auto rounded-xl relative h-[70vh] overflow-clip shadow">
        <Image
          fill
          objectFit="cover"
          objectPosition="bottom"
          loading="eager"
          src={IMAGES.hero_bg.home.src}
          alt={IMAGES.hero_bg.home.alt}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 flex flex-col gap-4 items-center justify-center">
          <Image
            width={100}
            height={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={LOGO.white_bg.src}
            alt={LOGO.white_bg.alt}
          />
          <span className="font-medium text-white uppercase text-xl md:text-2xl lg:text-5xl text-center">
            Innovation and Entrepreneurship
          </span>
          <span className="font-medium text-white uppercase text-xl md:text-2xl lg:text-5xl">
            Development Centre
          </span>
        </div>
      </div>
      {/* Hero section ends */}
      {/* Carousel section starts */}
      <div className="max-w-[1500px] mx-auto min-h-[80svh] flex flex-col justify-center">
        <h2 className="text-5xl font-semibold text-green-500 mb-5">
          Our Achievements
        </h2>
        <Carousel />
      </div>
      {/* Carousel section ends */}
    </section>
  );
};

export default Home;
