"use client";

import Image from "next/image";
import hamburger from "@/public/Hamburger.svg";
import NexgenLogo from "@/public/NexgenLogo.svg";
import Link from "next/link";

export default function Navbar() {
  const handleMobileNav = () => {};
  return (
    <div className="h-[72px] flex justify-between items-center bg-dark-700 px-4 mt-6 rounded-xl">
      <div>
        <Image src={NexgenLogo} alt="NexGen Logo" width={100} height={24} />
      </div>
      <div className="hidden md:flex gap-4">
        <Link href="/" className="header-nav-item">
          Home
        </Link>
        <Link href="/" className="header-nav-item">
          Services
        </Link>
        <Link href="/" className="header-nav-item">
          Projects
        </Link>
        <Link href="/" className="header-nav-item">
          About
        </Link>
        <Link href="/" className="header-nav-item">
          Careers
        </Link>
        <Link href="/" className="header-nav-item hidden lg:block">
          Blog
        </Link>
        <Link
          href="/"
          className="header-nav-item bg-primary-800  text-dark-800 whitespace-nowrap"
        >
          Contact Us
        </Link>
      </div>
      <button
        onClick={handleMobileNav}
        className="bg-dark-800 h-11 w-11 flex items-center justify-center rounded-xl md:hidden"
      >
        <Image src={hamburger} alt="Hamburger Icon" />
      </button>
    </div>
  );
}
