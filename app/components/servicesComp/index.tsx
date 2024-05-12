import Button from "@/components/Button";
import Card from "@/components/Card";
import IconHolder from "@/components/IconHolder";
import RulerCrossPath from "@/public/RulerCrossPen.svg";
import Smartphone from "@/public/Smartphone.svg";
import CodeCircle from "@/public/CodeCircle.svg";
import DigitalMarketing from "@/public/DigMar.svg";

export default function ServicesComp() {
  return (
    <section className="flex flex-col">
      <Card>
        <h2>Our Services</h2>
      </Card>
      <Card>
        <div className="flex flex-row gap-4 items-center">
          <IconHolder
            imageUrl={RulerCrossPath}
            altText="Web Design Icon"
            text="Web Design"
          />
        </div>
        <div>
          <p className="font-medium text-lg leading-[150%] mb-1">
            Starts From $1,500
          </p>
          <p className="leading-[150%] text-sm">
            Our Web Design service is all about creating visually stunning and
            user-friendly websites that leave a lasting.
          </p>
        </div>
        <Button text="Book a call" />
      </Card>
      <Card>
        <div className="flex flex-row gap-4 items-center">
          <IconHolder
            imageUrl={Smartphone}
            altText="Mobile App Development Icon"
            text="Mobile App Development"
          />
        </div>
        <div>
          <p className="font-medium text-[18px] leading-[150%] mb-1">
            Starts From $2,500
          </p>
          <p className="leading-[150%] text-sm">
            With our Mobile App Development service, we harness the power of
            mobile technology to create cutting-edge applications.
          </p>
        </div>
        <Button text="Book a call" />
      </Card>
      <Card>
        <div className="flex flex-row gap-4 items-center">
          <IconHolder
            imageUrl={CodeCircle}
            altText="Web Development Icon"
            text="Web Development"
          />
        </div>
        <div>
          <p className="font-medium text-[18px] leading-[150%] mb-1">
            Starts From $1,800
          </p>
          <p className="leading-[150%] text-sm">
            Our Web Development service is focused on turning your website into
            a powerful digital asset. We utilize the latest technologies and
            industry best practices to build websites.
          </p>
        </div>
        <Button text="Book a call" />
      </Card>
      <Card>
        <div className="flex flex-row gap-4 items-center">
          <IconHolder
            imageUrl={DigitalMarketing}
            altText="Digital Marketing Icon"
            text="Digital Marketing"
          />
          <p className="uppercase font-medium text-xl leading[150%]"></p>
        </div>
        <div>
          <p className="font-medium text-[18px] leading-[150%] mb-1">
            Starts From $1,200
          </p>
          <p className="leading-[150%] text-sm">
            In the digital age, marketing is a critical aspect of your
            business&apos;s success. Our Digital Marketing service employs
            data-driven strategies to enhance your brand&apos;s visibility
          </p>
        </div>
        <Button text="Book a call" />
      </Card>
    </section>
  );
}
