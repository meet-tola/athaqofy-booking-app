"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Heart, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AudioTestimonial } from "@/components/audio-testimonial";

export function QuickDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show dialog after 7 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="h-screen max-w-3xl mx-auto p-0 gap-0 overflow-hidden">
        <div className="h-full overflow-y-auto">
          <div className="p-6">
            <div className="mb-6">
              <Carousel className="w-full">
                <CarouselContent>
                  {carouselItems.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="relative h-[200px] overflow-hidden rounded-xl">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-center mb-4">
                Why Athaqofy?
              </h2>
              <Carousel
                className="w-full"
                opts={{ align: "start", loop: true }}
              >
                <CarouselContent>
                  {whyChooseUs.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="rounded-lg bg-gray-50 p-6">
                        <div className="flex items-start">
                          <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                            <item.icon className="h-3 w-3 text-green-600" />
                          </div>
                          <span>{item.text}</span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-4 space-x-2">
                  {whyChooseUs.map((_, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full bg-gray-300"
                    />
                  ))}
                </div>
              </Carousel>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl font-bold text-center mb-4">
                Testimonials
              </h2>
              <Tabs defaultValue="audio" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="audio">Audio</TabsTrigger>
                  <TabsTrigger value="text">Text</TabsTrigger>
                </TabsList>
                <TabsContent value="audio" className="mt-4">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {audioTestimonials.map((testimonial, index) => (
                        <CarouselItem key={index}>
                          <div className="rounded-lg bg-gray-50 p-4">
                            <div className="mb-2">
                              <h4 className="font-medium">
                                {testimonial.name}
                              </h4>
                            </div>
                            <AudioTestimonial src={testimonial.audio || ""} />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-4 space-x-2">
                      {audioTestimonials.map((_, index) => (
                        <div
                          key={index}
                          className="w-2 h-2 rounded-full bg-gray-300"
                        />
                      ))}
                    </div>
                  </Carousel>
                </TabsContent>

                <TabsContent value="text" className="mt-4">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {textTestimonials.map((testimonial, index) => (
                        <CarouselItem key={index}>
                          <div className="rounded-lg bg-gray-50 p-4">
                            <div className="mb-2">
                              <h4 className="font-medium">
                                {testimonial.name}
                              </h4>
                            </div>
                            <p className="text-sm text-gray-600">
                              {testimonial.text}
                            </p>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-4 space-x-2">
                      {textTestimonials.map((_, index) => (
                        <div
                          key={index}
                          className="w-2 h-2 rounded-full bg-gray-300"
                        />
                      ))}
                    </div>
                  </Carousel>
                </TabsContent>
              </Tabs>
            </div>

            {/* <div className="mt-6">
              <h2 className="text-2xl font-bold text-center mb-4">Next Trip</h2>
              <div className="rounded-lg bg-green-50 p-4">
                <h3 className="font-bold text-lg mb-2">Umrah - Ramadan Special</h3>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Departure: March 15, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Duration: 14 days</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    <span>Only 5 seats left!</span>
                  </div>
                </div>
                <div className="text-center font-bold text-green-600 text-xl mb-4">$2,999 per person</div>
              </div>
            </div> */}

            <div className="mt-6 text-center">
              <Link
                href="https://wa.link/o5qxpp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full">
                  WhatsApp Us Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Data moved inside the component file
const carouselItems = [
  {
    title: "Kaaba, Mecca",
    image: "/image/gallery/gallery8.jpg",
  },
  {
    title: "Prophet's Mosque, Medina",
    image: "/image/gallery/gallery9.jpg",
  },
  {
    title: "Mount Arafat",
    image: "/image/gallery/gallery10.jpg",
  },
];

const whyChooseUs = [
  {
    icon: Heart,
    text: "Over 2 decades of experience in Hajj and Umrah services",
  },
  {
    icon: Star,
    text: "5-star accommodations close to holy sites",
  },
  {
    icon: Users,
    text: "Multilingual guides with deep religious knowledge",
  },
  {
    icon: Globe,
    text: "All-inclusive packages with no hidden fees",
  },
];

const audioTestimonials = [
  {
    name: "Alhaja Abdulsalam Ramota",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "Salam Aleikum sir, Thank you for giving me a life time experience I so much appreciate it sir and I'm looking forward to go again. May Almighty Allah accept our prayers.",
    audio: "/audio/testimonial2.aac",
  },
  {
    name: "HAMZAT RILIWAN",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "It was so good, nice memories of highly spiritual journey with lots to learn about Islam and our beloved prophet S.A.W and most especially we all stay together like family.",
    audio: "/audio/testimonial3.aac",
  },
];

const textTestimonials = [
  {
    name: "HAMZAT RILIWAN",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "Salam Aleikum sir, Thank you for giving me a life time experience I so much appreciate it sir and I'm looking forward to go again. May Almighty Allah accept our prayers.",
    audio: null,
  },
  {
    name: "Alh. Qudus Lawal.",
    avatar: "/placeholder.svg?height=100&width=100",
    text: "It was so good, nice memories of highly spiritual journey with lots to learn about Islam and our beloved prophet S.A.W and most especially we all stay together like family",
    audio: null,
  },
];
