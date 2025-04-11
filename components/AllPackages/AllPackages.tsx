'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Package } from "@/models/package";
import { getPackages } from "@/lib/apis";
import PackageCard from "./PackageCard";
import LoadingSpinner from "../Loader/Loader";
import Error from "../Error/Error";
import { motion } from "framer-motion";

const AllPackages = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const searchParams = useSearchParams();
  const serviceTypeFilter = searchParams.get("serviceType") || "";
  const searchQuery = searchParams.get("searchQuery") || "";

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  if (error) {
    return <Error error={error} reset={fetchPackages} />;
  }

  return (
    <div className="container mx-auto md:px-20 px-4 py-8">
      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <LoadingSpinner />
        </div>
      ) : packages.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-gray-700">No packages found</h3>
          <p className="text-gray-500 mt-2">Try adjusting your filters or search query</p>
        </div>
      ) : (
        <>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {packages.map((pkg) => (
              <motion.div key={pkg._id} variants={item} className="h-full">
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-8 text-center text-sm text-gray-500">
            Showing {packages.length} package{packages.length !== 1 ? "s" : ""}
          </div>
        </>
      )}
    </div>
  );
};

export default AllPackages;
