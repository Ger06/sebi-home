"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
      {/* Hero video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/images/uehara.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.25em] text-accent font-medium"
        >
          Buenos Aires · Argentina
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-none tracking-wide"
        >
          Uehara
          <br />
          <span className="font-light italic">Arquitectura</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/70 text-base md:text-lg max-w-md leading-relaxed"
        >
          Diseño moderno y minimalista. Espacios funcionales, estéticamente
          bellos y significativos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex gap-4 mt-2"
        >
          <Link
            href="/trabajos"
            className="px-8 py-3 bg-white text-foreground text-sm uppercase tracking-[0.12em] hover:bg-accent hover:text-white transition-all duration-300"
          >
            Ver trabajos
          </Link>
          <Link
            href="/#contacto"
            className="px-8 py-3 border border-white/50 text-white text-sm uppercase tracking-[0.12em] hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            Contacto
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
