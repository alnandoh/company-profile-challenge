import Button from "../Button";

export default function Form() {
  return (
    <form className="flex flex-col gap-5">
      <h3>Ask Your questions</h3>
      <hr />
      <div className="flex flex-col gap-[10px]">
        <div>
          <p className="font-medium leading-6 mb-2">NAME</p>
          <input
            type="text"
            placeholder="Enter your name"
            className="p-4 bg-dark-800 text-shade-800 w-full rounded-lg"
          ></input>
        </div>
        <div>
          <p className="font-medium leading-6 mb-2">EMAIL</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="p-4 bg-dark-800 text-shade-800 w-full rounded-lg"
          ></input>
        </div>
        <div>
          <p className="font-medium leading-6 mb-2">YOUR QUESTIONS</p>
          <textarea
            placeholder="Enter your question here..."
            className="p-4 bg-dark-800 text-shade-800 w-full rounded-lg"
          ></textarea>
        </div>
      </div>
      <Button text="Send your message" />
    </form>
  );
}
