import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  const enrollmentFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSduEZaW9oPBkov6S0PJvHGxvvjV3YBbkuIxzfCTOttUVEJUdg/viewform?pli=1&pli=1"

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-r from-[oklch(0.42_0.14_150)] to-[oklch(0.42_0.14_150)]/80"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.98_0.01_240)] text-balance">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-lg text-[oklch(0.98_0.01_240)]/90 max-w-2xl mx-auto leading-relaxed">
          Join Athaqofy and become part of a community dedicated to Islamic excellence and academic achievement. Enroll
          today and transform your educational experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href={enrollmentFormUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-[oklch(0.98_0.01_240)] text-[oklch(0.42_0.14_150)] hover:bg-[oklch(0.98_0.01_240)]/90"
            >
              Enroll Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
