import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative min-h-[260px] overflow-hidden bg-white px-4 pb-16 pt-12 text-center text-[#102b82]"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(42,130,231,.23) 1.5px, transparent 1.7px)",
        backgroundSize: "16px 16px",
      }}
    >
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <div className="-rotate-2 border-b-4 border-[#102b82] bg-[#ffd735] px-7 py-2 shadow-[3px_4px_0_#ed35aa]">
          <p className="font-hero text-3xl font-bold text-[#e92da8] md:text-4xl">
            PIT CREANOMIC
          </p>
        </div>
        <p className="mt-8 font-body text-sm font-semibold">
          Crafting digital experiences with creativity
        </p>
        <p className="mt-7 font-label text-xs font-bold leading-relaxed">
          © {year} Made With <span className="text-[#e92da8]">♥</span> by PIT CREANOMIC
          <br />
          All rights reserved. Crafted with passion.
        </p>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-38px] flex items-end justify-between"
        aria-hidden="true"
      >
        <Image
          src="/images/about/Star 24.svg"
          alt=""
          width={100}
          height={100}
          className="w-24 -translate-x-5 md:w-36"
        />
        <Image
          src="/images/about/Star 32.svg"
          alt=""
          width={160}
          height={160}
          className="w-28 md:w-40"
        />
        <Image
          src="/images/about/Union.svg"
          alt=""
          width={100}
          height={100}
          className="w-20 translate-x-4 md:w-28"
        />
      </div>
    </footer>
  );
}
