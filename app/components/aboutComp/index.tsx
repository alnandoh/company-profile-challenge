import Card from "@/components/Card";
import Button from "@/components/Button";

const aboutData = [
  {
    title: "Cutting-Edge Technologies",
    content:
      "At NexGen, we leverage cutting-edge technologies to empower your projects with innovative and future-proof solutions. Our team stays updated with the latest trends and advancements to deliver top-notch results.",
  },
  {
    title: "Proven Track Record",
    content:
      "With a proven track record of success, NexGen consistently exceeds client expectations. We tailor our web solutions to meet diverse needs, ensuring reliability, effectiveness, and client satisfaction.",
  },
  {
    title: "Client-Centric Approach",
    content:
      "At NexGen, we prioritize your needs and goals. Our client-centric approach involves thorough understanding and transparent communication throughout the development process. Your satisfaction is our priority.",
  },
  {
    title: "Dedicated Team of Experts",
    content:
      "Our dedicated team of experts is committed to delivering excellence. With a wealth of expertise, we ensure the delivery of scalable, secure, and high-quality web solutions tailored to your business.",
  },
];

export default function AboutComp() {
  return (
    <section className="flex flex-col">
      <Card>
        <h2>Reasons to Choose NexGen for Your Digital Journey</h2>
      </Card>
      <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-2.5">
        {aboutData.map((item, index) => (
          <Card key={index}>
            <div className="flex flex-col gap-2 ">
              <p className="text-xl uppercase font-medium leading-[150%]">
                {item.title}
              </p>
              <p className="text-sm leading-[150%] text-shade-500">
                {item.content}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <Button text="Learn More" href="about" />
    </section>
  );
}
