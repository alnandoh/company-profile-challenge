interface PillProps {
  contents: string[];
}
export default function Pill({ contents }: PillProps) {
  return (
    <>
      {contents.map((content, index) => (
        <div
          key={index}
          className="rounded-[45px] px-2.5 py-1 bg-dark-600 text-sm text-shade-400 whitespace-nowrap"
        >
          {content}
        </div>
      ))}
    </>
  );
}
