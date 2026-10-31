import HeroSection     from "@/components/sections/HeroSection";
import AboutSection    from "@/components/sections/AboutSection";
import VisiMisiSection from "@/components/sections/VisiMisiSection";
import FilosofiSection from "@/components/sections/FilosofiSection";
import MascotSection   from "@/components/sections/MascotSection";
import EventSection    from "@/components/sections/EventSection";
import SponsorSection  from "@/components/sections/SponsorSection";
import ContactSection  from "@/components/sections/ContactSection";

/**
 * Homepage — Y2K Pop Art Layout.
 * Order: Hero → Tentang → Vision & Mission → Filosofi & Makna → Mascot → Kilas Balik → Sponsor → PIT CREANOMIC
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VisiMisiSection />
      <FilosofiSection />
      <MascotSection />
      <EventSection />
      <SponsorSection />
      <ContactSection />
    </>
  );
}
