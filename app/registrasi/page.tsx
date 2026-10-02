import React from 'react';

export default function RegistrasiPage() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden" style={{ backgroundColor: "var(--surface)" }}>
      
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-purple)" }} />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full opacity-30 blur-[150px]" style={{ backgroundColor: "var(--brand-deep-blue)" }} />

      <section className="relative z-10 flex w-full max-w-[1280px] flex-col items-center px-6 text-center md:px-12">
        
        <div className="mb-6 font-label text-sm font-medium tracking-[0.3em]" style={{ color: "var(--brand-sky-blue)" }}>
          Blooming Innovation
        </div>

        <h1 className="mb-6 font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl" style={{ color: "var(--on-surface)" }}>
          WUJUDKAN IDE KREATIF ANDA <br className="hidden md:block" />
          <span className="text-gradient">
            BERSAMA CREANOMIC 2026
          </span>
        </h1>

        <p className="mx-auto mb-[48px] max-w-2xl font-body text-[18px] leading-[28px]" style={{ color: "var(--text-secondary)" }}>
        </p>

        <div className="flex flex-col items-center gap-[24px] sm:flex-row sm:justify-center">
          
          <a 
            href="#"
            className="group relative inline-flex items-center justify-center rounded-full px-[32px] py-[16px] font-label text-[14px] font-bold uppercase tracking-[0.05em] text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-[var(--glow-sky)]"
            style={{ background: "var(--gradient-primary)" }}
          >
            Daftar Sekarang
          </a>

          

        </div>
        
      </section>
    </section>
  );
}
