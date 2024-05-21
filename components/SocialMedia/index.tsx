import Image from "next/image";
import Link from "next/link";

interface SocialMediaProps {
  imageUrl: string;
  name: string;
  url: string;
}

export default function SocialMedia({ imageUrl, name, url }: SocialMediaProps) {
  return (
    <Link
      href={url}
      target="blank"
      rel="noopener noreferrer"
      className="flex lg:flex-col lg:gap-2.5 items-center justify-center bg-dark-600 w-full lg:h-full h-12 rounded-[10px] border border-dark-400 group/socialmedia duration-200 ease-in-out md:bg-shade-700/10 md:backdrop-blur-[10px]"
      passHref
    >
      <Image
        src={imageUrl}
        alt={`${name} Icon`}
        className="group-hover/socialmedia:scale-150 group-hover/socialmedia:animate-pulse transition"
      />
      <p className="hidden lg:block">{name}</p>
    </Link>
  );
}
