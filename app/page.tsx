import HeroSection     from "@/components/sections/HeroSection";
import AboutSection    from "@/components/sections/AboutSection";
import VisiMisiSection from "@/components/sections/VisiMisiSection";
import FilosofiSection from "@/components/sections/FilosofiSection";
import MascotSection   from "@/components/sections/MascotSection";
import EventSection    from "@/components/sections/EventSection";
import SponsorSection  from "@/components/sections/SponsorSection";
import ContactSection  from "@/components/sections/ContactSection";

/**
 * Homepage — Orchestrates all page sections in order.
 * Each section is a standalone component in components/sections/.
 * Add, remove, or reorder sections here.
 *
 * Section separators use thin gradient lines instead of the
 * old CloudDivider component, keeping the Vibrant Kinetic aesthetic.
 */
function SectionDivider() {
  return (
    <div
      className="h-px w-full max-w-[1280px] mx-auto"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(82,42,146,0.4) 30%, rgba(210,10,129,0.4) 70%, transparent 100%)",
      }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <VisiMisiSection />
      <SectionDivider />
      <FilosofiSection />
      <SectionDivider />
      <MascotSection />
      <SectionDivider />
      <EventSection />
      <SectionDivider />
      <SponsorSection />
      <SectionDivider />
      <ContactSection />
    </>
  );
}
