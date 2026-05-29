import type { Metadata } from "next";
import Link from "next/link";
import {
  PencilRuler,
  HardHat,
  Wrench,
  Building2,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { mainServices, advisoryServices } from "@/data/services";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios de arquitectura: proyectos, construcción, remodelaciones, desarrollo inmobiliario y asesoramiento técnico.",
};

const iconMap: Record<string, React.ElementType> = {
  "pencil-ruler": PencilRuler,
  "hard-hat": HardHat,
  wrench: Wrench,
  "building-2": Building2,
  lightbulb: Lightbulb,
};

export default function ServiciosPage() {
  return (
    <div>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionTitle
            label="Servicios"
            title="Todo lo que necesita para su proyecto"
            subtitle="Acompañamos cada etapa: desde la idea inicial hasta la llave en mano."
            light
          />
        </div>
      </section>

      {/* Main services */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-12">
            <SectionTitle label="Áreas de trabajo" title="Servicios principales" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, i) => {
              const Icon = iconMap[service.icon] || Lightbulb;
              return (
                <AnimatedSection
                  key={service.id}
                  delay={i * 0.08}
                  className="border border-border-color p-8 flex flex-col gap-5 group hover:border-foreground transition-colors duration-500"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={28} className="text-accent" />
                    <span className="text-xs uppercase tracking-[0.15em] text-muted">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-light text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-foreground hover:text-accent transition-colors duration-300"
                  >
                    Consultanos <ArrowRight size={14} />
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advisory services */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="mb-12">
            <SectionTitle
              label="Asesoramiento"
              title="Servicios de asesoría"
              subtitle="Consultoría profesional para tomar mejores decisiones en cada etapa."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-color">
            {advisoryServices.map((service, i) => (
              <AnimatedSection
                key={service.id}
                delay={i * 0.07}
                className="bg-off-white p-8 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-light text-foreground">
                    {service.title}
                  </h3>
                  <span className="text-xs text-muted shrink-0 mt-1">
                    0{i + 1}
                  </span>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-foreground hover:text-accent transition-colors duration-300 mt-2"
                >
                  Contáctanos <ArrowRight size={14} />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-light text-white">
              ¿Listo para comenzar su proyecto?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link
              href="/#contacto"
              className="px-8 py-4 bg-white text-foreground text-sm uppercase tracking-[0.12em] hover:bg-foreground hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              Hablemos
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
