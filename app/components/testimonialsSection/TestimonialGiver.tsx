import Image, { StaticImageData } from "next/image";

interface TestimonialGiverProps {
  name: string;
  occupation: string;
  image: StaticImageData;
}

export default function TestimonialGiver({
  name,
  occupation,
  image,
}: TestimonialGiverProps) {
  return (
    <div className="bg-dark-600 -mx-6 -mb-6 px-6 py-4 lg:-mx-10 lg:-mb-10 lg:px-10 lg:py-4 rounded-b-xl flex justify-between mt-auto">
      <div className="flex gap-4 items-center">
        <div className="rounded-full h-10 w-10 bg-primary-700">
          <Image src={image} alt={`${image} Icon`} className="mx-auto" />
        </div>
        <div className="flex flex-col">
          <p className="font-medium leading-[150%]">{name}</p>
          <p className="text-sm leading-[150%]">{occupation}</p>
        </div>
      </div>
    </div>
  );
}
