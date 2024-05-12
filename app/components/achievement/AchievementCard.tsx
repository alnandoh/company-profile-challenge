interface AchievementCardProps {
  title: string;
  content: string;
  classname?: string;
}

export default function AchievementCard({
  title,
  content,
  classname,
}: AchievementCardProps) {
  return (
    <div
      className={`w-full py-4 bg-dark-700 rounded-xl flex flex-col items-center text-center gap-[10px] ${classname}`}
    >
      <div className="font-medium text-shade-600 uppercase leading-[150%]">
        {title}
      </div>
      <div className="font-semibold text-[40px] text-primary-600">
        {content}
      </div>
    </div>
  );
}
