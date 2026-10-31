import Image from "next/image";
import Reveal from "@/components/anim/Reveal";

/**
 * PIT CREANOMIC Section — Y2K Pop Art.
 * - Dot-grid white background
 * - Custom image header: pit-creanomic.png
 * - No CTA button
 * - Content fully centered
 */
export default function ContactSection() {
  return (
    <section
      id="kontak-cta"
      className="relative dot-grid-bg overflow-hidden w-full flex flex-col items-center justify-center text-center"
      style={{
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      {/* Full-width centering wrapper */}
      <Reveal className="w-full flex justify-center items-center px-4 text-center mx-auto" y={24} scale={0.95}>
        <Image
          src="/images/headers/pit-creanomic.png"
          alt="PIT CREANOMIC"
          width={1024}
          height={177}
          className="h-auto object-contain mx-auto"
          style={{ width: "clamp(300px, 60vw, 720px)", display: "block", margin: "0 auto" }}
          priority
          unoptimized
        />
      </Reveal>
    </section>
  );
}
