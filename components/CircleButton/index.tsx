"use client";
import Image from "next/image";
import UpRightArrow from "@/public/uprightarrow.svg";
import RightArrow from "@/public/RightArrowColor.svg";
import DownArrow from "@/public/DownArrow.svg";
import { useEffect, useState } from "react";

interface CircleButtonProps {
  image?: "UpRightArrow" | "RightArrow" | "DownArrow" | "Plus" | "Minus";
  text?: string;
}

export default function CircleButton({ image, text }: CircleButtonProps) {
  const [imgSrc, setImgSrc] = useState(UpRightArrow);
  useEffect(() => {
    switch (image) {
      case "RightArrow":
        setImgSrc(RightArrow);
        break;
      case "DownArrow":
        setImgSrc(DownArrow);
        break;
      default:
        setImgSrc(UpRightArrow);
    }
  }, [image]);
  return (
    <>
      {text ? (
        <button className="flex gap-2 items-center ease-in-out duration-200 group/circle">
          <div className="relative min-w-12 w-12 h-12 flex rounded-full bg-dark-800 border-dark-500 border ">
            <Image
              src={imgSrc}
              alt={`${image} Icon`}
              className={`absolute top-0 bottom-0 left-0 right-0 m-auto items-center transition ${
                image === "DownArrow"
                  ? "scale-125 group-hover/circle:translate-y-1"
                  : "group-hover/circle:translate-x-1 group-hover/circle:-translate-y-1"
              }`}
            />
          </div>
          <p className="font-medium text-sm uppercase transition group-hover/circle:text-primary-800 group-hover/circle:[text-shadow:_1px_1px_3px_rgb(255_255_255_/_60%)]">
            {text}
          </p>
        </button>
      ) : (
        <button className="relative min-w-12 w-12 h-12 flex rounded-full bg-dark-800 border-dark-500 border ease-in-out duration-200 group/circle">
          <Image
            src={imgSrc}
            alt={`${image} Icon`}
            className={`top-0 bottom-0 left-0 right-0 m-auto items-center transition "group-hover/circle:translate-x-1 group-hover/circle:-translate-y-1"`}
          />
        </button>
      )}
    </>
  );
}
