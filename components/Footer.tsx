import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
interface FooterProps {
  maintainerName: string;
}
export default function Footer(props: FooterProps) {
  return (
    <footer className="p-3 flex flex-col gap-2">
      <div className="m-auto flex w-full max-w-[1500px] justify-between">
        <div className="flex flex-col">
          <span>Innovation and Entrepreneurship Development Centre,</span>
          <span>Christ College of Engineering,</span>
          <span>Irinjalakuda, Thrissur. 680125</span>
        </div>
        <div className="flex flex-col">
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
          <div className="flex gap-1">
            <AiFillFacebook className="size-6 text-blue-900" />
            <AiFillTwitterSquare className="size-6 text-blue-400" />
            <AiFillYoutube className="size-6 text-red-600" />
            <AiFillLinkedin className="size-6 text-blue-700" />
            <AiFillInstagram className="size-6 text-pink-500" />
          </div>
        </div>
      </div>
      <div className="m-auto border-t w-full max-w-[1500px] pt-2 text-center">
        <small>Copyright © 2022 All Rights Reserved</small>
      </div>
    </footer>
  );
}
