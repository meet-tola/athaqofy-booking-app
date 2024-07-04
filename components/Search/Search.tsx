"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type Props = {
  serviceTypeFilter: string;
  searchQuery: string;
  setServiceTypeFilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};

const Search: FC<Props> = ({
  serviceTypeFilter,
  searchQuery,
  setServiceTypeFilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleServiceType = (event: ChangeEvent<HTMLSelectElement>) => {
    setServiceTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(
      `/services?serviceType=${serviceTypeFilter}&searchQuery=${searchQuery}`
    );
  };

  return (
    <div className="container md:mx-auto mx-[250px] flex flex-col md:flex-row gap-4 flex-wrap justify-between items-center py-4">
      <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
        <Label htmlFor="serviceType">Service Type</Label>
        <Select>
          <SelectTrigger className="w-full md:w-[180px] mt-2">
            <SelectValue
              value={serviceTypeFilter}
              onChange={handleServiceType}
              placeholder="Select a Service"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select a Service</SelectLabel>
              <SelectItem value="Hajj">Hajj</SelectItem>
              <SelectItem value="Umrah">Umrah</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full md:w-[50%] lg:w-auto mb-4 md:mb-0">
        <Label htmlFor="search">Search</Label>
        <Input
          type="search"
          id="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="w-full mt-2"
        />
      </div>

      <Button type="button" onClick={handleFilterClick} className="w-full md:w-auto mt-2">
        Search
      </Button>
    </div>
  );
};

export default Search;
