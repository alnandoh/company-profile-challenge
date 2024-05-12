"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import DownArrow from "@/public/DownArrow.svg";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <button
      onClick={scrollToTop}
      className={`fixed w-8 h-10 lg:w-16 lg:h-16 flex items-center justify-center bottom-0 left-0 rounded-tr-lg bg-dark-600 transition-opacity ease-out duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Image src={DownArrow} alt="Up Arrow Icon" className="rotate-180" />
    </button>
  );
}
