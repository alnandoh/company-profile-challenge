interface InfiniteScrollProps {
  contents?: string[];
}

export default function InfiniteScroll({ contents }: InfiniteScrollProps) {
  const items = [
    "Digital Marketing",
    "Website Design",
    "Branding",
    "Website Development",
    "Mobile App Development",
  ];

  return (
    <div className="bg-dark-800 flex overflow-x-hidden rounded-lg px-1 sm:gap-[75%]">
      <div className="flex flex-row whitespace-nowrap gap-2 py-2 lg:py-3 animate-infiniteScroll">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 uppercase text-sm text-shade-400"
          >
            <div className="w-2 h-2 rounded-full bg-primary-800"></div>
            {item}
          </div>
        ))}
      </div>
      <div className="flex-row  whitespace-nowrap gap-2 py-2 animate-infiniteScroll hidden sm:flex">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 uppercase text-sm lg:text-lg text-shade-400"
          >
            <div className="w-2 h-2 rounded-full bg-primary-800"></div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
