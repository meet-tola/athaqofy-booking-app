"use client"

import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const charityMessages = [
  "Join our mission to help 1000+ families this year",
  "We've donated $50,000 to local communities in 2023",
  "Support our upcoming charity drive on June 15th",
  "100% of charity donations go directly to those in need",
  "Volunteer opportunities available - make a difference today",
]

export function CharityBanner() {
  const router = useRouter()

  return (
    <div
      className="fixed top-16 left-0 right-0 z-40 bg-primary border-b border-primary/20 cursor-pointer overflow-hidden"
      onClick={() => router.push("/charity")}
    >
      <div className="container md:px-12 px-4 py-2 flex items-center justify-center">
        <div className="flex items-center text-sm text-white font-medium overflow-hidden whitespace-nowrap">
          <div className="marquee-container overflow-hidden relative w-full">
            <div className="animate-marquee-banner flex items-center whitespace-nowrap">
              {/* Render all messages twice for infinite effect */}
              {[...charityMessages, ...charityMessages].map((message, index) => (
                <span key={index} className="px-8">
                  {message}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
