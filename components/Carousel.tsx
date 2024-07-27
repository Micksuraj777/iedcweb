"use client";
import { IMAGES } from "@/libs/constant/image.constant";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";

export default function Carousel() {
  var settings: Settings = {
    dots: true,
    swipeToSlide: true,
    infinite: true,
    speed: 2000,
    fade: true,
    autoplay: true,
    lazyLoad: "ondemand",
    autoplaySpeed: 3000,
    initialSlide: 0,
    waitForAnimate: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <CarouselCard
          image={{ src: "/ribc.jpeg", alt: "" }}
          title="Rural India Business Conclave"
          description="Team CODERS consisting Ajil Ibrahim, AdithyaKrishnan, Pranav Madhu, Amal C P and M Akhil P Raj secured 1st prize in RIBC 2.0 Hackathon and bagged a prize monty of 50k .The hackathon was conducted jointly by KSUM, ICAR, CPCRI"
        />
        <CarouselCard
          image={{ src: "/hack@arch.jpeg", alt: IMAGES.hero_bg.home.alt }}
          title="HACK@ARCH"
          description="Team CODERS consisting of Aditya krishnan, Ajil Ibrahim, Christo Paul, M Akhil P Raj secured 1st prize in HACK@ARCH (36-Hour hackathon) organized by GEC, Thrissur and bagged a prize money of 30k"
        />
        <CarouselCard
          image={{ src: "/winner.jpg", alt: IMAGES.hero_bg.home.alt }}
          title="Lorem, ipsum dolor"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita quaerat, ad fugiat eius ipsam voluptate, consectetur voluptates vitae error itaque, necessitatibus maiores voluptatem! Quisquam itaque dolorum blanditiis, reiciendis aspernatur eius facilis beatae ipsa, asperiores quam aliquid facere laudantium? Nobis error ipsam quo, explicabo, perspiciatis sint consequuntur officiis a mollitia quod nam repudiandae optio soluta perferendis reprehenderit cumque qui labore eaque. Enim exercitationem dolorum quos dolorem magnam laboriosam dolore possimus, a ad repellat eveniet nam ratione. Repellendus velit vitae repudiandae laudantium eligendi placeat atque adipisci tenetur officia, sed, eius et vel similique, dolor corrupti ullam dolore rem! Architecto, accusamus fuga?"
        />
        <CarouselCard
          image={{ src: "/hackatly1st.jpeg", alt: IMAGES.hero_bg.home.alt }}
          title="HACKATLY"
          description="Hackathaly, an event conducted by College of Engineering Thalssery by Innovation and Entrepreneurship Development Centre(IEDC). We won as title winners at the event. Team TECMATES have secured 1st position and they bagged the prize money of 15k. The team members comprise Ann Tressa Prince, Bastin Jaison, Jacob Ranjit, Midhun Jenson, and Sebin K Babu. The grant is allocated for top performance on the hackathaly, A hackathon conducted at College of Engineering, Thalassery by Innovation and Entrepreneurship Development Centre(IEDC) for their idea Auto booking application."
        />
      </Slider>
    </div>
  );
}
interface CarouselCardProps {
  image: { src: string | StaticImport; alt: string };
  title: String;
  description: String;
}
function CarouselCard(props: CarouselCardProps) {
  return (
    <div className="flex gap-3 h-[500px] p-3">
      <div className="relative flex-1 rounded-xl overflow-clip">
        <Image
          fill
          objectFit="cover"
          src={props.image.src}
          alt={props.image.alt}
        />
      </div>
      <div className="hidden flex-col gap-3 flex-1 items-start p-3 md:flex">
        <h2 className="font-semibold uppercase text-2xl">{props.title}</h2>
        <p className="text-justify">{props.description}</p>
      </div>
    </div>
  );
}
