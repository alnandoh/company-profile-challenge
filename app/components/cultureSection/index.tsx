import Card from "@/components/Card";
import Button from "@/components/Button";

const companyCultureData = [
  {
    title: "Professionalism and Excellence",
    content:
      "We value professionalism and strive for excellence in everything we do. Our commitment to integrity, accountability, and quality ensures that we consistently deliver outstanding digital solutions to our clients.",
  },
  {
    title: "Work-Life Balance",
    content:
      "We believe in maintaining a healthy work-life balance. Our flexible working arrangements and supportive policies enable our team members to thrive both professionally and personally.",
  },
  {
    title: "Continuous Learning and Growth",
    content:
      "Learning is a continuous journey at NexGen Digital. We provide opportunities for our employees to grow and develop their skills, empowering them to stay ahead in the dynamic digital landscape.",
  },
  {
    title: "Collaboration and Teamwork",
    content:
      "We foster a culture of collaboration and teamwork. By working together effectively and supporting one another, we harness the collective strengths of our diverse team to drive innovation and success.",
  },
];

export default function CultureSection() {
  return (
    <section className="flex flex-col">
      <Card>
        <h2>Our Culture</h2>
      </Card>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2.5">
        {companyCultureData.map((item, index) => (
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
