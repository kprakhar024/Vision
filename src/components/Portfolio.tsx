import { ArrowUpRight, Info } from "lucide-react";
import { portfolioItems } from "@/config/site";
import { BrowserMockup } from "./BrowserMockup";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";

export function Portfolio() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="A preview of the kind of websites we design"
          description="As a growing studio, these are concept projects crafted to show the quality and style of work you can expect. Real client projects will be added here as they launch."
        />

        <AnimatedSection
          delay={0.1}
          className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-xl border border-amber-400/20 bg-amber-400/[0.06] px-4 py-3 text-left text-sm text-amber-200/90"
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            The projects below are <strong>concept / demo designs</strong>, not live client work.
            They demonstrate our design approach for different business types.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <AnimatedSection
              key={item.id}
              delay={(i % 3) * 0.08}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <div className="p-4 pb-0">
                <BrowserMockup type={item.mockup} accent={item.accent} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/60">
                  {item.category}
                </span>
                <h3 className="mt-3.5 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-white/5 px-2 py-1 text-[11px] font-medium text-white/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-300 transition-colors hover:text-violet-200"
                >
                  View Project <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-14 flex flex-col items-center gap-3 text-center" delay={0.1}>
          <p className="text-white/60">Have a project in mind similar to one of these?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Start Your Project <ArrowUpRight className="h-4 w-4" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
