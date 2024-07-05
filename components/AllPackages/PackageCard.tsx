import { FC } from 'react';
import { Package } from '@/models/package';
import { urlFor } from '@/lib/sanityImageBuilder';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PackageCardProps {
  pkg: Package;
}

const PackageCard: FC<PackageCardProps> = ({ pkg }) => {
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
          <div className="flex flex-col items-start gap-1 mb-2">
            <span className="text-muted-foreground">
              {pkg.serviceType}
            </span>
            <span className="text-primary font-bold text-xl">
              {pkg.name}
            </span>
            <span className="text-primary text-lg font-semibold">
              ₦{pkg.price}/<span className="text-sm">person</span>
            </span>
            <span className="text-muted-foreground">
              Package's Duration ({pkg.duration} days)
            </span>
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
