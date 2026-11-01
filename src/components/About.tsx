import { Heart, Handshake, Lightbulb } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const values = [
  {
    icon: Heart,
    title: "Personal Attention",
    description: "You're not a ticket number. We take the time to understand your business before we design anything.",
  },
  {
    icon: Handshake,
    title: "Transparent Communication",
    description: "Clear updates, honest timelines, and straightforward pricing throughout the project.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description: "We recommend what will genuinely help your business, not the most expensive option.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
              About Vision
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              A young team, genuinely invested in your business going online
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/65">
              <p>
                Vision is a growing digital solutions studio based in India. We started this
                studio because we saw too many small businesses — cafes, clinics, salons, local
                shops — being held back by outdated or missing websites, even though they offer
                great products and services.
              </p>
              <p>
                We're passionate about technology and design, and we care about doing good work
                for the businesses we partner with. As a new studio, we don't have decades of
                history to point to — what we offer instead is close, personal attention, honest
                communication, and a genuine commitment to getting your project right.
              </p>
              <p>
                Every project we take on gets our full focus. We'd rather do fewer projects well
                than take shortcuts on quality.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5">
            {values.map((value, i) => (
              <AnimatedSection
                key={value.title}
                delay={i * 0.1}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-violet-300">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
