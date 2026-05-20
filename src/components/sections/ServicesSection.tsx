import Link from "next/link";
import {
  PencilRuler,
  HardHat,
  Wrench,
  Building2,
  Lightbulb,
} from "lucide-react";
import { mainServices } from "@/data/services";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const iconMap: Record<string, React.ElementType> = {
  "pencil-ruler": PencilRuler,
  "hard-hat": HardHat,
  wrench: Wrench,
  "building-2": Building2,
  lightbulb: Lightbulb,
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-off-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionTitle
            label="Servicios"
            title="¿Qué hacemos?"
            subtitle="Desde el diseño hasta la entrega de obra, cubrimos cada etapa de su proyecto."
          />
          <AnimatedSection delay={0.2}>
            <Link
              href="/servicios"
              className="text-sm uppercase tracking-[0.12em] text-foreground border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors duration-300 whitespace-nowrap"
            >
              Ver todos los servicios
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border-color">
          {mainServices.map((service, i) => {
            const Icon = iconMap[service.icon] || Lightbulb;
            return (
              <AnimatedSection
                key={service.id}
                delay={i * 0.08}
                className="bg-off-white p-8 flex flex-col gap-4 group hover:bg-foreground transition-colors duration-500"
              >
                <Icon
                  size={24}
                  className="text-accent group-hover:text-accent transition-colors duration-500"
                />
                <h3 className="font-display text-xl font-light text-foreground group-hover:text-white transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-sm text-muted group-hover:text-white/60 leading-relaxed transition-colors duration-500">
                  {service.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
