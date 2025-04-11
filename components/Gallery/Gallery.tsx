"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ZoomIn, ExternalLink } from "lucide-react"
import Link from "next/link"

const galleryImages = [
  { src: "/image/gallery/gallery1.png", alt: "Gallery Image 1" },
  { src: "/image/gallery/gallery2.png", alt: "Gallery Image 2" },
  { src: "/image/gallery/gallery3.png", alt: "Gallery Image 3" },
  { src: "/image/gallery/gallery4.png", alt: "Gallery Image 4" },
  { src: "/image/gallery/gallery5.png", alt: "Gallery Image 5" },
  { src: "/image/gallery/gallery6.png", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery5.png", alt: "Gallery Image 7" },
  { src: "/image/gallery/gallery6.png", alt: "Gallery Image 8" },
]

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Responsive slides per view
  const getSlidesPerView = () => {
    if (windowWidth < 640) return 1   
    if (windowWidth < 1024) return 3 
    return 4                        
  }

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView())
  const totalSlides = Math.ceil(galleryImages.length / slidesPerView)

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setSlidesPerView(getSlidesPerView())
    }

    // Set initial width
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto-scroll carousel
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides, isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "Escape") setLightboxOpen(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

  return (
    <div 
      className="flex flex-col items-center justify-center gap-8 w-full mx-auto py-16 px-4 sm:px-6 lg:px-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-bold text-primary mb-2 font-roca">Our Gallery</h1>
        <p className="text-muted-foreground">
          Explore our gallery - Hajj and Umrah journey moments captured beautifully
        </p>
      </div>

      {/* Carousel Container */}
      <div className="w-full max-w-6xl relative">
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex} 
                className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-1"
              >
                {galleryImages
                  .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                  .map((image, imageIndex) => {
                    const absoluteIndex = slideIndex * slidesPerView + imageIndex
                    return (
                      <div
                        key={absoluteIndex}
                        className="relative group overflow-hidden rounded-lg cursor-pointer aspect-[4/3] bg-muted"
                        onClick={() => openLightbox(absoluteIndex)}
                      >
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <ZoomIn className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls - Only show if there are multiple slides */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md z-10 transition-all duration-200 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md z-10 transition-all duration-200 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Slide Indicators - Only show if there are multiple slides */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-primary w-8" : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* View More Button */}
      <Link href="/gallery">
        <Button className="mt-4 group">
          View Full Gallery
          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="bg-background/95 backdrop-blur-sm p-0 max-w-[95vw] max-h-[95vh] border-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={galleryImages[lightboxIndex]?.src || "/placeholder.svg"}
              alt={galleryImages[lightboxIndex]?.alt}
              className="max-w-full max-h-[85vh] object-contain"
            />

            {/* Navigation Buttons - Only show if multiple images */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-3 transition-all duration-200"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-4 bg-black/20 hover:bg-black/40 text-white rounded-full p-3 transition-all duration-200"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image Counter - Only show if multiple images */}
            {galleryImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1 rounded-full text-sm">
                {lightboxIndex + 1} / {galleryImages.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}