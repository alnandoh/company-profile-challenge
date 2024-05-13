import type { Metadata } from "next";
import { Roboto_Mono, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import CTAButton from "@/components/CTAButton";
import BgParticles from "@/components/BgParticles";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });
const roboto_flex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexGen Agency Website",
  description: "Indonesia's next generation digital agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_flex.className}>
        <ProgressBar />
        <Navbar />
        {/* <BgParticles /> */}
        {children}
        <Footer />
        <ScrollToTop />
        <CTAButton />
      </body>
    </html>
  );
}
