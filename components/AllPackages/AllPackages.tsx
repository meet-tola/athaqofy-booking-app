'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Package } from '@/models/package';
import { getPackages } from '@/lib/apis';
import PackageCard from './PackageCard'; // Assuming you have a component to display each package

const AllPackages = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const searchParams = useSearchParams();
  const serviceTypeFilter = searchParams.get('serviceType') || '';
  const searchQuery = searchParams.get('searchQuery') || '';

  useEffect(() => {
    async function fetchPackages() {
      const data = await getPackages(serviceTypeFilter, searchQuery);
      setPackages(data);
    }

    fetchPackages();
  }, [serviceTypeFilter, searchQuery]);

  return (
    <div className="flex flex-wrap justify-center gap-6 w-full mx-auto py-4 px-8 lg:px-20">
      {packages.map((pkg) => (
        <PackageCard key={pkg._id} pkg={pkg} />
      ))}
    </div>
  );
};

export default AllPackages;
