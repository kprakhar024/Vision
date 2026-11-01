import {
  Coffee,
  Stethoscope,
  Scissors,
  Store,
  ShoppingBag,
  Star,
  MapPin,
  Phone,
  Calendar,
  Menu,
} from "lucide-react";
import type { ReactNode } from "react";

export type MockupType = "restaurant" | "clinic" | "salon" | "business" | "ecommerce";
export type AccentKey = "violet" | "blue" | "teal" | "amber" | "rose";

const accentStyles: Record<AccentKey, { solid: string; soft: string; text: string; ring: string }> = {
  violet: { solid: "bg-violet-500", soft: "bg-violet-500/15", text: "text-violet-300", ring: "ring-violet-500/30" },
  blue: { solid: "bg-blue-500", soft: "bg-blue-500/15", text: "text-blue-300", ring: "ring-blue-500/30" },
  teal: { solid: "bg-teal-500", soft: "bg-teal-500/15", text: "text-teal-300", ring: "ring-teal-500/30" },
  amber: { solid: "bg-amber-500", soft: "bg-amber-500/15", text: "text-amber-300", ring: "ring-amber-500/30" },
  rose: { solid: "bg-rose-500", soft: "bg-rose-500/15", text: "text-rose-300", ring: "ring-rose-500/30" },
};

function Bar({ width, tone = "light" }: { width: string; tone?: "light" | "dim" }) {
  return (
    <div
      className={`h-2 rounded-full ${tone === "light" ? "bg-white/25" : "bg-white/10"}`}
      style={{ width }}
    />
  );
}

function MockupChrome({
  label,
  icon,
  accent,
  children,
}: {
  label: string;
  icon: ReactNode;
  accent: AccentKey;
  children: ReactNode;
}) {
  const a = accentStyles[accent];
  return (
    <div className="flex h-full w-full flex-col bg-[#0c0f1c]">
      {/* top nav */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className={`flex h-6 w-6 items-center justify-center rounded-md ${a.soft} ${a.text}`}>
            {icon}
          </span>
          <span className="text-xs font-semibold tracking-wide text-white/80">{label}</span>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <Bar width="28px" tone="dim" />
          <Bar width="28px" tone="dim" />
          <Bar width="28px" tone="dim" />
        </div>
        <Menu className="h-3.5 w-3.5 text-white/40 sm:hidden" aria-hidden="true" />
      </div>
      <div className="flex-1 overflow-hidden p-4">{children}</div>
    </div>
  );
}

function RestaurantPreview({ accent }: { accent: AccentKey }) {
  const a = accentStyles[accent];
  return (
    <MockupChrome label="cafelumiere.in" icon={<Coffee className="h-3.5 w-3.5" />} accent={accent}>
      <div className="grid h-full grid-cols-5 gap-3">
        <div className="col-span-5 flex flex-col justify-center gap-2 rounded-xl bg-gradient-to-br from-white/10 to-transparent p-4 sm:col-span-3">
          <span className={`w-fit rounded-full ${a.soft} ${a.text} px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide`}>
            Now Open
          </span>
          <Bar width="80%" />
          <Bar width="55%" tone="dim" />
          <div className={`mt-2 w-fit rounded-md ${a.solid} px-3 py-1.5 text-[10px] font-semibold text-black/80`}>
            Reserve a Table
          </div>
        </div>
        <div className="col-span-5 hidden rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-700/10 sm:col-span-2 sm:block" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="col-span-5 rounded-lg border border-white/10 p-2.5 sm:col-span-1">
            <div className="mb-2 h-10 rounded-md bg-white/10" />
            <Bar width="70%" tone="dim" />
          </div>
        ))}
      </div>
    </MockupChrome>
  );
}

