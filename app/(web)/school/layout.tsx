import type React from "react"
import type { Metadata } from "next"
import { SplashScreen } from "@/components/splash-screen"


export const metadata: Metadata = {
  title: "Athaqofy - Islamic School Excellence",
  description:
    "Comprehensive Islamic education combining Quranic studies with modern academics. Nurturing minds and strengthening faith.",
  generator: "v0.app",
}

export default function SchoolLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <div>
        <SplashScreen />
        {children}
      </div>
  )
}
