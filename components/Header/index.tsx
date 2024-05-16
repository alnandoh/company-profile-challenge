import HeroButton from "../HeroButton";
import InfiniteScroll from "../InfiniteScroll";

interface HeaderProps {
  heading1: string;
  content: string;
}

export default function Header({ heading1, content }: HeaderProps) {
  return (
    <section className="bg-dark-700 flex flex-col gap-5 md:p-10">
      <h1 className="font-semibold text-3xl md:text-6xl uppercase">
        {heading1}
      </h1>
      <p className="text-shade-500 text-sm md:text-lg leading-[150%]">
        {content}
      </p>
      <HeroButton />
      <InfiniteScroll />
    </section>
  );
}
