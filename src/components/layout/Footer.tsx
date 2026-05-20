import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/images/logo/uarq.webp"
                alt="Uehara Arquitectura"
                width={120}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Diseño moderno y minimalista orientado a espacios funcionales,
              estéticamente bellos y significativos.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com/ueharaarquitectura"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-accent transition-colors duration-300"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="mailto:info@ueharaarquitectura.com.ar"
                aria-label="Email"
                className="text-white/60 hover:text-accent transition-colors duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white/40 font-medium">
              Navegación
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Trabajos realizados", href: "/trabajos" },
                { label: "Servicios", href: "/servicios" },
                { label: "Contacto", href: "/#contacto" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white/40 font-medium">
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://maps.google.com/?q=Cuba+2737+CABA+Buenos+Aires"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>Cuba 2737, CABA, Buenos Aires</span>
              </a>
              <a
                href="tel:+541125676739"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                <Phone size={16} className="shrink-0" />
                <span>11 2567-6739</span>
              </a>
              <a
                href="mailto:info@ueharaarquitectura.com.ar"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                <Mail size={16} className="shrink-0" />
                <span>info@ueharaarquitectura.com.ar</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Uehara Arquitectura. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
