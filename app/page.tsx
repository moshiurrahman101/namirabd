import { CTASection } from "@/components/frontend/home/cta-section";
import { WhyChooseUs } from "@/components/frontend/home/faq";
import { Hero } from "@/components/frontend/home/hero";
import { ServicesCarousel } from "@/components/frontend/home/services-carousel";
import { ServicesGrid } from "@/components/frontend/home/services-grid";
import { Testimonials } from "@/components/frontend/home/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesCarousel />
      <WhyChooseUs />
      <ServicesGrid />
      <Testimonials />
      <CTASection />
    </main>
  );
}
