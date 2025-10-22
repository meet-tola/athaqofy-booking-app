"use client";

import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import { GlobeIcon, BuildingIcon, HotelIcon, CheckCircle2, UsersIcon, ShieldCheckIcon } from "lucide-react";

export default function AboutPage() {
  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { label: "About Us" },
  ];

  return (
    <div className="mt-16 lg:mt-5">
      <Breadcrumb title="About Us" items={breadcrumbItems} />

      {/* What We Offer Section */}
      <section className="flex h-auto w-full items-center justify-center my-10">
        <div className="container grid grid-cols-1 gap-8 md:px-20 px-4 py-12 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-primary font-roca">What we Offer</h1>
              <p className="text-gray-600">
                Athaqofy Global Services is a company certified by the Corporate
                Affairs Commission. We specialize in providing excellent and
                quality services in travel and hospitality.
              </p>
            </div>

            <div className="flex flex-col w-full gap-4">
              {/* Hajj & Umrah */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <GlobeIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium">Hajj and Umrah Tours</h4>
                  <p className="text-muted-foreground">
                    We offer well-organized Hajj and Umrah tours to provide a spiritually fulfilling experience.
                  </p>
                </div>
              </div>

              {/* Visa Processing */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <BuildingIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium">Visa Processing</h4>
                  <p className="text-muted-foreground">
                    Simplify your visa application process with our efficient services as our expert team ensures a smooth and hassle-free experience.
                  </p>
                </div>
              </div>

              {/* Hotel Booking */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <HotelIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium">Hotel Booking</h4>
                  <p className="text-muted-foreground">
                    Choose from our curated selection of accommodations, from cozy retreats to luxurious resorts and enjoy a seamless experience from reservation to check-out.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-lg shadow-lg lg:h-[600px]">
            <img
              src="/image/aboutus.png"
              alt="About Us"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="container py-12 px-4 md:px-20 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-2">Our Mission</h2>
          <p className="text-muted-foreground">
            To deliver high-quality and reliable travel and hospitality services that enrich the spiritual and travel experiences of our clients.
          </p>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-2">Our Vision</h2>
          <p className="text-muted-foreground">
            To become the leading travel agency for Hajj, Umrah, and global tourism, recognized for excellence, integrity, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted py-16 px-4 md:px-20">
        <div className="container text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Why Choose Us</h2>
          <p className="text-muted-foreground mt-2">
            We're trusted by hundreds of travelers across the globe.
          </p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <CheckCircle2 className="h-10 w-10 text-primary" />
            <h4 className="text-xl font-semibold">Trusted Service</h4>
            <p className="text-muted-foreground">We are certified and trusted by official authorities and satisfied clients.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <ShieldCheckIcon className="h-10 w-10 text-primary" />
            <h4 className="text-xl font-semibold">Secure and Reliable</h4>
            <p className="text-muted-foreground">We prioritize your safety and comfort in all aspects of our service.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-4">
            <UsersIcon className="h-10 w-10 text-primary" />
            <h4 className="text-xl font-semibold">Customer Focused</h4>
            <p className="text-muted-foreground">Our team is dedicated to providing personalized experiences tailored to your needs.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold">Ready to Travel With Us?</h2>
          <p className="text-lg">
            Join hundreds of satisfied pilgrims and travelers who trust Athaqofy Global Services.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 bg-white text-primary px-6 py-3 rounded-md font-medium transition hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
