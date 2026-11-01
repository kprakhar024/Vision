import { whyChooseUs } from "@/config/site";
import { Icon } from "./icon-map";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[400px] -translate-y-1/2 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-transparent blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A dedicated, hands-on approach to your website"
          description="We're a small, focused team — which means your project gets real attention, not a generic template and a handoff."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <AnimatedSection
              key={item.title}
              delay={(i % 3) * 0.08}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.045]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
