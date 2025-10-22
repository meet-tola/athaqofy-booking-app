"use client";

import { useState } from "react";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { ArrowDown, ChevronLeft, ChevronRight, ZoomInIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const allImages = [
  { src: "/image/gallery/gallery1.png", alt: "Gallery Image 1" },
  { src: "/image/gallery/gallery2.png", alt: "Gallery Image 2" },
  { src: "/image/gallery/gallery3.png", alt: "Gallery Image 3" },
  { src: "/image/gallery/gallery4.png", alt: "Gallery Image 4" },
  { src: "/image/gallery/gallery5.png", alt: "Gallery Image 5" },
  { src: "/image/gallery/gallery6.png", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery7.jpg", alt: "Gallery Image 5" },
  { src: "/image/gallery/gallery8.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery9.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery10.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery11.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery12.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery13.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery14.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery15.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery16.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery17.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery18.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery19.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery20.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery21.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery22.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery23.jpg", alt: "Gallery Image 6" },
  { src: "/image/gallery/gallery24.jpg", alt: "Gallery Image 6" },
];

const videos = [
  { src: "/videos/video1.mp4", poster: "/image/gallery/gallery1.png" },
  { src: "/videos/video2.mp4", poster: "/image/gallery/gallery2.png" },
  { src: "/videos/video3.mp4", poster: "/image/gallery/gallery3.png" },
  { src: "/videos/video4.mp4", poster: "/image/gallery/gallery4.png" },
];

export default function Component() {
  const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Gallery" }];
  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, 8));
  const [activeTab, setActiveTab] = useState("images");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const loadMoreImages = () => {
    setVisibleImages(allImages.slice(0, visibleImages.length + 3));
  };

  const openImageDialog = (index: number) => {
    setCurrentImageIndex(index);
    setIsDialogOpen(true);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentImageIndex((prev) =>
        prev === 0 ? visibleImages.length - 1 : prev - 1
      );
    } else {
      setCurrentImageIndex((prev) =>
        prev === visibleImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Handle keyboard navigation in dialog
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") navigateImage("prev");
    if (e.key === "ArrowRight") navigateImage("next");
    if (e.key === "Escape") setIsDialogOpen(false);
  };

  return (
    <div className="mt-16 lg:mt-5">
      <Breadcrumb title="Gallery" items={breadcrumbItems} />

      <div className="flex flex-col items-center justify-center gap-4 w-full mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">Our Gallery</h1>
          <p className="text-gray-600">
            Explore our gallery, Hajj and Umrah journey moments captured
            beautifully
          </p>
        </div>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-6xl"
        >
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="images">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {visibleImages.map((image, index) => (
                <Dialog
                  key={index}
                  open={isDialogOpen && currentImageIndex === index}
                  onOpenChange={setIsDialogOpen}
                >
                  <DialogTrigger asChild>
                    <div
                      className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square"
                      onClick={() => openImageDialog(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ZoomInIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent
                    className="bg-background p-0 max-w-[90vw] max-h-[90vh] overflow-hidden"
                    onKeyDown={handleKeyDown}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={visibleImages[currentImageIndex].src}
                        alt={visibleImages[currentImageIndex].alt}
                        className="max-w-full max-h-[85vh] object-contain"
                      />

                      {/* Navigation buttons */}
                      {visibleImages.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateImage("prev");
                            }}
                            className="absolute left-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                          >
                            <ChevronLeft className="h-6 w-6" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigateImage("next");
                            }}
                            className="absolute right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                          >
                            <ChevronRight className="h-6 w-6" />
                          </button>

                          {/* Image counter */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {visibleImages.length}
                          </div>
                        </>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {visibleImages.length < allImages.length && (
              <div className="mt-8 text-center">
                <Button
                  variant="ghost"
                  onClick={loadMoreImages}
                  className="gap-2"
                >
                  Load More <ArrowDown size={16} />
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="videos">
            {/* Videos content remains the same */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
