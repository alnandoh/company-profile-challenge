import Image from "next/image";
import RightArrow from "@/public/rightarrow.svg";

import React from "react";
import Link from "next/link";

interface HeroButtonProps {
  classnames?: string;
}
export default function HeroButton({ classnames }: HeroButtonProps) {
  return (
    <Link
      target="_blank"
      href="https://wa.me/message/MZ3TNFQEEAV5H1"
      className={`flex gap-3 items-center group/herobutton ease-in-out duration-200 ${classnames}`}
    >
      <div className="relative w-10 h-10 bg-primary-800 rounded-full">
        <Image
          src={RightArrow}
          alt="Right Arrow Icon"
          className="absolute inset-0 m-auto transition group-hover/herobutton:translate-x-2 group-hover/herobutton:scale-125"
        />
        <div className="absolute -left-2 -bottom-2 border-2 rounded-full border-e-transparent w-14 h-14 border-primary-800 transition group-hover/herobutton:animate-spin-slow"></div>
      </div>
      <p className="uppercase text-primary-800 font-medium z-[1]">
        Start a project
      </p>
    </Link>
  );
}
