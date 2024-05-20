"use client";
import Card from "@/components/Card";
import Image from "next/image";
import TeamMemberDataFetcher from "@/hook/TeamMemberDataFetcher";
import Button from "@/components/Button";
import CultureSection from "../about/components/cultureSection";
import Header from "@/components/Header";

export default function Teams() {
  const teamMembers = TeamMemberDataFetcher();
  return (
    <>
      <Header
        heading1="ELEVATING BRAND IN THE DIGITAL AGE"
        content="Trailblazers in the digital landscape, dedicated to empowering brands to reach their full potential in the dynamic world of technology and innovation. Approaching with creativity, strategy, and technical expertise to craft bespoke solutions tailored to each client's unique needs."
      />
      <section className="space-y-2.5">
        <Card>
          <h2>Meet Our Team</h2>
        </Card>
        <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-2.5">
          {teamMembers.map((member) => (
            <Card key={member.id} className="!gap-2">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={member.avatar}
                  alt={`${member.first_name} ${member.last_name}`}
                  fill={true}
                  objectFit="cover"
                  loading="eager"
                  priority={true}
                />
              </div>

              <div className="p-4 flex flex-col gap-0.5">
                <h3 className="text-xl font-semibold">{`${member.first_name} ${member.last_name}`}</h3>
                <p className="md:text-lg text-primary-500">
                  {member.occupation}
                </p>
                <p className="text-sm md:text-lg text-primary-300">
                  {member.email}
                </p>
                <p className="md:text-lg text-shade-500 mt-3">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        <CultureSection />
        <Card>
          <h2>Join Our Team</h2>
          <p className="text-shade-500 mt-2">
            Interested in becoming a part of our dynamic team? Check out our
            career opportunities and apply today!
          </p>
          <Button text="View Careers" href="careers" />
        </Card>
      </section>
    </>
  );
}
