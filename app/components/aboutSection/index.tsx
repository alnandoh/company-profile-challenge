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

const historyContent = {
  title: "HISTORY",
  content: `NexGen Digital embarked on its journey in 2020, marked by its founding year. With a mission to revolutionize digital solutions, it has since grown to deliver innovative services and secure major clients, paving the way for comprehensive digital marketing services.`,
};

const cultureContent = {
  title: "CULTURE",
  content: `We prioritize professionalism, excellence, and a healthy work-life balance. Our culture fosters continuous learning, growth, collaboration, and teamwork, empowering our team members to deliver exceptional digital solutions while thriving personally and professionally.`,
};

const contentData = [historyContent, cultureContent];

export default function AboutSection() {
  return (
    <>
      <section className="space-y-2.5">
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
        <Button text="Check our company" href="about" />
      </section>

      <section className="space-y-2.5">
        <Card>
          <h2>History & Culture</h2>
        </Card>
        <div className="grid md:grid-cols-2 gap-2.5">
          {contentData.map((content, index) => (
            <Card key={index}>
              <p className="text-xl">{content.title}</p>
              <p className="text-sm md:text-base text-shade-500">
                {content.content}
              </p>
            </Card>
          ))}
        </div>
        <Button text="Check our company" href="about" />
      </section>
    </>
  );
}
