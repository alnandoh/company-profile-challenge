import AchievementCard from "./AchievementCard";
import CircleButton from "@/components/CircleButton";

export default function Achievement() {
  return (
    <section className="grid grid-cols-2">
      <AchievementCard title="Clients" content="200+" />
      <AchievementCard title="Projects" content="280+" />

      <AchievementCard title="Happy Clients" content="100%" />
      <AchievementCard title="Follower" content="420K" />

      <AchievementCard
        title="years of experience"
        content="10+"
        classname="col-span-2"
      />
      <div className="bg-dark-700 flex justify-center items-center py-4 font-medium uppercase col-span-2 gap-2 rounded-xl">
        <CircleButton />
        Know More
      </div>
    </section>
  );
}
