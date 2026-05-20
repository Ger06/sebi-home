import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface PortfolioGridProps {
  preview?: boolean;
}

export default function PortfolioGrid({ preview = false }: PortfolioGridProps) {
  const displayed = preview ? projects.slice(0, 6) : projects;

  return (
    <section id="trabajos" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionTitle
            label="Portafolio"
            title="Trabajos realizados"
            subtitle="Proyectos residenciales, comerciales y de inversión en Buenos Aires."
          />
          {preview && (
            <AnimatedSection delay={0.2}>
              <Link
                href="/trabajos"
                className="text-sm uppercase tracking-[0.12em] text-foreground border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors duration-300 whitespace-nowrap"
              >
                Ver todos
              </Link>
            </AnimatedSection>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {displayed.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
