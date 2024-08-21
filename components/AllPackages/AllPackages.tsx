'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Package } from '@/models/package';
import { getPackages } from '@/lib/apis';
import PackageCard from './PackageCard';
import LoadingSpinner from '../Loader/Loader';
import Error from '../Error/Error';


const AllPackages = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const searchParams = useSearchParams();
  const serviceTypeFilter = searchParams.get('serviceType') || '';
  const searchQuery = searchParams.get('searchQuery') || '';

  const fetchPackages = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getPackages(serviceTypeFilter, searchQuery);
      setPackages(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, [serviceTypeFilter, searchQuery]);

  if (error) {
    return <Error error={error} reset={fetchPackages} />;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 w-full mx-auto py-4 px-8 lg:px-20 mb-8">
      {loading ? (
        <LoadingSpinner />
      ) : (
        packages.map((pkg) => (
          <PackageCard key={pkg._id} pkg={pkg} />
        ))
      )}
    </div>
  );
};

export default AllPackages;