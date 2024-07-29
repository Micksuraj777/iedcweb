import Carousel from "@/components/Carousel";
import { IMAGES, LOGO } from "@/libs/constant/image.constant";
import Image from "next/image";
import React from "react";
const Home = () => {
  return (
    <section  >
      {/* Hero section starts */}
      <div className="my-3 max-w-[1500px] mx-auto rounded-xl relative h-[70vh] overflow-clip shadow">
        <Image
          fill
          className="object-cover object-bottom"
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
      <div className="max-w-[1500px] mx-auto min-h-[70svh] flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-green-500 mb-5 md:text-3xl lg:text-5xl">
          Our Achievements
        </h2>
        <Carousel />
      </div>
      {/* Carousel section ends */}
      {/* About Us section starts */}
      <div className="max-w-[1500px] mx-auto  min-h-[70svh] flex flex-col justify-center gap-3 mt-5">
        <h2 className="text-2xl font-semibold text-green-500 mb-5 md:text-3xl lg:text-5xl">
          About Us
        </h2>
        <div className="flex gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-5 text-justify p-3 min-w-[300px]">
            <p>
              The Innovation and Entrepreneurship Development Centre of CCE is
              an organisation that aims to promote the institutional vision of
              transforming youngsters into technological entrepreneurs and
              innovative leaders.
            </p>
            <p>
              The initiative is to address the rising trend of corporate job
              culture and establish a platform to pursue ideas and businesses at
              an early stage. We at IEDC CCE host various workshops, speaker
              sessions, competitions to develop skill sets and provide essential
              resources to take up entrepreneurship as a career.
            </p>
          </div>
          <div className="flex-1 relative  aspect-[4799/3199] min-w-[300px]">
            <Image
              fill
              src={IMAGES.other.about.src}
              alt={IMAGES.other.about.alt}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
      {/* About Us section ends */}
      {/* Our Vision section starts */}
      <div className="max-w-[1500px] mx-auto min-h-[70svh] flex flex-col justify-center gap-3 mt-5">
        <h2 className="text-2xl font-semibold text-green-500 mb-5 md:text-3xl lg:text-5xl">
          Our Vision
        </h2>
        <div className="flex gap-5 flex-wrap">
          <div className="flex-1 relative  aspect-[4799/3199] min-w-[300px]">
            <Image
              fill
              src={IMAGES.other.vision.src}
              alt={IMAGES.other.vision.alt}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-5 text-justify flex-1 min-w-[300px] p-3">
            <p>
              The Innovation and Entrepreneurship Development Centre aims to
              inculcate and strengthen entrepreneurial quality and motivation
              necessary to develop knowledge and skills among members of IEDC.
              We aim to impart basis managerial knowledge and understanding,
              which help students to formulate the effective, innovative and
              profitable project.
            </p>
            <p>
              Provide information about the process, procedure and rules &
              regulations for setting up new projects and promote development of
              science and technology based enterprises.
            </p>
          </div>
        </div>
      </div>
      {/*Our Vision section ends */}
    </section>
  );
};

export default Home;
