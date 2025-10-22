"use client"

import { useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    title: "Dedicated Learning",
    category: "Academics",
    image: "/student-studying-books.jpg",
  },
  {
    id: 2,
    title: "Community Spirit",
    category: "Community",
    image: "/students-group-uniforms.jpg",
  },
  {
    id: 3,
    title: "Classroom Excellence",
    category: "Academics",
    image: "/classroom-learning.jpg",
  },
  {
    id: 4,
    title: "Peer Learning",
    category: "Community",
    image: "/students-reading-together.jpg",
  },
  {
    id: 5,
    title: "Writing & Practice",
    category: "Academics",
    image: "/students-writing-practice.jpg",
  },
  {
    id: 6,
    title: "Group Study",
    category: "Community",
    image: "/students-group-uniforms.jpg",
  },
]

const categories = ["All", "Academics", "Community"]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages =
    activeCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[oklch(0.92_0.01_240)]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.15_0.02_240)] text-balance">Explore Athaqofy</h2>
          <p className="text-lg text-[oklch(0.55_0.02_240)] max-w-2xl mx-auto">
            Discover our vibrant community and dedicated students in action
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-[oklch(0.42_0.14_150)] text-[oklch(0.98_0.01_240)] shadow-lg"
                  : "bg-[oklch(0.98_0.01_240)] text-[oklch(0.15_0.02_240)] border border-[oklch(0.92_0.01_240)] hover:border-[oklch(0.42_0.14_150)]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden bg-[oklch(0.92_0.01_240)]">
                <Image
                  src={image.image || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
