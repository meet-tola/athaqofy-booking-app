"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function DonationDialog() {
  const [open, setOpen] = useState(false);
  const [showAccountDetails, setShowAccountDetails] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDonateClick = () => {
    setShowAccountDetails(true); // Show account details on button click
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
            Assalamu Alaikum. Together, we can ensure fasting Muslim have a meal. May Allah (SWT) bless and multiply your rewards for this noble effort.!
          </p>

          {/* Conditionally render account details */}
          {showAccountDetails && (
            <>
              <div className="grid grid-cols-4 items-center gap-4">
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
              </div>
            </>
          )}
        </div>

        <DialogFooter className="sm:justify-start flex flex-col sm:flex-row gap-2">
          <Button onClick={handleDonateClick} className="w-full">
            DONATE NOW
          </Button>

          <Button type="button" variant="outline" onClick={handleClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
