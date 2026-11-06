"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/anim/Reveal";
import type { FilosofiItem } from "@/types";

const FILOSOFI_DATA: FilosofiItem[] = [
  {
    id: "logotype",
    title: "Logotype",
    subtitle: "Wajah Baru CREANOMIC",
    content:
      "Logotype CREANOMIC memakai font dengan lekukan yang tidak kaku dan dinamis, mencerminkan fleksibilitas pemikiran mahasiswa Vokasi yang adaptif, inovatif, dan berani keluar dari batasan konvensional. Susunan bertingkat — “CREA” di atas dan “NOMIC” di bawah — memaknai CREA (Creative) sebagai fondasi gagasan dan NOMIC (Innovation Centre) sebagai landasan pergerakan inovasi. Struktur yang seakan saling mengunci mewakili kolaborasi, jaringan lintas kampus, serta sinergi antara teknologi, seni, dan bisnis. Logotype ini menggambarkan wajah baru semangat penggerak CREANOMIC yang lebih terbuka, kreatif, dan inspiratif. Lima warna menyusunnya, dengan Biru sebagai warna inti yang melambangkan kedalaman berpikir, kecerdasan, serta visi masa depan yang profesional dan berbasis teknologi.",
  },
  {
    id: "nama",
    title: "Makna Nama",
    subtitle: "Creative and Innovation Centre",
    content:
      "CREANOMIC merupakan singkatan dari Creative and Innovation Centre — pusat kreativitas dan inovasi yang menjadi ruang kolaborasi generasi muda untuk berkarya, berinovasi, dan menciptakan dampak nyata.",
  },
  {
    id: "warna",
    title: "Filosofi Warna",
    subtitle: "Y2K Pop Art Palette",
    content:
      "Logotype CREANOMIC memakai lima warna dengan Biru (#0B24F3) sebagai warna inti yang melambangkan kedalaman berpikir, kecerdasan, serta visi masa depan yang profesional dan berbasis teknologi. Hot Pink (#F849C1) menyuntikkan energi dan kreativitas, sementara Yellow (#FFD43D) menjadi aksen kegembiraan.",
  },
];

export default function FilosofiSection() {
  const [activeId, setActiveId] = useState("logotype");
  const active = FILOSOFI_DATA.find((f) => f.id === activeId)!;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="filosofi"
      className="relative dot-grid-bg overflow-hidden w-full flex flex-col items-center justify-center text-center"
      style={{
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center text-center">

        {/* Section Image Header with generous ~64px gap to content */}
        <Reveal className="w-full flex justify-center items-center mb-14 sm:mb-16 md:mb-20 text-center" y={22}>
          <Image
            src="/images/headers/filosofi-makna.png"
            alt="Filosofi & Makna"
            width={804}
            height={130}
            className="w-full max-w-[480px] sm:max-w-[580px] h-auto object-contain mx-auto"
            style={{ display: "block", margin: "0 auto" }}
            priority
            unoptimized
          />
        </Reveal>

        <div className="flex flex-wrap justify-center items-center gap-3 mb-8 mx-auto w-full text-center">
          {FILOSOFI_DATA.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              whileHover={reduceMotion ? undefined : { y: -2, rotate: -1 }}
              whileTap={reduceMotion ? undefined : { scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-200 border-2"
              style={{
                fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)",
                background: activeId === item.id ? "#0B24F3" : "#FFD43D",
                color: activeId === item.id ? "#FFFFFF" : "#0B0F19",
                borderColor: "#0B0F19",
                boxShadow: activeId === item.id ? "4px 4px 0px #0B0F19" : "2px 2px 0px #0B0F19",
              }}
            >
              {item.title}
            </motion.button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto w-full text-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeId}
              initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 190, damping: 20 }}
              className="pop-card p-8"
            >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2 text-center"
              style={{
                fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)",
                color: "#FFD43D",
              }}
            >
              {active.subtitle}
            </p>
            <h3
              className="text-2xl font-bold mb-4 text-center"
              style={{
                fontFamily: "var(--font-slackey, 'Slackey', cursive)",
                color: "#FFD43D",
                textShadow: "2px 2px 0px #0B0F19",
              }}
            >
              {active.title}
            </h3>
            <p
              className="text-base leading-relaxed text-center"
              style={{
                fontFamily: "var(--font-noto-sans, 'Noto Sans', sans-serif)",
                color: "#FFFFFF",
              }}
            >
              {active.content}
            </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
