import { Button } from "@/components/ui/button";
import { Package } from "@/models/package";
import { urlFor } from "@/lib/sanityImageBuilder";
import Link from "next/link";

interface FeaturedPackageProps {
  featuredPackages: Package[];
}

export default function FeaturedPackages({ featuredPackages }: FeaturedPackageProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary">Our Special Package</h1>
        <p className="text-gray-600">Don't miss out on our Special Offers</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 w-full mx-auto py-4 px-8 lg:px-20">
        {featuredPackages.map((featuredPackage) => (
          <div
            key={featuredPackage._id}
            className="bg-card rounded-xl overflow-hidden shadow-md w-[310px] h-[400px] flex flex-col transition-transform transform hover:scale-105"
          >
            <img
              src={urlFor(featuredPackage.coverImage).url() || "/placeholder.svg"}
              alt={`${featuredPackage.name} Service`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <div className="flex flex-col items-start gap-1 mb-2">
                  <span className="text-muted-foreground">
                    {featuredPackage.serviceType}
                  </span>
                  <span className="text-primary font-bold text-xl">
                    {featuredPackage.name}
                  </span>
                  <span className="text-primary text-lg font-semibold">
                    ₦{featuredPackage.price}/<span className="text-sm">person</span>
                  </span>
                  <span className="text-muted-foreground">
                    Package's Duration ({featuredPackage.duration} days)
                  </span>
                </div>
              </div>
              <Link href={`/packages/${featuredPackage.slug.current}`}>
                <Button variant="outline" className="my-auto">
                  Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Button>View More</Button>
    </div>
  );
}