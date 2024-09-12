"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { toast } from "react-hot-toast";

export default function RegBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [reference, setReference] = useState("");

  const getAmount = () =>
    serviceType === "umrah" ? 15000 : serviceType === "hajj" ? 30000 : 0;

  const fwConfig = {
    public_key: "FLWPUBK_TEST-e441b9e33776ced7a35e674e46b3ab54-X",
    tx_ref: Date.now().toString(),
    amount: getAmount().toString(),
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email || "",
      phone_number: phone || "",
      name: name || "Customer",
    },
    customizations: {
      title: "Travel Registration Booking",
      description: "Payment for booking",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
    callback: (response: any) => {
      if (response.status === "successful") {
        toast.success("Payment successful!");
        setPaymentSuccess(true);
        setReference(response.transaction_id);
        closePaymentModal(); // Close the payment modal
      } else {
        toast.error("Payment failed. Please try again.");
      }
    },
    onClose: () => {},
  };

  return (
    <Card className="w-full max-w-md mx-auto my-5">
      <CardHeader className="space-y-1">
        <div className="flex justify-center">
          <img
            alt="Travel Agency Logo"
            className="h-12 w-auto"
            src="/athaqofy-logo.svg"
          />
        </div>
        <CardTitle className="text-2xl font-bold text-center">
          Travel Registration Booking
        </CardTitle>
        <CardDescription className="text-center">
          Book your spiritual journey to Mecca with ease. Choose between Umrah
          and Hajj packages.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              type="email"
              required
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              type="tel"
              required
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="service-type">Service Type</Label>
            <Select onValueChange={setServiceType} required>
              <SelectTrigger id="service-type">
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="umrah">Umrah</SelectItem>
                <SelectItem value="hajj">Hajj</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {serviceType && (
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" value={`₦${getAmount()}`} readOnly />
            </div>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex flex-col">
        <FlutterWaveButton
          {...fwConfig}
          className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-10 px-4 py-2"
        >
          Pay Now
        </FlutterWaveButton>
        {paymentSuccess && (
          <div className="mt-4 text-center text-green-600">
            Payment successful! Reference: {reference}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
