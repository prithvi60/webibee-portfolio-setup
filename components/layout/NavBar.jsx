"use client";
import React from "react";
import Link from "next/link";
import DesktopMenu from "../UI/DesktopMenu";
import MobMenu from "../UI/MobMenu";
import { navLinks } from "@/utils/Data";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname().replaceAll("/", "");

  return (
    <header
      className={`px-5 md:px-10 py-6 md:py-4 text-lg static flex items-center ${path !== "" ? "bg-secondary" : "bg-[#2C3E50]"} `}
    >
      <nav className="flex justify-between items-center w-full">
        <div className="md:w-52 w-44 relative h-16">
          <Link href="/" title="logo">
            <Image
              title={"logo"}
              src={"/fluorokraft-logo.svg"}
              alt="webibee logo"
              fill
              className="object-contain object-center"
              priority loading="eager"
            />
          </Link>
        </div>
        {/* navbar menu lists */}
        <div className="flex items-center gap-0.5 sm:gap-x-3.5 xl:gap-x-5">
          <ul className="gap-x-5 lg:!flex items-center hidden">
            {navLinks.map((menu, idx) => (
              <DesktopMenu key={idx} menu={menu} path={path} />
            ))}
          </ul>
          <div className="md:ml-4 flex items-center">
            <div className="lg:!hidden ml-2">
              <MobMenu Menus={navLinks} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
