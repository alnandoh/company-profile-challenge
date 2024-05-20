import TestimonialsSection from "./components/testimonialsSection";
import AboutSection from "./components/aboutSection";
import Faq from "./components/faq";
import Hero from "./components/hero";
import ServicesSection from "./components/servicesSection";
import WorksComp from "./components/worksSection";
import Tagline from "./components/tagline";
import TeamsSection from "./components/teamsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Tagline />
      <AboutSection />
      <ServicesSection />
      <WorksComp />
      <TestimonialsSection />
      <TeamsSection />
      <Faq />
    </>
  );
}
