import { Button } from "@/components/ui/button";
import { Package } from "@/models/package";
import { urlFor } from "@/lib/sanityImageBuilder";
import Link from "next/link";

interface FeaturedPackageProps {
  featuredPackages: Package[];
}

export default function FeaturedPackages({
  featuredPackages,
}: FeaturedPackageProps) {
  const formatPrice = (price: any) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary">Our Special Package</h1>
        <p className="text-gray-600">Don't miss out on our Special Offers</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 w-full mx-auto py-4 px-8 lg:px-20">
        {featuredPackages.map((featuredPackage) => {
          let bookingLink = "/reg-booking"; // Default link
          if (featuredPackage.serviceType.toLowerCase() === "umrah") {
            bookingLink = "https://selar.co/athaqofyumrah";
          } else if (featuredPackage.serviceType.toLowerCase() === "hajj") {
            bookingLink = "https://selar.co/athaqofyhajjregistration";
          }

          return (
            <div
              key={featuredPackage._id}
              className="bg-card rounded-xl overflow-hidden shadow-md w-[310px] h-[400px] flex flex-col transition-transform transform hover:scale-105"
            >
              <img
                src={
                  urlFor(featuredPackage.coverImage).url() || "/placeholder.svg"
                }
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
                      <span className="text-sm">Fee Deposit: {` `}</span>
                      {formatPrice(featuredPackage.price)}
                    </span>
                    <span className="text-primary text-lg font-semibold">
                      <span className="text-sm">Registration: {` `}</span>
                      {formatPrice(featuredPackage.reg)}
                    </span>
                  </div>
                </div>
                <Link href={bookingLink} legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="my-auto">
                      Book Now
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Link href="/packages" legacyBehavior>
        <a target="_blank" rel="noopener noreferrer">
          <Button>View More</Button>
        </a>
      </Link>
    </div>
  );
}
