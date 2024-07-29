import { LOGO } from "@/libs/constant/image.constant";
import Image from "next/image";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
interface FooterProps {
  maintainerName: string;
}
export default function Footer(props: FooterProps) {
  return (
    <footer className="p-3 flex flex-col gap-2 mt-10">
      <div className="m-auto flex w-full max-w-[1500px] justify-between flex-wrap gap-5">
        <div className="flex flex-col gap-5 min-w-[300px] p-3">
          <Image
            width={80}
            height={80}
            src={LOGO.white_bg.src}
            alt={LOGO.white_bg.alt}
            className="border rounded-full"
          />
          <div className="flex flex-col text-sm gap-1">
            <span>Innovation and Entrepreneurship Development Centre,</span>
            <span>Christ College of Engineering,</span>
            <span>Irinjalakuda, Thrissur. 680125</span>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-between min-w-[300px] p-3">
          <div className="flex flex-col text-sm gap-1">
            <span>
              IEDC -{" "}
              <a
                href="https://cce.edu.in/"
                target="__blank__"
                className="text-green-500"
              >
                Christ College of Engineering
              </a>
            </span>
            <span>
              Maintained by{" "}
              <span className="text-green-500">
                {props?.maintainerName ?? ""}
              </span>
            </span>
          </div>
          <div>
            <span className="text-xl">Connect</span>
            <div className="flex gap-1 text-gray-700 items-center mt-1">
              {SocialMediaItems()}
            </div>
          </div>
        </div>
      </div>
      <div className="m-auto border-t w-full max-w-[1500px] pt-2 text-center">
        <small>Copyright © 2024 All Rights Reserved</small>
      </div>
    </footer>
  );
}

function SocialMediaItems() {
  const socialMediaHandles = [
    {
      icon: <AiOutlineFacebook className="size-7" />,
      link: "https://www.facebook.com/iedcccei",
    },
    {
      icon: <AiOutlineTwitter className="size-7" />,
      link: "https://twitter.com/iedcccei",
    },
    {
      icon: <AiOutlineYoutube className="size-7" />,
      link: "https://www.youtube.com/channel/UC9w5Q5z7bZ2d3TzWmFV9Z0g",
    },
    {
      icon: <AiOutlineLinkedin className="size-7" />,
      link: "https://www.linkedin.com/company/iedcccei/",
    },
    {
      icon: <AiOutlineInstagram className="size-7" />,
      link: "https://www.instagram.com/iedcccei/",
    },
  ];

  return socialMediaHandles.map((item) => (
    <a
      href={item.link}
      key={item.link}
      target="__blank__"
      className="p-1 border rounded-md hover:border-green-500  "
    >
      {item.icon}
    </a>
  ));
}
