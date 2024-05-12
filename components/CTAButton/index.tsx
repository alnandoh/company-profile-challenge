import Image from "next/image";
import Link from "next/link";
import Whatsapp from "@/public/whatsapp.png";

export default function CTAButton() {
  return (
    <Link
      href="https://wa.me/message/MZ3TNFQEEAV5H1"
      className="fixed bottom-2 right-1 h-8  w-8 lg:w-16 lg:h-16 lg:right-4 lg:bottom-4 animate-bounce"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Image src={Whatsapp} alt="Whatsapp Icon" />
    </Link>
  );
}
