"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navbarLinks } from "@/libs/constant/navbar.constant";
import { cn } from "@/libs/utilis";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { LOGO } from "@/libs/constant/image.constant";

const Header = () => {
  const pathname = usePathname();
  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

  const renderNavbarLinks = () =>
    navbarLinks.map((item) => {
      const isActive =
        pathname === item.route || pathname.startsWith(`${item.route}/`);

      return (
        <li key={item.route}>
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              "flex gap-4 items-center text-sm font-medium hover:text-green-500",
              {
                "text-green-500": isActive,
                "text-gray-500": !isActive,
              }
            )}
          >
            {item.label}
          </Link>
        </li>
      );
    });

  const hamburgerMenu = () => (
    <ul className="flex flex-col gap-2 fixed w-fit p-2 right-3 top-16 rounded-md bg-white border border-gray-200 z-50">
      {renderNavbarLinks()}
    </ul>
  );

  const handleHamburgerMenuVisibility = () => {
    setHamburgerMenuVisible(!hamburgerMenuVisible);
  };

  return (
    <header className="p-3">
      <div className="flex gap-6 justify-between w-full max-w-[1500px] m-auto">
        <Link href="/">
          <div className="flex">
            <Image
              width={50}
              height={50}
              src={LOGO.default.src}
              alt={LOGO.default.alt}
            />

            <span>
              <h1 className="text-gray-700 text-xl font-semibold">
                IEDC CCEIJK
              </h1>
              <h2 className="text-gray-700 text-sm">Beyond Boundaries</h2>
            </span>
          </div>
        </Link>
        <ul className="hidden list-none gap-5 items-center lg:flex">
          {renderNavbarLinks()}
        </ul>
        <div className="my-auto p-1.5 rounded-md bg-green-500 cursor-pointer lg:hidden">
          {hamburgerMenuVisible ? (
            <IoMdCloseCircleOutline
              className="text-white size-5"
              onClick={handleHamburgerMenuVisibility}
            />
          ) : (
            <GiHamburgerMenu
              className="text-white size-5"
              onClick={handleHamburgerMenuVisibility}
            />
          )}
          {hamburgerMenuVisible && hamburgerMenu()}
        </div>
      </div>
    </header>
  );
};

export default Header;
