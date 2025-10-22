"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const slides = [
    {
      type: "logo",
      alt: "Athaqofy Logo",
    },
    {
      type: "image",
      src: "/student-studying-books.jpg",
      alt: "Student studying with dedication",
    },
    {
      type: "image",
      src: "/students-group-uniforms.jpg",
      alt: "Students in school uniforms",
    },
    {
      type: "image",
      src: "/classroom-learning.jpg",
      alt: "Classroom learning environment",
    },
    {
      type: "image",
      src: "/students-reading-together.jpg",
      alt: "Students reading together",
    },
  ]

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [autoPlay, slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setAutoPlay(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  return (
    <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-xl group">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {slide.type === "logo" ? (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <Image
                src="/athaqofy-logo.png"
                alt={slide.alt}
                width={300}
                height={300}
                className="object-contain"
                priority
              />
            </div>
          ) : (
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          )}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
