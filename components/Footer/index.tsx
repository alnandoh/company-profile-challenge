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

const socialMediaLinks = [
  {
    url: "https://www.instagram.com/",
    imageUrl: Instagram,
    name: "Instagram",
  },
  {
    url: "https://www.twitter.com/",
    imageUrl: Twitter,
    name: "Twitter",
  },
  {
    url: "https://www.dribbble.com/",
    imageUrl: Dribbble,
    name: "Dribble",
  },
  {
    url: "https://www.behance.com/",
    imageUrl: Behance,
    name: "Behance",
  },
];

const footerLinks = [
  {
    title: "Home",
    links: [
      { label: "Why Us", href: "#whyUs" },
      { label: "Our Works", href: "#worksSection" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About Us", href: "/about" },
      { label: "Teams", href: "/teams" },
      { label: "Careers", href: "/careers" },
    ],
  },
  // {
  //   title: "Projects",
  //   links: ["Klothink", "Zenith", "Novus", "Apex"],
  // },
  // {
  //   title: "Blogs",
  //   links: ["Business", "Design", "Development"],
  // },
];

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
          "FOLLOW US ON SOCIAL MEDIA",
        ]}
      />
      <div className="flex flex-col gap-2.5">
        <div className="grid lg:grid-cols-3 gap-y-2.5 lg:gap-2.5">
          <div className="grid grid-cols-4 lg:grid-cols-2 justify-between gap-[10px]">
            {socialMediaLinks.map((social, index) => (
              <SocialMedia
                key={index}
                url={social.url}
                imageUrl={social.imageUrl}
                name={social.name}
              />
            ))}
          </div>
          <Card className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {footerLinks.map((section, index) => (
                <div key={index} className="flex flex-col gap-2.5">
                  <p className="font-bold text-lg text-primary-400 mb-1.5">
                    {section.title}
                  </p>
                  {section.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="text-shade-600 text-sm transition duration-200 ease-in-out hover:underline hover:text-shade-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </Card>
        </div>
        <Card className="md:flex-row md:justify-between items-center md:gap-8">
          <p className="font-medium text-xl md:text-lg text-primary-300">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <div className="flex justify-between items-center gap-3 md:place-self-end md:flex-grow">
            <input
              type="email"
              id="subscribeEmail"
              name="email"
              autoComplete="on"
              placeholder="Enter your email"
              className="w-full bg-dark-800 border-b border-dark-400 py-2 px-4 text-sm focus:outline-none md:text-base focus:border-primary-300 flex-grow md:max-w-[300px] md:ml-auto rounded-lg"
            />
            <CircleButton />
          </div>
        </Card>
        <Card>
          <div className="flex flex-col md:flex-row md:justify-between items-center text-shade-600 gap-5">
            <p className="text-primary-300">
              © 2024 NexGen&ensp;
              <br className="md:hidden" />
              All rights reserved
            </p>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
              <Link
                href="/"
                className="hover:font-medium hover:text-primary-100"
              >
                Terms & Conditions
              </Link>
              <div className="w-full border-b border-shade-800 md:hidden"></div>
              <Link
                href="/"
                className="hover:font-medium hover:text-primary-100"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
}
