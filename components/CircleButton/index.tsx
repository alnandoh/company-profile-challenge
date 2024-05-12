"use client";
import Image from "next/image";
import UpRightArrow from "@/public/uprightarrow.svg";
import RightArrow from "@/public/RightArrowColor.svg";
import DownArrow from "@/public/DownArrow.svg";
import Plus from "@/public/plus.svg";
import Minus from "@/public/minus.svg";
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
      case "Plus":
        setImgSrc(Plus);
        break;
      case "Minus":
        setImgSrc(Minus);
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
                  ? "group-hover/circle:translate-y-1"
                  : "group-hover/circle:translate-x-1 group-hover/circle:-translate-y-1"
              }`}
            />
          </div>
          <p className="font-medium uppercase">{text}</p>
        </button>
      ) : (
        <button className="relative min-w-12 w-12 h-12 flex rounded-full bg-dark-800 border-dark-500 border ease-in-out duration-200 group/circle">
          <Image
            src={imgSrc}
            alt={`${image} Icon`}
            className={`absolute top-0 bottom-0 left-0 right-0 m-auto items-center transition ${
              image === "Plus"
                ? ""
                : image === "Minus"
                ? ""
                : "group-hover/circle:translate-x-1 group-hover/circle:-translate-y-1"
            }`}
          />
        </button>
      )}
    </>
  );
}
