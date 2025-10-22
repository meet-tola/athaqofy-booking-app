import HeroSection from "@/components/Hero/HeroSection";
import LogoMarquee from "@/components/LogoMarquee/LogoMarquee";
import Guide from "@/components/Guide/Guide";
import { Gallery } from "@/components/Gallery/Gallery";
import FeaturedPackages from "@/components/FeaturedPackages/FeaturedPackages";
import { getFeaturedPackages } from "@/lib/apis";
import AboutUs from "@/components/AboutUs/AboutUs";
import { Testimonials } from "@/components/Testimonial/Testimonial";
import Newsletter from "@/components/Newsletter/Newsletter";
import DonationDialog from "@/components/Donation/DonationDialog";
import { QuickDialog } from "@/components/QuickDialog/QuickDialog";
import { VideoTestimonials } from "@/components/video-testimonials";
import { FAQ } from "@/components/faqs";
import { Contact } from "@/components/contact";

const page = async () => {
  const packageData = await getFeaturedPackages();

  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <Guide />
      <FeaturedPackages featuredPackages={packageData} />
      <AboutUs />
      <Gallery />
      <Testimonials />
      <VideoTestimonials />
      <FAQ />
      <Contact />
      {/* <Newsletter />  */}
      {/* <DonationDialog /> */}
      {/* <QuickDialog /> */}
    </>
  );
};

export default page;
