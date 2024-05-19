import TestimonialsSection from "./components/testimonialsSection";
import AboutSection from "./components/aboutSection";
import Faq from "./components/faq";
import Hero from "./components/hero";
import ServicesBrief from "./components/servicesBrief";
import WorksComp from "./components/worksSection";
import Tagline from "./components/tagline";
import TeamsSection from "./components/teamsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Tagline />
      <AboutSection />
      <ServicesBrief />
      <WorksComp />
      <TestimonialsSection />
      <TeamsSection />
      <Faq />
    </>
  );
}
