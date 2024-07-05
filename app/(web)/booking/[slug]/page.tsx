"use client";
import useSWR from 'swr';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import LoadingSpinner from '@/components/Loader/Loader';
import Error from '@/components/Error/Error'; 


const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BookingPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const apiUrl = slug ? `/api/package/${slug}` : null;

  const { data: pkg, error, isValidating, mutate } = useSWR(apiUrl, fetcher);

  if (error) {
    return <Error error={error} reset={() => mutate()} />;
  }

  if (isValidating || !pkg) {
    return <LoadingSpinner />;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const bookingData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(bookingData.entries()));
  };

  return (
    <Card className="max-w-lg mx-auto my-[60px] p-4">
      <CardHeader className="mb-6">
        <CardTitle className="text-xl font-semibold">Book Your Travel</CardTitle>
        <CardDescription className="text-gray-500">Fill out the details below to book your trip.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="package">Package</Label>
              <Input id="package" name="package" defaultValue={pkg.name} readOnly />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" name="price" type="number" defaultValue={pkg.price} readOnly />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
              <Label htmlFor="serviceType">Service Type</Label>
              <Input id="serviceType" name="serviceType" defaultValue={pkg.serviceType} readOnly />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="children">Children</Label>
                <Input id="children" name="children" type="number" placeholder="0" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="adults">Adults</Label>
                <Input id="adults" name="adults" type="number" placeholder="2" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="request">Special Request</Label>
            <Textarea id="request" name="specialRequests" rows={3} placeholder="Any special requests?" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="visa">Visa Status</Label>
            <Select id="visa" name="visaStatus">
              <SelectTrigger>
                <SelectValue placeholder="Select visa status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="required">Visa Required</SelectItem>
                <SelectItem value="not-required">Visa Not Required</SelectItem>
                <SelectItem value="pending">Visa Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="font-medium">Total Price</div>
            <div className="text-2xl font-bold">₦{pkg.price}</div>
          </div>
          <Button type="submit" size="lg" className="w-full mt-4">
            Continue Booking
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default BookingPage;
