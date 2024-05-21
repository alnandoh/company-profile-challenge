"use client";

import Image from "next/image";
import Hamburger from "@/public/Hamburger.svg";
import NexgenLogo from "@/public/NexgenLogo.svg";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/services", text: "Services" },
    { href: "/about", text: "About" },
    { href: "/teams", text: "Teams" },
    { href: "/careers", text: "Careers" },
    { href: "/blog", text: "Blog", hidden: true },
    {
      href: "https://wa.me/message/MZ3TNFQEEAV5H1",
      text: "Contact Us",
      bgClass: "!bg-primary-800 !text-dark-800 whitespace-nowrap",
    },
  ];
  console.log(pathname);
  return (
    <div
      className={`bg-dark-700 mt-6 px-4 py-3 rounded-lg md:flex md:justify-between md:items-center md:bg-shade-700/10
      md:backdrop-blur-[10px]`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="md:pl-8 lg:pl-8">
          <Image
            src={NexgenLogo}
            alt="NexGen Logo"
            width={100}
            height={24}
            loading="eager"
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="md:hidden bg-dark-800 h-11 w-11 flex items-center justify-center rounded-xl"
        >
          <Image src={Hamburger} alt="Hamburger Icon" />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } flex md:flex flex-col md:flex-row md:gap-4`}
      >
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`md:font-medium leading-[150%] px-2.5 py-1.5 lg:px-5 lg:py-3.5 md:bg-dark-800/35 rounded-xl text-base transition duration-200 ease-in-out md:hover:underline md:hover:text-primary-600 md:hover:scale-105 ${
              item.hidden ? "hidden" : ""
            } ${item.bgClass} ${
              pathname === item.href ? "text-primary-600 underline" : ""
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
