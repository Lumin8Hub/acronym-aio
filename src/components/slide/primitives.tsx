import type { CSSProperties, ReactNode } from "react";

/* ─── A-Mark (currentColor) ─────────────────────────────────────────────── */
export function AMark({ className = "", style = {} }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 100 90" className={className} style={style} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round">
        <path d="M5 82 L42 8 L78 82" />
        <path d="M22 56 L62 56" />
        <path d="M22 82 L52 22 L82 82" />
        <path d="M37 60 L72 60" />
        <path d="M40 82 L62 38 L88 82" />
      </g>
    </svg>
  );
}

/* Gradient-filled mark — ceremonial only (cover wordmark) */
export function AMarkGradient({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 90" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="amark-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00E0FF" />
          <stop offset="32%" stopColor="#5874C9" />
          <stop offset="50%" stopColor="#7A3F9F" />
          <stop offset="72%" stopColor="#A86A8C" />
          <stop offset="100%" stopColor="#CFFF1D" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#amark-grad)" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round">
        <path d="M5 82 L42 8 L78 82" />
        <path d="M22 56 L62 56" />
        <path d="M22 82 L52 22 L82 82" />
        <path d="M37 60 L72 60" />
        <path d="M40 82 L62 38 L88 82" />
      </g>
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <AMarkGradient className="w-[72px] h-[72px]" />
      <span className="font-display font-bold text-[32px] tracking-[0.18em] text-teal-900">ACRONYM</span>
    </div>
  );
}

export function GradientRule({
  width = "100%",
  height = 4,
  className = "",
}: { width?: string | number; height?: number; className?: string }) {
  return (
    <div
      className={`bg-spectrum ${className}`}
      style={{ width, height, borderRadius: 2 }}
      aria-hidden="true"
    />
  );
}

export function EdgeStrip() {
  return (
    <div
      aria-hidden="true"
      className="absolute right-0 top-0 bottom-0 w-[5px] z-10 bg-spectrum-v"
    />
  );
}

export function SectionPill({ children }: { children: ReactNode }) {
  return (
    <div className="absolute top-0 right-[5px] bg-navy text-white font-display font-bold text-[10px] tracking-[0.18em] uppercase px-4 py-2 z-10">
      {children}
    </div>
  );
}

export function FooterChrome({ slideNumber, total }: { slideNumber: number; total: number }) {
  return (
    <div className="absolute bottom-6 left-20 right-20 flex justify-between items-baseline text-[10px] tracking-[0.12em] uppercase text-muted font-mono z-10 pointer-events-none">
      <span>Privileged &amp; Confidential</span>
      <span>{String(slideNumber).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
    </div>
  );
}
