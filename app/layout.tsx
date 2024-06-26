import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import ScrollToTop from "@/components/ScrollToTop";
import CTAButton from "@/components/CTAButton";
import BgParticles from "@/components/BgParticles";

const roboto_flex = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexGen Agency Website",
  description: "Indonesia's next generation digital agency",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dswhfzczf/video/upload/v1716176914/meeting-conference1.webm"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto_flex.className}>
        <ProgressBar />
        <Navbar />
        <BgParticles />
        {children}
        <Footer />
        <ScrollToTop />
        <CTAButton />
      </body>
    </html>
  );
}