function ClinicPreview({ accent }: { accent: AccentKey }) {
  const a = accentStyles[accent];
  return (
    <MockupChrome label="smilecare.clinic" icon={<Stethoscope className="h-3.5 w-3.5" />} accent={accent}>
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
          <div className="space-y-2">
            <Bar width="120px" />
            <Bar width="80px" tone="dim" />
          </div>
          <div className={`flex items-center gap-1.5 rounded-md ${a.soft} ${a.text} px-2.5 py-1.5 text-[10px] font-semibold`}>
            <Calendar className="h-3 w-3" /> Book Visit
          </div>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 p-3 text-center">
              <span className={`flex h-7 w-7 items-center justify-center rounded-full ${a.soft} ${a.text}`}>
                <Stethoscope className="h-3.5 w-3.5" />
              </span>
              <Bar width="80%" tone="dim" />
            </div>
          ))}
        </div>
      </div>
    </MockupChrome>
  );
}

function SalonPreview({ accent }: { accent: AccentKey }) {
  const a = accentStyles[accent];
  return (
    <MockupChrome label="glowstudio.in" icon={<Scissors className="h-3.5 w-3.5" />} accent={accent}>
      <div className="grid h-full grid-cols-3 gap-2.5">
        <div className="col-span-3 flex items-center justify-between rounded-xl bg-gradient-to-r from-rose-500/15 via-fuchsia-500/10 to-transparent p-3">
          <div className="space-y-2">
            <Bar width="100px" />
            <Bar width="140px" tone="dim" />
          </div>
          <Star className={`h-5 w-5 ${a.text}`} />
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col gap-2 rounded-lg border border-white/10 p-2">
            <div className="h-14 rounded-md bg-gradient-to-br from-rose-400/20 to-transparent" />
            <Bar width="60%" tone="dim" />
          </div>
        ))}
      </div>
    </MockupChrome>
  );
}

function BusinessPreview({ accent }: { accent: AccentKey }) {
  const a = accentStyles[accent];
  return (
    <MockupChrome label="kirangeneral.store" icon={<Store className="h-3.5 w-3.5" />} accent={accent}>
      <div className="flex h-full flex-col gap-3">
        <div className="space-y-2 rounded-xl border border-white/10 p-3">
          <Bar width="60%" />
          <Bar width="40%" tone="dim" />
          <div className="mt-2 flex items-center gap-2 text-[9px] text-white/50">
            <MapPin className="h-3 w-3" /> <Bar width="90px" tone="dim" />
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-2.5">
          <div className={`flex flex-col justify-center gap-1.5 rounded-lg ${a.soft} p-3`}>
            <Phone className={`h-3.5 w-3.5 ${a.text}`} />
            <Bar width="70%" tone="dim" />
          </div>
          <div className="flex flex-col justify-center gap-1.5 rounded-lg border border-white/10 p-3">
            <Bar width="80%" tone="dim" />
            <Bar width="50%" tone="dim" />
          </div>
        </div>
      </div>
    </MockupChrome>
  );
}

function EcommercePreview({ accent }: { accent: AccentKey }) {
  const a = accentStyles[accent];
  return (
    <MockupChrome label="threadandco.shop" icon={<ShoppingBag className="h-3.5 w-3.5" />} accent={accent}>
      <div className="grid h-full grid-cols-3 gap-2.5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="col-span-1 flex flex-col gap-1.5 rounded-lg border border-white/10 p-1.5">
            <div className="aspect-square rounded-md bg-gradient-to-br from-violet-400/20 to-blue-400/10" />
            <Bar width="80%" tone="dim" />
            <div className="flex items-center justify-between">
              <Bar width="24px" />
              <span className={`rounded ${a.soft} ${a.text} px-1.5 py-0.5 text-[8px] font-semibold`}>Add</span>
            </div>
          </div>
        ))}
      </div>
    </MockupChrome>
  );
}

const previewMap: Record<MockupType, (props: { accent: AccentKey }) => ReactNode> = {
  restaurant: RestaurantPreview,
  clinic: ClinicPreview,
  salon: SalonPreview,
  business: BusinessPreview,
  ecommerce: EcommercePreview,
};

export function BrowserMockup({
  type,
  accent = "violet",
  className = "",
}: {
  type: MockupType;
  accent?: AccentKey;
  className?: string;
}) {
  const Preview = previewMap[type];
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-ink-900 shadow-2xl shadow-black/40 ${className}`}
    >
      {/* window controls */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
      </div>
      <div className="aspect-[4/3]">
        <Preview accent={accent} />
      </div>
    </div>
  );
}
