import Link from "next/link";

export default function Page() {
  return (
    <div className="fixed top-0 left-0 bg-dark-800 h-screen w-screen mx-auto flex justify-center items-center z-10">
      <div className="flex justify-center items-center gap-4 flex-col">
        <h3 className="text-primary-800 text-4xl font-bold mb-5">NOT FOUND</h3>
        <Link
          href="/"
          className="w-[150px] text-center px-5 py-[18px] rounded-[5px] bg-primary-800 border-[1px] border-dark-700 text-white font-semibold leading-5 
					hover:bg-color-primary/800 transition-all duration-300 hover:scale-105 hover:ease-in-out"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
