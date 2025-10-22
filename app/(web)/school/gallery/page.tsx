import Header from "@/components/header"
import Footer from "@/components/footer"
import GalleryGrid from "@/components/gallery-grid"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore moments from Athaqofy's journey. From our early days to current achievements, witness the growth
              and dedication of our students and staff.
            </p>
          </div>
          <GalleryGrid />
        </div>
      </div>
      <Footer />
    </main>
  )
}
