"use client";

import { FC, useEffect, useState } from "react";

type PrayerTime = {
  name: string;
  time: string; // In "HH:MM" format
};

const prayerTimes: PrayerTime[] = [
  { name: "Fajr", time: "05:00" },
  { name: "Dhuhr", time: "12:00" },
  { name: "Asr", time: "15:30" },
  { name: "Maghrib", time: "19:00" },
  { name: "Isha", time: "20:30" },
];

const getNextPrayer = (currentDate: Date): PrayerTime => {
  for (const prayer of prayerTimes) {
    const [hours, minutes] = prayer.time.split(":").map(Number);
    const prayerTime = new Date(currentDate);
    prayerTime.setHours(hours, minutes, 0, 0);

    if (prayerTime > currentDate) {
      return prayer;
    }
  }
  return prayerTimes[0]; // Return Fajr if no upcoming prayer today
};

const Countdown: FC = () => {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [nextPrayer, setNextPrayer] = useState<PrayerTime>(
    getNextPrayer(new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const nextPrayerTime = getNextPrayer(currentDate);
      setNextPrayer(nextPrayerTime);

      const [hours, minutes] = nextPrayerTime.time.split(":").map(Number);
      const prayerDate = new Date(currentDate);
      prayerDate.setHours(hours, minutes, 0, 0);

      const diff = prayerDate.getTime() - currentDate.getTime();
      const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
      const minutesLeft = Math.floor((diff / (1000 * 60)) % 60);
      const secondsLeft = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="font-bold">Next Prayer: {nextPrayer.name}</h2>
      <div className="flex flex-col items-start">
        Time Remaining:
        <div className="text-2xl font-bold">{timeLeft}</div>{" "}
      </div>
    </div>
  );
};

export default Countdown;
