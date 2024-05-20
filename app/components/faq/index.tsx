import Accordion from "@/components/Accordion";
import Card from "@/components/Card";
import Form from "@/components/Form";

const faqs = [
  {
    question: "How long does it take to complete a web development project?",
    answer:
      "The timeline varies depending on project's complexity & requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "Can you handle large-scale mobile app development project?",
    answer:
      "Yes, we have extensive experience in handling large-scale mobile app development projects. Our team is equipped with the necessary skills and resources to deliver high-quality mobile apps that meet your requirements and scale as your business grows.",
  },
  {
    question: "Can you integrate third-party APIs into our mobile app?",
    answer:
      "Absolutely! We specialize in integrating third-party APIs into mobile apps to enhance functionality and provide seamless user experiences. Whether it's payment gateways, social media integrations, or other APIs, we can handle it.",
  },
  {
    question: "How do you ensure cross-platform compatibility for mobile app?",
    answer:
      "We utilize industry-leading frameworks and technologies to ensure cross-platform compatibility for mobile apps. By using frameworks like React Native and Flutter, we can develop apps that work seamlessly across iOS and Android devices, saving time and resources.",
  },
  {
    question: "What is your approach to user experience (UX) design?",
    answer:
      "Our approach to UX design is user-centric and data-driven. We conduct thorough research to understand your target audience and their needs, which informs our design decisions. We focus on creating intuitive interfaces and smooth user flows to enhance the overall user experience.",
  },
];

export default function Faq() {
  return (
    <section className="space-y-2.5" id="faq">
      <Card>
        <h2>Frequently Asked Questions</h2>
      </Card>
      <div className="grid gap-y-2.5 lg:grid-cols-5 lg:gap-2.5">
        <div className="flex flex-col lg:col-span-3 gap-2.5">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <Accordion title={faq.question} content={faq.answer} />
            </Card>
          ))}
        </div>
        <Card className="lg:col-span-2">
          <Form />
        </Card>
      </div>
    </section>
  );
}
