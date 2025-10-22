"use client"

import { CheckCircle2 } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const benefits = [
  {
    title: "Holistic Development",
    description: "Balance between spiritual growth and academic achievement for well-rounded individuals.",
  },
  {
    title: "Expert Instructors",
    description: "Qualified teachers with deep Islamic knowledge and modern teaching methodologies.",
  },
  {
    title: "Safe Community",
    description: "Nurturing environment where students feel valued, supported, and inspired to excel.",
  },
  {
    title: "Modern Facilities",
    description: "State-of-the-art classrooms, libraries, and technology-enabled learning spaces.",
  },
  {
    title: "Global Perspective",
    description: "Understanding Islamic values while engaging with diverse cultures and ideas.",
  },
  {
    title: "Career Readiness",
    description: "Preparation for higher education and professional success with strong foundational skills.",
  },
]

export default function Benefits() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="benefits" ref={ref} className="py-20 md:py-32 bg-[oklch(0.42_0.14_150)]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.15_0.02_240)] text-balance">
            Why Choose Athaqofy?
          </h2>
          <p className="text-lg text-[oklch(0.55_0.02_240)] max-w-2xl mx-auto">
            Discover the unique advantages of our Islamic educational approach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex gap-4 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[oklch(0.42_0.14_150)] mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[oklch(0.15_0.02_240)] mb-2">{benefit.title}</h3>
                <p className="text-[oklch(0.55_0.02_240)] leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
