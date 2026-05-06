import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

/* ─── Metric Card (slide 18) ────────────────────────────────────────────── */
export function MetricCard({
  label,
  value,
  emphasis,
  description,
  accent = "#65038E",
  direction = "up",
}: {
  label: string;
  value: string;
  emphasis?: string;
  description: string;
  accent?: string;
  direction?: "up" | "down";
}) {
  return (
    <div className="relative bg-white border border-teal-900 p-6 flex flex-col h-full">
      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-spectrum" />
      <div className="font-display font-semibold text-[11px] tracking-[0.28em] uppercase text-magenta">
        {label}
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-display font-light text-[64px] leading-none text-teal-900">
          <span style={{ color: accent }}>{direction === "up" ? "↑" : "↓"}</span>
          {" "}{value}
          {emphasis && <span className="font-bold">{emphasis}</span>}
        </span>
      </div>
      <div className="mt-4 text-[13px] text-teal-800 leading-snug">{description}</div>
    </div>
  );
}

/* ─── Feature Row (slides 13, 14) ───────────────────────────────────────── */
export function FeatureRow({
  icon: Icon,
  title,
  body,
  accent,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  accent: string;
}) {
  return (
    <div
      className="flex items-stretch border border-line bg-white"
      style={{ borderLeft: `6px solid ${accent}` }}
    >
      <div
        className="w-[56px] flex items-center justify-center text-white flex-shrink-0"
        style={{ background: accent }}
      >
        <Icon size={22} strokeWidth={2} />
      </div>
      <div className="flex items-center gap-6 px-5 py-3 flex-1">
        <div className="font-display font-bold text-[14px] tracking-[0.02em] text-teal-900 w-[180px] flex-shrink-0">
          {title}
        </div>
        <div className="text-[13px] text-teal-800 leading-snug flex-1">{body}</div>
      </div>
    </div>
  );
}

/* ─── Sector Pillar (slides 8, 9) ───────────────────────────────────────── */
export function SectorPillar({
  index,
  name,
  icon: Icon,
  accent,
  bullets,
}: {
  index: string;
  name: string;
  icon: LucideIcon;
  accent: string;
  bullets: string[];
}) {
  return (
    <div className="bg-white border border-line p-6 flex flex-col h-full">
      <div
        className="w-12 h-12 flex items-center justify-center text-white"
        style={{ background: accent }}
      >
        <Icon size={22} strokeWidth={2} />
      </div>
      <div className="mt-5 font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
        Sector {index}
      </div>
      <div className="mt-1 font-display font-bold text-[18px] tracking-[0.04em] uppercase text-teal-900 leading-tight">
        {name}
      </div>
      <ul className="mt-5 space-y-2.5 text-[13px] text-teal-800">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-teal-700 mt-1.5 w-1 h-1 flex-shrink-0" style={{ background: accent }} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Funnel Diagram (slides 2, 11, 14) ─────────────────────────────────── */
export function FunnelDiagram({
  nodes,
  finalLime = true,
  arrowColor = "#65038E",
}: {
  nodes: { label: string; icon?: LucideIcon; caption?: string }[];
  finalLime?: boolean;
  arrowColor?: string;
}) {
  return (
    <div className="w-full flex items-stretch gap-1">
      {nodes.map((n, i) => {
        const isFinal = finalLime && i === nodes.length - 1;
        const Icon = n.icon;
        return (
          <div key={i} className="flex items-center flex-1 min-w-0">
            <div
              className="flex-1 flex flex-col border border-teal-900 px-3 py-4 items-center text-center min-w-0"
              style={{
                background: isFinal ? "#CFFF1D" : "#FFFFFF",
              }}
            >
              {Icon && (
                <Icon
                  size={26}
                  strokeWidth={2}
                  className={isFinal ? "text-teal-900" : "text-teal-900"}
                />
              )}
              <div className="mt-2 font-display font-bold text-[12px] tracking-[0.10em] uppercase text-teal-900 leading-tight">
                {n.label}
              </div>
              {n.caption && (
                <div className="mt-1.5 font-mono text-[10px] tracking-[0.04em] text-teal-700 leading-tight">
                  {n.caption}
                </div>
              )}
            </div>
            {i < nodes.length - 1 && (
              <Chevron color={arrowColor} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Chevron({ color }: { color: string }) {
  return (
    <svg width="22" height="32" viewBox="0 0 22 32" className="flex-shrink-0">
      <path d="M4 4 L16 16 L4 28" fill="none" stroke={color} strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

/* ─── Stack Diagram (slide 17) ──────────────────────────────────────────── */
export function StackDiagram({
  layers,
}: {
  layers: { name: string; tool: string; chips: string[]; topRule?: boolean; bottomLime?: boolean }[];
}) {
  return (
    <div className="w-full flex flex-col gap-[6px]">
      {layers.map((l, i) => (
        <div
          key={i}
          className="relative bg-white border border-line h-[64px] flex items-center"
          style={l.bottomLime ? { borderLeft: "6px solid #CFFF1D" } : undefined}
        >
          {l.topRule && (
            <div className="absolute left-0 right-0 top-0 h-[3px] bg-spectrum" />
          )}
          <div className="px-6 w-[34%] flex items-baseline gap-3 border-r border-line h-full items-center">
            <div className="font-display font-bold text-[13px] tracking-[0.10em] uppercase text-teal-900">
              {l.name}
            </div>
            <div className="font-mono text-[11px] text-teal-700 italic">· {l.tool}</div>
          </div>
          <div className="px-6 flex flex-wrap gap-2 flex-1">
            {l.chips.map((c, j) => (
              <Chip key={j}>{c}</Chip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Chip({ children, accent }: { children: ReactNode; accent?: string }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 border border-teal-900 text-teal-900 font-display font-bold text-[10px] tracking-[0.14em] uppercase"
      style={{
        borderRadius: 999,
        background: accent ?? "transparent",
      }}
    >
      {children}
    </span>
  );
}

/* ─── CTA Button (slide 20) ─────────────────────────────────────────────── */
export function CtaButton({ children }: { children: ReactNode }) {
  return (
    <button className="bg-teal-900 text-white px-7 py-4 font-display font-bold text-[13px] tracking-[0.18em] uppercase hover:bg-magenta transition-colors">
      {children}
    </button>
  );
}
