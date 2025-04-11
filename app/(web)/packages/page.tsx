"use client"
import React, { useState } from "react";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import PageSearch from "@/components/PageSearch/PageSearch";
import AllPackages from "@/components/AllPackages/AllPackages";

const PackagePage = () => {
  const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Packages" }];
  const [fetchKey, setFetchKey] = useState(0); // trigger fetch manually

  return (
    <div className="mt-16 lg:mt-5">
      <Breadcrumb title="Packages" items={breadcrumbItems} />
      <h1 className="text-3xl font-bold text-primary my-8 text-center font-roca">All Packages</h1>
      <PageSearch setFetchKey={setFetchKey} />
      <AllPackages key={fetchKey} />
    </div>
  );
};

export default PackagePage;
