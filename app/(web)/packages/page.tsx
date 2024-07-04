import React from "react";
import Breadcrumb from "@/components/BreadCrumb/BreadCrumb";
import PageSearch from "@/components/PageSearch/PageSearch";

const PackagePage = () => {
  const breadcrumbItems = [{ href: "/", label: "Home" }, { label: "Packages" }];

  return (
    <>
      <Breadcrumb title="Packages" items={breadcrumbItems} />
      <PageSearch />
    </>
  );
};

export default PackagePage;
