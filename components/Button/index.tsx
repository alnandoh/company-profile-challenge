import Image from "next/image";
import UpRightArrow from "@/public/uprightarrow.svg";

interface ButtonProps {
  text: string;
  bg?: "orange" | "black";
  arrow?: true;
}

export default function Button({ text, bg, arrow }: ButtonProps) {
  return (
    <button
      className={`${
        bg === "black"
          ? "bg-dark-800 text-primary-300"
          : "bg-primary-800 text-dark-800"
      } rounded-xl w-full text-sm flex gap-3 items-center justify-center py-[14px] uppercase font-medium ease-in-out duration-200 group/button`}
    >
      {text}{" "}
      {arrow ? (
        <Image
          src={UpRightArrow}
          alt=""
          className="transition group-hover/button:translate-x-1.5 group-hover/button:-translate-y-1.5"
        />
      ) : null}
    </button>
  );
}
