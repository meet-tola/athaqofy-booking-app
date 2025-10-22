"use client"

import { Card } from "@/components/ui/card"
import { BookOpen, Users, Globe, Lightbulb } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const programs = [
  {
    icon: BookOpen,
    title: "Quranic Studies",
    description:
      "Comprehensive Quran memorization and Tajweed with certified instructors. Master the holy text with proper pronunciation and understanding.",
    features: ["Memorization Programs", "Tajweed Mastery", "Tafsir Classes"],
  },
  {
    icon: Users,
    title: "Islamic Sciences",
    description:
      "Deep dive into Hadith, Fiqh, and Islamic jurisprudence. Understand the principles and applications of Islamic law.",
    features: ["Hadith Studies", "Fiqh Courses", "Islamic History"],
  },
  {
    icon: Globe,
    title: "Modern Academics",
    description:
      "Excellence in mathematics, sciences, languages, and humanities. Balanced education for holistic development.",
    features: ["STEM Programs", "Language Arts", "Social Sciences"],
  },
  {
    icon: Lightbulb,
    title: "Character Development",
    description:
      "Building ethical leaders through mentorship and practical Islamic values. Developing responsible global citizens.",
    features: ["Leadership Training", "Ethics Workshops", "Community Service"],
  },
]

export default function Programs() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="programs" ref={ref} className="py-20 md:py-32 bg-[oklch(0.98_0.01_240)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.15_0.02_240)] text-balance">
            Our Comprehensive Programs
          </h2>
          <p className="text-lg text-[oklch(0.55_0.02_240)] max-w-2xl mx-auto">
            Integrated curriculum combining Islamic education with academic excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow border border-[oklch(0.92_0.01_240)] h-full">
                  <div className="w-12 h-12 bg-[oklch(0.42_0.14_150)]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[oklch(0.42_0.14_150)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[oklch(0.15_0.02_240)] mb-2">{program.title}</h3>
                  <p className="text-[oklch(0.55_0.02_240)] text-sm mb-4 leading-relaxed">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
                      <li key={i} className="text-sm text-[oklch(0.55_0.02_240)] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[oklch(0.42_0.14_150)] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
