"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

interface VideoTestimonial {
  id: string;
  title: string;
  author: string;
  location: string;
  thumbnail: string;
  videoId: string;
  duration: string;
}

export function VideoTestimonials() {
  const testimonials: VideoTestimonial[] = [
    {
      id: "1",
      title: "Complete Hajj Guide - Step by Step",
      author: "",
      location: "",
      thumbnail: "/placeholder.svg?height=120&width=200",
      videoId: "txxKu8WhKwc",
      duration: "8:45",
    },
    {
      id: "2",
      title: "Umrah Experience - Spiritual Journey",
      author: "",
      location: "",
      thumbnail: "/placeholder.svg?height=120&width=200",
      videoId: "txxKu8WhKwc",
      duration: "5:30",
    },
    {
      id: "3",
      title: "Preparing for Your First Pilgrimage",
      author: "",
      location: "",
      thumbnail: "/placeholder.svg?height=120&width=200",
      videoId: "txxKu8WhKwc",
      duration: "6:12",
    },
    {
      id: "4",
      title: "Customer Testimonial - Life Changing",
      author: "",
      location: "",
      thumbnail: "/placeholder.svg?height=120&width=200",
      videoId: "txxKu8WhKwc",
      duration: "3:20",
    },
    {
      id: "5",
      title: "Hajj Rituals Explained",
      author: "",
      location: "",
      thumbnail: "/placeholder.svg?height=120&width=200",
      videoId: "txxKu8WhKwc",
      duration: "12:15",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(testimonials[0]);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary font-roca mb-2">
            Videos & Testimonials
          </h1>
          <p className="text-gray-600">
            Watch testimonials from our pilgrims and educational content to
            prepare for your sacred journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Video List - Left Side */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Video Testimonials
            </h3>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedVideo.id === testimonial.id
                      ? "ring-2 ring-yellow-500 shadow-lg"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedVideo(testimonial)}
                >
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative flex-shrink-0">
                          <img
                            src={`https://img.youtube.com/vi/${testimonial.videoId}/mqdefault.jpg`}
                            alt={testimonial.title}
                            className="w-20 h-12 object-cover rounded"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                              <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                            </div>
                          </div>
                        </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-2">
                          {testimonial.title}
                        </h4>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Video Player - Right Side */}
          <div className="lg:col-span-2">
              <Card className="overflow-hidden border border-gray-200">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.videoId}?rel=0&modestbranding=1`}
                    title={selectedVideo.title}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Explore our educational content and hear inspiring stories
                    from pilgrims who have completed their sacred journey with
                    Athaqofy.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
