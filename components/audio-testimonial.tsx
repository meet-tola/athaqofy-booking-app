"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AudioTestimonialProps {
  src: string
}

export function AudioTestimonial({ src }: AudioTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Events
    audio.addEventListener("ended", () => setIsPlaying(false))

    // Cleanup
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false))
    }
  }, [])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return

    if (!isPlaying) {
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="flex items-center">
      <audio ref={audioRef} src={src} preload="metadata" />
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="h-8 w-8"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
      <span className="ml-2 text-xs text-gray-500">
        {isPlaying ? "Playing audio testimonial..." : "Play audio testimonial"}
      </span>
    </div>
  )
}
