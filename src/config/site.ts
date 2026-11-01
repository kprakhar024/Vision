// ----------------------------------------------------------------------------
// Central configuration for the Vision agency website.
// Update brand details, contact info, services, pricing, portfolio, and more
// from this single file without touching component code.
// ----------------------------------------------------------------------------

export const siteConfig = {
  brand: {
    name: "Vision",
    tagline: "Digital Solutions Studio",
    location: "India",
    description:
      "Vision is a digital solutions studio helping small businesses in India build a modern, trustworthy online presence through thoughtfully designed websites and practical digital tools.",
  },
  contact: {
    email: "vision7738636@gmail.com",
    whatsappNumber: "+91 90000 00000",
    whatsappLink: "https://wa.me/919000000000",
    phoneDisplay: "+91 90000 00000",
  },
  social: {
    instagram: "https://www.instagram.com/_0_v.i.s.i.o.n_0_?rpxt=amg2YjB3NW9naGdl",
    linkedin: "https://linkedin.com/company/vision-studio",
    twitter: "https://twitter.com/visionstudio",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "About Us", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    icon: "LayoutTemplate",
    title: "Website Development",
    description:
      "Fast, responsive, modern websites tailored to your business, your customers, and your goals.",
  },
  {
    icon: "Rocket",
    title: "Business Landing Pages",
    description:
      "High-converting single pages designed to generate enquiries, bookings, and leads quickly.",
  },
  {
    icon: "RefreshCcw",
    title: "Website Redesign",
    description:
      "Transform an outdated or underperforming website into a professional digital experience.",
  },
  {
    icon: "ShoppingCart",
    title: "E-commerce Websites",
    description:
      "Online stores with product listings, shopping carts, and checkout integration built in.",
  },
  {
    icon: "Workflow",
    title: "Digital Solutions & Automation",
    description:
      "Practical tools and workflows — booking forms, dashboards, integrations — that simplify operations.",
  },
  {
    icon: "ShieldCheck",
    title: "Website Maintenance & Support",
    description:
      "Updates, performance improvements, security checks, and ongoing assistance after launch.",
  },
];

export type PortfolioCategory =
  | "Restaurant & Cafe"
  | "Healthcare & Dental"
  | "Salon & Beauty"
  | "Local Business"
  | "E-commerce";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  tech: string[];
  accent: "violet" | "blue" | "teal" | "amber" | "rose";
  mockup: "restaurant" | "clinic" | "salon" | "business" | "ecommerce";
};

// These are concept / demo projects created to demonstrate design capability.
// They are not real client engagements. Replace with real project details
// and screenshots as client work becomes available.
export const portfolioItems: PortfolioItem[] = [
  {
    id: "cafe-concept",
    title: "Cafe Lumière — Concept Design",
    category: "Restaurant & Cafe",
    description:
      "A warm, appetite-driven concept website for a boutique cafe, with an online menu and table reservation flow.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    accent: "amber",
    mockup: "restaurant",
  },
  {
    id: "dental-concept",
    title: "Smile Care Dental — Concept Design",
    category: "Healthcare & Dental",
    description:
      "A calm, trust-building site concept for a dental clinic, featuring service pages and easy appointment requests.",
    tech: ["Next.js", "Tailwind CSS", "Accessible Forms"],
    accent: "blue",
    mockup: "clinic",
  },
  {
    id: "salon-concept",
    title: "Glow Studio — Concept Design",
    category: "Salon & Beauty",
    description:
      "A stylish, visually-led concept for a beauty salon with service menus, pricing, and booking call-to-actions.",
    tech: ["Next.js", "Tailwind CSS"],
    accent: "rose",
    mockup: "salon",
  },
  {
    id: "localshop-concept",
    title: "Kiran General Store — Concept Design",
    category: "Local Business",
    description:
      "A simple, fast business profile site concept for a local shop, built to rank locally and build trust online.",
    tech: ["Next.js", "Tailwind CSS", "SEO Basics"],
    accent: "teal",
    mockup: "business",
  },
  {
    id: "ecommerce-concept",
    title: "Thread & Co — Concept Storefront",
    category: "E-commerce",
    description:
      "A concept storefront with product catalogue, cart, and checkout flow for a small fashion brand.",
    tech: ["Next.js", "Tailwind CSS", "Stripe-ready"],
    accent: "violet",
    mockup: "ecommerce",
  },
  {
    id: "clinic-concept",
    title: "CarePoint Clinic — Concept Design",
    category: "Healthcare & Dental",
    description:
      "A clean, informative concept website for a multi-specialty clinic with doctor profiles and a contact flow.",
    tech: ["Next.js", "Tailwind CSS"],
    accent: "blue",
    mockup: "clinic",
  },
];

