import CircleButton from "@/components/CircleButton";
import Card from "@/components/Card";

export default function AboutComp() {
  return (
    <section className="flex flex-col ">
      <Card>
        <h2>Reasons to Choose NexGen for Your Digital Journey</h2>
      </Card>
      <Card>
        <div className="flex flex-col gap-2">
          <p className="text-xl uppercase font-medium leading-[150%]">
            Expertise in Cutting-Edge Technologies
          </p>
          <p className="text-sm leading-[150%] text-shade-600">
            NexGen ensures your projects are powered by state-of-the-art
            technologies, guaranteeing innovation and future-proof solutions.
          </p>
        </div>
        <div className="flex gap-2 items-center leading-[150%] text-shade-600">
          <CircleButton />
          Learn More
        </div>
      </Card>
      <Card>
        <div className="flex flex-col gap-2">
          <p className="text-xl uppercase font-medium leading-[150%]">
            Proven Track Record of Success
          </p>
          <p className="text-sm leading-[150%] text-shade-600">
            NexGen demonstrates a consistent ability to meet and exceed client
            expectations, providing reliable and effective web solutions
            tailored to diverse needs.
          </p>
        </div>
        <div className="flex gap-2 items-center leading-[150%] text-shade-600">
          <CircleButton />
          Learn More
        </div>
      </Card>
      <Card>
        <div className="flex flex-col gap-2">
          <p className="text-xl uppercase font-medium leading-[150%]">
            Client-Centric Approach{" "}
          </p>
          <p className="text-sm leading-[150%] text-shade-600">
            At NexGen, we prioritize understanding our client&apos;s unique
            requirements, fostering transparent communication throughout the
            development process.
          </p>
        </div>
        <div className="flex gap-2 items-center leading-[150%] text-shade-600">
          <CircleButton />
          Learn More
        </div>
      </Card>
      <Card>
        <div className="flex flex-col gap-2">
          <p className="text-xl uppercase font-medium leading-[150%]">
            Dedicated Team of Professionals{" "}
          </p>
          <p className="text-sm leading-[150%] text-shade-600">
            Our professionals bring a wealth of expertise to the table, ensuring
            the delivery of top-notch, scalable, and secure web solutions for
            your business.
          </p>
        </div>
        <div className="flex gap-2 items-center leading-[150%] text-shade-600">
          <CircleButton />
          Learn More
        </div>
      </Card>
    </section>
  );
}
