import Card from "@/components/Card";
import TestimonialGiver from "./TestimonialGiver";
import Reviewer1 from "@/public/Reviewer1.png";
import Reviewer2 from "@/public/Reviewer2.png";
import Reviewer3 from "@/public/Reviewer3.png";
import CircleButton from "@/components/CircleButton";

export default function TestimonialsComp() {
  return (
    <section className="flex flex-col">
      <Card>
        <h2>Testimonials</h2>
      </Card>
      <Card>
        <div className="flex flex-col gap-4">
          <p className="text-xl uppercase font-medium leading-[150%]">
            NexGen turned our business around!
          </p>
          <p className="text-sm leading-[150%] text-shade-600">
            Their digital marketing strategies helped us reach new customers and
            increase our revenue by 30% within just a few months. Highly
            recommended!
          </p>
        </div>
        <TestimonialGiver
          name="Sarah Thompson"
          occupation="CEO of BlueBloom"
          image={Reviewer1}
        />
      </Card>
      <Card>
        <div className="flex flex-col gap-4">
          <p className="text-xl uppercase font-medium leading-[150%]">
            Working with NexGen was a pleasure!
          </p>
          <p className="text-sm leading-[150%] text-shade-600">
            Their web design team created a stunning website that perfectly
            captured our brand&Apos;s essence. The feedback from our customers
            has been overwhelmingly positive.
          </p>
        </div>
        <TestimonialGiver
          name="Wade Warren"
          occupation="Blizz Art Director"
          image={Reviewer2}
        />
      </Card>
      <Card>
        <div className="flex flex-col gap-4">
          <p className="text-xl uppercase font-medium leading-[150%]">
            NexGen give more than expected!
          </p>
          <p className="text-sm leading-[150%] text-shade-600">
            From the outset, we were astounded by their dedication to optimizing
            our business&apos; success. Their services far exceed what we pay
            for. Give them a try and prepare to be amazed!
          </p>
        </div>
        <TestimonialGiver
          name="Lisa Williams"
          occupation="CEO of HealthTech"
          image={Reviewer3}
        />
      </Card>
      <div className="flex gap-2 py-5 bg-dark-700 items-center justify-center rounded-xl">
        <CircleButton image="DownArrow" text="All Works" />
      </div>
    </section>
  );
}
