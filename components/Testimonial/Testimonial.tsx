"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import Image from "next/image"

interface TextTestimonial {
  id: string
  name: string
  location: string
  image: string
  text: string
}

interface AudioTestimonial {
  id: string
  name: string
  location: string
  image: string
  audioUrl: string
}

interface VideoTestimonial {
  id: string
  title: string
  videoId: string
}

export function Testimonials() {
  const [activeTab, setActiveTab] = useState<"text" | "audio" | "video">("text")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0)
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null)
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)

  const textTestimonials: TextTestimonial[] = [
    {
      id: "1",
      name: "Ahmed Hassan",
      location: "California, USA",
      image: "/placeholder.svg?height=80&width=80",
      text: "My journey with Athaqofy was absolutely transformative. The level of care, attention to detail, and spiritual guidance provided throughout the entire Hajj experience was exceptional. Every aspect was perfectly organized, allowing me to focus entirely on my spiritual journey.",
    },
    {
      id: "2",
      name: "Fatima Al-Zahra",
      location: "London, UK",
      image: "/placeholder.svg?height=80&width=80",
      text: "I cannot express enough gratitude for the seamless Umrah experience. From the moment we arrived in Mecca to our departure, everything was handled with professionalism and genuine care. The guides were knowledgeable and helped us understand every ritual deeply.",
    },
    {
      id: "3",
      name: "Omar Abdullah",
      location: "Toronto, Canada",
      image: "/placeholder.svg?height=80&width=80",
      text: "Choosing Athaqofy for our family pilgrimage was the best decision we made. The accommodation was excellent, the food was delicious, and the spiritual atmosphere they created made our journey truly memorable. Highly recommended for anyone planning their pilgrimage.",
    },
    {
      id: "4",
      name: "Aisha Rahman",
      location: "Sydney, Australia",
      image: "/placeholder.svg?height=80&width=80",
      text: "The attention to detail and personalized service exceeded all expectations. Our group coordinator was always available, and the educational sessions before departure prepared us perfectly for the spiritual significance of each ritual.",
    },
  ]

  const audioTestimonials: AudioTestimonial[] = [
    {
      id: "1",
      name: "Ibrahim Khan",
      location: "Dubai, UAE",
      image: "/placeholder.svg?height=80&width=80",
      audioUrl: "/audio/testimonial1.mp3",
    },
    {
      id: "2",
      name: "Mariam Ali",
      location: "Manchester, UK",
      image: "/placeholder.svg?height=80&width=80",
      audioUrl: "/audio/testimonial2.mp3",
    },
    {
      id: "3",
      name: "Yusuf Ahmed",
      location: "Chicago, USA",
      image: "/placeholder.svg?height=80&width=80",
      audioUrl: "/audio/testimonial3.mp3",
    },
  ]

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: "1",
      title: "Complete Hajj Guide - Step by Step",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: "2",
      title: "Umrah Experience - Spiritual Journey",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: "3",
      title: "Preparing for Your First Pilgrimage",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: "4",
      title: "Customer Testimonial - Life Changing",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: "5",
      title: "Hajj Rituals Explained",
      videoId: "dQw4w9WgXcQ",
    },
  ]

  const nextTextSlide = () => {
    const itemsPerPage = typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1
    setCurrentTextIndex((prev) => (prev + 1) % Math.ceil(textTestimonials.length / itemsPerPage))
  }

  const prevTextSlide = () => {
    const itemsPerPage = typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1
    setCurrentTextIndex(
      (prev) =>
        (prev - 1 + Math.ceil(textTestimonials.length / itemsPerPage)) %
        Math.ceil(textTestimonials.length / itemsPerPage),
    )
  }

  const nextAudioSlide = () => {
    const itemsPerPage = typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1
    setCurrentAudioIndex((prev) => (prev + 1) % Math.ceil(audioTestimonials.length / itemsPerPage))
  }

  const prevAudioSlide = () => {
    const itemsPerPage = typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1
    setCurrentAudioIndex(
      (prev) =>
        (prev - 1 + Math.ceil(audioTestimonials.length / itemsPerPage)) %
        Math.ceil(audioTestimonials.length / itemsPerPage),
    )
  }

  const textItemsPerPage = typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1
  const visibleTextTestimonials = textTestimonials.slice(
    currentTextIndex * textItemsPerPage,
    currentTextIndex * textItemsPerPage + textItemsPerPage,
  )

  const audioItemsPerPage = typeof window !== "undefined" && window.innerWidth >= 1024 ? 2 : 1
  const visibleAudioTestimonials = audioTestimonials.slice(
    currentAudioIndex * audioItemsPerPage,
    currentAudioIndex * audioItemsPerPage + audioItemsPerPage,
  )

  const toggleAudio = (audioId: string) => {
    if (playingAudio === audioId) {
      setPlayingAudio(null)
    } else {
      setPlayingAudio(audioId)
    }
  }

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary font-roca mb-2">
            What Our Pilgrims Say
          </h1>
          <p className="text-gray-600">
            Hear from thousands who have completed their sacred journey with us
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab("text")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === "text" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Text Testimonials
            </button>
            <button
              onClick={() => setActiveTab("audio")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === "audio" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Audio Testimonials
            </button>
            {/* <button
              onClick={() => setActiveTab("video")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === "video" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Video Reviews
            </button> */}
          </div>
        </div>

        {/* Text Testimonials */}
        {activeTab === "text" && (
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {visibleTextTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
              onClick={prevTextSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
              onClick={nextTextSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({
                length: Math.ceil(textTestimonials.length / textItemsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTextIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTextIndex(index)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Audio Testimonials */}
        {activeTab === "audio" && (
          <div className="relative max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {visibleAudioTestimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-4">
                        <Button
                          size="icon"
                          variant="outline"
                          className="rounded-full bg-transparent"
                          onClick={() => toggleAudio(testimonial.id)}
                        >
                          {playingAudio === testimonial.id ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4 ml-0.5" />
                          )}
                        </Button>
                        <div className="flex-1">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full w-1/3"></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>0:45</span>
                            <span>2:30</span>
                          </div>
                        </div>
                      </div>
                      <audio className="hidden" controls>
                        <source src={testimonial.audioUrl} type="audio/mpeg" />
                      </audio>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
              onClick={prevAudioSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
              onClick={nextAudioSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({
                length: Math.ceil(audioTestimonials.length / audioItemsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentAudioIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentAudioIndex(index)}
                />
              ))}
            </div>
          </div>
        )}


      </div>
    </section>
  )
}
