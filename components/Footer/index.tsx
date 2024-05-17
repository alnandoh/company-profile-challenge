import Link from "next/link";
import Button from "../Button";
import Card from "../Card";
import CircleButton from "../CircleButton";
import Instagram from "@/public/Instagram.svg";
import Twitter from "@/public/Twitter.svg";
import Dribbble from "@/public/Dribbble.svg";
import Behance from "@/public/Behance.svg";
import SocialMedia from "../SocialMedia";
import InfiniteScroll from "../InfiniteScroll";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-[10px] mb-6">
      <section className="bg-primary-800 p-[30px]">
        <div className="mb-4">
          <h2 className="text-dark-800 font-medium leading-tight">
            Ready to transform your digital presence?
          </h2>
          <p className="text-dark-800 text-sm mt-1">
            Take the first step towards digital success with NexGen by your
            side. Our team of experts is eager to craft tailored solutions that
            drive growth for your business.
          </p>
        </div>
        <Button
          bg="black"
          arrow={true}
          text="Get in touch"
          href="https://wa.me/message/MZ3TNFQEEAV5H1"
        />
      </section>
      <InfiniteScroll
        contents={[
          "FOLLOW US ON SOCIAL MEDIA",
          "FOLLOW US ON SOCIAL MEDIA",
          "FOLLOW US ON SOCIAL MEDIA",
          "FOLLOW US ON SOCIAL MEDIA",
        ]}
      />
      <div className="grid  gap-2.5">
        <div className="grid grid-cols-4 justify-between gap-[10px]">
          <SocialMedia
            url="https://www.instagram.com/"
            imageUrl={Instagram}
            altText="Instagram Icon"
          />
          <SocialMedia
            url="https://www.twitter.com/"
            imageUrl={Twitter}
            altText="Twitter Icon"
          />
          <SocialMedia
            url="https://www.dribbble.com/"
            imageUrl={Dribbble}
            altText="Dribble Icon"
          />
          <SocialMedia
            url="https://www.behance.com/"
            imageUrl={Behance}
            altText="Behance Icon"
          />
        </div>
        <div className="flex flex-col gap-2.5 ">
          <Card>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2.5">
                <p className="font-bold text-lg text-primary-400 mb-1.5">
                  Home
                </p>
                <Link href="/" className="text-shade-700 text-sm">
                  Why Us
                </Link>
                <Link href="/" className="text-shade-700 text-sm">
                  About Us
                </Link>
                <Link href="/" className="text-shade-700 text-sm">
                  Testimonials
                </Link>
                <Link href="/" className="text-shade-700 text-sm">
                  FAQ
                </Link>
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold text-lg text-primary-400 mb-1.5">
                  Services
                </p>
                <Link href="/" className="text-shade-700 text-sm">
                  Web Development
                </Link>
                <Link href="/" className="text-shade-700 text-sm">
                  App Development
                </Link>
                <Link href="/" className="text-shade-700 text-sm">
                  Web Design
                </Link>
                <Link href="/" className="text-shade-700 text-sm">
                  Digital Marketing
                </Link>
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold text-lg text-primary-400 mb-1.5">
                  Projects
                </p>
                <Link href="/" className="text-shade-700 text-sm">
                  Klothink
                </Link>
                <Link href="/" className="text-shade-700 text-sm">
                  Zenith
                </Link>
                <Link href="/" className="text-shade-700 text-sm">
                  Novus
                </Link>
                <Link href="/" className="text-shade-700 text-sm">
                  Apex
                </Link>
              </div>
              <div className="flex flex-col gap-[10px]">
                <p className="font-bold text-lg text-primary-400 mb-1.5">
                  Blogs
                </p>
                <Link href="/" className="text-shade-700 text-sm">
                  Business
                </Link>
                <Link href="/" className="text-shade-700 text-sm">
                  Design
                </Link>
                <Link href="/" className="text-shade-700 text-sm">
                  Development
                </Link>
              </div>
            </div>
          </Card>
          <Card className="md:flex-row md:justify-between md:gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-shade-600 text-sm mb-1">NEWSLETTER</p>
              <p className="font-medium text-xl md:text-lg">
                SUBSCRIBE TO OUR NEWSLETTER
              </p>
            </div>
            <div className="flex justify-between items-center gap-3 md:place-self-end md:flex-grow">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-dark-700 border-b border-dark-400 py-2 px-4 text-sm focus:outline-none md:text-base focus:border-primary-300 flex-grow"
              />
              <CircleButton />
            </div>
          </Card>
          <Card>
            <div className="flex flex-col md:flex-row md:justify-between items-center text-shade-600 gap-5">
              <p>
                © 2024 NexGen&ensp;
                <br className="md:hidden" />
                All rights reserved
              </p>
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
                <Link href="/">Terms & Conditions</Link>
                <div className="w-full border-b border-shade-800 md:hidden"></div>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </footer>
  );
}
