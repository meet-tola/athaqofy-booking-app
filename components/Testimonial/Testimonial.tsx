import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
  } from "@/components/ui/carousel";
  import { Card } from "@/components/ui/card";
  import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
  
  const testimonials = [
    {
      name: "Ahmed Al-Farsi",
      role: "Pilgrim",
      testimonial:
        "The Hajj experience was transformative and beautifully organized. Thank you for making it unforgettable!",
    },
    {
      name: "Fatima Ali",
      role: "Pilgrim",
      testimonial:
        "The Umrah package was exceptional. The support and guidance provided were top-notch. Highly recommend!",
    },
    {
      name: "Musa Khan",
      role: "Pilgrim",
      testimonial:
        "Every detail of the Hajj package was handled with care and professionalism. An experience of a lifetime!",
    },
    {
      name: "Aisha Hussain",
      role: "Pilgrim",
      testimonial:
        "The Umrah trip exceeded my expectations in every way. The accommodations and services were impeccable.",
    },
    {
      name: "Ibrahim Al-Sabah",
      role: "Pilgrim",
      testimonial:
        "An outstanding service for both Hajj and Umrah. The entire journey was smooth and enriching.",
    },
    {
      name: "Layla Ahmad",
      role: "Pilgrim",
      testimonial:
        "A remarkable experience that was well-organized and spiritually fulfilling. Thank you for the wonderful journey!",
    },
  ];
  
  export default function Testimonials() {
    // Number of cards per slider
    const cardsPerSlider = {
      sm: 1, // Show 1 card per slider on small screens
      md: 2, // Show 2 cards per slider on medium screens
      lg: 3, // Show 3 cards per slider on large screens
    };
  
    // Helper function to chunk testimonials into arrays of length based on screen size
    const chunkTestimonials = (testimonials, chunkSize) => {
      const chunks = [];
      for (let i = 0; i < testimonials.length; i += chunkSize) {
        chunks.push(testimonials.slice(i, i + chunkSize));
      }
      return chunks;
    };
  
    // Get chunks based on screen size
    const sliders = chunkTestimonials(testimonials, cardsPerSlider.lg);
  
    return (
      <div className="flex flex-col items-center justify-center w-full p-24 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">Our Testimonials</h1>
          <p className="text-gray-600">Check what people say about us</p>
        </div>
        <Carousel className="w-full">
          <CarouselContent>
            {sliders.map((slider, index) => (
              <CarouselItem key={index}>
                <div className="flex gap-4 overflow-x-auto">
                  {slider.map((testimonial, idx) => (
                    <div key={idx} className="flex-shrink-0 w-full sm:w-[calc(100%)] lg:w-[calc(33.333%-1rem)]">
                      <Card className="flex flex-col items-center gap-4 p-6 text-center">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2">
                          <h4 className="text-lg font-semibold">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-foreground">
                            {testimonial.role}
                          </p>
                          <blockquote className="text-lg font-medium leading-relaxed">
                            "{testimonial.testimonial}"
                          </blockquote>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  }
  