import Image from "next/image";
import Card from "@/components/Card";
import CircleButton from "@/components/CircleButton";
import IconHolder from "@/components/IconHolder";
import Zenith from "@/public/Zenith.jpg";
import ZenithIcon from "@/public/MagicStick.svg";
import Aura from "@/public/Aura.jpg";
import AuraIcon from "@/public/Balloon.svg";

export default function WorksComp() {
  return (
    <section className="flex flex-col">
      <Card>
        <h2>Our Works</h2>
      </Card>
      <section className="grid gap-[10px]">
        <Image
          src={Zenith}
          alt="Zenith Image"
          className="w-full rounded-lg opacity-95"
        />
        <Card>
          <IconHolder
            imageUrl={ZenithIcon}
            altText="Zenith Icon"
            text="Zenith Fitness App"
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 w-max bg-dark-600 rounded-[45px] px-2.5 py-1.5">
              <p className="text-shade-600 text-xs">Category</p>
              <div className="rounded-full w-1 h-1 bg-primary-800"></div>
              <p className="text-shade-400 text-xs">Mobile App Development</p>
            </div>
            <div className="flex items-center gap-1 w-max bg-dark-600 rounded-[45px] px-2.5 py-1.5">
              <p className="text-shade-600 text-xs">Time Taken</p>
              <div className="rounded-full w-1 h-1 bg-primary-800"></div>
              <p className="text-shade-400 text-xs">6 months</p>
            </div>
            <p className="text-sm text-shade-400">
              An all-in-one health and wellness app that offers personalized
              fitness plans, nutrition guidance
            </p>
            <CircleButton text="Details" />
          </div>
        </Card>
        <Image
          src={Aura}
          alt="Aura Image"
          className="w-full rounded-lg opacity-95"
        />
        <Card>
          <IconHolder
            imageUrl={AuraIcon}
            altText="Aura Icon"
            text="Aura ECommerce"
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 w-max bg-dark-600 rounded-[45px] px-2.5 py-1.5">
              <p className="text-shade-600 text-xs">Category</p>
              <div className="rounded-full w-1 h-1 bg-primary-800"></div>
              <p className="text-shade-400 text-xs">Web Design & Dev</p>
            </div>
            <div className="flex items-center gap-1 w-max bg-dark-600 rounded-[45px] px-2.5 py-1.5">
              <p className="text-shade-600 text-xs">Time Taken</p>
              <div className="rounded-full w-1 h-1 bg-primary-800"></div>
              <p className="text-shade-400 text-xs">3 months</p>
            </div>
            <p className="text-sm text-shade-400">
              A complete overhaul of a corporate website to enhance its brand
              identity and user experience.
            </p>
            <CircleButton text="Details" />
          </div>
        </Card>
      </section>
      <div className="flex gap-2 py-5 bg-dark-700 items-center justify-center rounded-xl">
        <CircleButton image="DownArrow" text="All works" />
      </div>
    </section>
  );
}
