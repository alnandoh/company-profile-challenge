import TestimonialsComp from "./components/testimonialsComp";
import AboutComp from "./components/aboutComp";
import Faq from "./components/faq";
import Hero from "./components/hero";
import ServicesComp from "./components/servicesComp";
import WorksComp from "./components/worksComp";
import Tagline from "./components/tagline";
import Timeline from "./components/timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <Tagline />
      <AboutComp />
      <Timeline />
      <ServicesComp />
      <WorksComp />
      <TestimonialsComp />
      <Faq />
    </>
  );
}
