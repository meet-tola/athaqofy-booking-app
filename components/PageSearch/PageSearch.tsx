'use client';

import { useState } from 'react';

import Search from '../Search/Search';

const PageSearch = () => {
  const [serviceTypeFilter, setServiceTypeFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Search
      serviceTypeFilter={serviceTypeFilter}
      searchQuery={searchQuery}
      setServiceTypeFilter={setServiceTypeFilter}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default PageSearch;
