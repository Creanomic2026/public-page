/**
 * RibbonTitle — ribbon trapesium kuning dengan teks Slackey biru.
 * Dipakai sebagai judul di atas kartu pop-art (mengikuti mockup per halaman).
 */
interface RibbonTitleProps {
  title: string;
  className?: string;
}

export default function RibbonTitle({ title, className = "" }: RibbonTitleProps) {
  return (
    <div className={`ribbon-trapezoid-wrapper w-max ${className}`}>
      <div className="ribbon-trapezoid" style={{ padding: "8px 28px" }}>
        <h2
          className="whitespace-nowrap text-center text-lg uppercase leading-tight sm:text-xl md:text-2xl"
          style={{
            fontFamily: "var(--font-slackey)",
            color: "#0B24F3",
            letterSpacing: "0.04em",
            textShadow: "2px 2px 0px #FFFFFF, 3px 3px 0px #0B0F19",
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
