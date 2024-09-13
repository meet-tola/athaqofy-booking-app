"use client";

import { FC } from "react";
import { Card, CardContent } from "../ui/card";

import CountUpNumber from "../CountUp/CountUpNumber";
import { PrayerTimeDialog } from "../PrayerTime/PrayerTimeDialog";

type Props = {
  heading: React.ReactNode;
};

const ClientComponent: FC<Props> = (props) => {
  const { heading } = props;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 bg-hero-bg bg-cover bg-center">
      {heading}
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-8">
        <Card className="flex justify-center items-center w-full sm:w-[400px] lg:w-[350px] h-[200px] bg-[#0f4c75] text-white rounded-2xl">
          <CardContent className="text-center">
            <CountUpNumber endValue={100} duration={3000} />
            <div className="mt-2 text-lg">Pilgrims Annually</div>
            <p className="mt-4 text-sm">
            Trusted by over 100 pilgrims each year to fulfill their sacred Hajj and Umrah journey.
            </p>
          </CardContent>
        </Card>
        <Card className="flex justify-center items-center w-full sm:w-[400px] lg:w-[350px] h-[200px] bg-[#1b1b1b] text-white rounded-2xl">
          <CardContent className="text-center">
            <CountUpNumber endValue={30} duration={3000} />
            <div className="mt-2 text-lg">Years of Expertise</div>
            <p className="mt-4 text-sm">
            Over two decades of delivering enriching and 
            memorable pilgrimage experiences.
            </p>
          </CardContent>
        </Card>
        <Card className="flex justify-center items-center w-full sm:w-[400px] lg:w-[350px] h-[200px] bg-[#d32f2f] text-white rounded-2xl">
          <CardContent className="text-center">
            <CountUpNumber endValue={50} duration={3000} />
            <div className="mt-2 text-lg">Curated Tour Packages</div>
            <p className="mt-4 text-sm">
            Offering a wide range of meticulously planned tours to 
            ensure a seamless and spiritual journey.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="fixed left-7 bottom-12 z-10">
        <PrayerTimeDialog />
      </div>
    </div>
  );
};

export default ClientComponent;
