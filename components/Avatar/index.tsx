import Image, { StaticImageData } from "next/image";

interface AvatarProps {
  imgSrc: StaticImageData;
}
export default function Avatar({ imgSrc }: AvatarProps) {
  return (
    <div className="relative w-10 h-10 rounded-full bg-primary-800">
      <Image src={imgSrc} alt={`${imgSrc} Icon`} />
    </div>
  );
}
