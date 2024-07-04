import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Countdown from "./Countdown";
import { AlarmClockIcon } from "lucide-react";

export const PrayerTimeDialog: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center justify-center py-8 gap-2 relative group"
        >
          <AlarmClockIcon className="w-8 h-8" />
          <span className="bg-white absolute bottom-full mb-3 p-2 border border-input rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            Prayer Time
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Prayer Time</DialogTitle>
          <DialogDescription>
            Check the time remaining for the next prayer.
          </DialogDescription>
        </DialogHeader>
        <Countdown />
        <DialogFooter>
          <Button
            variant="outline"
            type="button"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
