import Marquee from "react-fast-marquee";

interface InfiniteScrollProps {
  contents?: string[];
}

export default function InfiniteScroll({ contents }: InfiniteScrollProps) {
  const defaultItems = [
    "Digital Marketing",
    "Website Design",
    "Branding",
    "Website Development",
    "Mobile App Development",
  ];

  const itemsToRender =
    contents && contents.length > 0 ? contents : defaultItems;

  return (
    <Marquee speed={30} pauseOnHover={true} className="flex">
      {itemsToRender.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 uppercase text-sm lg:text-lg text-shade-400"
        >
          <div className="w-2 h-2 rounded-full bg-primary-800"></div>
          <p>{item}</p>
        </div>
      ))}
    </Marquee>
  );
}
