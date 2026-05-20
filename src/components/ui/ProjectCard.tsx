"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={`/trabajos/${project.slug}`} className="group block">
        <div className="relative overflow-hidden aspect-[4/3] bg-border-color">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-end p-6">
            <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-xs uppercase tracking-[0.15em] text-accent font-medium">
                {project.category}
              </span>
            </div>
          </div>
        </div>
        <div className="pt-4 flex items-start justify-between">
          <div>
            <h3 className="font-display text-xl font-light text-foreground group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted mt-1">{project.year}</p>
          </div>
          <span className="text-muted group-hover:text-accent transition-colors duration-300 mt-1">
            →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
