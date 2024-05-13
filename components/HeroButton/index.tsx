import Image from "next/image";
import RightArrow from "@/public/rightarrow.svg";

import React from "react";
import Link from "next/link";

export default function HeroButton() {
  return (
    <Link
      href="https://wa.me/message/MZ3TNFQEEAV5H1"
      className="flex gap-2 items-center group/herobutton ease-in-out duration-200"
    >
      <div className="relative w-10 h-10 bg-primary-800 rounded-full">
        <Image
          src={RightArrow}
          alt="Right Arrow Icon"
          className="absolute top-0 bottom-0 left-0 right-0 m-auto transition group-hover/herobutton:translate-x-2"
        />
        <div className="absolute -left-2 -bottom-2 border-2 rounded-full border-e-transparent w-14 h-14 border-primary-800"></div>
      </div>
      <div className="uppercase text-primary-800 font-medium">
        Start a project
      </div>
    </Link>
  );
}
