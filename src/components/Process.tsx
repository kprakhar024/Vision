import { processSteps } from "@/config/site";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="A simple, transparent path from idea to launch"
          description="We keep the process straightforward so you always know what's happening and what comes next."
        />

        <div className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
          {processSteps.map((step, i) => (
            <AnimatedSection
              key={step.step}
              delay={i * 0.1}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-ink-900/60 p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white shadow-lg shadow-violet-900/40">
                {step.step}
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
