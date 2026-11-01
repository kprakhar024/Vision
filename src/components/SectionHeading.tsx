import type { ReactNode } from "react";
import { AnimatedSection } from "./AnimatedSection";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  children?: ReactNode;
}) {
  return (
    <AnimatedSection
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-white/60">{description}</p>
      )}
      {children}
    </AnimatedSection>
  );
}
