import { ArrowRight } from "lucide-react";
import { services } from "@/config/site";
import { Icon } from "./icon-map";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Digital services built around small business growth"
          description="From a first website to a full digital overhaul, we focus on practical solutions that help you attract and keep more customers."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.title}
              delay={(i % 3) * 0.08}
              className="card-glow group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-violet-300 transition-colors group-hover:text-blue-300">
                <Icon name={service.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/60">{service.description}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 opacity-0 transition-opacity group-hover:opacity-100"
              >
                Ask about this <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-14 flex justify-center" delay={0.1}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
          >
            Discuss Your Project <ArrowRight className="h-4 w-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
