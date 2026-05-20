import { processSteps } from "@/data/process";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-20 md:py-28 bg-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="mb-14">
          <SectionTitle
            label="Metodología"
            title="Cómo trabajamos"
            subtitle="Un proceso claro y colaborativo, diseñado para que cada etapa sea transparente y sin sorpresas."
            light
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10">
          {processSteps.map((step, i) => (
            <AnimatedSection
              key={step.number}
              delay={i * 0.06}
              className="bg-foreground p-6 flex flex-col gap-3 group hover:bg-white/5 transition-colors duration-300"
            >
              <span className="font-display text-4xl font-light text-accent/60 leading-none">
                {step.number}
              </span>
              <h3 className="text-sm font-medium text-white leading-snug">
                {step.title}
              </h3>
              <p className="text-xs text-white/40 leading-relaxed">
                {step.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
