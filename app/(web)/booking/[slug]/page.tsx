"use client";
import useSWR from "swr";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import LoadingSpinner from "@/components/Loader/Loader";
import Error from "@/components/Error/Error";
import { PaystackButton } from "react-paystack";
import { useState } from "react";
import { createBooking } from "@/lib/apis";
import { toast } from "react-hot-toast";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BookingPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const apiUrl = slug ? `/api/package/${slug}` : null;

  const { data: pkg, error, isValidating, mutate } = useSWR(apiUrl, fetcher);

  const [formData, setFormData] = useState<any>({});
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [reference, setReference] = useState<string | null>(null);

  if (error) {
    return <Error error={error} reset={() => mutate()} />;
  }

  if (isValidating || !pkg) {
    return <LoadingSpinner />;
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!paymentSuccess) {
      toast.error("Please complete the payment to proceed with the booking.");
      return;
    }

    try {
      const bookingData = {
        ...formData,
        package: pkg._id,
        serviceType: pkg.serviceType,
        totalPrice: pkg.price,
        reference,
      };
      await createBooking(bookingData);
      toast.success("Booking successfully created!");
    } catch (error) {
      console.error("Error creating booking:", error);
      toast.error("Failed to create booking. Please try again.");
    }
  };

  const paystackProps = {
    email: formData.email || "",
    amount: pkg.price * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
    metadata: {
      name: formData.userFullName || "",
      phone: formData.phone || "",
    },
    text: "Pay Now",
    onSuccess: (response: any) => {
      toast.success("Payment successful!");
      setPaymentSuccess(true);
      setReference(response.reference);
    },
    onClose: () => toast.error("Payment was not completed."),
  };

  return (
    <Card className="max-w-lg mx-auto my-[60px] p-4">
      <CardHeader className="mb-6">
        <CardTitle className="text-xl font-semibold">
          Registration Fee
        </CardTitle>
        <CardDescription className="text-gray-500">
          Please complete the payment to secure your booking.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="package">Package</Label>
              <Input id="package" name="package" value={pkg.name} readOnly />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={pkg.price}
                readOnly
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              onChange={handleInputChange}
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="serviceType">Service Type</Label>
              <Input
                id="serviceType"
                name="serviceType"
                value={pkg.serviceType}
                readOnly
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="08012345678"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea
              id="specialRequests"
              name="specialRequests"
              rows={3}
              placeholder="Any special requests?"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="visaStatus">Visa Status</Label>
            <Select
              onValueChange={(value) => handleSelectChange("visaStatus", value)}
            >
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
          <PaystackButton
            className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-10 px-4 py-2"
            {...paystackProps}
          />
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingPage;
