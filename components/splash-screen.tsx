"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-primary/5 to-accent/5 backdrop-blur-sm">
      <div className="animate-in fade-in zoom-in duration-700 flex flex-col items-center gap-6">
        {/* Logo with scale animation */}
        <div className="animate-pulse">
          <Image
            src="/athaqofy-logo.png"
            alt="Athaqofy Logo"
            width={120}
            height={120}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        {/* Text animation */}
        <div className="text-center space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <h1 className="text-3xl font-bold text-primary">ATHAQOFY</h1>
          <p className="text-sm text-muted-foreground font-medium">Model Islamic Schools</p>
        </div>

        {/* Loading indicator */}
        <div className="mt-4 flex gap-2 animate-in fade-in duration-1000 delay-500">
          <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>

      {/* Fade out animation */}
      <style>{`
        @keyframes fadeOutUp {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}
