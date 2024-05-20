import Button from "@/components/Button";
import Card from "@/components/Card";
import IconHolder from "@/components/IconHolder";
import Pill from "@/components/Pill";
import Suitcase from "@/public/Suitcase.svg";

const jobAvailable = [
  {
    icon: Suitcase,
    name: "Web Designer",
    salary: "$45,000 - $60,000 per year",
    experience: "1+ years",
    deadline: "30/09/2025",
    skills:
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.",
  },
  {
    icon: Suitcase,
    name: "Mobile App Developer",
    salary: "$55,000 - $75,000 per year",
    experience: "2+ years",
    deadline: "15/10/2025",
    skills:
      "Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.",
  },
  {
    icon: Suitcase,
    name: "Digital Marketing Specialist",
    salary: "$50,000 - $65,000 per year",
    experience: "3+ years",
    deadline: "20/11/2025",
    skills:
      "Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.",
  },
  {
    icon: Suitcase,
    name: "Project Manager",
    salary: "$60,000 - $80,000 per year",
    experience: "5+ years",
    deadline: "05/12/2025",
    skills:
      "Strong organizational and communication skills, ability to manage project timelines and resources, experience in Agile project management methodologies.",
  },
];

export default function CareerSection() {
  return (
    <section className="space-y-2.5" id="servicesSection">
      <Card>
        <h2>Join Our Team at NexGen</h2>
      </Card>
      <div className="grid md:grid-cols-2 gap-y-2.5 md:gap-2.5">
        {jobAvailable.map((job, index) => (
          <Card key={index}>
            <IconHolder
              imageUrl={job.icon}
              altText={job.name || ""}
              text={job.name || ""}
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 lg:flex-row">
                <Pill title="Salary" content={job.salary} />
                <Pill title="Experience" content={job.experience} />
              </div>
              <Pill title="Deadline" content={job.deadline} />
            </div>
            <div>
              <p>Skills</p>
              <p className="text-sm text-shade-500">{job.skills}</p>
            </div>
            <Button text="Apply Now" href="#" />
          </Card>
        ))}
      </div>
    </section>
  );
}
