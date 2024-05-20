interface PillProps {
  title: string;
  content: string | undefined;
}

export default function Pill({ title, content }: PillProps) {
  return (
    <div className="flex items-center gap-1 w-max bg-dark-600 rounded-[45px] px-2.5 py-1.5">
      <p className="text-shade-600 text-xs xl:text-sm">{title}</p>
      <div className="rounded-full w-1 h-1 bg-primary-800"></div>
      <p className="text-shade-400 text-xs xl:text-sm">{content}</p>
    </div>
  );
}
