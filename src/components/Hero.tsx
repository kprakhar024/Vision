"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Users } from "lucide-react";
import { BrowserMockup } from "./BrowserMockup";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-600/25 via-violet-600/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 animate-glow rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
            <Sparkles className="h-3.5 w-3.5 text-violet-300" />
            Digital solutions studio, based in India
          </div>

          <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.3rem]">
            Your Business Deserves a{" "}
            <span className="text-gradient">Better Digital Presence.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            We build modern websites and digital solutions that help small businesses
            stand out, connect with customers, and grow online.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition-transform hover:scale-[1.03]"
            >
              Let&apos;s Build Your Website
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              Explore Our Work
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-white/50">
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-300" />
              Built for ambitious small businesses
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-violet-300" />
              Transparent pricing, no surprises
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:mx-0"
        >
          <div className="relative">
            <BrowserMockup
              type="clinic"
              accent="blue"
              className="relative z-20 w-full animate-float"
            />
            <BrowserMockup
              type="restaurant"
              accent="amber"
              className="absolute -left-8 -top-10 z-10 hidden w-[72%] opacity-95 sm:block lg:-left-12"
            />
            <BrowserMockup
              type="business"
              accent="teal"
              className="absolute -bottom-12 -right-6 z-30 hidden w-[58%] opacity-95 sm:block"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
