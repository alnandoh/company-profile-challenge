import TestimonialsComp from "./components/testimonialsComp";
import AboutComp from "./components/aboutComp";
import Faq from "./components/faq";
import Hero from "./components/hero";
import ServicesComp from "./components/servicesComp";
import WorksComp from "./components/worksComp";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutComp />
      <ServicesComp />
      <WorksComp />
      <TestimonialsComp />
      <Faq />
    </>
  );
}