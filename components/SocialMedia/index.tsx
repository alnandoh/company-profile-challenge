import Image from "next/image";
import Link from "next/link";

interface SocialMediaProps {
  imageUrl: string;
  altText: string;
  url: string;
}

export default function SocialMedia({
  imageUrl,
  altText,
  url,
}: SocialMediaProps) {
  return (
    <Link
      href={url}
      target="blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center bg-dark-600 w-full h-12 rounded-[10px] border border-dark-400 group/socialmedia duration-200 ease-in-out"
      passHref
    >
      <Image
        src={imageUrl}
        alt={`${altText}`}
        className="group-hover/socialmedia:scale-150 group-hover/socialmedia:animate-pulse transition"
      />
    </Link>
  );
}
