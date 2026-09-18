"use client";

import { motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import { camps } from "./camps/campData";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f2eee5] text-[#211b16]">
      <SmoothScroll />

      <header className="absolute inset-x-0 top-0 z-50 mx-auto flex max-w-[1600px] items-center justify-between px-5 py-6 md:px-10 md:py-8">
        <a
          href="#top"
          className="text-[11px] font-semibold uppercase tracking-[.3em]"
        >
          MONGOLIA / STAYS
        </a>
        <div className="hidden items-center gap-8 text-[10px] uppercase tracking-[.25em] md:flex">
          <a
            href="#destinations"
            className="transition-opacity hover:opacity-50"
          >
            Destinations
          </a>
          <a href="#about" className="transition-opacity hover:opacity-50">
            About
          </a>
        </div>
        <a
          href="#destinations"
          className="rounded-full border border-[#211b16]/30 px-4 py-2 text-[9px] uppercase tracking-[.22em] transition-all hover:border-[#211b16] hover:bg-[#211b16] hover:text-[#f2eee5]"
        >
          Explore camps
        </a>
      </header>

      <section
        id="top"
        className="relative overflow-hidden px-5 pb-8 pt-32 md:px-10 md:pb-10 md:pt-36"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 md:grid-cols-[1.15fr_.85fr] md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <p className="mb-5 text-[10px] uppercase tracking-[.42em] text-[#211b16]/45">
                Three places · One Mongolia
              </p>
              <h1 className="max-w-5xl text-[17vw] font-medium leading-[.76] tracking-[-.075em] md:text-[10.5vw]">
                MONGOLIA
                <br />
                <span className="ml-[7vw] font-light italic">ESCAPES</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="max-w-md justify-self-end pb-1"
            >
              <p className="text-sm leading-7 text-[#211b16]/65 md:text-base">
                Discover three independent stays across Mongolia — from the
                northern steppe to the granite mountains of Terelj National
                Park.
              </p>
              <div className="mt-6 flex items-center gap-4 text-[9px] uppercase tracking-[.25em] text-[#211b16]/40">
                <span className="h-px w-12 bg-[#b89a67]" /> Scroll to explore
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="destinations" className="px-5 pb-6 md:px-10 md:pb-10">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-5 flex items-end justify-between border-t border-[#211b16]/15 pt-4">
            <p className="text-[10px] uppercase tracking-[.32em] text-[#211b16]/45">
              Choose your stay
            </p>
            <p className="text-[10px] uppercase tracking-[.2em] text-[#211b16]/35">
              01 — 03
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {camps.map((camp, index) => (
              <motion.a
                key={camp.name}
                href={`/camps/${camp.slug}`}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.75, delay: index * 0.1 }}
                className="group relative min-h-[600px] overflow-hidden bg-[#26382f] text-white shadow-[0_18px_45px_rgba(33,27,22,.12)] md:min-h-[680px]"
              >
                <motion.img
                  src={camp.image}
                  alt={camp.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1.08 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/80 transition-all duration-700 group-hover:from-black/25 group-hover:to-black/85" />

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9c39c]/60 text-[10px] tracking-[.2em] text-[#f7efdf] backdrop-blur-sm">
                    {camp.number}
                  </div>
                  <span className="text-2xl font-light transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <div className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[8px] uppercase tracking-[.22em] backdrop-blur-md">
                    {camp.label}
                  </div>
                  <h2 className="max-w-[14ch] text-4xl font-semibold leading-[.9] tracking-[-.045em] md:text-[3.1rem]">
                    {camp.name}
                  </h2>
                  <div className="mt-5 border-t border-white/20 pt-4">
                    <p className="text-[10px] font-medium uppercase tracking-[.18em] text-white/85">
                      {camp.region}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[.18em] text-white/50">
                      {camp.country}
                    </p>
                  </div>
                  <p className="mt-5 max-w-sm text-sm leading-6 text-white/70 opacity-100 transition-all duration-500 md:max-h-0 md:translate-y-3 md:overflow-hidden md:opacity-0 md:group-hover:max-h-32 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    {camp.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4 text-[9px] uppercase tracking-[.22em] text-white/60">
                    <span>Visit camp</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative overflow-hidden bg-[#211b16] px-5 py-24 text-white md:px-10 md:py-36"
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, rgba(232,211,167,.45), transparent 28%), linear-gradient(120deg, transparent 45%, rgba(255,255,255,.08) 46%, transparent 47%)",
          }}
        />
        <div className="relative mx-auto grid max-w-[1600px] gap-14 md:grid-cols-[.7fr_1.3fr] md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[.4em] text-white/35">
              The collection
            </p>
            <p className="mt-4 text-sm uppercase tracking-[.18em] text-white/55">
              Bulgan · Terelj · Mongolia
            </p>
          </div>
          <div>
            <h2 className="max-w-5xl text-4xl font-light leading-tight tracking-[-.04em] md:text-7xl">
              Three distinct places, connected by the same feeling of space,
              silence and Mongolian hospitality.
            </h2>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-white/50">
              Choose a destination above to discover its landscape, atmosphere
              and story before continuing to the camp&apos;s official site.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#f2eee5] px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-3 border-t border-[#211b16]/15 pt-5 text-[9px] uppercase tracking-[.22em] text-[#211b16]/40 md:flex-row md:items-center md:justify-between">
          <span>© 2026 hoyorzagal</span>
          <span>Hoyor Zagal · Alungoo Ger Hotel · Guru Eco Complex</span>
        </div>
      </footer>
    </main>
  );
}
