import Button from "@/components/Button";
import Card from "@/components/Card";
import IconHolder from "@/components/IconHolder";
import RulerCrossPath from "@/public/RulerCrossPen.svg";
import Smartphone from "@/public/Smartphone.svg";
import CodeCircle from "@/public/CodeCircle.svg";
import DigitalMarketing from "@/public/DigMar.svg";

const services = [
  {
    title: "Web Design",
    imageUrl: RulerCrossPath,
    altText: "Web Design Icon",
    startingPrice: "$1,500",
    description:
      "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression.",
  },
  {
    title: "Mobile App Development",
    imageUrl: Smartphone,
    altText: "Mobile App Development Icon",
    startingPrice: "$2,500",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications.",
  },
  {
    title: "Web Development",
    imageUrl: CodeCircle,
    altText: "Web Development Icon",
    startingPrice: "$1,800",
    description:
      "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
  },
  {
    title: "Digital Marketing",
    imageUrl: DigitalMarketing,
    altText: "Digital Marketing Icon",
    startingPrice: "$1,200",
    description:
      "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility.",
  },
];

export default function ServicesBrief() {
  return (
    <section className="space-y-2.5">
      <Card>
        <h2>Our Services</h2>
      </Card>
      <div className="grid gap-y-2.5 md:grid-cols-2 2xl:grid-cols-4 gap-2.5">
        {services.map((service, index) => (
          <Card key={index}>
            <div className="flex flex-row gap-4 items-center">
              <IconHolder
                imageUrl={service.imageUrl}
                altText={service.altText}
                text={service.title}
              />
            </div>
            <div>
              <p className="font-medium text-lg leading-[150%] mb-1">
                Starts From {service.startingPrice}
              </p>
              <p className="leading-[150%] text-sm text-shade-500">
                {service.description}
              </p>
            </div>
            <Button text="Book a call" href="#" />
          </Card>
        ))}
      </div>
    </section>
  );
}
