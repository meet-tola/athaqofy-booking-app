import { GlobeIcon, BuildingIcon, HotelIcon } from "lucide-react"; // Assuming these icons are appropriate

export default function Component() {
  return (
    <section className="flex h-auto w-full items-center justify-center bg-muted my-10">
      <div className="container grid grid-cols-1 gap-8 md:px-20 px-4 py-12 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-primary font-roca">What we Offer</h1>
            <p className="text-gray-600">
              Athaqofy Global Services is a company certified by the Corporate
              Affairs Commission. We specialize in providing excellent and
              quality services in travel and hospitality.
            </p>
          </div>
          <div className="flex flex-col w-full gap-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <GlobeIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-medium">Hajj and Umrah Tours</h4>
                <p className="text-muted-foreground">
                  We offer well-organized Hajj and Umrah tours to provide a spiritually fulfilling experience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <BuildingIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-medium">Visa Processing</h4>
                <p className="text-muted-foreground">
                  Simplify your visa application process with our efficient services as our expert team ensures a smooth and hassle-free experience.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <HotelIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-xl font-medium">Hotel Booking</h4>
                <p className="text-muted-foreground">
                  Choose from our curated selection of accommodations, from cozy retreats to luxurious resorts and enjoy a seamless experience from reservation to check-out.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[500px] overflow-hidden rounded-lg shadow-lg lg:h-[600px]">
          <img
            src="/image/aboutus.png"
            alt="About Us"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
