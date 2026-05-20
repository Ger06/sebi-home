import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="pt-20 md:pt-24 pb-20">
      {/* Hero image */}
      <div className="relative w-full aspect-[16/7] bg-border-color overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-12 pb-10 md:pb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
              {project.category} · {project.year}
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-light text-white mt-2">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mt-12 md:mt-16">
        {/* Back + description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-14">
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection>
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                {project.description}
              </p>
            </AnimatedSection>
          </div>
          <div className="space-y-4 text-sm">
            {[
              { label: "Categoría", value: project.category },
              { label: "Año", value: project.year },
              { label: "Ubicación", value: project.location },
            ].map(({ label, value }) => (
              <AnimatedSection key={label} className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.15em] text-muted">
                  {label}
                </span>
                <span className="text-foreground">{value}</span>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((img, i) => (
            <AnimatedSection
              key={i}
              delay={i * 0.1}
              className={i === 0 ? "md:col-span-2" : ""}
            >
              <div
                className={`relative overflow-hidden bg-border-color ${
                  i === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img}
                  alt={`${project.title} — imagen ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes={i === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 pt-10 border-t border-border-color">
          <Link
            href="/trabajos"
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.12em] text-muted hover:text-foreground transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            Volver a trabajos
          </Link>
        </div>
      </div>
    </div>
  );
}
