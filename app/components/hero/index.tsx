import HeroButton from "@/components/HeroButton";
import Achievement from "../achievement";
import InfiniteScroll from "@/components/InfiniteScroll";
import VideoPlayer from "@/components/VideoPlayer";

const videoUrl =
  "https://res.cloudinary.com/dswhfzczf/video/upload/f_auto:video,q_auto/meeting-conference";

export default function Hero() {
  return (
    <>
      <section className=" flex flex-col gap-5 md:p-10 lg:p-20 lg:gap-8 relative overflow-hidden bg-dark-800">
        <VideoPlayer videoSrc={videoUrl} />
        <h1 className="font-semibold text-3xl md:text-6xl uppercase">
          Digital solutions
          <br /> that drive success
        </h1>
        <p className="text-shade-500 text-sm md:text-lg">
          At NexGen, we believe in the transformative power of digital
          solutions. <br className="hidden md:block" />
          Our team of experts is dedicated to helping businesses like yours
          thrive in the fast-paced digital landscape.
        </p>
        <HeroButton />
        <div className="my-2 hidden md:block"></div>
        <InfiniteScroll />
      </section>
      <Achievement />
    </>
  );
}
