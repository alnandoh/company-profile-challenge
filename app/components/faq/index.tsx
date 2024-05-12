import Button from "@/components/Button";
import Card from "@/components/Card";
import CircleButton from "@/components/CircleButton";

export default function Faq() {
  return (
    <section className="flex flex-col">
      <Card>
        <h2>Frequently Asked Questions</h2>
      </Card>
      <Card>
        <div className="flex justify-between items-center gap-5">
          <p className="text-lg font-medium">
            How long does it take to complete a web development project?
          </p>
          <CircleButton />
        </div>
        <hr />
        <p className="text-sm text-shade-600">
          The timeline varies depending on the project&apos;s complexity and
          requirements. Our team strives to deliver projects on time while
          maintaining the highest quality standards.
        </p>
      </Card>
      <Card>
        <div className="flex justify-between items-center gap-5">
          <p className="text-lg font-medium">
            How long does it take to complete a web development project?
          </p>
          <CircleButton />
        </div>
        <hr />
        <p className="text-sm text-shade-600">
          The timeline varies depending on the project&apos;s complexity and
          requirements. Our team strives to deliver projects on time while
          maintaining the highest quality standards.
        </p>
      </Card>
      <Card>
        <div className="flex justify-between items-center gap-5">
          <p className="text-lg font-medium">
            How long does it take to complete a web development project?
          </p>
          <CircleButton />
        </div>
        <hr />
        <p className="text-sm text-shade-600">
          The timeline varies depending on the project&apos;s complexity and
          requirements. Our team strives to deliver projects on time while
          maintaining the highest quality standards.
        </p>
      </Card>
      <Card>
        <div className="flex justify-between items-center gap-5">
          <p className="text-lg font-medium">
            How long does it take to complete a web development project?
          </p>
          <CircleButton />
        </div>
        <hr />
        <p className="text-sm text-shade-600">
          The timeline varies depending on the project&apos;s complexity and
          requirements. Our team strives to deliver projects on time while
          maintaining the highest quality standards.
        </p>
      </Card>
      <Card>
        <div className="flex justify-between items-center gap-5">
          <p className="text-lg font-medium">
            How long does it take to complete a web development project?
          </p>
          <CircleButton />
        </div>
        <hr />
        <p className="text-sm text-shade-600">
          The timeline varies depending on the project&apos;s complexity and
          requirements. Our team strives to deliver projects on time while
          maintaining the highest quality standards.
        </p>
      </Card>
      <Card>
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
      </Card>
    </section>
  );
}
