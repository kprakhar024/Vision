import { Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { siteConfig, services } from "@/config/site";
import { InstagramIcon, LinkedinIcon, XIcon } from "./social-icons";
import type { ReactNode } from "react";
import logo from "../../Logo.jpeg";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-900/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="/" aria-label={`${siteConfig.brand.name} home`} className="flex items-center gap-3 text-lg font-extrabold tracking-tight text-white">
              <Image src={logo} alt="" className="h-10 w-10 rounded-lg object-cover" />
              <span>{siteConfig.brand.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {siteConfig.brand.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialLink href={siteConfig.social.instagram} label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
                <LinkedinIcon className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={siteConfig.social.twitter} label="Twitter / X">
                <XIcon className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/40">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/40">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <a href="#services" className="text-sm text-white/60 transition-colors hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/40">Get in Touch</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" /> {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" /> {siteConfig.contact.whatsappNumber}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {year} {siteConfig.brand.name} Studio, {siteConfig.brand.location}. All rights reserved.
          </p>
          <a href="/privacy" className="text-xs text-white/40 transition-colors hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-violet-400/40 hover:text-white"
    >
      {children}
    </a>
  );
}
