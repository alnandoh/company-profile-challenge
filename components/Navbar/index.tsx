"use client";

import Image from "next/image";
import hamburger from "@/public/Hamburger.svg";
import NexgenLogo from "@/public/NexgenLogo.svg";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/projects", text: "Projects" },
    { href: "/about", text: "About" },
    { href: "/careers", text: "Careers" },
    { href: "/blog", text: "Blog", hidden: true },
    {
      href: "/",
      text: "Contact Us",
      bgClass: "!bg-primary-800 !text-dark-800 whitespace-nowrap",
    },
  ];

  return (
    <div
      className={`bg-dark-700 mt-6 px-4 py-3 rounded-lg md:flex md:justify-between md:items-center`}
    >
      <div className="flex items-center justify-between">
        <div>
          <Image src={NexgenLogo} alt="NexGen Logo" width={100} height={24} />
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden bg-dark-800 h-11 w-11 flex items-center justify-center rounded-xl"
        >
          <Image src={hamburger} alt="Hamburger Icon" />
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
            className={`font-medium leading-[150%] px-2.5 py-1.5 lg:px-5 lg:py-3.5 md:bg-dark-800 rounded-xl active:text-primary-600 text-base ${
              item.hidden ? "hidden" : ""
            } ${item.bgClass}`}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
