import React from "react";
import Image from "next/image";

const LogoMarquee = () => {
  const logos = [
    "/image/logo1.png",
    "/image/logo2.png",
    "/image/logo3.jpg",
    "/image/logo4.png",
    "/image/logo5.png",
  ];

  return (
    <div className="relative overflow-hidden h-[100px] flex items-center justify-center mx-[40px] lg:mx-[150px]">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

      <div className="flex items-center justify-center h-full animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <div key={index} className="h-full mx-4 relative w-[100px]" >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        ))}
        {/* Repeat the logos to create an infinite effect */}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="h-full mx-6 relative w-[100px]">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
