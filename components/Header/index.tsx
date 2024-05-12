import RightArrow from "@/public/rightarrow.svg";
import Image from "next/image";

interface HeaderProps {
  heading1: string;
  content: string;
}

export default function Header({ heading1, content }: HeaderProps) {
  return (
    <section className="bg-dark-700 flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <h1 className="font-semibold text-[28px] uppercase">{heading1}</h1>
        <div className="flex gap-2 items-center">
          <div className="relative w-10 h-10 bg-primary-800 rounded-full">
            <Image
              src={RightArrow}
              alt="Right Arrow Icon"
              className="absolute top-0 bottom-0 left-0 right-0 m-auto"
            />
            <div className="absolute -left-2 -bottom-2 border-2 rounded-full border-e-transparent w-14 h-14 border-primary-800"></div>
          </div>
          <div className="uppercase text-primary-800 font-medium">
            Start a project
          </div>
        </div>
      </div>
      <p className="text-shade-500 text-sm leading-[150%]">{content}</p>
      <div className="bg-dark-800 flex overflow-x-hidden rounded-lg px-1 sm:gap-[75%]">
        <div className="flex flex-row  whitespace-nowrap gap-2 py-2 animate-infiniteScroll">
          <div className="flex items-center gap-2 uppercase text-sm text-shade-800">
            <div className="w-2 h-2 rounded-full bg-primary-800"></div>Digital
            Marketing
          </div>
          <div className="flex items-center gap-2 uppercase text-sm text-shade-800">
            <div className="w-2 h-2 rounded-full bg-primary-800"></div>Website
            Design
          </div>
          <div className="flex items-center gap-2 uppercase text-sm text-shade-800">
            <div className="w-2 h-2 rounded-full bg-primary-800"></div>Branding
          </div>
          <div className="flex items-center gap-2 uppercase text-sm text-shade-800">
            <div className="w-2 h-2 rounded-full bg-primary-800"></div>Website
            Development
          </div>
          <div className="flex items-center gap-2 uppercase text-sm text-shade-800">
            <div className="w-2 h-2 rounded-full bg-primary-800"></div>Mobile
            App Development
          </div>
        </div>
        <div className="flex-row  whitespace-nowrap gap-2 py-2 animate-infiniteScroll hidden sm:flex">
          <div className="flex items-center gap-2 uppercase text-sm text-shade-800">
            <div className="w-2 h-2 rounded-full bg-primary-800"></div>Digital
            Marketing
          </div>
          <div className="flex items-center gap-2 uppercase text-sm text-shade-800">
            <div className="w-2 h-2 rounded-full bg-primary-800"></div>Website
            Design
          </div>
          <div className="flex items-center gap-2 uppercase text-sm text-shade-800">
            <div className="w-2 h-2 rounded-full bg-primary-800"></div>Branding
          </div>
          <div className="flex items-center gap-2 uppercase text-sm text-shade-800">
            <div className="w-2 h-2 rounded-full bg-primary-800"></div>Website
            Development
          </div>
          <div className="flex items-center gap-2 uppercase text-sm text-shade-800">
            <div className="w-2 h-2 rounded-full bg-primary-800"></div>Mobile
            App Development
          </div>
        </div>
      </div>
    </section>
  );
}
