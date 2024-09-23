import { FC } from "react";
import { Package } from "@/models/package";
import { urlFor } from "@/lib/sanityImageBuilder";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div
      key={pkg._id}
      className="bg-card rounded-xl overflow-hidden shadow-md w-[310px] h-[400px] flex flex-col transition-transform transform hover:scale-105"
    >
      <img
        src={urlFor(pkg.coverImage).url() || "/placeholder.svg"}
        alt={`${pkg.name} Service`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <div>
            <div className="flex flex-col items-start gap-1 mb-2">
              <span className="text-muted-foreground">{pkg.serviceType}</span>
              <span className="text-primary font-bold text-xl">{pkg.name}</span>
              <span className="text-primary text-lg font-semibold">
                <span className="text-sm">Fee Deposit: {` `}</span>
                {formatPrice(pkg.price)}
              </span>
              <span className="text-primary text-lg font-semibold">
                <span className="text-sm">Registration: {` `}</span>
                {formatPrice(pkg.reg)}
              </span>
            </div>
          </div>
        </div>
        <Link href={`/packages/${pkg.slug.current}`}>
          <Button variant="outline" className="my-auto">
            Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
