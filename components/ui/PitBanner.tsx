import Image from "next/image";

/**
 * PitBanner — banner "PIT CREANOMIC" sebelum footer,
 * mengikuti mockup tiap halaman.
 */
export default function PitBanner() {
  return (
    <section className="dot-grid-bg relative w-full overflow-hidden pb-6 pt-10">
      <div className="flex w-full items-center justify-center px-4">
        <Image
          src="/images/headers/pit-creanomic.png"
          alt="PIT CREANOMIC"
          width={1024}
          height={177}
          className="mx-auto h-auto object-contain"
          style={{ width: "clamp(280px, 46vw, 560px)", display: "block" }}
          unoptimized
        />
      </div>
    </section>
  );
}
