import Header from "@/components/header"
import Hero from "@/components/hero"
import Programs from "@/components/programs"
import Benefits from "@/components/benefits"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function School() {
  return (
    <div className="min-h-screen bg-[oklch(0.98_0.01_240)]">
      <Header />
      <Hero />
      <Programs />
      <Benefits />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
