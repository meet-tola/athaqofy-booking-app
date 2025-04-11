"use client";
import React, { Suspense, useState } from "react";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import PageSearch from "@/components/PageSearch/PageSearch";
import AllPackages from "@/components/AllPackages/AllPackages";
import LoadingSpinner from "@/components/Loader/Loader";

const PackagePage = () => {
  const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Packages" }];
  const [fetchKey, setFetchKey] = useState(0); // trigger fetch manually

  return (
    <div className="mt-16 lg:mt-5">
      <Breadcrumb title="Packages" items={breadcrumbItems} />
      <h1 className="text-3xl font-bold text-primary my-8 text-center font-roca">
        All Packages
      </h1>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[400px]">
            <LoadingSpinner />
          </div>
        }
      >
        <PageSearch setFetchKey={setFetchKey} />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-[400px]">
            <LoadingSpinner />
          </div>
        }
      >
        <AllPackages key={fetchKey} />
      </Suspense>
    </div>
  );
};

export default PackagePage;