export type PricingTier = {
  name: string;
  priceLabel: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    priceLabel: "Starting from ₹[PRICE]",
    description: "For individuals, freelancers, and small local businesses who need a clean, professional online presence.",
    features: [
      "Up to 3–4 page website",
      "Mobile-friendly responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 round of design revisions",
    ],
  },
  {
    name: "Business",
    priceLabel: "Starting from ₹[PRICE]",
    description: "For businesses that need a more complete website with stronger lead-generation features.",
    features: [
      "Up to 8–10 page website",
      "Custom design tailored to your brand",
      "On-page SEO for key pages",
      "Lead capture forms & WhatsApp integration",
      "Basic analytics setup",
      "2 rounds of design revisions",
    ],
    highlighted: true,
  },
  {
    name: "Custom",
    priceLabel: "Starting from ₹[PRICE]",
    description: "For e-commerce, booking systems, automation, or other advanced and tailored digital solutions.",
    features: [
      "Fully custom scope & architecture",
      "E-commerce or booking functionality",
      "Workflow automation where useful",
      "Priority support during build",
      "Scalable foundation for growth",
    ],
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, your customers, and what success looks like for you.",
  },
  {
    step: "02",
    title: "Planning & Design",
    description: "We map the site structure and craft a visual direction that fits your brand.",
  },
  {
    step: "03",
    title: "Development",
    description: "We build, test, and refine your website across devices before anything goes live.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We publish your website and stay on hand for the support package you choose.",
  },
];

export type WhyChooseItem = {
  icon: string;
  title: string;
  description: string;
};

export const whyChooseUs: WhyChooseItem[] = [
  {
    icon: "Target",
    title: "Tailored to Your Business",
    description: "No templates stretched to fit. Every site is designed around your brand and your customers.",
  },
  {
    icon: "Smartphone",
    title: "Mobile-First Development",
    description: "Built to look and work great on phones first, since that's where most customers find you.",
  },
  {
    icon: "Gauge",
    title: "Fast-Loading Websites",
    description: "Performance-conscious builds that keep visitors engaged instead of waiting.",
  },
  {
    icon: "IndianRupee",
    title: "Transparent Pricing",
    description: "Clear, budget-conscious quotes with no hidden costs — you'll know what you're paying for.",
  },
  {
    icon: "MessageCircle",
    title: "Direct Communication",
    description: "You talk directly with the people building your website — no account managers in between.",
  },
  {
    icon: "Compass",
    title: "Goal-Driven Solutions",
    description: "Every recommendation is grounded in what will actually help your business grow.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How much does a business website cost?",
    answer:
      "It depends on the number of pages, features, and complexity you need. Our Starter, Business, and Custom packages give you a general idea, and we'll provide an exact quote after understanding your requirements.",
  },
  {
    question: "How long does development take?",
    answer:
      "Simple sites can take a couple of weeks, while larger or custom builds take longer. We'll share a realistic timeline once we scope your project.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every website we build is mobile-first and tested across phones, tablets, and desktops before launch.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We regularly refresh outdated websites with a modern design while keeping your existing content and goals in mind.",
  },
  {
    question: "Will I be able to update the website myself?",
    answer:
      "Where helpful, we set things up so you can manage basic content yourself. For larger changes, our maintenance plans can handle updates for you.",
  },
  {
    question: "Do you provide domain, hosting, and maintenance?",
    answer:
      "We can guide you through domain and hosting setup and offer ongoing maintenance plans. These are scoped separately based on what you already have.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill out the contact form below or message us on WhatsApp with a short note about your business. We'll get back to you to discuss the right solution.",
  },
];

export const businessTypes = [
  "Cafe / Restaurant",
  "Healthcare / Clinic",
  "Salon / Beauty",
  "Local Shop / Retail",
  "Startup",
  "Service Provider",
  "Other",
];

export const serviceOptions = [
  "Website Development",
  "Business Landing Page",
  "Website Redesign",
  "E-commerce Website",
  "Digital Solutions & Automation",
  "Website Maintenance & Support",
  "Not sure yet",
];

export const budgetRanges = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
  "Not sure yet",
];
