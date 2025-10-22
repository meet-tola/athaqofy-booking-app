"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation()

  const enrollmentFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSduEZaW9oPBkov6S0PJvHGxvvjV3YBbkuIxzfCTOttUVEJUdg/viewform?pli=1&pli=1"

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.42_0.14_150)]/5 to-[oklch(0.72_0.16_120)]/5 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block bg-[oklch(0.42_0.14_150)]/10 text-[oklch(0.42_0.14_150)] px-4 py-2 rounded-full text-sm font-medium">
              ✨ Excellence in Islamic Education
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.15_0.02_240)] leading-tight text-balance">
              Nurturing Minds, Strengthening Faith
            </h1>
            <p className="text-lg text-[oklch(0.55_0.02_240)] leading-relaxed max-w-lg">
              Athaqofy provides comprehensive Islamic education combining traditional Quranic studies with modern
              academic excellence. Empowering students to become knowledgeable, virtuous, and engaged members of
              society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={enrollmentFormUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[oklch(0.42_0.14_150)] hover:bg-[oklch(0.42_0.14_150)]/90 text-[oklch(0.98_0.01_240)]"
                >
                  Enroll
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          <div
            className={`flex justify-center items-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              <Image
                src="/athaqofy-logo.png"
                alt="Athaqofy Logo"
                width={400}
                height={400}
                className="w-full h-auto drop-shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
