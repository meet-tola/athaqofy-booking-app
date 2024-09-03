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
              Thousands have entrusted us to fulfill their Hajj aspirations
            </p>
          </CardContent>
        </Card>
        <Card className="flex justify-center items-center w-full sm:w-[400px] lg:w-[350px] h-[200px] bg-[#1b1b1b] text-white rounded-2xl">
          <CardContent className="text-center">
            <CountUpNumber endValue={30} duration={3000} />
            <div className="mt-2 text-lg">Years Experience</div>
            <p className="mt-4 text-sm">
              Proudly serving for over 30 years and achieved satisfactory
              feedbacks
            </p>
          </CardContent>
        </Card>
        <Card className="flex justify-center items-center w-full sm:w-[400px] lg:w-[350px] h-[200px] bg-[#d32f2f] text-white rounded-2xl">
          <CardContent className="text-center">
            <CountUpNumber endValue={50} duration={3000} />
            <div className="mt-2 text-lg">Hajj and Umrah Tours</div>
            <p className="mt-4 text-sm">
              Successfully coordinated over 50 Hajj and Umrah tours
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
