"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import Image from "next/image";

export function Gallery() {
  const galleryImages = [
    { src: "/image/gallery/gallery1.png", alt: "Gallery Image 1" },
    { src: "/image/gallery/gallery2.png", alt: "Gallery Image 2" },
    { src: "/image/gallery/gallery3.png", alt: "Gallery Image 3" },
    { src: "/image/gallery/gallery4.png", alt: "Gallery Image 4" },
    { src: "/image/gallery/gallery5.png", alt: "Gallery Image 5" },
    { src: "/image/gallery/gallery6.png", alt: "Gallery Image 6" },
    { src: "/image/gallery/gallery5.png", alt: "Gallery Image 7" },
    { src: "/image/gallery/gallery6.png", alt: "Gallery Image 8" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  const nextSlide = () => {
    const itemsPerPage = window.innerWidth >= 1024 ? 4 : 1;
    setCurrentIndex(
      (prev) => (prev + 1) % Math.ceil(galleryImages.length / itemsPerPage)
    );
  };

  const prevSlide = () => {
    const itemsPerPage = window.innerWidth >= 1024 ? 4 : 1;
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(galleryImages.length / itemsPerPage)) %
        Math.ceil(galleryImages.length / itemsPerPage)
    );
  };

  const itemsPerPage =
    typeof window !== "undefined" && window.innerWidth >= 1024 ? 4 : 1;
  const visibleImages = galleryImages.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary font-roca mb-2">
            Sacred Moments Gallery
          </h1>
          <p className="text-gray-600">
            Witness the beauty and spirituality of the holy sites through our
            curated collection of photographs
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {visibleImages.map((image, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({
              length: Math.ceil(
                galleryImages.length /
                  (typeof window !== "undefined" && window.innerWidth >= 1024
                    ? 4
                    : 1)
              ),
            }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Modal for expanded image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
