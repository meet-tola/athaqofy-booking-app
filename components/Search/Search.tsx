'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, FC, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

type Props = {
  serviceTypeFilter: string;
  searchQuery: string;
  setServiceTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
  setFetchKey: (value: number | ((prev: number) => number)) => void;
};


const Search: FC<Props> = ({
  serviceTypeFilter,
  searchQuery,
  setServiceTypeFilter,
  setSearchQuery,
  setFetchKey,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleServiceTypeChange = (value: string) => {
    setServiceTypeFilter(value === "all" ? "" : value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    const params = new URLSearchParams();

    if (serviceTypeFilter) {
      params.set("serviceType", serviceTypeFilter);
    }

    if (searchQuery) {
      params.set("searchQuery", searchQuery);
    }

    router.push(`/packages?${params.toString()}`);
    setFetchKey(prev => prev + 1); // manual re-fetch trigger
  };

  const displayValue = serviceTypeFilter || "all";

  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto mb-2 px-10">
      <div className="flex items-center gap-2">
        <Select value={displayValue} onValueChange={handleServiceTypeChange}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="All Services">
              {displayValue === "all" ? "All Services" : displayValue}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Services</SelectItem>
              <SelectItem value="Hajj">Hajj</SelectItem>
              <SelectItem value="Umrah">Umrah</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search packages..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="pl-10"
            onKeyPress={(e) => {
              if (e.key === "Enter") handleFilterClick();
            }}
          />
        </div>

        <Button onClick={handleFilterClick} className="rounded-md">
          Search
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">
        Find the perfect package. Filter by service type or search by name.
      </p>
    </div>
  );
};

export default Search;
