"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function DonationDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleContactAdmin = () => {
    console.log("Contacting admin...");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Donate Now!</DialogTitle>
          {/* <DialogDescription>
            Your donation can make a difference. Every contribution counts!
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="flex justify-center">
            <Image
              src="/image/donate.jpg"
              alt="Donation campaign"
              width={300}
              height={300}
              className="rounded-md"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Assalamu Alaikum. Help provide stretchers for mosques to transport
            the deceased with dignity. Your donation will be a Sadaqah Jariyah
            for years to come. Donate Generously and Share Widely!
          </p>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="accountName" className="text-right">
              Account Name
            </Label>
            <Input
              id="accountName"
              defaultValue="Athaqofy Global Services"
              className="col-span-3"
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="accountNumber" className="text-right">
              Account Number
            </Label>
            <Input
              id="accountNumber"
              defaultValue="POLARIS BANK - 4091228313"
              className="col-span-3"
              readOnly
            />
          </div> */}
        </div>
        {/* <p className="text-center text-sm text-muted-foreground mt-2">
          If you have made a donation or would like to contribute, please
          contact the admin for more information or to provide proof of your
          contribution.
        </p> */}
        <DialogFooter className="sm:justify-start flex flex-col sm:flex-row gap-2">
          <Link href="https://selar.co/9yrj14" className="w-full">
            <Button>DONATE NOW</Button>
          </Link>

          <Button type="button" variant="outline" onClick={handleClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
