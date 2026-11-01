import { Check, ArrowRight } from "lucide-react";
import { pricingTiers } from "@/config/site";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple packages for every stage of growth"
          description="Every business is different, so these are starting points. We'll always confirm an exact quote after understanding your requirements."
        />

        <div className="mt-16 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <AnimatedSection
              key={tier.name}
              delay={i * 0.1}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                tier.highlighted
                  ? "border-violet-400/40 bg-gradient-to-b from-violet-500/[0.08] to-transparent shadow-2xl shadow-violet-900/20"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white">{tier.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{tier.description}</p>
              <p className="mt-6 text-2xl font-extrabold text-gradient">{tier.priceLabel}</p>
              <p className="mt-1 text-xs text-white/40">Final pricing depends on project requirements.</p>

              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-white/75">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  tier.highlighted
                    ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white"
                    : "border border-white/15 bg-white/5 text-white"
                }`}
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
