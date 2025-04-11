import { Button } from "@/components/ui/button"
import type { Package } from "@/models/package"
import { urlFor } from "@/lib/sanityImageBuilder"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface FeaturedPackageProps {
  featuredPackages: Package[]
}

export default function FeaturedPackages({ featuredPackages }: FeaturedPackageProps) {
  const formatPrice = (price: any) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 mb-12 md:px-20 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-bold text-primary mb-2 font-roca">Our Special Packages</h1>
        <p className="text-muted-foreground">
          Experience exceptional service with our carefully curated special offers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {featuredPackages.map((featuredPackage) => {
          const bookingLink = featuredPackage.bookUrl || "/" // Use bookUrl, fallback to /reg-booking if not provided

          return (
            <div
              key={featuredPackage._id}
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-border/40"
            >
              <div className="relative">
                <div className="absolute top-0 left-0 bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-br-lg">
                  {featuredPackage.serviceType}
                </div>
                <img
                  src={urlFor(featuredPackage.coverImage).url() || "/placeholder.svg"}
                  alt={`${featuredPackage.name} Service`}
                  className="w-full h-52 object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-3 text-foreground">{featuredPackage.name}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Fee Deposit</span>
                    <span className="font-semibold text-foreground">{formatPrice(featuredPackage.price)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Registration</span>
                    <span className="font-semibold text-foreground">{formatPrice(featuredPackage.reg)}</span>
                  </div>
                </div>

                <div className="mt-auto flex gap-2">
                  <Link href={`/packages/${featuredPackage._id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      Details
                    </Button>
                  </Link>
                  <Link href={bookingLink} className="flex-1" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="w-full">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <Link href="/packages">
        <Button variant="outline" className="group">
          View All Packages
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </Link>
    </div>
  )
}
