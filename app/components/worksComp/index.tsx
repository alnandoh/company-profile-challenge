import Image from "next/image";
import Card from "@/components/Card";
import CircleButton from "@/components/CircleButton";
import IconHolder from "@/components/IconHolder";
import Zenith from "@/public/Zenith.jpg";
import ZenithIcon from "@/public/MagicStick.svg";
import Aura from "@/public/Aura.jpg";
import AuraIcon from "@/public/Balloon.svg";
import Pill from "@/components/Pill";

const works = [
  {
    image: Zenith,
    altText: "Zenith Image",
    icon: ZenithIcon,
    title: "Zenith Fitness App",
    category: "Mobile App Development",
    timeTaken: "6 months",
    description:
      "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance.",
    technologies: ["React Native", "Firebase", "Redux", "REST API", "MongoDB"],
  },
  {
    image: Aura,
    altText: "Aura Image",
    icon: AuraIcon,
    title: "Aura ECommerce",
    category: "Web Design & Dev",
    timeTaken: "3 months",
    description:
      "A complete overhaul of a corporate website to enhance its brand identity and user experience.",
    technologies: ["Wordpress", "PHP", "HTML5", "CSS3", "JavaScript"],
  },
];

export default function WorksComp() {
  return (
    <section className="flex flex-col">
      <Card>
        <h2>Our Works</h2>
      </Card>
      <section className="flex flex-col gap-2.5">
        {works.map((work, index) => (
          <div key={index} className="grid gap-y-2.5 lg:grid-cols-3 lg:gap-2.5">
            <div className="relative h-64 lg:h-full lg:order-2">
              <Image
                src={work.image}
                alt={work.altText}
                className="rounded-lg opacity-95 object-cover"
                fill
              />
            </div>

            <Card className="lg:order-1">
              <div className="flex flex-col gap-2.5 lg:gap-7">
                <IconHolder
                  imageUrl={work.icon}
                  altText={work.altText}
                  text={work.title}
                />
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 w-max bg-dark-600 rounded-[45px] px-2.5 py-1.5">
                    <p className="text-shade-600 text-xs xl:text-sm">
                      Category
                    </p>
                    <div className="rounded-full w-1 h-1 bg-primary-800"></div>
                    <p className="text-shade-400 text-xs xl:text-sm">
                      {work.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 w-max bg-dark-600 rounded-[45px] px-2.5 py-1.5">
                    <p className="text-shade-600 text-xs xl:text-sm">
                      Time Taken
                    </p>
                    <div className="rounded-full w-1 h-1 bg-primary-800"></div>
                    <p className="text-shade-400 text-xs xl:text-sm">
                      {work.timeTaken}
                    </p>
                  </div>
                </div>

                <p className="text-sm xl:text-base text-shade-400 lg:mt-1.5">
                  {work.description}
                </p>
                <CircleButton text="Details" />
              </div>
            </Card>

            <div className="hidden lg:flex lg:flex-col lg:gap-2.5 lg:order-3">
              <Card>
                <p className="text-base font-medium">TECHNOLOGIES USED</p>
                <div className="flex flex-wrap gap-2.5">
                  <Pill contents={work.technologies} />
                </div>
              </Card>
              <Card>
                <p className="text-base font-medium">TEAM MEMBERS</p>
              </Card>
            </div>
          </div>
        ))}
      </section>
      <div className="flex gap-2 py-5 bg-dark-700 items-center justify-center rounded-xl">
        <CircleButton image="DownArrow" text="All works" />
      </div>
    </section>
  );
}
