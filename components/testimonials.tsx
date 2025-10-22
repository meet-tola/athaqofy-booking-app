"use client"

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Fatima Al-Rashid",
    role: "Parent",
    content:
      "Athaqofy has transformed my daughter's understanding of Islam while maintaining her academic excellence. The teachers are incredibly dedicated.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    role: "Student",
    content:
      "I've learned so much about my faith and developed strong friendships. The balance between Islamic and modern education is perfect.",
    rating: 5,
  },
  {
    name: "Layla Ibrahim",
    role: "Parent",
    content:
      "The character development programs have made a real difference. My son is more confident and grounded in his values.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-[oklch(0.98_0.01_240)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.15_0.02_240)] text-balance">
            What Our Community Says
          </h2>
          <p className="text-lg text-[oklch(0.55_0.02_240)] max-w-2xl mx-auto">
            Hear from students and parents about their Athaqofy experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border border-[oklch(0.92_0.01_240)]">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[oklch(0.42_0.14_150)] text-[oklch(0.42_0.14_150)]" />
                ))}
              </div>
              <p className="text-[oklch(0.15_0.02_240)] mb-4 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-[oklch(0.15_0.02_240)]">{testimonial.name}</p>
                <p className="text-sm text-[oklch(0.55_0.02_240)]">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
