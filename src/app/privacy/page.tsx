import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.brand.name} collects, uses, and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-white/50">Last updated: 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/65">
          <section>
            <h2 className="text-lg font-bold text-white">Information We Collect</h2>
            <p className="mt-2">
              When you submit our contact form, we collect the information you provide, such as
              your name, business name, email address, phone number, and project details. We use
              this information solely to respond to your enquiry and discuss your project.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">How We Use Your Information</h2>
            <p className="mt-2">
              We use the details you share to understand your requirements, prepare quotes, and
              communicate with you about your project. We do not sell or share your information
              with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">Data Storage</h2>
            <p className="mt-2">
              Enquiry details are stored securely in our database and are only accessible to our
              team for the purpose of following up on your request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">Cookies & Analytics</h2>
            <p className="mt-2">
              We may use privacy-conscious analytics tools to understand how visitors use our
              website, in order to improve it. No analytics are enabled by default until
              explicitly configured.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">Your Rights</h2>
            <p className="mt-2">
              You may request that we delete any information you&apos;ve submitted to us at any
              time by contacting us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-violet-300 hover:underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white">Contact</h2>
            <p className="mt-2">
              If you have any questions about this privacy policy, please reach out to us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-violet-300 hover:underline">
                {siteConfig.contact.email}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
