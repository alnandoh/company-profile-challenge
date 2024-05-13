import HeroButton from "@/components/HeroButton";
import Achievement from "../achievement";
import InfiniteScroll from "@/components/InfiniteScroll";

const videoUrl =
  "https://res.cloudinary.com/dswhfzczf/video/upload/f_auto:video,q_auto/meeting-conference";

export default function Hero() {
  return (
    <>
      <section className="bg-dark-700 flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-[28px] uppercase">
            Digital solutions
            <br /> that drive success
          </h1>
          <HeroButton />
        </div>
        <p className="text-shade-500 text-sm leading-[150%]">
          At NexGen, we believe in the transformative power of digital
          solutions. Our team of experts is dedicated to helping businesses like
          yours thrive in the fast-paced digital landscape.
        </p>
        <InfiniteScroll />
      </section>
      <Achievement />
    </>
  );
}
