import Card from "@/components/Card";

const milestones = [
  {
    year: "2020",
    events: [
      {
        name: "Foundation Year",
        description:
          "NexGen Digital established with the mission to provide innovative digital solutions.",
      },
      {
        name: "First Major Client",
        description:
          "Secured first major client, delivering comprehensive digital marketing services.",
      },
    ],
  },
  {
    year: "2021",
    events: [
      {
        name: "Team Expansion",
        description:
          "Grew the team to 20 professionals across various digital specialties.",
      },
      {
        name: "Service Expansion",
        description:
          "Introduced new services including mobile app development & branding.",
      },
      {
        name: "Award Recognition",
        description:
          "Received an industry award for outstanding web development.",
      },
    ],
  },
  {
    year: "2022",
    events: [
      {
        name: "Client Milestone",
        description:
          "Reached 100 clients, showcasing trust & reliability in digital services.",
      },
      {
        name: "Global Reach",
        description:
          "Expanded services to international markets, enhancing global presence.",
      },
      {
        name: "Community Engagement",
        description:
          "Launched community initiatives to support local businesses & startups.",
      },
    ],
  },
  {
    year: "2023",
    events: [
      {
        name: "Technological Innovation",
        description:
          "Integrated AI & ML into service offerings to enhance client solutions.",
      },
      {
        name: "Sustainability Focus",
        description:
          "Implemented eco-friendly practices in digital operations.",
      },
      {
        name: "Industry Leadership",
        description:
          "Recognized as digital solutions leader, driving innovation & success continuously.",
      },
    ],
  },
];

export default function Timeline() {
  return (
    <section>
      <Card>
        <h2>Our Journey</h2>
      </Card>
      <section className="grid gap-2.5 grid-cols-1 md:grid-cols-2">
        {milestones.map((milestone, index) => (
          <Card key={index}>
            <div className="w-fit mt-2 mb-1 ml-2 text-xl lg:text-2xl bg-dark-600 rounded-lg px-2 py-1 text-primary-700 transition duration-200 ease-in-out hover:text-primary-800 hover:scale-110">
              {milestone.year}
            </div>
            {milestone.events.map((event, idx) => (
              <div key={idx} className="my-1 gap-0.5 md:gap-1 2xl:gap-2">
                <p className="text-xl font-semibold mb-1">{event.name}</p>
                <p className="text-base text-shade-500">{event.description}</p>
              </div>
            ))}
          </Card>
        ))}
      </section>
    </section>
  );
}
