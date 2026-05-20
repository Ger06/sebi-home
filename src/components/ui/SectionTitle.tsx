import AnimatedSection from "./AnimatedSection";

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionTitleProps) {
  const align = centered ? "items-center text-center" : "items-start";
  const textColor = light ? "text-white" : "text-foreground";
  const labelColor = light ? "text-accent" : "text-accent";
  const subtitleColor = light ? "text-white/70" : "text-muted";

  return (
    <AnimatedSection className={`flex flex-col gap-3 ${align}`}>
      {label && (
        <span
          className={`text-xs uppercase tracking-[0.2em] font-medium ${labelColor}`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight ${textColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-xl leading-relaxed mt-1 ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
