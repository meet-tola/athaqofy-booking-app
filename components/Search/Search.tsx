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
import { SearchIcon } from "lucide-react";

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

  const handleServiceType = (value: string) => {
    setServiceTypeFilter(value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterClick = () => {
    let query = "/packages?";
    if (serviceTypeFilter) {
      query += `serviceType=${serviceTypeFilter}&`;
    }
    if (searchQuery) {
      query += `searchQuery=${searchQuery}`;
    }
    router.push(query);
  };
  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto mb-2 px-10">
      <div className="flex items-center gap-2">
        <Select value={serviceTypeFilter} onValueChange={handleServiceType}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Hajj">Hajj</SelectItem>
              <SelectItem value="Umrah">Umrah</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            id="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
            className="pl-10"
          />
        </div>
        <Button onClick={handleFilterClick} className="rounded-md">Search</Button>
      </div>
      <p className="text-sm text-muted-foreground">
        Find the perfect service for your needs. Search by category or keyword.
      </p>
    </div>
  );
};

export default Search;
