"use client";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Image from "next/image";
import TeamMemberDataFetcher from "@/hook/TeamMemberDataFetcher";

export default function TeamsSection() {
  const teamMembers = TeamMemberDataFetcher();
  return (
    <section className="flex flex-col">
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
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="p-4 flex flex-col gap-0.5">
              <h3 className="text-xl font-semibold">{`${member.first_name} ${member.last_name}`}</h3>
              <p className="md:text-lg text-primary-500">{member.occupation}</p>
            </div>
          </Card>
        ))}
      </div>
      <Button text="See More" href="teams" />
    </section>
  );
}
