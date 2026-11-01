import {
  LayoutTemplate,
  Rocket,
  RefreshCcw,
  ShoppingCart,
  Workflow,
  ShieldCheck,
  Target,
  Smartphone,
  Gauge,
  IndianRupee,
  MessageCircle,
  Compass,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  LayoutTemplate,
  Rocket,
  RefreshCcw,
  ShoppingCart,
  Workflow,
  ShieldCheck,
  Target,
  Smartphone,
  Gauge,
  IndianRupee,
  MessageCircle,
  Compass,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = iconMap[name] ?? LayoutTemplate;
  return <Component className={className} aria-hidden="true" />;
}
