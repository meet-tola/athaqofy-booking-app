import { Button } from "@/components/ui/button";
import { Package } from "@/models/package";
import { urlFor } from "@/lib/sanityImageBuilder";

interface FeaturedPackageProps {
  featuredPackages: Package[];
}

export default function FeaturedPackages({ featuredPackages }: FeaturedPackageProps) {
  return (
    <div>
    <div className="text-center">
        <h1 className="text-3xl font-bold text-primary">Our Special Package</h1>
        <p className="text-gray-600">Don't miss out on our Special Offers</p>
      </div>
    <div className="flex flex-wrap justify-center gap-6 w-full mx-auto p-8 lg:p-20">
      {featuredPackages.map((featuredPackage) => (
        <div 
          key={featuredPackage._id} 
          className="bg-card rounded-lg overflow-hidden shadow-md w-[310px] h-96 flex flex-col"
        >
          <img
            src={urlFor(featuredPackage.coverImage).url() || "/placeholder.svg"}
            alt={`${featuredPackage.name} Service`}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-primary font-semibold">{featuredPackage.name}</span>
                <span className="text-primary-foreground font-semibold">
                  ${featuredPackage.price}
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground">{featuredPackage.serviceType}</span>
                <span className="text-muted-foreground">{featuredPackage.duration} min</span>
              </div>
            </div>
            <Button size="sm" className="w-full mt-4">
              Book Now
            </Button>
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
}
