import React, { Suspense } from "react";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import PageSearch from "@/components/PageSearch/PageSearch";
import AllPackage from "@/components/AllPackages/AllPackages";
import LoadingSpinner from "@/components/Loader/Loader"; 

const PackagePage = () => {
  const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Packages" }];

  return (
    <>
      <Breadcrumb title="Packages" items={breadcrumbItems} />
      <h1 className="text-3xl font-bold text-primary my-8 text-center">All Packages</h1>
      <PageSearch />
      <Suspense fallback={<LoadingSpinner />}>
        <AllPackage />
      </Suspense>
    </>
  );
};

export default PackagePage;
