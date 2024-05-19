import Image from "next/image";
import UpRightArrow from "@/public/uprightarrow.svg";
import Link from "next/link";

interface ButtonProps {
  text: string;
  bg?: "orange" | "black";
  arrow?: true;
  href: string;
}

export default function Button({ text, bg, arrow, href }: ButtonProps) {
  return (
    <Link
      href={`${href}`}
      className={`${
        bg === "black"
          ? "bg-dark-800 text-primary-300 hover:text-primary-500"
          : "bg-primary-800 text-dark-800 hover:bg-[#AB604A]"
      } rounded-xl w-full text-sm flex gap-3 items-center justify-center py-[14px] uppercase font-medium ease-in-out duration-200 group/button mt-auto`}
      aria-label={text}
    >
      <p className="transition group-hover/button:scale-110 group-hover/button:font-semibold">
        {text}
      </p>
      {arrow && (
        <Image
          src={UpRightArrow}
          alt="Up Right Arrow Icon"
          className="transition-transform duration-200 group-hover/button:translate-x-1.5 delay-200 group-hover/button:-translate-y-1.5 group-hover/button:scale-110"
        />
      )}
    </Link>
  );
}
