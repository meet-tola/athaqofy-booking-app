"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const enrollmentFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSduEZaW9oPBkov6S0PJvHGxvvjV3YBbkuIxzfCTOttUVEJUdg/viewform?pli=1&pli=1"

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-[oklch(0.98_0.01_240)] border-b border-[oklch(0.92_0.01_240)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:scale-110 transition-transform duration-200 hover:drop-shadow-lg"
          >
            <Image src="/athaqofy-logo.png" alt="Athaqofy Logo" width={65} height={65} className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-[oklch(0.15_0.02_240)] hover:text-[oklch(0.42_0.14_150)] transition">
              Home
            </a>
            <a href="#programs" className="text-[oklch(0.15_0.02_240)] hover:text-[oklch(0.42_0.14_150)] transition">
              Programs
            </a>
            <a href="/gallery" className="text-[oklch(0.15_0.02_240)] hover:text-[oklch(0.42_0.14_150)] transition">
              Gallery
            </a>
            <a href="#contact" className="text-[oklch(0.15_0.02_240)] hover:text-[oklch(0.42_0.14_150)] transition">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex gap-4">
            <a href={enrollmentFormUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[oklch(0.42_0.14_150)] hover:bg-[oklch(0.42_0.14_150)]/90">Enroll Now</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <a href="/" className="block text-[oklch(0.15_0.02_240)] hover:text-[oklch(0.42_0.14_150)]">
              Home
            </a>
            <a href="#programs" className="block text-[oklch(0.15_0.02_240)] hover:text-[oklch(0.42_0.14_150)]">
              Programs
            </a>
            <a href="/gallery" className="block text-[oklch(0.15_0.02_240)] hover:text-[oklch(0.42_0.14_150)]">
              Gallery
            </a>
            <a href="#contact" className="block text-[oklch(0.15_0.02_240)] hover:text-[oklch(0.42_0.14_150)]">
              Contact
            </a>
            <div className="flex gap-2 pt-2">
              <a href={enrollmentFormUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-[oklch(0.42_0.14_150)] hover:bg-[oklch(0.42_0.14_150)]/90">Enroll</Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
