import type { FC } from "react";
import type { Package } from "@/models/package";
import { urlFor } from "@/lib/sanityImageBuilder";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PackageCardProps {
  pkg: Package;
}

const PackageCard: FC<PackageCardProps> = ({ pkg }) => {
  const formatPrice = (price: any) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-sm border border-border h-full flex flex-col transition-all duration-300 hover:shadow-md">
      <div className="relative overflow-hidden">
        <img
          src={
            pkg.coverImage
              ? urlFor(pkg.coverImage).url()
              : "https://placehold.co/400x400"
          }
          alt={`${pkg.name} Service`}
          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <Badge variant="secondary" className="absolute top-3 left-3">
          {pkg.serviceType}
        </Badge>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-semibold text-xl mb-3 line-clamp-2">{pkg.name}</h3>

        <div className="mt-auto space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Fee Deposit</span>
            <span className="font-medium">{formatPrice(pkg.price)}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Registration</span>
            <span className="font-medium">{formatPrice(pkg.reg)}</span>
          </div>

          <div className="flex gap-2 w-full mt-2">
            <Link href={`/packages/${pkg.slug.current}`} className="flex-1">
              <Button variant="outline" size="sm" className="w-full">
                Details
              </Button>
            </Link>
            <Link
              href={pkg?.bookUrl}
              className="flex-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="w-full">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
