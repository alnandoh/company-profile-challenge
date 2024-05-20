import Button from "@/components/Button";
import Card from "@/components/Card";
import IconHolder from "@/components/IconHolder";
import RulerCrossPath from "@/public/RulerCrossPen.svg";
import Smartphone from "@/public/Smartphone.svg";
import CodeCircle from "@/public/CodeCircle.svg";
import DigitalMarketing from "@/public/DigMar.svg";
import WebDes1 from "@/public/WebDes1.webp";
import WebDes2 from "@/public/WebDes2.webp";
import WebDev1 from "@/public/WebDev1.webp";
import WebDev2 from "@/public/WebDev2.webp";
import DigMar1 from "@/public/DigMar1.webp";
import DigMar2 from "@/public/DigMar2.webp";
import MobileApp1 from "@/public/MobileApp1.webp";
import MobileApp2 from "@/public/MobileApp2.webp";
import Image from "next/image";
import CircleButton from "@/components/CircleButton";
import React from "react";

const services = [
  {
    title: "Web Design",
    imageUrl: RulerCrossPath,
    altText: "Web Design Icon",
    startingPrice: "$1,500",
    description:
      "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression.",
    images: [WebDes1, WebDes2],
  },
  {
    title: "Mobile App Development",
    imageUrl: Smartphone,
    altText: "Mobile App Development Icon",
    startingPrice: "$2,500",
    description:
      "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications.",
    images: [MobileApp1, MobileApp2],
  },
  {
    title: "Web Development",
    imageUrl: CodeCircle,
    altText: "Web Development Icon",
    startingPrice: "$1,800",
    description:
      "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
    images: [WebDev1, WebDev2],
  },
  {
    title: "Digital Marketing",
    imageUrl: DigitalMarketing,
    altText: "Digital Marketing Icon",
    startingPrice: "$1,200",
    description:
      "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility.",
    images: [DigMar1, DigMar2],
  },
];

interface ServicesSectionProps {
  details?: boolean;
}

export default function ServicesSection({ details }: ServicesSectionProps) {
  return (
    <section className="space-y-2.5" id="servicesSection">
      <Card>
        <h2>Our Services</h2>
      </Card>
      <div
        className={`grid gap-y-2.5 gap-2.5 ${
          details ? "lg:grid-cols-3" : " xl:grid-cols-4 md:grid-cols-2"
        }`}
      >
        {services.map((service, index) => (
          <React.Fragment key={index}>
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
                  Starts From{" "}
                  <span className="text-xl text-primary-700 animate-pulse">
                    {service.startingPrice}
                  </span>
                </p>
                <p className="leading-[150%] text-sm text-shade-500">
                  {service.description}
                </p>
              </div>
              <Button text="Book a call" href="#" />
            </Card>
            {details && (
              <Card className="hidden md:flex lg:col-span-2 md:flex-col ">
                <div className="flex items-center justify-between gap-2.5">
                  <p className="uppercase">PROJECTS</p>
                  <CircleButton text="View project" />
                </div>
                <div className="flex gap-2.5">
                  {service.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative w-1/2 rounded-lg overflow-hidden md:h-72 lg:h-52 xl:h-72 border border-dark-500"
                    >
                      <Image
                        src={image}
                        alt={`${service.title} Project ${imgIndex + 1}`}
                        className="object-cover"
                        fill
                      />
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
