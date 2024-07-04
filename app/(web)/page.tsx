import HeroSection from "@/components/Hero/HeroSection"
import LogoMarquee from "@/components/LogoMarquee/LogoMarquee"
import Guide from "@/components/Guide/Guide"
import Gallery from "@/components/Gallery/Gallery"
import FeaturedPackages from "@/components/FeaturedPackages/FeaturedPackages"
import { getFeaturedPackages } from "@/lib/apis";

const page = async () => {
  const packageData = await getFeaturedPackages();

  return (
    <>
      <HeroSection />
      <LogoMarquee />
      <Guide />
 <FeaturedPackages featuredPackages={packageData} />;
      <Gallery />
    </>
  )
}

export default page