import type { Metadata } from "next";
import PortfolioGrid from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = {
  title: "Trabajos realizados",
  description:
    "Portafolio completo de proyectos residenciales, comerciales y de inversión de Uehara Arquitectura.",
};

export default function TrabajosPage() {
  return (
    <div className="pt-20 md:pt-24">
      <PortfolioGrid />
    </div>
  );
}
