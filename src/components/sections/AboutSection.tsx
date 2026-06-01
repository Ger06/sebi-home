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
                En Uehara Arquitectura, cada proyecto residencial es una oportunidad para transformar y enriquecer la vida de nuestros clientes. Con un enfoque moderno y minimalista, creamos espacios que reflejan la personalidad y los deseos de quienes los habitan.
              </p>
              <p className="text-base text-muted leading-relaxed">
                Nos dedicamos a entender a fondo las necesidades de nuestros clientes, acompañándolos en cada etapa del proceso, desde la concepción hasta la entrega final. Nuestro compromiso es diseñar espacios funcionales, estéticamente agradables y significativos.
                Confía en Uehara Arquitectura para hacer de tu hogar un lugar único y especial.
              </p>
               <p className="text-base text-muted leading-relaxed">
                Confía en Uehara Arquitectura para hacer de tu hogar un lugar único y especial.
              </p>
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
