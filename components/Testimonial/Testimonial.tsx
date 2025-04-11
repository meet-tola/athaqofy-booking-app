"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Quote, Play, Pause, Volume2, ChevronLeft, ChevronRight } from "lucide-react"

type Testimonial = {
  name: string
  role: string
  testimonial: string
  image?: string
  audio?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmed Al-Farsi",
    role: "Hajj Pilgrim",
    testimonial:
      "The Hajj experience was transformative and beautifully organized. Thank you for making it unforgettable!",
    image: "/placeholder-user.jpg",
    audio: "/testimonials/ahmed.mp3",
  },
  {
    name: "Fatima Ali",
    role: "Umrah Pilgrim",
    testimonial:
      "The Umrah package was exceptional. The support and guidance provided were top-notch. Highly recommend!",
    image: "/placeholder-user.jpg",
    audio: "/testimonials/fatima.mp3",
  },
  {
    name: "Musa Khan",
    role: "Hajj Pilgrim",
    testimonial:
      "Every detail of the Hajj package was handled with care and professionalism. An experience of a lifetime!",
    image: "/placeholder-user.jpg",
    audio: "/testimonials/musa.mp3",
  },
  {
    name: "Aisha Hussain",
    role: "Umrah Pilgrim",
    testimonial:
      "The Umrah trip exceeded my expectations in every way. The accommodations and services were impeccable.",
    image: "/placeholder-user.jpg",
    audio: "/testimonials/aisha.mp3",
  },
  {
    name: "Ibrahim Al-Sabah",
    role: "Hajj & Umrah Pilgrim",
    testimonial: "An outstanding service for both Hajj and Umrah. The entire journey was smooth and enriching.",
    image: "/placeholder-user.jpg",
    audio: "/testimonials/ibrahim.mp3",
  },
  {
    name: "Layla Ahmad",
    role: "Umrah Pilgrim",
    testimonial:
      "A remarkable experience that was well-organized and spiritually fulfilling. Thank you for the wonderful journey!",
    image: "/placeholder-user.jpg",
    audio: "/testimonials/layla.mp3",
  },
]

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("text")
  const [playingAudio, setPlayingAudio] = useState<number | null>(null)
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([])

  // Carousel state
  const [currentTextSlide, setCurrentTextSlide] = useState(0)
  const [currentAudioSlide, setCurrentAudioSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const textItemsPerSlide = 3
  const audioItemsPerSlide = 2
  const totalTextSlides = Math.ceil(testimonials.length / textItemsPerSlide)
  const totalAudioSlides = Math.ceil(testimonials.length / audioItemsPerSlide)

  // Auto-scroll carousel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      if (activeTab === "text") {
        setCurrentTextSlide((prev) => (prev + 1) % totalTextSlides)
      } else {
        setCurrentAudioSlide((prev) => (prev + 1) % totalAudioSlides)
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [activeTab, isPaused, totalTextSlides, totalAudioSlides])

  // Navigation functions
  const nextTextSlide = () => {
    setCurrentTextSlide((prev) => (prev + 1) % totalTextSlides)
  }

  const prevTextSlide = () => {
    setCurrentTextSlide((prev) => (prev - 1 + totalTextSlides) % totalTextSlides)
  }

  const nextAudioSlide = () => {
    setCurrentAudioSlide((prev) => (prev + 1) % totalAudioSlides)
  }

  const prevAudioSlide = () => {
    setCurrentAudioSlide((prev) => (prev - 1 + totalAudioSlides) % totalAudioSlides)
  }

  // Audio player functions
  const handlePlayPause = (index: number) => {
    if (playingAudio === index) {
      // Pause the currently playing audio
      audioRefs.current[index]?.pause()
      setPlayingAudio(null)
    } else {
      // Pause any currently playing audio
      if (playingAudio !== null && audioRefs.current[playingAudio]) {
        audioRefs.current[playingAudio]?.pause()
      }

      // Play the selected audio
      audioRefs.current[index]?.play()
      setPlayingAudio(index)
    }
  }

  // Handle audio end event
  const handleAudioEnd = () => {
    setPlayingAudio(null)
  }

  return (
    <div
      className="flex flex-col items-center justify-center w-full py-16 px-4 md:px-8 space-y-8 bg-gradient-to-b from-background to-muted/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="text-center max-w-2xl mb-4">
        <h1 className="text-3xl font-bold text-primary mb-2">What Our Pilgrims Say</h1>
        <p className="text-muted-foreground">Hear from those who have experienced our services firsthand</p>
      </div>

      <Tabs defaultValue="text" className="w-full max-w-6xl" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-2 w-[300px]">
            <TabsTrigger value="text" className="rounded-l-md">
              Text Testimonials
            </TabsTrigger>
            <TabsTrigger value="audio" className="rounded-r-md">
              Audio Testimonials
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Text Testimonials Carousel */}
        <TabsContent value="text" className="w-full relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTextSlide * 100}%)` }}
            >
              {Array.from({ length: totalTextSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-1">
                    {testimonials
                      .slice(slideIndex * textItemsPerSlide, (slideIndex + 1) * textItemsPerSlide)
                      .map((testimonial, idx) => (
                        <Card
                          key={idx}
                          className="relative overflow-hidden bg-card border border-border/50 shadow-sm h-full"
                        >
                          <div className="absolute top-4 left-4 text-primary/10">
                            <Quote size={40} />
                          </div>
                          <div className="flex flex-col items-center text-center p-6 pt-10 relative z-10 h-full">
                            <Avatar className="w-16 h-16 border-2 border-primary/20">
                              <AvatarImage src={testimonial.image} alt={testimonial.name} />
                              <AvatarFallback className="bg-primary/10 text-primary">
                                {testimonial.name[0]}
                              </AvatarFallback>
                            </Avatar>

                            <div className="mt-4 space-y-3 flex-grow">
                              <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>

                              <blockquote className="text-foreground italic leading-relaxed">
                                "{testimonial.testimonial}"
                              </blockquote>
                            </div>
                          </div>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Carousel Controls */}
          <button
            onClick={prevTextSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md z-10 transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md z-10 transition-all duration-200 hover:scale-110"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Text Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalTextSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTextSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentTextSlide === index ? "bg-primary w-8" : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </TabsContent>

        {/* Audio Testimonials Carousel */}
        <TabsContent value="audio" className="w-full relative">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentAudioSlide * 100}%)` }}
            >
              {Array.from({ length: totalAudioSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-1">
                    {testimonials
                      .slice(slideIndex * audioItemsPerSlide, (slideIndex + 1) * audioItemsPerSlide)
                      .map((testimonial, idx) => {
                        const absoluteIndex = slideIndex * audioItemsPerSlide + idx
                        return (
                          <Card
                            key={idx}
                            className="flex flex-col md:flex-row items-center gap-4 p-6 border border-border/50 shadow-sm"
                          >
                            <div className="flex-shrink-0">
                              <Avatar className="w-16 h-16 md:w-20 md:h-20 border-2 border-primary/20">
                                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                <AvatarFallback className="bg-primary/10 text-primary">
                                  {testimonial.name[0]}
                                </AvatarFallback>
                              </Avatar>
                            </div>

                            <div className="flex-grow space-y-3 text-center md:text-left">
                              <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                              <p className="text-sm italic">"{testimonial.testimonial.substring(0, 60)}..."</p>

                              <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-full h-10 w-10 p-0 flex items-center justify-center bg-primary/10 hover:bg-primary/20 border-none"
                                  onClick={() => handlePlayPause(absoluteIndex)}
                                >
                                  {playingAudio === absoluteIndex ? <Pause size={18} /> : <Play size={18} />}
                                </Button>

                                <div className="flex-grow max-w-[200px]">
                                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                                    <div
                                      className={`h-full bg-primary transition-all duration-300 ${
                                        playingAudio === absoluteIndex ? "animate-pulse" : ""
                                      }`}
                                      style={{
                                        width:
                                          playingAudio === absoluteIndex
                                            ? `${((audioRefs.current[absoluteIndex]?.currentTime || 0) / (audioRefs.current[absoluteIndex]?.duration || 1)) * 100}%`
                                            : "0%",
                                      }}
                                    />
                                  </div>
                                </div>

                                <Volume2 size={16} className="text-muted-foreground" />

                                <audio
                                  ref={(el) => {
                                    audioRefs.current[absoluteIndex] = el;
                                  }}
                                  src={testimonial.audio}
                                  onEnded={handleAudioEnd}
                                  onTimeUpdate={() => setPlayingAudio(absoluteIndex)} // Force re-render to update progress
                                />
                              </div>
                            </div>
                          </Card>
                        )
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Carousel Controls */}
          <button
            onClick={prevAudioSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md z-10 transition-all duration-200 hover:scale-110"
            aria-label="Previous audio testimonials"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextAudioSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md z-10 transition-all duration-200 hover:scale-110"
            aria-label="Next audio testimonials"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Audio Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalAudioSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentAudioSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentAudioSlide === index ? "bg-primary w-8" : "bg-primary/30"
                }`}
                aria-label={`Go to audio slide ${index + 1}`}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
