import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What services does Athaqofy Global Services provide?",
      answer:
        "We specialize in Hajj and Umrah tours, visa processing, and hotel bookings. Our team ensures a seamless experience from documentation and travel arrangements to spiritual guidance and on-ground support.",
    },
    {
      question: "Are your Hajj and Umrah packages customizable?",
      answer:
        "Yes, we offer customizable packages to suit your preferences, group size, and budget. Whether you're traveling alone, as a family, or with a large group, we tailor the itinerary, accommodation, and services accordingly.",
    },
    {
      question:
        "How is Athaqofy different from other pilgrimage travel agencies?",
      answer:
        "Athaqofy combines certified expertise, spiritual care, and hospitality excellence. We are not just a travel provider—we are a faith-focused partner that supports you before, during, and after your journey with education, preparation, and personal guidance.",
    },
    {
      question: "Do you provide educational resources before the pilgrimage?",
      answer:
        "Absolutely. We offer educational seminars, orientation videos, and printed materials to help you understand the spiritual and practical aspects of Hajj and Umrah. These are led by qualified scholars and experienced coordinators.",
    },
    {
      question: "Can I see photos and videos from past pilgrimages?",
      answer:
        "Yes, our gallery showcases powerful moments from past Hajj and Umrah journeys, and our video section includes testimonials, behind-the-scenes footage, and educational content to give you a real sense of what to expect.",
    },
    {
      question:
        "Do you assist with visa processing for countries outside Nigeria?",
      answer:
        "Yes, we assist clients both within and outside Nigeria. Our visa processing service includes complete documentation support, application submission, and embassy follow-ups, regardless of your location.",
    },
    {
      question: "Do you offer support for elderly or first-time pilgrims?",
      answer:
        "Yes, our packages include personalized care for the elderly, first-timers, and those with special needs. Our guides provide step-by-step support to ensure all rituals are performed correctly and comfortably.",
    },
    {
      question: "How do I get started with booking a Hajj or Umrah trip?",
      answer:
        "You can get started by contacting us directly through our website or office. Our team will guide you through the process — from package selection and documentation to spiritual preparation and departure planning.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-primary mb-2 font-roca">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground">
            Find answers to common questions about our Hajj and Umrah services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-yellow-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}
