import Link from "next/link";
import { Button } from "../ui/button";

const Guide = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-10 lg:p-20 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary">
          Steps for the Registration
        </h1>
        <p className="text-gray-600">
          Perform the following these steps, to register for your pilgrimage.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="relative p-6 border rounded-lg shadow-sm">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 border border-blue-600 rounded-full text-blue-600 font-semibold">
            Step 01
          </div>
          <h2 className="mt-8 text-lg font-bold text-center">
            Registration Process
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Click the Button Below, Start your journey by clicking the
            registration button to begin.
          </p>
        </div>
        <div className="relative p-6 border rounded-lg shadow-sm">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 border border-blue-600 rounded-full text-blue-600 font-semibold">
            Step 02
          </div>
          <h2 className="mt-8 text-lg font-bold text-center">
            Complete your payment
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Secure your spot by making the neccessary payment for registration.
          </p>
        </div>
        <div className="relative p-6 border rounded-lg shadow-sm">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 border border-blue-600 rounded-full text-blue-600 font-semibold">
            Step 03
          </div>
          <h2 className="mt-8 text-lg font-bold text-center">
            Fill Out and Submit Your Form
          </h2>
          <p className="mt-2 text-center text-gray-600">
            After Payment, complete it, and submit it to finalise your
            registration.
          </p>
        </div>
      </div>
      <Link href="https://selar.co/athaqofyhajjregistration"legacyBehavior>
      <a target="_blank" rel="noopener noreferrer"> 
        <Button>Register Now</Button>
      </a>
      </Link>
    </div>
  );
};

export default Guide;
