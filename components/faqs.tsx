import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What is included in your Hajj packages?",
      answer:
        "Our comprehensive Hajj packages include round-trip flights, 5-star accommodation near Haram, all meals, ground transportation, expert Islamic guides, visa processing, and 24/7 support throughout your journey. We also provide educational seminars before departure to prepare you spiritually and practically.",
    },
    {
      question: "How far in advance should I book my pilgrimage?",
      answer:
        "We recommend booking your Hajj at least 12-18 months in advance due to limited quotas and high demand. For Umrah, you can book 3-6 months ahead, though we also offer last-minute packages based on availability. Early booking ensures better accommodation options and competitive pricing.",
    },
    {
      question: "What documents do I need for Hajj or Umrah?",
      answer:
        "You'll need a valid passport (with at least 6 months validity), completed visa application, vaccination certificates (including meningitis and COVID-19), passport-sized photos, and proof of relationship for accompanying family members. We assist with all visa processing and documentation requirements.",
    },
    {
      question: "Are your guides qualified Islamic scholars?",
      answer:
        "Yes, all our guides are certified Islamic scholars with extensive knowledge of Hajj and Umrah rituals. They are fluent in multiple languages and have years of experience guiding pilgrims. They provide spiritual guidance, answer religious questions, and ensure you perform all rituals correctly.",
    },
    {
      question: "What if I have special dietary or medical requirements?",
      answer:
        "We accommodate all special dietary needs including halal, vegetarian, diabetic, and allergy-specific meals. For medical requirements, we coordinate with local healthcare providers and can arrange for medical assistance during your stay. Please inform us of any special needs during booking.",
    },
    {
      question: "Is travel insurance included in the package?",
      answer:
        "Yes, comprehensive travel and health insurance is included in all our packages. This covers medical emergencies, trip cancellation, lost luggage, and other unforeseen circumstances. We also provide additional coverage options for enhanced protection and peace of mind.",
    },
    {
      question: "What is your cancellation and refund policy?",
      answer:
        "Our cancellation policy varies based on timing and circumstances. Cancellations made 90+ days before departure receive 80% refund, 60-89 days receive 60% refund, and 30-59 days receive 40% refund. Medical emergencies and visa rejections have special consideration. Full terms are provided upon booking.",
    },
    {
      question: "Do you offer group discounts or family packages?",
      answer:
        "Yes, we offer attractive group discounts for 10+ people and special family packages for immediate family members. Group bookings receive additional benefits like dedicated group coordinators, customized itineraries, and exclusive group activities. Contact us for personalized group pricing.",
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
