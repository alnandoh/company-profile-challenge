import Image from "next/image";
import { StaticImageData } from "next/image";

interface AvatarProps {
  imgSrc: StaticImageData[];
}

export default function Avatar({ imgSrc }: AvatarProps) {
  return (
    <div className="flex gap-1">
      {imgSrc.map((src, index) => (
        <div
          key={index}
          className="relative w-10 h-10 rounded-full bg-primary-800 overflow-hidden"
        >
          <Image
            src={src}
            alt={`${src} Icon`}
            fill={true}
            sizes="100%"
            className="inset-0 mx-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
}
