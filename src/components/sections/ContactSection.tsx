"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(
      `mailto:info@ueharaarquitectura.com.ar?subject=Consulta desde el sitio&body=${body}`
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <div className="flex flex-col gap-10">
            <SectionTitle
              label="Contacto"
              title="Hablemos de su proyecto"
              subtitle="Nos interesa escuchar su idea. Completá el formulario o escribinos directamente."
            />

            <AnimatedSection delay={0.2} className="space-y-5">
              {[
                {
                  icon: MapPin,
                  text: "Cuba 2737, CABA, Buenos Aires",
                  href: "https://maps.google.com/?q=Cuba+2737+CABA",
                },
                {
                  icon: Phone,
                  text: "11 2567-6739",
                  href: "tel:+541125676739",
                },
                {
                  icon: Mail,
                  text: "info@ueharaarquitectura.com.ar",
                  href: "mailto:info@ueharaarquitectura.com.ar",
                },
                {
                  icon: InstagramIcon,
                  text: "@ueharaarquitectura",
                  href: "https://instagram.com/ueharaarquitectura",
                },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 text-sm text-foreground hover:text-accent transition-colors duration-300 group"
                >
                  <span className="flex items-center justify-center w-10 h-10 border border-border-color group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Icon size={16} />
                  </span>
                  {text}
                </a>
              ))}
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection delay={0.15} direction="left">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-[0.12em] text-muted">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="border border-border-color bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors duration-300"
                    placeholder="Su nombre"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-[0.12em] text-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="border border-border-color bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors duration-300"
                    placeholder="su@email.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-[0.12em] text-muted">
                  Mensaje
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="border border-border-color bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                  placeholder="Contenos sobre su proyecto..."
                />
              </div>

              <button
                type="submit"
                className="mt-2 px-8 py-4 bg-foreground text-white text-sm uppercase tracking-[0.12em] hover:bg-accent transition-colors duration-300 w-fit"
              >
                {sent ? "¡Mensaje enviado!" : "Enviar mensaje"}
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
