import AchievementCard from "./AchievementCard";

const achievementsData = [
  { title: "Clients", content: "200+" },
  { title: "Projects", content: "280+" },
  { title: "Happy Clients", content: "100%" },
  { title: "Follower", content: "420K" },
  {
    title: "Years of Experience",
    content: "10+",
    classname: "col-span-2 lg:col-span-1",
  },
];

export default function Achievement() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-5 lg:-mt-[50px]">
      {achievementsData.map((achievement, index) => (
        <AchievementCard
          key={index}
          title={achievement.title}
          content={achievement.content}
          classname={achievement.classname}
        />
      ))}
    </section>
  );
}
