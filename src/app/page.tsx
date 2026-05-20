import Hero from "@/components/sections/Hero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PortfolioGrid preview />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
