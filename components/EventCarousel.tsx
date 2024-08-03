"use client";
import { IMAGES } from "@/libs/constant/image.constant";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
import Slider, { Settings } from "react-slick";

export default function EventCarousel() {
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
          image={{ src: "/catalyst2023.jpeg", alt: IMAGES.hero_bg.home.alt }}
          title="Google ML Catalyst with TensorFlow Certification Workshop"
          description="The Google ML Catalyst with TensorFlow Certification Workshop, held at IEDC CCE on December 2-3, 2023, was a resounding success. Attendees engaged in hands-on Machine Learning sessions led by experts Don C John and Prasoon Kottarathil, earning prestigious TensorFlow certifications. Special thanks to Suni Jose Miss for her invaluable support. The event offered networking, great food, and surprise goodies, fostering a collaborative atmosphere among participants from over 5 colleges. This successful workshop highlights IEDC CCE's role as a key hub for Machine Learning innovation and learning, setting the stage for future opportunities in the field."
        />
        <CarouselCard
          image={{ src: "/converge2023.jpeg", alt: IMAGES.hero_bg.home.alt }}
          title="CONVERGE"
          description='The "Converge" event on October 21, 2023, was a standout day for IEDC CCE members, filled with excitement and learning. It featured an inspiring Alumni Interaction with Ajil Ibrahim, Athul Krishna, and Steve Austin, who offered valuable insights from their professional journeys. The event also included a creative challenge where teams "Aqua Clean" and "Eco-bin" excelled with their innovative ideas, pitching solutions based on provided drawings. The combination of engaging alumni talks and a competitive challenge contributed to the event resounding success, making it a memorable and enriching experience for all participants.'
        />
        <CarouselCard
          image={{ src: "/kickstart2023.jpeg", alt: IMAGES.hero_bg.home.alt }}
          title="KICKSTART"
          description="Kickstart 3.0, hosted by IEDC Christ College of Engineering, Irinjalkuda, on August 21-22, 2023, provided a dynamic welcome for incoming freshers. Organized by the Executive Committee and volunteer seniors, the event introduced students to college life and IEDC’s values through a variety of activities. Highlights included games, fun sessions, and an introductory segment by Nodal Officer Mr. Rahul Mamohar O and Excom members. Beyond entertainment, Kickstart 3.0 focused on fostering lasting connections and creating a supportive, collaborative environment for students. The event successfully laid the groundwork for both personal growth and community building."
        />
        <CarouselCard
          image={{ src: "/takeoff2023.jpeg", alt: IMAGES.hero_bg.home.alt }}
          title="TAKEOFF"
          description="TAKEOFF 2023, organized by IEDC CCE, was a multi-day event designed to enhance industry readiness through focused mentoring in LinkedIn, Git, C programming, and Figma. Kicking off on July 5th, the series specifically targeted 1st-year students, with Batch #1 accommodating 30 participants for an interactive learning experience. Registration was facilitated via an online form, with a nominal fee of ₹100. The event underscored IEDC CCE’s commitment to equipping students with essential skills for a successful career, showcasing a strategic approach to early professional development."
        />
        <CarouselCard
          image={{ src: "/belfort.jpeg", alt: IMAGES.hero_bg.home.alt }}
          title="BELFORT"
          description='As part of Techletics 22, IEDC_CCE hosted the "Belfort of Wall Street" event from May 4-6, 2022. This three-day competition challenged participants to present innovative solutions to a given problem. The event progressed through ideation, prototype presentation, business pitch, and a Shark Tank-style final. Only winners from each round advanced to the next stage, culminating in a final evaluation based on votes. The event successfully achieved its goal of illustrating the startup process, providing participants with a comprehensive experience of building a company from scratch.'
        />
        <CarouselCard
          image={{ src: "/shark.png", alt: IMAGES.hero_bg.home.alt }}
          title="SHARK TANK"
          description="Shark Tank CCE, a key event for innovation and entrepreneurship, offered students a platform to pitch ideas and secure funding. Designed to support local startups and educate students about the entrepreneurial process, the event focused on Agritech and healthcare domains. Participants faced real-world pitching challenges while competing for investment. Successful completion of the event met its goals of helping startups advance and teaching students about investing. Winning teams were awarded $500 each, marking a gratifying achievement and a meaningful contribution to the student community."
        />
        <CarouselCard
          image={{ src: "/jumpstart.jpg", alt: IMAGES.hero_bg.home.alt }}
          title="JUMPSTART"
          description="JUMPSTART 4.0, held on June 3, 2022, was a highly anticipated bootcamp by IEDC_CCE for first and second-year students. The event, which began at 4 pm, featured a mix of technical and non-technical activities designed to foster entrepreneurial and innovative thinking. Key figures including Director Fr. John Palliekkara CMI and Principal Dr. Sajeev John opened the event. The bootcamp included a session by Sonu J S from Starting Trouble, with engaging individual and group tasks. After a fun-filled evening with interactive activities and a movie night, the event successfully energized and involved the students."
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
    <div className="flex gap-3 h-[400px] p-3">
      <div className="relative flex-1 rounded-xl overflow-clip">
        <Image
          fill
          objectFit="cover"
          src={props.image.src}
          alt={props.image.alt}
          className="w-[300px] h-[300px]"
        />
      </div>
      <div className="hidden flex-col gap-3 flex-1 items-start p-3 md:flex">
        <h2 className="font-semibold uppercase text-2xl">{props.title}</h2>
        <p className="text-justify">{props.description}</p>
      </div>
    </div>
  );
}
