import Image from "next/image";
import Link from "next/link";
import Whatsapp from "@/public/whatsapp.png";

export default function CTAButton() {
  return (
    <Link
      href="https://wa.me/message/MZ3TNFQEEAV5H1"
      className="fixed bottom-2 right-1 h-8 w-8 lg:h-10 lg:w-10 xl:w-14 xl:h-14 2xl:right-4 2xl:bottom-4 animate-bounce opacity-90"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Image src={Whatsapp} alt="Whatsapp Icon" width={56} height={56} />
    </Link>
  );
}
