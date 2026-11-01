"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Mail, MessageCircle, Phone, CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { siteConfig, businessTypes, serviceOptions, budgetRanges } from "@/config/site";
import { InstagramIcon } from "./social-icons";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";

type FormState = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  service: string;
  budget: string;
  details: string;
  company_website: string;
};

const initialState: FormState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  businessType: "",
  service: "",
  budget: "",
  details: "",
  company_website: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (form.phone && !/^[0-9+\-\s()]{7,15}$/.test(form.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-violet-600/10 via-transparent to-transparent" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Ready to Take Your Business Online?"
          description="Tell us about your business, and let's find the right digital solution for you."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <AnimatedSection className="lg:col-span-2">
            <div className="flex flex-col gap-5">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Email us</p>
                  <p className="mt-0.5 text-sm font-medium text-white">{siteConfig.contact.email}</p>
                </div>
              </a>

              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/40">WhatsApp</p>
                  <p className="mt-0.5 text-sm font-medium text-white">{siteConfig.contact.whatsappNumber}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Call us</p>
                  <p className="mt-0.5 text-sm font-medium text-white">{siteConfig.contact.phoneDisplay}</p>
                </div>
              </div>

              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-pink-500/15 text-pink-300">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/40">Instagram</p>
                  <p className="mt-0.5 text-sm font-medium text-white">Follow us on Instagram</p>
                </div>
              </a>

              <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm leading-relaxed text-white/50">
                Prefer a quick chat? Message us on WhatsApp with a one-line summary of your
                business and we&apos;ll get back to you shortly.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-emerald-400/30 bg-emerald-400/[0.06] p-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-emerald-300" />
                <h3 className="mt-5 text-xl font-bold text-white">Thanks — your request is in!</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/60">
                  We&apos;ve received your details and will get back to you shortly at the email
                  or phone number you provided.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="name" error={errors.name} required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className={inputClass(!!errors.name)}
                      placeholder="Your name"
                    />
                  </Field>

                  <Field label="Business name" htmlFor="businessName">
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      autoComplete="organization"
                      value={form.businessName}
                      onChange={(e) => update("businessName", e.target.value)}
                      className={inputClass(false)}
                      placeholder="Your business name"
                    />
                  </Field>

                  <Field label="Email address" htmlFor="email" error={errors.email} required>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputClass(!!errors.email)}
                      placeholder="you@example.com"
                    />
                  </Field>

                  <Field label="Phone number" htmlFor="phone" error={errors.phone}>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputClass(!!errors.phone)}
                      placeholder="+91 90000 00000"
                    />
                  </Field>

                  <Field label="Type of business" htmlFor="businessType">
                    <select
                      id="businessType"
                      name="businessType"
                      value={form.businessType}
                      onChange={(e) => update("businessType", e.target.value)}
                      className={inputClass(false)}
                    >
                      <option value="">Select one</option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Service needed" htmlFor="service">
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className={inputClass(false)}
                    >
                      <option value="">Select one</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Estimated budget" htmlFor="budget" className="sm:col-span-2">
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={(e) => update("budget", e.target.value)}
                      className={inputClass(false)}
                    >
                      <option value="">Select a range</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Project details" htmlFor="details" className="sm:col-span-2">
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      value={form.details}
                      onChange={(e) => update("details", e.target.value)}
                      className={inputClass(false)}
                      placeholder="Tell us a little about what you're looking for..."
                    />
                  </Field>

                  {/* Honeypot field, hidden from real users */}
                  <input
                    type="text"
                    name="company_website"
                    value={form.company_website}
                    onChange={(e) => update("company_website", e.target.value)}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />
                </div>

                {status === "error" && (
                  <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-rose-400/30 bg-rose-400/[0.08] px-4 py-3 text-sm text-rose-200">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Enquiry
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs text-white/40">
                  By submitting, you agree to be contacted about your enquiry. We don&apos;t share
                  your details with third parties.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-violet-400/60 ${
    hasError ? "border-rose-400/60" : "border-white/10"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  required,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-white/80">
        {label} {required && <span className="text-violet-300">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </p>
      )}
    </div>
  );
}
