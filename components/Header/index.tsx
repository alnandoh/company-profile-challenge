import HeroButton from "../HeroButton";
import InfiniteScroll from "../InfiniteScroll";

interface HeaderProps {
  heading1: string;
  content: string;
}

export default function Header({ heading1, content }: HeaderProps) {
  return (
    <section
      className="flex flex-col gap-5 md:p-10 lg:p-20 bg-dark-700 md:bg-shade-700/10
    md:backdrop-blur-[10px]"
    >
      <h1 className="font-semibold text-3xl md:text-6xl uppercase w-[300px] md:w-auto">
        {heading1}
      </h1>
      <p className="text-shade-500 text-sm md:text-lg">{content}</p>
      <HeroButton />
      <InfiniteScroll />
    </section>
  );
}
