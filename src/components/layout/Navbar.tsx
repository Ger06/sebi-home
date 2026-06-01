"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Trabajos", href: "/trabajos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = scrolled || hovered;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-white/90 backdrop-blur-md border-b border-border-color shadow-sm"
            : "[background:linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 h-18 md:h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/uarq.webp"
              alt="Uehara Arquitectura"
              width={160}
              height={56}
              className={`h-12 md:h-14 w-auto object-contain transition-all duration-300 ${solid ? "brightness-0" : ""}`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-[0.12em] transition-colors duration-300 hover:text-accent ${
                  solid ? "text-foreground" : "text-white/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com/ueharaarquitectura"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`transition-colors duration-300 hover:text-accent ${solid ? "text-muted" : "text-white/70"}`}
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="mailto:info@ueharaarquitectura.com.ar"
              aria-label="Email"
              className={`transition-colors duration-300 hover:text-accent ${solid ? "text-muted" : "text-white/70"}`}
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 transition-colors hover:text-accent ${solid ? "text-foreground" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20"
          >
            <nav className="flex flex-col gap-1 px-6 py-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 font-display text-3xl font-light border-b border-border-color hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex gap-6 px-6 pt-4">
              <a
                href="https://instagram.com/ueharaarquitectura"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="mailto:info@ueharaarquitectura.com.ar"
                className="text-muted hover:text-accent transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
