'use client'

import useSWR from 'swr';
import { Package } from '@/models/package';
import { urlFor } from '@/lib/sanityImageBuilder';
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';
import { LoadingSpinner } from '@/components/Loader/Loader';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const PackageDetails = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const apiUrl = slug ? `/api/package/${slug}` : null;

  const { data: pkg, error, isValidating } = useSWR<Package>(apiUrl, fetcher);

  if (error) return <div>Failed to load package</div>;
  if (isValidating) return <div><LoadingSpinner /></div>;

  const coverImageUrl = pkg ? urlFor(pkg.coverImage).url() : "/placeholder.svg";
  const galleryImages = pkg?.images || ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"];
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 md:py-12 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="order-2 md:order-1">
          <div className="relative aspect-video overflow-hidden rounded-xl">
            <img
              src={coverImageUrl}
              alt={pkg?.name || "Cover Image"}
              width={800}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {galleryImages.slice(0, 3).map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={urlFor(image).url()}
                  alt={`Gallery Image ${index + 1}`}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h1 className="text-3xl font-bold mb-4">{pkg?.name}</h1>
          <p className="text-muted-foreground mb-6">
            {pkg?.description}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-sm font-medium text-muted-foreground">Service Type</div>
              <div>{pkg?.serviceType}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Duration</div>
              <div>{pkg?.duration} days</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Price</div>
              <div className="text-2xl font-bold">₦{pkg?.price}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground">Special Note</div>
              <div>{pkg?.specialNote}</div>
            </div>
          </div>
          {pkg?.includedServices && (
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Additional Services</h2>
              <ul className="space-y-2">
                {pkg.includedServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-primary" />
                    <span>{service.service}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Button size="lg" className="w-full">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;