"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: "old-pictures" | "current-activities"
  title: string
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/basic-6-graduands.jpg",
    alt: "Basic 6 Graduands - Class of 2025",
    category: "current-activities",
    title: "Basic 6 Graduands",
  },
  {
    id: "2",
    src: "/jss-3-graduands.jpg",
    alt: "JSS 3 Graduands - Class of 2025",
    category: "current-activities",
    title: "JSS 3 Graduands",
  },
  {
    id: "3",
    src: "/basic-6-class-photo-1.jpg",
    alt: "Basic 6 Class Photo with Teacher",
    category: "current-activities",
    title: "Basic 6 Class Photo",
  },
  {
    id: "4",
    src: "/basic-6-class-photo-2.jpg",
    alt: "Basic 6 Class Group Photo",
    category: "current-activities",
    title: "Basic 6 Group Photo",
  },
  {
    id: "5",
    src: "/basic-6-class-photo-3.jpg",
    alt: "Basic 6 Class Portrait",
    category: "current-activities",
    title: "Basic 6 Class Portrait",
  },
  {
    id: "6",
    src: "/basic-6-class-photo-4.jpg",
    alt: "Basic 6 Class with Staff",
    category: "current-activities",
    title: "Basic 6 with Staff",
  },
  {
    id: "7",
    src: "/basic-6-class-photo-5.jpg",
    alt: "Basic 6 Class Moment",
    category: "current-activities",
    title: "Basic 6 Class Moment",
  },
  {
    id: "8",
    src: "/student-studying-books.jpg",
    alt: "Student studying with books",
    category: "current-activities",
    title: "Focused Learning",
  },
  {
    id: "9",
    src: "/students-group-uniforms.jpg",
    alt: "Group of students in uniforms",
    category: "current-activities",
    title: "School Community",
  },
  {
    id: "10",
    src: "/classroom-learning.jpg",
    alt: "Classroom learning session",
    category: "current-activities",
    title: "Classroom Excellence",
  },
  {
    id: "11",
    src: "/students-reading-together.jpg",
    alt: "Students reading together",
    category: "current-activities",
    title: "Peer Learning",
  },
  {
    id: "12",
    src: "/students-writing-practice.jpg",
    alt: "Students practicing writing",
    category: "current-activities",
    title: "Writing Practice",
  },
]

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<"all" | "old-pictures" | "current-activities">("all")

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        <Button
          onClick={() => setActiveFilter("all")}
          variant={activeFilter === "all" ? "default" : "outline"}
          className={activeFilter === "all" ? "bg-primary hover:bg-primary/90" : ""}
        >
          All Photos
        </Button>
        <Button
          onClick={() => setActiveFilter("current-activities")}
          variant={activeFilter === "current-activities" ? "default" : "outline"}
          className={activeFilter === "current-activities" ? "bg-primary hover:bg-primary/90" : ""}
        >
          Current Activities
        </Button>
        <Button
          onClick={() => setActiveFilter("old-pictures")}
          variant={activeFilter === "old-pictures" ? "default" : "outline"}
          className={activeFilter === "old-pictures" ? "bg-primary hover:bg-primary/90" : ""}
        >
          Archive
        </Button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64 w-full overflow-hidden bg-muted">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-white font-semibold text-lg">{image.title}</h3>
              <p className="text-white/80 text-sm">
                {image.category === "current-activities" ? "Current Activities" : "Archive"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No images found in this category.</p>
        </div>
      )}
    </div>
  )
}
