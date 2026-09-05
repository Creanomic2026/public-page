import React from 'react';

export default function HomePage() {
  return (
    // Base Background: --color-bg-primary
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0B0C10]">
      
      {/* --- EFEK VISUAL: Dekorasi Glow Latar Belakang --- */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-[#522A92] opacity-20 mix-blend-screen blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0D2680] opacity-30 mix-blend-screen blur-[150px]"></div>

      {/* --- KONTEM UTAMA --- */}
      <section className="relative z-10 flex w-full max-w-[1280px] flex-col items-center px-6 text-center md:px-[64px]">
        
        {/* Accent Callout (Dancing Script) */}
        <div className="mb-[-12px] -rotate-2 font-['Dancing_Script'] text-[24px] font-semibold text-[#2A82E7]">
          Blooming Innovation
        </div>

        {/* Headline Utama (Oswald + Gradient Hero) */}
        <h1 className="mb-6 font-['Oswald'] text-5xl font-bold leading-[1.1] tracking-tight text-[#FFFFFF] md:text-[72px]">
          WUJUDKAN IDE KREATIF ANDA <br className="hidden md:block" />
          <span className="bg-gradient-to-br from-[#0D2680] via-[#522A92] to-[#E025CE] bg-clip-text text-transparent">
            BERSAMA CREANOMIC 2026
          </span>
        </h1>

        {/* Lead Paragraph (Noto Sans) */}
        <p className="mx-auto mb-[48px] max-w-2xl font-['Noto_Sans'] text-[18px] leading-[28px] text-[#E1E3E4]">
        </p>

        {/* --- BAGIAN CTA (CALL TO ACTION) --- */}
        <div className="flex flex-col items-center gap-[24px] sm:flex-row sm:justify-center">
          
          {/* CTA Primary: Pill Button */}
          <a 
            href="#" // Link ke server pendaftaran
            className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#522A92] to-[#E025CE] px-[32px] py-[16px] font-['Montserrat'] text-[14px] font-bold uppercase tracking-[0.05em] text-[#FFFFFF] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(42,130,231,0.5),0_0_40px_rgba(42,130,231,0.2)]"
          >
            Daftar Sekarang
          </a>

          {/* CTA Secondary: Glass Button */}
          <a 
            href="/event" // Link ke halaman statis Next.js
            className="group relative inline-flex items-center justify-center rounded-full border border-[#2A2C3D] bg-[#1E1F2B]/60 px-[32px] py-[16px] font-['Montserrat'] text-[14px] font-bold uppercase tracking-[0.05em] text-[#E1E3E4] backdrop-blur-[12px] transition-all duration-300 hover:border-[#E025CE] hover:text-[#FFFFFF] hover:shadow-[0_0_30px_rgba(224,37,206,0.35)]"
          >
            Lihat Event
          </a>

        </div>
        {/* --- AKHIR BAGIAN CTA --- */}
        
      </section>
    </main>
  );
}