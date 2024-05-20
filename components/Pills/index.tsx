interface PillsProps {
  contents: string[];
}
export default function Pills({ contents }: PillsProps) {
  return (
    <>
      {contents.map((content, index) => (
        <div
          key={index}
          className="rounded-[45px] px-2.5 py-1 bg-dark-600 text-sm text-shade-400 whitespace-nowrap transition ease-out duration-200 
          hover:scale-110 hover:text-primary-600"
        >
          <p>{content}</p>
        </div>
      ))}
    </>
  );
}
