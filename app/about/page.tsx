import Header from "@/components/Header";
import TeamsSection from "../components/teamsSection";
import CultureSection from "./components/cultureSection";
import Timeline from "./components/timeline";

export default function About() {
  return (
    <>
      <Header
        heading1="EMPOWERING YOUR DIGITAL VISIONS"
        content="At NexGen, we are committed to empowering your digital vision with innovative solutions tailored to your unique needs. Our team of skilled professionals, coupled with cutting-edge technologies, ensures that we deliver exceptional results that elevate your online presence."
      />
      <Timeline />
      <CultureSection hidden={true} />
      <TeamsSection />
    </>
  );
}
