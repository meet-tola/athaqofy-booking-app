import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { ZoomInIcon } from "lucide-react";
import { Button } from "../ui/button";

const galleryImages = [
  { src: "/image/gallery/gallery1.png", alt: "Gallery Image 1" },
  { src: "/image/gallery/gallery2.png", alt: "Gallery Image 2" },
  { src: "/image/gallery/gallery3.png", alt: "Gallery Image 3" },
  { src: "/image/gallery/gallery4.png", alt: "Gallery Image 4" },
  { src: "/image/gallery/gallery5.png", alt: "Gallery Image 5" },
  { src: "/image/gallery/gallery6.png", alt: "Gallery Image 6" },
];

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary">Our Gallery</h1>
        <p className="text-gray-600">
          Explore our gallery, Hajj and Umrah journey moments captured
          beautifully{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="relative group overflow-hidden rounded-lg cursor-pointer">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
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
      <Button>View More</Button>
    </div>
  );
}
