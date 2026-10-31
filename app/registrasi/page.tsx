import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";
import RibbonTitle from "@/components/ui/RibbonTitle";
import PitBanner from "@/components/ui/PitBanner";

export const metadata = {
  title: "Registrasi",
  description:
    "Daftar dan masuk ke dashboard CREANOMIC 2026 untuk mengikuti kompetisi dan rangkaian acara.",
};

const DASHBOARD_REGISTER = "https://dash.creanomic.web.id/register";
const DASHBOARD_LOGIN = "https://dash.creanomic.web.id/login";

export default function RegistrasiPage() {
  return (
    <>
      <PageHero
        preTitle="Ready to Join?"
        title="CREANOMIC 2026"
        subtitle="Daftarkan dirimu dan timmu, lalu pilih cabang lomba yang ingin kamu ikuti."
        cta={{ href: DASHBOARD_REGISTER, label: "DAFTAR SEKARANG →" }}
        secondaryCta={{ href: DASHBOARD_LOGIN, label: "SUDAH PUNYA AKUN? MASUK" }}
      />

      <PageSection paddingTop={240} width="narrow">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-8">
          {/* Peserta baru */}
          <div className="relative flex h-full flex-col pt-6">
            <RibbonTitle
              title="PESERTA BARU"
              className="absolute -top-1 left-1/2 z-10 -translate-x-1/2"
            />
            <div className="pop-card flex h-full flex-col px-6 pb-8 pt-12 text-center">
              <h2
                className="text-2xl text-white"
                style={{
                  fontFamily: "var(--font-slackey)",
                  textShadow: "2px 2px 0px #0B24F3",
                }}
              >
                BUAT AKUN
              </h2>
              <p
                className="mt-3 flex-1 text-sm leading-relaxed text-white"
                style={{ fontFamily: "var(--font-work-sans)" }}
              >
                Buat akun di dashboard CREANOMIC, lengkapi data diri dan tim,
                lalu pilih cabang lomba yang ingin diikuti.
              </p>
              <a
                href={DASHBOARD_REGISTER}
                className="btn-primary-y2k mt-6 w-full justify-center"
              >
                DAFTAR SEKARANG →
              </a>
            </div>
          </div>

          {/* Sudah punya akun */}
          <div className="relative flex h-full flex-col pt-6">
            <RibbonTitle
              title="SUDAH PUNYA AKUN"
              className="absolute -top-1 left-1/2 z-10 -translate-x-1/2"
            />
            <div className="pop-card flex h-full flex-col px-6 pb-8 pt-12 text-center">
              <h2
                className="text-2xl text-white"
                style={{
                  fontFamily: "var(--font-slackey)",
                  textShadow: "2px 2px 0px #0B24F3",
                }}
              >
                MASUK DASHBOARD
              </h2>
              <p
                className="mt-3 flex-1 text-sm leading-relaxed text-white"
                style={{ fontFamily: "var(--font-work-sans)" }}
              >
                Masuk untuk memantau status pendaftaran, mengunggah berkas, dan
                melihat pengumuman terbaru dari panitia.
              </p>
              <a
                href={DASHBOARD_LOGIN}
                className="btn-primary-y2k mt-6 w-full justify-center"
              >
                MASUK SEKARANG →
              </a>
            </div>
          </div>
        </div>
      </PageSection>

      <PitBanner />
    </>
  );
}
