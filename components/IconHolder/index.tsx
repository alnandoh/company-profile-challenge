import Image from "next/image";

interface IconHolderProps {
  imageUrl: string;
  altText: string;
  text?: string;
}

export default function IconHolder({
  imageUrl,
  altText,
  text,
}: IconHolderProps) {
  return (
    <>
      {text ? (
        <div className="flex items-center gap-2">
          <div className="bg-dark-600 min-w-12 w-12 h-12 flex items-center justify-center rounded-[10px] border border-dark-400">
            <Image src={imageUrl} alt={`${altText}`} />
          </div>
          <p className="font-medium leading-[150%] uppercase text-lg">{text}</p>
        </div>
      ) : (
        <div className="bg-dark-600 min-w-12 w-12 h-12 flex items-center justify-center rounded-[10px] border border-dark-400">
          <Image src={imageUrl} alt={`${altText}`} />
        </div>
      )}
    </>
  );
}
