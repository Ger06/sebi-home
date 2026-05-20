import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="flex flex-col gap-8">
            <SectionTitle
              label="Sobre nosotros"
              title="Arquitectura con propósito"
              subtitle="Somos un estudio con sede en Buenos Aires especializado en diseño residencial, desarrollo inmobiliario y asesoramiento técnico."
            />
            <AnimatedSection delay={0.2} className="space-y-4">
              <p className="text-base text-muted leading-relaxed">
                Trabajamos con una filosofía de diseño moderno y minimalista,
                donde cada proyecto responde a las necesidades específicas del
                cliente y al contexto de su entorno. Creemos que la arquitectura
                de calidad transforma la vida cotidiana.
              </p>
              <p className="text-base text-muted leading-relaxed">
                Nuestro equipo acompaña cada etapa del proceso: desde el primer
                boceto hasta la entrega de la obra terminada. La transparencia,
                el compromiso con los plazos y la atención al detalle son
                nuestros valores de trabajo.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-3 gap-8 pt-4 border-t border-border-color">
                {[
                  { value: "+50", label: "Proyectos" },
                  { value: "+8", label: "Años de experiencia" },
                  { value: "100%", label: "Satisfacción" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="font-display text-3xl font-light text-foreground">
                      {stat.value}
                    </span>
                    <span className="text-xs text-muted uppercase tracking-[0.12em]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Image */}
          <AnimatedSection delay={0.15} direction="left">
            <div className="relative aspect-[4/5] overflow-hidden bg-border-color">
              <Image
                src="/images/about/us1.webp"
                alt="Estudio Uehara Arquitectura"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
