import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { LocationsPreview } from "@/components/home/LocationsPreview";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <LocationsPreview />
      <StatsSection />
      <TestimonialCarousel />
      <CTASection />
    </>
  );
}
