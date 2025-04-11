'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Search from '../Search/Search';

type Props = {
  setFetchKey: (value: number | ((prev: number) => number)) => void;
};

const PageSearch = ({ setFetchKey }: Props) => {
  const searchParams = useSearchParams();
  const [serviceTypeFilter, setServiceTypeFilter] = useState(searchParams.get("serviceType") || "");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("searchQuery") || "");

  useEffect(() => {
    setServiceTypeFilter(searchParams.get("serviceType") || "");
    setSearchQuery(searchParams.get("searchQuery") || "");
  }, [searchParams]);

  return (
    <Search
      serviceTypeFilter={serviceTypeFilter}
      searchQuery={searchQuery}
      setServiceTypeFilter={setServiceTypeFilter}
      setSearchQuery={setSearchQuery}
      setFetchKey={setFetchKey}
    />
  );
};

export default PageSearch;
