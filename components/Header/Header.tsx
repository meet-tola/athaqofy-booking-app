"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { CharityBanner } from "./CharityBanner"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background",
        )}
      >
        <DesktopNavbar />
        <MobileNavbar />
      </header>
      <CharityBanner />
    </>
  )
}

const items = [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about-us" },
  { label: "Services", link: "/packages" },
  { label: "Gallery", link: "/gallery" },
  { label: "Charity", link: "/charity" },
]

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="block md:hidden">
      <nav className="container flex items-center justify-between px-4 h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/athaqofy-logo.svg"
            alt="athaqofy Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Link>

        <div className="flex items-center gap-4">
          <Button size="sm" asChild className="hidden sm:flex">
            <Link href="/packages">Book Now</Link>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-20"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Custom mobile menu dropdown */}
      <div
        className={cn(
          "absolute top-16 left-0 right-0 bg-background shadow-md overflow-hidden transition-all duration-300 ease-in-out z-10",
          isOpen ? "max-h-[400px] border-b" : "max-h-0",
        )}
      >
        <div className="container px-4 py-4">
          <div className="flex flex-col space-y-1">
            {items.map((item) => (
              <NavbarItem
                key={item.label}
                link={item.link}
                label={item.label}
                onClick={() => setIsOpen(false)}
                mobile
              />
            ))}
            <div className="pt-4 sm:hidden">
              <Button size="sm" asChild className="w-full">
                <Link href="/packages">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const DesktopNavbar = () => {
  return (
    <div className="hidden md:block">
      <nav className="container flex items-center justify-between md:px-12 px-4 h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/athaqofy-logo.svg"
            alt="athaqofy Logo"
            className="dark:invert"
            width={110}
            height={28}
            priority
          />
        </Link>

        <div className="flex items-center space-x-1">
          {items.map((item) => (
            <NavbarItem key={item.label} link={item.link} label={item.label} />
          ))}
        </div>

        <Button size="sm" asChild>
          <Link href="/reg-booking">Book Now</Link>
        </Button>
      </nav>
    </div>
  )
}

const NavbarItem = ({
  link,
  label,
  onClick,
  mobile = false,
}: {
  link: string
  label: string
  onClick?: () => void
  mobile?: boolean
}) => {
  const pathname = usePathname()
  const isActive = pathname === link

  if (mobile) {
    return (
      <Link
        href={link}
        className={cn(
          "py-2 px-2 text-base transition-colors rounded-md",
          isActive
            ? "bg-muted font-medium text-foreground"
            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
        )}
        onClick={onClick}
      >
        {label}
      </Link>
    )
  }

  return (
    <Link
      href={link}
      className={cn(
        "relative px-3 py-2 text-sm transition-colors",
        isActive ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground",
      )}
      onClick={onClick}
    >
      {label}
      {isActive && <span className="absolute bottom-0 left-0 right-0 mx-auto w-1/2 h-0.5 bg-primary rounded-full" />}
    </Link>
  )
}

export default Header
