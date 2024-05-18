"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Image from "next/image";

interface TeamMember {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  occupation: string;
}

export default function TeamsSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    };

    fetchFunction().then((data) => {
      if (data) {
        setTeamMembers(
          data.data.slice(0, 4).map((member: any, index: number) => ({
            ...member,
            email: index === 0 ? "CEO & Founder" : member.email,
            occupation:
              index === 0
                ? "CEO & Founder"
                : `Lead ${
                    index === 1
                      ? "Designer"
                      : index === 2
                      ? "Frontend Dev"
                      : "Backend Dev"
                  }`,
          }))
        );
      }
    });
  }, []);

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

              <p className="text-sm text-shade-500">Contact: {member.email}</p>
            </div>
          </Card>
        ))}
      </div>
      <Button text="See More" href="teams" />
    </section>
  );
}
