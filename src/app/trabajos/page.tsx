import type { Metadata } from "next";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Trabajos realizados",
  description:
    "Portafolio completo de proyectos residenciales, comerciales y de inversión de Uehara Arquitectura.",
};

export default function TrabajosPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-10 md:pb-14 bg-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <SectionTitle label="Portafolio" title="Trabajos" light />
        </div>
      </section>
      <PortfolioGrid />
    </>
  );
}
