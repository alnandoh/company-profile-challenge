import Header from "@/components/Header";
import ServicesSection from "../components/servicesSection";
import TestimonialsSection from "../components/testimonialsSection";

export default function Services() {
  return (
    <>
      <Header
        heading1="OUR COMPLETE DIGITAL SOLUTIONS"
        content="At NexGen, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation."
      />
      <ServicesSection details={true} />
      <TestimonialsSection />
    </>
  );
}
