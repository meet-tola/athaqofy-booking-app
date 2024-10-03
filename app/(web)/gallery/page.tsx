"use client"

import { useState } from "react"
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { ArrowDown, ZoomInIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const allImages = [
  { src: "/image/gallery/gallery1.png", alt: "Gallery Image 1" },
  { src: "/image/gallery/gallery2.png", alt: "Gallery Image 2" },
  { src: "/image/gallery/gallery3.png", alt: "Gallery Image 3" },
  { src: "/image/gallery/gallery4.png", alt: "Gallery Image 4" },
  { src: "/image/gallery/gallery5.png", alt: "Gallery Image 5" },
  { src: "/image/gallery/gallery6.png", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery5.png", alt: "Gallery Image 5" },
  { src: "/image/gallery/gallery6.png", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery6.png", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery6.png", alt: "Gallery Image 6" },
]

const videos = [
  { src: "/videos/video1.mp4", poster: "/image/gallery/gallery1.png" },
  { src: "/videos/video2.mp4", poster: "/image/gallery/gallery2.png" },
  { src: "/videos/video3.mp4", poster: "/image/gallery/gallery3.png" },
  { src: "/videos/video4.mp4", poster: "/image/gallery/gallery4.png" },
]

export default function Component() {
  const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Gallery" }]
  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, 8))
  const [activeTab, setActiveTab] = useState("images")

  const loadMoreImages = () => {
    setVisibleImages(allImages.slice(0, visibleImages.length + 3))
  }

  return (
    <div className="mt-16 lg:mt-5">
      <Breadcrumb title="Packages" items={breadcrumbItems} />

      <div className="flex flex-col items-center justify-center gap-4 w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">Our Gallery</h1>
          <p className="text-gray-600">
            Explore our gallery, Hajj and Umrah journey moments captured beautifully
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-6xl">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
          <TabsContent value="images">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {visibleImages.map((image, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                      <img
                        src={image.src}
                        alt={image.alt}
                        width={700}
                        height={500}
                        className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ZoomInIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="bg-background p-0 max-w-[90vw] max-h-[90vh] overflow-auto">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-contain"
                    />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
            {visibleImages.length < allImages.length && (
              <div className="mt-8 text-center">
                <Button variant="ghost" onClick={loadMoreImages} className="gap-2">
                  Load More <ArrowDown size={16} />
                </Button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="videos">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div key={index} className="relative rounded-lg overflow-hidden">
                  <video
                    src={video.src}
                    poster={video.poster}
                    controls
                    className="w-full h-auto"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}