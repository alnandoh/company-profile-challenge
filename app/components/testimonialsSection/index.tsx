import Card from "@/components/Card";
import TestimonialGiver from "./TestimonialGiver";
import Reviewer1 from "@/public/Reviewer1.png";
import Reviewer2 from "@/public/Reviewer2.png";
import Reviewer3 from "@/public/Reviewer3.png";
import Reviewer4 from "@/public/Reviewer4.png";
import CircleButton from "@/components/CircleButton";

const testimonials = [
  {
    title: "NexGen turned our business around!",
    content:
      "Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
    name: "Sarah Thompson",
    occupation: "CEO of BlueBloom",
    image: Reviewer1,
  },
  {
    title: "Working with NexGen was a pleasure!",
    content:
      "Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
    name: "Wade Warren",
    occupation: "Blizz Art Director",
    image: Reviewer2,
  },
  {
    title: "NexGen give more than expected!",
    content:
      "From the outset, we were astounded by their dedication to optimizing our business' success. Their services far exceed what we pay for. Give them a try and prepare to be amazed!",
    name: "Lisa Williams",
    occupation: "CEO of HealthTech",
    image: Reviewer3,
  },
  {
    title: "NexGen's web design is a masterpiece!",
    content:
      "Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.",
    name: "Jennifer Lee",
    occupation: "COO of Foodie Haven",
    image: Reviewer4,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="space-y-2.5">
      <Card>
        <h2>Testimonials</h2>
      </Card>
      <div className="grid gap-y-2.5 md:grid-cols-2 2xl:grid-cols-4 gap-2.5 ">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <div className="flex flex-col gap-4">
              <p className="text-lg uppercase font-medium leading-[150%]">
                {testimonial.title}
              </p>
              <p className="text-sm leading-[150%] text-shade-600">
                {testimonial.content}
              </p>
            </div>
            <TestimonialGiver
              name={testimonial.name}
              occupation={testimonial.occupation}
              image={testimonial.image}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}
